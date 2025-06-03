export const nodejsroadmap = {
  "courseTitle": "Node.js Roadmap for Beginners (2025 Edition)",
  "description": "Master Node.js from scratch: asynchronous programming, modules, server creation, and real-world applications.",
  "stages": [
    {
      "stage": "Stage 1",
      "title": "Node.js Basics",
      "goal": "Understand what Node.js is and how it works.",
      "topics": [
        "What is Node.js?",
        "V8 Engine & Event Loop",
        "Installing Node.js and npm",
        "REPL, Node CLI"
      ],
      "practiceQuestions": [
        "Create a simple 'Hello World' Node app.",
        "Use REPL to perform basic math operations.",
        "List all global objects in Node."
      ]
    },
    {
      "stage": "Stage 2",
      "title": "Modules & File System",
      "goal": "Learn core modules and file handling.",
      "topics": [
        "CommonJS Modules",
        "Creating Custom Modules",
        "fs Module (Read/Write Files)",
        "path, os Modules",
        "Working with Directories"
      ],
      "practiceQuestions": [
        "Create a module for addition and subtraction.",
        "Read content from a file and print it.",
        "Write JSON data into a file."
      ]
    },
    {
      "stage": "Stage 3",
      "title": "Asynchronous Programming",
      "goal": "Understand how Node.js handles async operations.",
      "topics": [
        "Callbacks",
        "Promises",
        "Async/Await",
        "setTimeout/setInterval",
        "Handling Errors"
      ],
      "practiceQuestions": [
        "Write a delayed greeting using setTimeout.",
        "Convert a callback function into a promise.",
        "Fetch and display data using async/await."
      ]
    },
    {
      "stage": "Stage 4",
      "title": "Creating Web Servers",
      "goal": "Build HTTP servers and handle requests.",
      "topics": [
        "http Module",
        "Creating Basic Server",
        "Routing Manually",
        "Handling GET and POST",
        "Sending JSON and HTML Responses"
      ],
      "practiceQuestions": [
        "Create a server that responds with JSON.",
        "Implement manual routing with 'if' statements.",
        "Parse incoming POST data."
      ]
    },
    {
      "stage": "Stage 5",
      "title": "npm and Packages",
      "goal": "Manage and use packages from the npm ecosystem.",
      "topics": [
        "npm init",
        "Installing Packages",
        "nodemon, dotenv",
        "chalk, uuid, axios usage",
        "Creating Your Own Package (basic)"
      ],
      "practiceQuestions": [
        "Install and use chalk to color terminal output.",
        "Set up environment variables with dotenv.",
        "Use uuid to generate unique IDs."
      ]
    },
    {
      "stage": "Stage 6",
      "title": "Node.js in Real Projects",
      "goal": "Use Node.js in fullstack or backend development.",
      "topics": [
        "REST APIs (with Express)",
        "Middlewares",
        "Working with JSON and MongoDB",
        "Authentication Basics (JWT, bcrypt)",
        "MVC Folder Structure"
      ],
      "projectIdeas": [
        "To-do API with in-memory storage",
        "Blog backend with file storage",
        "User authentication system",
        "Build a REST API for notes"
      ]
    }
  ],
  "bonus": {
    "title": "Interview Preparation Topics",
    "topics": [
      "Event Loop and Call Stack",
      "Callback Hell vs Promises",
      "Why Node is single-threaded?",
      "Blocking vs Non-blocking I/O",
      "How require() works",
      "Best practices for folder structure"
    ]
  }
}
