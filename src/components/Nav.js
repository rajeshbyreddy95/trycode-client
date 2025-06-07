import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../firebase/firebaseConfig';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Interview Qs', path: '/interviewquestions' },
    // { name: 'Projects', path: '/projects' },
    // { name: 'Jobs', path: '/jobs' },
    { name: 'Roadmaps', path: '/roadmaps' },
    // { name: 'Store', path: '/store' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Privacy & Policy', path: '/privacy' }
  ];

  // Animation variants for the mobile sidebar
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    closed: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  // Animation variants for nav links
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: '#00eaff',
      textShadow: '0 0 10px rgba(0, 234, 255, 0.8)',
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for the login button and profile icon
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(255, 0, 255, 0.5)',
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  // Animation variants for the profile icon
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Global Styles */}
      <style>
        {`
          .glassmorphism {
            background: rgba(20, 20, 40, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .neon-glow {
            background: linear-gradient(90deg, #ff00ff, #00eaff, #ff00ff);
            background-size: 200%;
            animation: gradientShift 8s linear infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          .nav-link::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #00eaff;
            transition: width 0.3s ease;
            margin-top: 2px;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .hamburger-line {
            transition: all 0.3s ease;
          }

          .hamburger-open .line1 {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .hamburger-open .line2 {
            opacity: 0;
          }

          .hamburger-open .line3 {
            transform: rotate(-45deg) translate(5px, -5px);
          }

          .overlay {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }
        `}
      </style>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-magenta-500 rounded-full blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[200px] opacity-20 animate-pulse" />
      </div>

      {/* Main Nav Container */}
      <div className="relative glassmorphism text-white px-4 py-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold bg-gradient-to-r from-magenta-400 to-cyan-400 bg-clip-text text-transparent"
          >
            <Link to={'/'}>try Code</Link>
          </motion.div>

          {/* Desktop & Tablet Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={item.name} variants={linkVariants} whileHover="hover">
                <Link
                  to={item.path}
                  className="nav-link text-sm lg:text-base font-medium text-gray-200 relative"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {/* Conditional Rendering: Login Button or Profile Icon */}
            {user ? (
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-white"
              >
                <Link to="/profile">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 fill-current text-gray-200 hover:text-cyan-400 transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-6 2.67-6 6v2h12v-2c0-3.33-2.67-6-6-6z" />
                  </svg>
                </Link>
              </motion.div>
            ) : (
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="neon-glow text-sm lg:text-base font-semibold text-white px-4 lg:px-6 py-2 rounded-full"
              >
                <Link to="/login">Login</Link>
              </motion.button>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
          >
            <div className={`flex flex-col gap-1.5 ${isOpen ? 'hamburger-open' : ''}`}>
              <span className="hamburger-line line1 w-6 h-0.5 bg-white rounded-full"></span>
              <span className="hamburger-line line2 w-6 h-0.5 bg-white rounded-full"></span>
              <span className="hamburger-line line3 w-6 h-0.5 bg-white rounded-full"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 overlay z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-[#141428] to-[#1e1a3c] z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Sidebar Header */}
                <div className="flex justify-between items-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold bg-gradient-to-r from-magenta-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    tryCode
                  </motion.div>
                  <button onClick={() => setIsOpen(false)} className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-6 text-lg">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        className="text-gray-200 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Sidebar Button (Profile or Login) at the Bottom */}
                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {user ? (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="neon-glow w-full text-center font-semibold text-white px-6 py-3 rounded-full"
                    >
                      <Link to="/profile" onClick={() => setIsOpen(false)}>
                        Profile
                      </Link>
                    </motion.button>
                  ) : (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="neon-glow w-full text-center font-semibold text-white px-6 py-3 rounded-full"
                    >
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;