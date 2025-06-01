import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Interview Qs', path: '/interview-questions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Roadmaps', path: '/roadmaps' },
    { name: 'Store', path: '/store' },
    { name: 'Contact', path: '/contact-us' },
  ];
  return (
    <header className=" text-white shadow-md  top-0 w-full z-50 p-4">
      <div className="flex items-center justify-evenly px-4 py-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-[#6a5acd] to-[#00bfff] bg-clip-text text-white">
          tryCode
        </div>
<div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
      </div>
        {/* Desktop & iPad Nav */}
        <nav className="hidden lg:flex space-x-6 relative">
          <style>
            {`
              .glow-border::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                border-radius: 9999px;
                background: linear-gradient(90deg, #6a5acd, transparent, #00bfff);
                background-size: 300% 100%;
                animation: glowMove 6s linear infinite;
                z-index: -1;
              }
              @keyframes glowMove {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
            `}
          </style>
          <div className="glow-border relative bg-black bg-opacity-20 px-6 py-2 rounded-full backdrop-blur-md">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#00bfff] transition-colors text-sm"
                    style={{ textShadow: '0 0 5px rgba(0, 191, 255, 0.5)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Login Button (visible on tablet and up) */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 191, 255, 0.6)' }}
          className="hidden md:inline-block bg-gradient-to-r from-[#6a5acd] to-[#00bfff] text-white px-4 py-2 rounded-full font-semibold text-sm"
        >
          Login
        </motion.button>

        {/* Mobile/Tablet Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile & iPad Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-[#1e1a3c] px-4 pb-4"
        >
          <ul className="flex flex-col items-center gap-4 pt-4 text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-white hover:text-[#00bfff] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#6a5acd] to-[#00bfff] px-6 py-2 text-white rounded-full"
              >
                Login
              </motion.button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Nav;