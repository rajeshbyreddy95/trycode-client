import React, { useState } from 'react';
import { jsquestions } from './javascript';
import { react } from './react';
import { nodequestions } from './node';
import { expressquestions } from './express';
import { sqlquestions } from './sql';
import { devopsquestions } from './devops';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Prepare the question data by mapping the JSON structure to the component's expected format
const questionData = [
  // JavaScript Theory questions
  ...jsquestions.theory.map((item, index) => ({
    id: item.id,
    category: 'JavaScript',
    type: 'theory',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Code Example:**\n\`\`\`javascript\n${item.code}\n\`\`\`` : ''}`,
  })),
  // JavaScript Practice questions (combine basic and intermediate into a single "coding" category)
  ...jsquestions.practice.basic.map((item, index) => ({
    id: item.id,
    category: 'JavaScript',
    type: 'coding',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Solution:**\n\`\`\`javascript\n${item.code}\n\`\`\`` : ''}`,
  })),
  ...jsquestions.practice.intermediate.map((item, index) => ({
    id: item.id,
    category: 'JavaScript',
    type: 'coding',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Solution:**\n\`\`\`javascript\n${item.code}\n\`\`\`` : ''}`,
  })),
  // React Theory questions
  ...react.theory.map((item, index) => ({
    id: item.id,
    category: 'React',
    type: 'theory',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Code Example:**\n\`\`\`jsx\n${item.code}\n\`\`\`` : ''}`,
  })),
  // Node.js Theory questions
  ...nodequestions.theory.map((item, index) => ({
    id: item.id,
    category: 'Node.js',
    type: 'theory',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Code Example:**\n\`\`\`javascript\n${item.code}\n\`\`\`` : ''}`,
  })),
  // Express.js Theory questions
  ...expressquestions.theory.map((item, index) => ({
    id: item.id,
    category: 'express.js',
    type: 'theory',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Code Example:**\n\`\`\`javascript\n${item.code}\n\`\`\`` : ''}`,
  })),
  // DevOps Theory questions
  ...devopsquestions.theory.map((item, index) => ({
    id: item.id,
    category: 'devOps',
    type: 'theory',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Code Example:**\n\`\`\`javascript\n${item.code}\n\`\`\`` : ''}`,
  })),
  // SQL Theory questions
  ...sqlquestions.theory.map((item, index) => ({
    id: item.id,
    category: 'sql',
    type: 'theory',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Code Example:**\n\`\`\`sql\n${item.code}\n\`\`\`` : ''}`, // Fixed language to 'sql'
  })),
  // SQL Query questions (mapped to "coding" tab)
  ...sqlquestions.query.map((item, index) => ({
    id: item.id,
    category: 'sql',
    type: 'coding',
    question: item.title,
    answer: `${item.content}${item.code ? `\n\n**Solution:**\n\`\`\`sql\n${item.code}\n\`\`\`` : ''}`,
  })),
];

// Extract unique categories ("JavaScript", "React", "Node.js", "express.js", "devOps", "sql")
const categories = [...new Set(questionData.map(q => q.category))];

const InterviewQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('theory');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Filter questions based on selected category and active tab
  const filteredQuestions = questionData.filter(
    q => q.category === selectedCategory && q.type === activeTab
  );

  // Automatically select the first question when the category or tab changes
  React.useEffect(() => {
    if (filteredQuestions.length > 0) {
      setSelectedQuestion(filteredQuestions[0].id);
    } else {
      setSelectedQuestion(null);
    }
  }, [selectedCategory, activeTab]);

  // Find the currently selected question's details
  const currentQuestion = filteredQuestions.find(q => q.id === selectedQuestion);

  // Determine if the "Coding" tab should be shown (for JavaScript and SQL)
  const showCodingTab = selectedCategory === 'JavaScript' || selectedCategory === 'sql';

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-center">
        Interview Questions
      </h1>

      {/* Category Selection */}
      {!selectedCategory && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="bg-[#111] rounded-xl p-6 text-center shadow-lg hover:shadow-cyan-500/40 transition duration-300"
            >
              <h2 className="text-xl font-bold text-cyan-400 mb-2">{cat}</h2>
              <p className="text-sm text-gray-400">View {cat} questions</p>
            </button>
          ))}
        </div>
      )}

      {/* Sidebar and Answer Display */}
      {selectedCategory && (
        <div>
          {/* Header with Back Button and Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4 sm:mb-0">{selectedCategory} Questions</h2>
            <div className="flex items-center space-x-4">
              <div>
                <button
                  onClick={() => setActiveTab('theory')}
                  className={`px-4 py-2 mr-2 rounded-full text-sm font-semibold transition ${
                    activeTab === 'theory'
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Theory
                </button>
                {showCodingTab && (
                  <button
                    onClick={() => setActiveTab('coding')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      activeTab === 'coding'
                        ? 'bg-cyan-600 text-white shadow-lg'
                        : 'bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    Coding
                  </button>
                )}
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm bg-gray-800 px-3 py-1 rounded-full text-gray-300 hover:bg-gray-700"
              >
                ← Back to Topics
              </button>
            </div>
          </div>

          {/* Mobile Dropdown for Questions */}
          <div className="md:hidden mb-6">
            <select
              value={selectedQuestion || ''}
              onChange={(e) => setSelectedQuestion(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {filteredQuestions.map((q) => (
                <option key={q.id} value={q.id} className="bg-black">
                  {q.question}
                </option>
              ))}
            </select>
          </div>

          {/* Sidebar and Content */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar (Hidden on Mobile) */}
            <nav className="hidden md:block w-full md:w-1/4 h-[calc(100vh-200px)] overflow-y-auto bg-[#111] rounded-xl p-4 shadow-lg">
              <ul className="space-y-2">
                {filteredQuestions.map((q) => (
                  <li key={q.id}>
                    <button
                      onClick={() => setSelectedQuestion(q.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        selectedQuestion === q.id
                          ? 'bg-cyan-600 text-white font-semibold'
                          : 'text-gray-300 hover:bg-cyan-500 hover:text-white'
                      }`}
                    >
                      {q.question}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Answer Display */}
            <div className="w-full md:w-2/4 bg-[#111] rounded-xl p-6 shadow-lg">
              {currentQuestion ? (
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">{currentQuestion.question}</h2>
                  <div className="text-gray-300">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '');
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={vscDarkPlus}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {currentQuestion.answer}
                    </ReactMarkdown>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">No questions available in this category.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewQuestions;