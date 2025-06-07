import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const PrivacyTerms = ({ dark }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Show modal on page load
  useEffect(() => {
    setShowModal(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-[#111] rounded-xl p-6 shadow-lg border border-cyan-500/50 w-full max-w-md md:w-96 mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-cyan-300 transition"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            {/* Modal Content */}
            <div className="text-center">
              <i className="fab fa-telegram-plane text-4xl text-cyan-400 mb-4"></i>
              <p className="text-gray-200 mb-6">
                For more tech updates, tutorials, free PDFs, all CS notes, join our Telegram channel and WhatsApp group!
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://t.me/trycodehub" // Replace with actual Telegram link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-6 py-2 rounded-full font-semibold text-white"
                >
                  Join Telegram
                </a>
                {/* <a
                  href="https://chat.whatsapp.com/your_whatsapp_group" // Replace with actual WhatsApp link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition px-6 py-2 rounded-full font-semibold text-white"
                >
                  Join WhatsApp
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <section className="min-h-screen bg-black text-white relative overflow-hidden p-6 md:p-12" style={{ backgroundColor: '#000' }}>
        {/* Gradient blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto p-5">
          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
            className={`mb-6 inline-flex items-center text-sm ${dark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-500 hover:text-sky-400'} transition`}
          >
            ← Back to Home
          </motion.button>

          {/* Privacy Policy & Terms Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className={`bg-[#111] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-cyan-500/40 transition duration-300 w-full md:w-3/4 mx-auto`}
          >
            <h1 className={`text-2xl md:text-3xl font-bold ${dark ? 'text-cyan-400' : 'text-sky-500'} mb-6 text-center`}>
              Privacy Policy & Terms of Service
            </h1>
            <p className="text-gray-400 mb-6 text-center">
              Last Updated: June 7, 2025
            </p>

            {/* Privacy Policy */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-violet-400 mb-2">Privacy Policy</h2>
              <p className="text-gray-400">
                At tryCode, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, tryCode ("Site"), and related services.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">1. Information We Collect</h3>
              <p className="text-gray-400">
                We may collect the following types of information:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>Personal Information</strong>: Name, email address, and other information you provide when registering, subscribing, or contacting us.</li>
                  <li><strong>Usage Data</strong>: IP address, browser type, device information, pages visited, and interactions with the Site.</li>
                  <li><strong>Cookies</strong>: Data stored via cookies and similar technologies to enhance your experience (e.g., remembering preferences).</li>
                  <li><strong>Third-Party Data</strong>: Information from job applications or social media platforms if you interact with our services via third-party links.</li>
                </ul>
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">2. How We Use Your Information</h3>
              <p className="text-gray-400">
                We use your data to:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Provide and improve our services, including tutorials, job listings, and interview resources.</li>
                  <li>Personalize your experience on the Site.</li>
                  <li>Communicate with you, including sending newsletters or updates (with your consent).</li>
                  <li>Analyze usage trends to enhance functionality and content.</li>
                  <li>Comply with legal obligations and protect our rights.</li>
                </ul>
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">3. Sharing Your Information</h3>
              <p className="text-gray-400">
                We do not sell your personal information. We may share data with:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>Service Providers</strong>: Third parties that assist with hosting, analytics, or payment processing.</li>
                  <li><strong>Job Partners</strong>: Employers when you apply for jobs via our Site.</li>
                  <li><strong>Legal Authorities</strong>: If required by law or to protect our rights.</li>
                </ul>
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">4. Cookies and Tracking</h3>
              <p className="text-gray-400">
                We use cookies to improve your experience. You can manage cookie preferences via your browser settings. Disabling cookies may limit Site functionality.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">5. Data Security</h3>
              <p className="text-gray-400">
                We implement reasonable security measures to protect your data, but no system is completely secure. You are responsible for maintaining the confidentiality of your account credentials.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">6. Your Rights</h3>
              <p className="text-gray-400">
                Depending on your jurisdiction, you may have rights to:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Opt out of marketing communications.</li>
                  <li>Request data portability.</li>
                  <li>Restrict or object to certain data processing.</li>
                </ul>
                To exercise these rights, contact us at <a href="mailto:privacy@trycode.com" className="text-cyan-400 hover:text-cyan-300">privacy@trycode.com</a>.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">7. Third-Party Links</h3>
              <p className="text-gray-400">
                Our Site may contain links to third-party websites (e.g., job applications, Telegram, WhatsApp). We are not responsible for their privacy practices.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">8. Children’s Privacy</h3>
              <p className="text-gray-400">
                Our services are not intended for individuals under 13. We do not knowingly collect data from children.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">9. Changes to This Policy</h3>
              <p className="text-gray-400">
                We may update this Privacy Policy. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Site constitutes acceptance of the updated policy.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">10. Contact Us</h3>
              <p className="text-gray-400">
                For questions about this Privacy Policy, contact us at:
                <br />
                Email: <a href="mailto:privacy@trycode.com" className="text-cyan-400 hover:text-cyan-300">privacy@trycode.com</a>
                <br />
                Address: tryCode, 123 Tech Lane, Innovation City, CA 90210, USA
              </p>

              <hr className="border-gray-700 my-6" />

              {/* Terms of Service */}
              <h2 className="text-xl font-semibold text-violet-400 mb-2">Terms of Service</h2>
              <p className="text-gray-400">
                By using tryCode ("Site"), you agree to these Terms of Service. If you do not agree, please do not use the Site.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">1. Use of the Site</h3>
              <p className="text-gray-400">
                You may use the Site for lawful purposes only. You agree not to:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Post or transmit harmful, illegal, or inappropriate content.</li>
                  <li>Interfere with the Site’s operation (e.g., hacking, DDoS attacks).</li>
                  <li>Use automated systems (e.g., bots) to scrape content without permission.</li>
                  <li>Impersonate others or provide false information.</li>
                </ul>
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">2. Accounts</h3>
              <p className="text-gray-400">
                You are responsible for maintaining the security of your account and any activities under it. Notify us immediately of unauthorized access at <a href="mailto:support@trycode.com" className="text-cyan-400 hover:text-cyan-300">support@trycode.com</a>.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">3. Intellectual Property</h3>
              <p className="text-gray-400">
                All content on the Site (e.g., tutorials, logos, code) is owned by tryCode or its licensors. You may not reproduce, distribute, or modify content without permission, except for personal, non-commercial use.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">4. Job Listings</h3>
              <p className="text-gray-400">
                We provide job listings as a service. We are not responsible for the accuracy of listings, hiring decisions, or interactions with employers. Job applications may be handled by third-party platforms.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">5. Limitation of Liability</h3>
              <p className="text-gray-400">
                The Site is provided "as is." We are not liable for:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Errors or interruptions in service.</li>
                  <li>Losses arising from your use of the Site.</li>
                  <li>Third-party actions or content.</li>
                </ul>
                Our liability is limited to the maximum extent permitted by law.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">6. Termination</h3>
              <p className="text-gray-400">
                We may suspend or terminate your access to the Site for violating these Terms or for any reason, with or without notice.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">7. Governing Law</h3>
              <p className="text-gray-400">
                These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Disputes will be resolved in the courts of Innovation City, CA.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">8. Changes to These Terms</h3>
              <p className="text-gray-400">
                We may update these Terms. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Site constitutes acceptance of the updated Terms.
              </p>

              <h3 className="text-lg font-semibold text-cyan-400">9. Contact Us</h3>
              <p className="text-gray-400">
                For questions about these Terms, contact us at:
                <br />
                Email: <a href="mailto:support@trycode.com" className="text-cyan-400 hover:text-cyan-300">support@trycode.com</a>
                <br />
                Address: tryCode, 123 Tech Lane, Innovation City, CA 90210, USA
              </p>
            </div>
          </motion.div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default PrivacyTerms;