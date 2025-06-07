import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { jobsdata } from './jobsdata';
import Footer from '../../components/Footer';

const JobList = ({ dark }) => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const uniqueTags = ['all', ...new Set(jobsdata.flatMap(job => job.tags))];

  const filteredJobs = filter === 'all' ? jobsdata : jobsdata.filter(job => job.tags.includes(filter));

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-black text-white items-center relative overflow-hidden p-10" style={{ backgroundColor: '#000' }}>
      {/* Gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-12 mt-20"
      >
        Explore Job Opportunities
      </motion.h2>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left 2/4th: Job List */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`w-full max-w-xs px-4 py-2 text-center rounded-lg text-sm ${dark ? 'bg-[#111] text-gray-200 border-gray-600' : 'bg-white text-gray-800 border-gray-900'} focus:outline-none focus:ring-2 ${dark ? 'focus:ring-blue-500' : 'focus:ring-blue-600'}`}
            >
              {uniqueTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag === 'all' ? 'All Roles' : tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.job_id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => navigate(`/jobs/${job.job_id}`)}
                className="relative flex items-start p-4 rounded-xl bg-[#111] hover:shadow-cyan-500/40 cursor-pointer shadow-lg transition duration-300"
              >
                <img
                  src={job.image}
                  alt={`${job.roleName} icon`}
                  className="w-12 h-12 mr-4 rounded-full object-contain"
                />
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${dark ? 'text-cyan-400' : 'text-blue-600'}`}>
                    {job.roleName}
                  </h3>
                  <p className="text-sm text-gray-500">{job.companyName}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-200"
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                      </span>
                    ))}
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${dark ? 'bg-violet-600 text-white' : 'bg-purple-600 text-white'}`}
                    >
                      Full Time
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium">
                    Salary: {job.salary || 'Not Disclosed'}
                  </p>
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent navigation on link click
                    className={`mt-2 inline-block text-sm ${dark ? 'text-violet-400 hover:text-violet-300' : 'text-purple-500 hover:text-purple-400'} transition`}
                  >
                    Apply Now →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right 2/4th: Promotional Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 md:mt-14">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-[#111] hover:shadow-violet-500/40 shadow-lg transition duration-300"
          >
            <img
              src="https://www.fastweb.com/uploads/article_photo/photo/2035812/common-job-interview-questions.jpeg"
              alt="Interview Questions"
              className="w-12 h-12 rounded-2xl mb-4"
            />
            <h3 className={`text-xl font-semibold ${dark ? 'text-violet-400' : 'text-purple-500'} mb-2`}>
              Explore Our Interview Questions
            </h3>
            <p className="text-gray-400 mb-4">
              Prepare for your dream job with our curated collection of technical interview questions and solutions.
            </p>
            <a
              href="/interviewquestions"
              className={`inline-block text-sm ${dark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-500 hover:text-sky-400'} transition`}
            >
              Start Practicing →
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-[#111] hover:shadow-violet-500/40 shadow-lg transition duration-300"
          >
            <img
              src="https://renewep.com/wp-content/uploads/2023/09/road-map.jpg"
              alt="Roadmaps"
              className="w-12 h-12 rounded-2xl mb-4"
            />
            <h3 className={`text-xl font-semibold ${dark ? 'text-violet-400' : 'text-purple-500'} mb-2`}>
              Explore Our Roadmaps
            </h3>
            <p className="text-gray-400 mb-4">
              Follow our step-by-step learning paths to master skills like web development, data science, and more.
            </p>
            <a
              href="/roadmaps"
              className={`inline-block text-sm ${dark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-500 hover:text-sky-400'} transition`}
            >
              Get Started →
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default JobList;