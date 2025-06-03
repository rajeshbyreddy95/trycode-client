import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const user = auth.currentUser;
    if (user) {
      setUserData({
        displayName: user.displayName || 'N/A',
        email: user.email || 'N/A',
        photoURL: user.photoURL || null,
        uid: user.uid || 'N/A',
        emailVerified: user.emailVerified || false,
        lastSignInTime: user.metadata?.lastSignInTime || 'N/A',
        creationTime: user.metadata?.creationTime || 'N/A',
      });
    } else {
      // If no user is logged in, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  if (!userData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Nav />

        {/* Profile Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-8"
          >
            Your Profile
          </motion.h1>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-[#111] rounded-xl p-8 shadow-lg max-w-lg w-full glassmorphism"
          >
            {/* Profile Picture */}
            {userData.photoURL && (
              <div className="mb-6">
                <img
                  src={userData.photoURL}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-500 shadow-lg"
                />
              </div>
            )}

            {/* User Details */}
            <div className="text-left space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-cyan-400">Name</h2>
                <p className="text-gray-300">{userData.displayName}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-cyan-400">Email</h2>
                <p className="text-gray-300">{userData.email}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-cyan-400">User ID</h2>
                <p className="text-gray-300 text-sm">{userData.uid}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-cyan-400">Email Verified</h2>
                <p className="text-gray-300">
                  {userData.emailVerified ? 'Yes' : 'No'}
                  {!userData.emailVerified && (
                    <span className="text-violet-400 ml-2 text-sm">
                      (Please verify your email)
                    </span>
                  )}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-cyan-400">Account Created</h2>
                <p className="text-gray-300">{userData.creationTime}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-cyan-400">Last Sign-In</h2>
                <p className="text-gray-300">{userData.lastSignInTime}</p>
              </div>
            </div>

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                auth.signOut();
                navigate('/login');
              }}
              className="bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg mt-8 w-full"
            >
              Log Out
            </motion.button>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Profile;