import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tutorialsData = [
  // Frontend
  {
    id: 'html',
    title: 'HTML for Beginners',
    category: 'Frontend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    description: 'Learn the structure of web pages using HTML.',
  },
  {
    id: 'css',
    title: 'Mastering CSS',
    category: 'Frontend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    description: 'Style your websites beautifully with CSS.',
  },
  {
    id: 'js',
    title: 'JavaScript Essentials',
    category: 'Frontend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    description: 'Understand the language of the web: JavaScript.',
  },
  {
    id: 'react',
    title: 'React Fundamentals',
    category: 'Frontend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: 'Build interactive UIs with React.js.',
  },

  // Backend
  {
    id: 'node',
    title: 'Node.js Crash Course',
    category: 'Backend',
    image: 'https://nodejs.org/static/images/logo.svg',
    description: 'Create fast and scalable backend apps with Node.js.',
  },
  {
    id: 'express',
    title: 'Express.js Basics',
    category: 'Backend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    description: 'Build REST APIs with Express.js.',
  },
  {
    id: 'mongodb',
    title: 'MongoDB for Developers',
    category: 'Backend',
    image: 'https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png',
    description: 'Learn NoSQL database operations using MongoDB.',
  },

  // Mobile
  {
    id: 'react-native',
    title: 'React Native App Development',
    category: 'Mobile',
    image: 'https://reactnative.dev/img/header_logo.svg',
    description: 'Create mobile apps using React Native.',
  },
  {
    id: 'flutter',
    title: 'Flutter from Scratch',
    category: 'Mobile',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
    description: 'Build cross-platform apps using Flutter.',
  },

  // Languages
  {
    id: 'python',
    title: 'Python for Data Science',
    category: 'Programming',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    description: 'Explore Python for automation and analysis.',
  },
  {
    id: 'java',
    title: 'Java Basics',
    category: 'Programming',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    description: 'Get started with object-oriented programming in Java.',
  },
  {
    id: 'cpp',
    title: 'C++ for Beginners',
    category: 'Programming',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    description: 'Learn C++ and understand its core principles.',
  },
];

const categories = ['All', ...new Set(tutorialsData.map(t => t.category))];

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTutorials = selectedCategory === 'All'
    ? tutorialsData
    : tutorialsData.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-center">
        Tutorials
      </h1>

      {/* Desktop & Tablet - category buttons */}
      <div className="hidden sm:flex justify-center gap-6 mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition
              ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-cyan-700 hover:text-white'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile - select dropdown */}
      <div className="sm:hidden mb-12 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-800 text-white rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Tutorials grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {filteredTutorials.map(({ id, title, category, image, description }) => (
          <Link
            to={`/tutorials/${id}`}
            key={id}
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500 transition-shadow"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain bg-black p-4"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">{title}</h2>
              <p className="text-gray-400 mb-4">{description}</p>
              <span className="inline-block bg-violet-700 text-violet-300 px-3 py-1 rounded-full text-xs font-semibold">
                {category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
