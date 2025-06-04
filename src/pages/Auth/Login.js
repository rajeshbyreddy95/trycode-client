import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { auth, googleProvider, signInWithPopup } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Placeholder for manual email/password login (no API)
    // In a real app, you would use Firebase's signInWithEmailAndPassword
    setError('Email/password login is not implemented. Please use Google Sign-In.');
  };

  const handleGoogleSignIn = async () => {
    setMessage('');
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setMessage(`Successfully signed in as ${user.displayName}`);
      setTimeout(() => {
        navigate('/');
      }, 1500); // Delay for user to see success message
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  const formVariants = {
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

        {/* Login Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-8"
          >
            Welcome Back
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-400 text-lg font-mono mb-12 max-w-xl"
          >
            Log in to explore my skills, projects, and achievements.
          </motion.p>

          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="bg-[#111] rounded-xl p-8 shadow-lg max-w-md w-full"
          >
            {message && (
              <p className="text-cyan-400 bg-cyan-500/10 border border-cyan-500 rounded-lg p-3 mb-6">
                {message}
              </p>
            )}
            {error && (
              <p className="text-violet-400 bg-violet-500/10 border border-violet-500 rounded-lg p-3 mb-6">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col text-left">
                <label htmlFor="email" className="text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#222] text-white rounded-lg p-3 border border-gray-700 focus:border-cyan-500 focus:outline-none transition"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="password" className="text-gray-400 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-[#222] text-white rounded-lg p-3 border border-gray-700 focus:border-cyan-500 focus:outline-none transition"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg mt-4"
              >
                Log In
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-700"></div>
              <span className="mx-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-700"></div>
            </div>

            {/* Sign in with Google Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg-white text-gray-800 rounded-full px-8 py-3 font-semibold shadow-lg w-full transition"
            >
              <svg
                className="w-6 h-6 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.41 1.45 8.35 3.55l6.2-6.2C34.43 2.5 29.66 0 24 0 14.95 0 7.33 5.7 3.93 13.8l7.25 5.63C12.65 13.17 17.9 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.1 24.5c0-1.6-.14-3.17-.4-4.67H24v9.15h12.4c-.54 2.94-2.14 5.43-4.55 7.12l7.05 5.48c4.11-3.8 6.2-9.4 6.2-17.08z"
                />
                <path
                  fill="#4A90E2"
                  d="M10.78 28.62C9.92 26.56 9.43 24.34 9.43 22s.49-4.56 1.35-6.62l-7.25-5.63C1.2 13.12 0 17.42 0 22s1.2 8.88 3.53 12.25l7.25-5.63z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 44c5.66 0 10.43-1.87 13.9-5.1l-7.05-5.48c-1.94 1.29-4.38 2.08-6.85 2.08-6.1 0-11.35-3.67-13.82-8.93l-7.25 5.63C7.33 42.3 14.95 48 24 48z"
                />
              </svg>
              <span>Sign in with Google</span>
            </motion.button>

            <p className="text-gray-400 mt-6">
              Don't have an account?{' '}
              <a href="/signup" className="text-cyan-400 hover:text-cyan-300 transition">
                Sign up
              </a>
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Login;