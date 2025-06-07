import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsdata } from './jobsdata';
import Footer from '../../components/Footer';

const JobDetails = ({ dark }) => {
  const { job_id } = useParams();
  const navigate = useNavigate();
  const job = jobsdata.find(job => job.job_id === parseInt(job_id));

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <p className="text-xl text-gray-400">Job not found.</p>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
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
          onClick={() => navigate('/jobs')}
          className={`mb-6 inline-flex items-center text-sm ${dark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-500 hover:text-sky-400'} transition`}
        >
          ← Back to Jobs
        </motion.button>

        {/* Job Details Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className={`bg-[#111] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-cyan-500/40 transition duration-300 w-full md:w-3/4 mx-auto`}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={job.image}
              alt={`${job.roleName} logo`}
              className="w-16 h-16 rounded-full object-contain"
            />
            <div className="flex-1">
              <h1 className={`text-2xl md:text-3xl font-bold ${dark ? 'text-cyan-400' : 'text-sky-500'} mb-2`}>
                {job.roleName}
              </h1>
              <p className="text-lg text-gray-500 mb-4">{job.companyName}</p>
              <p className="text-sm font-medium mb-4">
                Salary: {job.salary || 'Not Disclosed'}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-200"
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                  </span>
                ))}
                <span className={`px-2 py-1 text-xs rounded-full ${dark ? 'bg-violet-600 text-white' : 'bg-purple-600 text-white'}`}>
                  Full Time
                </span>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-violet-400 mb-2">About the Role</h2>
              <p className="text-gray-400">{job.about}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-violet-400 mb-2">Skills Required</h2>
              <ul className="list-disc list-inside text-gray-400">
                {job.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-violet-400 mb-2">Qualifications</h2>
              <ul className="list-disc list-inside text-gray-400">
                {job.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg text-center`}
            >
              Apply Now
            </a>
            <button
              onClick={() => navigate('/jobs')}
              className={`inline-block border border-gray-600 hover:border-cyan-500 transition px-8 py-3 rounded-full font-semibold ${dark ? 'text-gray-200 hover:text-cyan-300' : 'text-gray-800 hover:text-sky-500'} text-center`}
            >
              View Other Jobs
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default JobDetails;