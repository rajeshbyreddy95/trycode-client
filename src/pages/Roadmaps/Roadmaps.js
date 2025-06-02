import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {dsa} from './DSA/dsa'; // Import the DSA roadmap

// List of all roadmaps (add more as they are created)
const allRoadmaps = [dsa];

// Categories for filtering
const categories = ['All', 'Computer Science']; // Update as more roadmaps are added

const Roadmaps = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const navigate = useNavigate();
  const { topic } = useParams(); // Get the topic from the URL (e.g., /roadmaps/dsa)

  // Filter roadmaps based on category and topic
  const filteredRoadmaps = topic
    ? allRoadmaps.filter((roadmap) => roadmap.route === `/roadmaps/${topic}`)
    : selectedCategory === 'All'
      ? allRoadmaps
      : allRoadmaps.filter((r) => r.category === selectedCategory);

  const handleMilestoneToggle = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-center">
        Roadmaps
      </h1>

      {/* Desktop Filter (only shown if no specific topic is selected) */}
      {!topic && (
        <div className="hidden md:flex justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-gray-900 text-gray-400 hover:bg-cyan-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Mobile Filter (only shown if no specific topic is selected) */}
      {!topic && (
        <div className="md:hidden mb-8 flex justify-center">
          <select
            className="bg-gray-900 text-white rounded-full px-4 py-2 w-56 text-center focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Roadmaps Display */}
      {filteredRoadmaps.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No roadmaps found.
        </p>
      ) : (
        filteredRoadmaps.map((roadmap) => (
          <div key={roadmap.id} className="mb-12">
            {/* Roadmap Card (only shown on /roadmaps) */}
            {!topic && (
              <div
                onClick={() => navigate(roadmap.route)}
                className="cursor-pointer relative bg-[#111] rounded-xl border border-gray-800 p-6 shadow-xl transition-shadow hover:shadow-cyan-600/50 mb-8 max-w-7xl mx-auto"
                style={{
                  boxShadow:
                    '0 8px 15px rgba(0, 191, 255, 0.5), 8px 0 15px rgba(0, 191, 255, 0.3), -8px 0 15px rgba(0, 191, 255, 0.3)',
                }}
              >
                <img
                  src={roadmap.image}
                  alt={roadmap.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{roadmap.title}</h3>
                <p className="text-gray-400 text-sm">{roadmap.description}</p>
              </div>
            )}

            {/* Detailed Roadmap View (shown on /roadmaps/:topic) */}
            {topic && (
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-8">
                  {roadmap.title}
                </h2>
                <p className="text-gray-400 mb-12">{roadmap.description}</p>

                {/* Milestones */}
                {roadmap.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#111] rounded-xl p-6 mb-4 shadow-lg hover:shadow-cyan-500/40 transition duration-300"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleMilestoneToggle(index)}
                    >
                      <h3 className="text-xl font-semibold text-cyan-400">{milestone.title}</h3>
                      <span className="text-gray-400">
                        {expandedMilestone === index ? '▼' : '▶'}
                      </span>
                    </div>
                    {expandedMilestone === index && (
                      <div className="mt-4 text-gray-400">
                        <p className="mb-4">{milestone.description}</p>
                        <h4 className="text-lg font-semibold text-violet-400">Project</h4>
                        <p className="font-medium">{milestone.project.title}</p>
                        <p className="mb-4">{milestone.project.description}</p>
                        <h4 className="text-lg font-semibold text-violet-400">Interview Preparation</h4>
                        <p className="font-medium">Theory Question:</p>
                        <p className="mb-2">{milestone.interview.theory}</p>
                        <p className="font-medium">Coding Question:</p>
                        <p>{milestone.interview.coding_question}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Roadmaps;