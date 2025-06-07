import React from 'react'
import { ref, onValue, update, get, set, getDatabase } from 'firebase/database'
import { app } from '../firebase/firebaseConfig';
import { useState, useEffect } from 'react';
const Footer = () => {
  const db = getDatabase(app)
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const db = getDatabase(app);
    const countRef = ref(db, 'visits');

    // Read + update count in real-time
    onValue(countRef, (snapshot) => {
      const count = snapshot.val() || 0;
      setVisitorCount(count);
    });

    // Increment count once per mount (optional)
    get(countRef).then((snapshot) => {
      const currentCount = snapshot.val() || 0;
      set(countRef, currentCount + 1);
    });
  }, []);
  return (
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
                
                <a href="https://x.com/trycode_tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rajeshbyreddy95/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 19h-3v-5.5c0-1.4-1.1-2.5-2.5-2.5S12 12.1 12 13.5V19h-3V8h3v1.5c.9-1.1 2.4-1.8 4-1.8 2.8 0 5 2.2 5 5V19z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/trycode.tech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.35-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.76 0 8.35.01 7.07.07 5.77.13 4.91.32 4.14.56c-.77.24-1.42.56-2.07 1.21S1.1 3.14.86 3.91c-.24.77-.43 1.63-.49 2.93C.31 8.12.3 8.53.3 12s.01 3.88.07 5.16c.06 1.3.25 2.16.49 2.93.24.77.56 1.42 1.21 2.07s1.3.97 2.07 1.21c.77.24 1.63.43 2.93.49 1.28.06 1.69.07 5.16.07s3.88-.01 5.16-.07c1.3-.06 2.16-.25 2.93-.49.77-.24 1.42-.56 2.07-1.21s.97-1.3 1.21-2.07c.24-.77.43-1.63.49-2.93.06-1.28.07-1.69.07-5.16s-.01-3.88-.07-5.16c-.06-1.3-.25-2.16-.49-2.93-.24-.77-.56-1.42-1.21-2.07s-1.3-.97-2.07-1.21c-.77-.24-1.63-.43-2.93-.49C15.88.01 15.47 0 12 0z" />
                    <path d="M12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.15A3.99 3.99 0 1116 12a3.99 3.99 0 01-4 3.99z" />
                    <circle cx="18.41" cy="5.59" r="1.44" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025 tryCode. All rights reserved.
            <div className="mt-8 text-center text-gray-500 text-sm">
        👥 Visitors: {visitorCount+1265} <br />
        © 2025 tryCode. All rights reserved.
      </div>
          </div>
        </footer>
  )
}

export default Footer
