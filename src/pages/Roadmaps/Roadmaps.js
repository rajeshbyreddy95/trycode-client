import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { javaRoadmapData } from './java';
import { pythonroadmap } from './python';
import { reactroadmap } from './react';
import { sqlroadmap } from './sql';
import { nodejsroadmap } from './nodejs';
import { expressroadmap } from './express';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';

// List of all roadmaps (Java and Python)
const allRoadmaps = [
  {
    id: 'java',
    title: javaRoadmapData.courseTitle,
    description: javaRoadmapData.description,
    route: '/roadmaps/java',
    image: 'https://www.dremendo.com/java-programming-tutorial/images/java-programming-tutorial.jpg',
  },
  {
    id: 'python',
    title: pythonroadmap.courseTitle,
    description: pythonroadmap.description,
    route: '/roadmaps/python',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'reactjs',
    title: reactroadmap.courseTitle,
    description: reactroadmap.description,
    route: '/roadmaps/react',
    image: 'https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg',
  },
  {
    id: 'sql',
    title: sqlroadmap.courseTitle,
    description: sqlroadmap.description,
    route: '/roadmaps/sql',
    image: 'https://miro.medium.com/v2/resize:fit:1200/0*nvq05YU6dV8tbTJ4',
  },
  {
    id: 'nodejs',
    title: nodejsroadmap.courseTitle,
    description: nodejsroadmap.description,
    route: '/roadmaps/nodejs',
    image: 'https://www.mindrops.com/images/nodejs-image.webp',
  },
  {
    id: 'expressjs',
    title: expressroadmap.courseTitle,
    description: expressroadmap.description,
    route: '/roadmaps/expressjs',
    image: 'https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png',
  },
];

const Roadmaps = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [openStages, setOpenStages] = useState(() => {
    const saved = localStorage.getItem(`${topic}RoadmapOpenStages`);
    return saved ? JSON.parse(saved) : {};
  });
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem(`${topic}RoadmapCompletedItems`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (topic) {
      localStorage.setItem(`${topic}RoadmapOpenStages`, JSON.stringify(openStages));
    }
  }, [openStages, topic]);

  useEffect(() => {
    if (topic) {
      localStorage.setItem(`${topic}RoadmapCompletedItems`, JSON.stringify(completedItems));
    }
  }, [completedItems, topic]);

  const toggleStage = (stageIndex) => {
    setOpenStages((prev) => ({
      ...prev,
      [stageIndex]: !prev[stageIndex],
    }));
  };

  const toggleComplete = (stageIndex, type, itemIndex) => {
    setCompletedItems((prev) => {
      const stageData = prev[stageIndex] || {};
      const typeData = stageData[type] || {};
      return {
        ...prev,
        [stageIndex]: {
          ...stageData,
          [type]: {
            ...typeData,
            [itemIndex]: !typeData[itemIndex],
          },
        },
      };
    });
  };

  // Render the detailed roadmap view for a specific topic
  const renderDetailedRoadmap = (roadmapData) => {
    return (
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 mt-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-4">
            {roadmapData.courseTitle}
          </h1>
          <p className="text-gray-400 text-lg">{roadmapData.description}</p>
        </div>

        {/* Main Content: Two-Column Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side: Roadmap Stages (3/4 width on lg screens) */}
          <div className="lg:col-span-3">
            {roadmapData.stages.map((stage, index) => (
              <div key={index} className="mb-6">
                {/* Stage Header */}
                <div
                  onClick={() => toggleStage(index)}
                  className="flex items-center justify-between bg-[#111] rounded-xl p-4 shadow-lg hover:shadow-cyan-500/40 transition duration-300 cursor-pointer"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {stage.stage}: {stage.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{stage.goal}</p>
                  </div>
                  <span className="text-gray-400">
                    {openStages[index] ? '▼' : '▶'}
                  </span>
                </div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {openStages[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#222] rounded-xl p-6 mt-2 text-gray-300 overflow-hidden"
                    >
                      <h4 className="text-lg font-semibold text-violet-400 mb-2">Topics Covered:</h4>
                      <ul className="mb-4">
                        {stage.topics.map((topic, i) => (
                          <li key={i} className="flex items-center py-1">
                            <input
                              type="checkbox"
                              checked={completedItems[index]?.topics?.[i] || false}
                              onChange={() => toggleComplete(index, 'topics', i)}
                              className="w-4 h-4 text-violet-500 bg-gray-900 border-gray-700 rounded focus:ring-violet-500 focus:ring-2 mr-3"
                            />
                            <span className={completedItems[index]?.topics?.[i] ? 'line-through text-gray-500' : 'text-gray-300'}>
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {stage.practiceQuestions && (
                        <>
                          <h4 className="text-lg font-semibold text-violet-400 mb-2">Practice Questions:</h4>
                          <ul className="mb-4">
                            {stage.practiceQuestions.map((question, i) => (
                              <li key={i} className="flex items-center py-1">
                                <input
                                  type="checkbox"
                                  checked={completedItems[index]?.practiceQuestions?.[i] || false}
                                  onChange={() => toggleComplete(index, 'practiceQuestions', i)}
                                  className="w-4 h-4 text-violet-500 bg-gray-900 border-gray-700 rounded focus:ring-violet-500 focus:ring-2 mr-3"
                                />
                                <span className={completedItems[index]?.practiceQuestions?.[i] ? 'line-through text-gray-500' : 'text-gray-300'}>
                                  {question}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {stage.projectIdeas && (
                        <>
                          <h4 className="text-lg font-semibold text-violet-400 mb-2">Project Ideas:</h4>
                          <ul className="mb-4">
                            {stage.projectIdeas.map((project, i) => (
                              <li key={i} className="flex items-center py-1">
                                <input
                                  type="checkbox"
                                  checked={completedItems[index]?.projectIdeas?.[i] || false}
                                  onChange={() => toggleComplete(index, 'projectIdeas', i)}
                                  className="w-4 h-4 text-violet-500 bg-gray-900 border-gray-700 rounded focus:ring-violet-500 focus:ring-2 mr-3"
                                />
                                <span className={completedItems[index]?.projectIdeas?.[i] ? 'line-through text-gray-500' : 'text-gray-300'}>
                                  {project}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: Interview Questions Link (1/4 width on lg screens) */}
          <div className="lg:col-span-1 flex items-start justify-center lg:justify-start">
            <Link
              to={`/interviewquestions/${topic}`}
              className="text-cyan-400 hover:text-violet-500 transition-colors text-lg font-semibold bg-[#111] rounded-lg px-6 py-3 shadow-lg hover:shadow-cyan-600/50"
            >
              Click here to view interview questions
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Main render logic
  if (topic) {
    if (topic === 'java') {
      return renderDetailedRoadmap(javaRoadmapData);
    } else if (topic === 'python') {
      return renderDetailedRoadmap(pythonroadmap);
    }else if (topic === 'react'){
      return renderDetailedRoadmap(reactroadmap)
    }else if (topic === 'sql'){
      return renderDetailedRoadmap(sqlroadmap)
    }else if (topic === 'expressjs'){
      return renderDetailedRoadmap(expressroadmap)
    }else if (topic === 'nodejs'){
      return renderDetailedRoadmap(nodejsroadmap)
    }
    return (
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-8">
          Roadmap Not Found
        </h1>
        <p className="text-gray-400 text-center">The roadmap you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  // Render the list of roadmap cards
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-12 mt-10">
        Available Roadmaps
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allRoadmaps.map((roadmap) => (
          <div
            key={roadmap.id}
            onClick={() => navigate(roadmap.route)}
            className="cursor-pointer bg-[#111] rounded-xl border border-gray-800 p-6 shadow-xl transition-shadow hover:shadow-cyan-600/50"
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
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;