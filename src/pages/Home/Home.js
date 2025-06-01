import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Nav from '../../components/Nav';
import '../../App.css'
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
    axios.get('http://localhost:5000/api/tutorials')
      .then((res) => setTutorials(res.data.slice(0, 3)))
      .catch((err) => console.error(err));
    axios.get('http://localhost:5000/api/news')
      .then((res) => setNews(res.data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" bg-black text-white items-center relative overflow-hidden">
        <Nav/>
        
      {/* Soft gradient light blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
          >
            tryCode
          </motion.h1>
          <TypingTagline text="Explore tutorials, interview prep & tech news." />
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/tutorials"
            className="mt-6 inline-block bg-cyan-600 hover:bg-cyan-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg"
          >
            Get Started
          </motion.a>
        </section>

       
      </div>
    </div>
  );
};

export default Home;
