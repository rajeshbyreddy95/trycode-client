import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Nav from '../../components/Nav';
import '../../App.css';
import Footer from '../../components/Footer';

// TypingTagline Component for animated text
const TypingTagline = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-gray-400 text-lg font-mono"
    >
      {displayedText}
      <span className="border-r-2 border-gray-400 animate-blink ml-1" />
      <style>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </motion.p>
  );
};

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tutorials')
      .then((res) => setTutorials(res.data.slice(0, 3)))
      .catch((err) => console.error(err));
    axios
      .get('http://localhost:5000/api/news')
      .then((res) => setNews(res.data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black text-white items-center relative overflow-hidden">
      {/* Soft gradient light blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Nav />

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
          >
            tryCode
          </motion.h1>
          <TypingTagline text="Explore tutorials, interview prep & tech news." />
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/tutorials"
            className="mt-6 inline-block bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg"
          >
            Get Started
          </motion.a>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-12"
          >
            Featured Tutorials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tutorials.length > 0 ? (
              tutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#111] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition duration-300"
                >
                  <img
                    src="https://via.placeholder.com/300x150.png?text=Tutorial+Image"
                    alt={tutorial.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{tutorial.title}</h3>
                  <p className="text-gray-400 mb-4">{tutorial.description}</p>
                  <a
                    href={`/tutorials/${tutorial.id}`}
                    className="inline-block text-sm text-violet-400 hover:text-violet-300 transition"
                  >
                    Read More →
                  </a>
                </motion.div>
              ))
            ) : (
              // Dummy data for tutorials if API fails
              [1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#111] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition duration-300"
                >
                  <img
                    src="https://via.placeholder.com/300x150.png?text=Tutorial+Image"
                    alt="Tutorial Placeholder"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    Tutorial Title {index + 1}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Learn the basics of coding with this beginner-friendly tutorial.
                  </p>
                  <a
                    href="/tutorials"
                    className="inline-block text-sm text-violet-400 hover:text-violet-300 transition"
                  >
                    Read More →
                  </a>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 px-6 md:px-12 bg-[#0a0a0a]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-12"
          >
            Latest Tech News
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.length > 0 ? (
              news.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#111] rounded-xl p-6 shadow-lg hover:shadow-violet-500/40 transition duration-300"
                >
                  <img
                    src="https://via.placeholder.com/300x150.png?text=News+Image"
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-violet-400 mb-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4">{article.summary}</p>
                  <a
                    href={`/news/${article.id}`}
                    className="inline-block text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Read Article →
                  </a>
                </motion.div>
              ))
            ) : (
              // Dummy data for news if API fails
              [1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#111] rounded-xl p-6 shadow-lg hover:shadow-violet-500/40 transition duration-300"
                >
                  <img
                    src="https://via.placeholder.com/300x150.png?text=News+Image"
                    alt="News Placeholder"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-violet-400 mb-2">
                    Tech News {index + 1}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Stay updated with the latest trends in technology and innovation.
                  </p>
                  <a
                    href="/news"
                    className="inline-block text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Read Article →
                  </a>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-6"
          >
            Ready to Level Up Your Skills?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Join our community to access exclusive tutorials, interview prep resources, and stay updated with the latest tech news.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/signup"
            className="inline-block bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg"
          >
            Join Now
          </motion.a>
        </section>

        {/* Footer */}
       <Footer />
      </div>
    </div>
  );
};

export default Home;