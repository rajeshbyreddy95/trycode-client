import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roadmapData = [
  {
    id: '1',
    title: 'Frontend Developer Roadmap',
    category: 'Web Dev',
    description: 'Learn HTML, CSS, JS, React, and more.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    route: '/roadmaps/frontend-dev',
  },
  {
    id: '2',
    title: 'Backend Developer Roadmap',
    category: 'Web Dev',
    description: 'Node.js, databases, REST APIs, and security.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    route: '/roadmaps/backend-dev',
  },
  {
    id: '3',
    title: 'Mobile Developer Roadmap',
    category: 'App Dev',
    description: 'Learn Flutter, React Native, Swift, and Kotlin.',
    image: 'https://images.unsplash.com/photo-1523475496153-3d6cc3b7f4c9?auto=format&fit=crop&w=800&q=80',
    route: '/roadmaps/mobile-dev',
  },
  {
    id: '4',
    title: 'Data Science Roadmap',
    category: 'Data Science',
    description: 'Python, ML, data visualization, and more.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    route: '/roadmaps/data-science',
  },
];

const categories = ['All', 'Web Dev', 'App Dev', 'Data Science'];

const Roadmaps = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredRoadmaps =
    selectedCategory === 'All'
      ? roadmapData
      : roadmapData.filter((r) => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-center">
        Roadmaps
      </h1>

      {/* Desktop Filter */}
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

      {/* Mobile Filter */}
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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredRoadmaps.map(({ id, title, description, image, route }) => (
          <div
            key={id}
            onClick={() => navigate(route)}
            className="cursor-pointer relative bg-[#111] rounded-xl border border-gray-800 p-6 shadow-xl transition-shadow hover:shadow-cyan-600/50"
            style={{
              boxShadow:
                '0 8px 15px rgba(0, 191, 255, 0.5), 8px 0 15px rgba(0, 191, 255, 0.3), -8px 0 15px rgba(0, 191, 255, 0.3)',
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
        {filteredRoadmaps.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No roadmaps found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Roadmaps;
