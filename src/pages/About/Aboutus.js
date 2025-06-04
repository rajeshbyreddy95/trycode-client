import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import '../../App.css';

const Aboutus = () => {
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
            className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-6"
          >
            About tryCode
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            We're on a mission to empower developers with the best resources for learning, interview preparation, and staying updated with tech trends.
          </motion.p>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 md:px-12 bg-[#0a0a0a]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-12"
          >
            Our Mission
          </motion.h2>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-[#111] rounded-xl p-8 shadow-lg text-center"
          >
            <p className="text-gray-400 leading-relaxed">
              At tryCode, we believe that knowledge is the key to success in the tech world. Our platform provides high-quality tutorials, interview preparation resources, and the latest tech news to help developers at all levels achieve their goals. Whether you're a beginner or a seasoned professional, we're here to support your learning journey.
            </p>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Yamuna', role: 'Founder & CEO', image: 'https://i.pinimg.com/736x/71/01/b8/7101b87598877368b01337fa7048b7ee.jpg' },
              { name: 'Byreddy Rajesh', role: 'Lead Developer', image: 'https://i.pinimg.com/736x/ea/9c/62/ea9c6278871cfdcfe5964e0a6716be67.jpg' },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#111] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{member.name}</h3>
                {/* <p className="text-gray-400">{member.role}</p> */}
              </motion.div>
            ))}
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
            Join Our Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Become a part of tryCode and unlock access to exclusive tutorials, interview prep resources, and the latest tech news.
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

export default Aboutus;