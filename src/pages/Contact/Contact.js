import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav';
import '../../App.css';

const Contact = () => {
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

        {/* Contact Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-center mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg text-center max-w-2xl mb-12"
          >
            Have questions or need support? Reach out to us, and we'll get back to you as soon as possible.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
            {/* Contact Form */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-[#111] rounded-xl p-8 shadow-lg w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Send a Message</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-[#222] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-[#222] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 rounded-lg bg-[#222] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-6 py-3 rounded-full font-semibold text-white shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="bg-[#111] rounded-xl p-8 shadow-lg w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold text-violet-400 mb-6">Get in Touch</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong>Email:</strong> rajeshbyreddy95@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 7075979652
                </p>
                <p>
                  <strong>Address:</strong> 123 Tech Street, Code City
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.35-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.76 0 8.35.01 7.07.07 5.77.13 4.91.32 4.14.56c-.77.24-1.42.56-2.07 1.21S1.1 3.14.86 3.91c-.24.77-.43 1.63-.49 2.93C.31 8.12.3 8.53.3 12s.01 3.88.07 5.16c.06 1.3.25 2.16.49 2.93.24.77.56 1.42 1.21 2.07s1.3.97 2.07 1.21c.77.24 1.63.43 2.93.49 1.28.06 1.69.07 5.16.07s3.88-.01 5.16-.07c1.3-.06 2.16-.25 2.93-.49.77-.24 1.42-.56 2.07-1.21s.97-1.3 1.21-2.07c.24-.77.43-1.63.49-2.93.06-1.28.07-1.69.07-5.16s-.01-3.88-.07-5.16c-.06-1.3-.25-2.16-.49-2.93-.24-.77-.56-1.42-1.21-2.07s-1.3-.97-2.07-1.21c-.77-.24-1.63-.43-2.93-.49C15.88.01 15.47 0 12 0z" />
                    <path d="M12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.15A3.99 3.99 0 1116 12a3.99 3.99 0 01-4 3.99z" />
                    <circle cx="18.41" cy="5.59" r="1.44" />
                  </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 19h-3v-5.5c0-1.4-1.1-2.5-2.5-2.5S12 12.1 12 13.5V19h-3V8h3v1.5c.9-1.1 2.4-1.8 4-1.8 2.8 0 5 2.2 5 5V19z" />
                    </svg>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-4">
                tryCode
              </h3>
              <p className="text-gray-400">
                Empowering developers with tutorials, interview prep, and tech news.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/tutorials" className="text-gray-400 hover:text-cyan-300 transition">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="/interviewquestions" className="text-gray-400 hover:text-cyan-300 transition">
                    Interview Prep
                  </a>
                </li>
                <li>
                  <a href="/news" className="text-gray-400 hover:text-cyan-300 transition">
                    Tech News
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-cyan-300 transition">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-violet-400 mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: rajeshbyreddy9@gmail.com</p>
              <p className="text-gray-400">Phone: +91 7075979652</p>
              <p className="text-gray-400">Address: Hyderabad, Telangana, India</p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.35-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.76 0 8.35.01 7.07.07 5.77.13 4.91.32 4.14.56c-.77.24-1.42.56-2.07 1.21S1.1 3.14.86 3.91c-.24.77-.43 1.63-.49 2.93C.31 8.12.3 8.53.3 12s.01 3.88.07 5.16c.06 1.3.25 2.16.49 2.93.24.77.56 1.42 1.21 2.07s1.3.97 2.07 1.21c.77.24 1.63.43 2.93.49 1.28.06 1.69.07 5.16.07s3.88-.01 5.16-.07c1.3-.06 2.16-.25 2.93-.49.77-.24 1.42-.56 2.07-1.21s.97-1.3 1.21-2.07c.24-.77.43-1.63.49-2.93.06-1.28.07-1.69.07-5.16s-.01-3.88-.07-5.16c-.06-1.3-.25-2.16-.49-2.93-.24-.77-.56-1.42-1.21-2.07s-1.3-.97-2.07-1.21c-.77-.24-1.63-.43-2.93-.49C15.88.01 15.47 0 12 0z" />
                    <path d="M12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.15A3.99 3.99 0 1116 12a3.99 3.99 0 01-4 3.99z" />
                    <circle cx="18.41" cy="5.59" r="1.44" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 19h-3v-5.5c0-1.4-1.1-2.5-2.5-2.5S12 12.1 12 13.5V19h-3V8h3v1.5c.9-1.1 2.4-1.8 4-1.8 2.8 0 5 2.2 5 5V19z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025 tryCode. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;