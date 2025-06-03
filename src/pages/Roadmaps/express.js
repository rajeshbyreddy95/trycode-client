export const expressroadmap = {
  "courseTitle": "Express.js Roadmap for Beginners (2025 Edition)",
  "description": "Build fast, scalable backend APIs using Express.js with real-world structure, routes, and middleware.",
  "stages": [
    {
      "stage": "Stage 1",
      "title": "Introduction & Setup",
      "goal": "Get started with Express.js and create your first app.",
      "topics": [
        "What is Express.js?",
        "Installing Express",
        "Creating a Basic Server",
        "Handling GET/POST/PUT/DELETE"
      ],
      "practiceQuestions": [
        "Create a GET endpoint that returns 'Hello from Express'.",
        "Send a POST request to receive JSON data.",
        "Return a list of users from an array."
      ]
    },
    {
      "stage": "Stage 2",
      "title": "Routing and Middleware",
      "goal": "Learn routing, middleware flow, and modular architecture.",
      "topics": [
        "Route Parameters and Query Strings",
        "Custom Middleware",
        "Third-party Middleware (morgan, cors)",
        "Error Handling Middleware",
        "Router and route grouping"
      ],
      "practiceQuestions": [
        "Create a route to get user by ID using route parameters.",
        "Log request details using a custom middleware.",
        "Add CORS support and test with frontend."
      ]
    },
    {
      "stage": "Stage 3",
      "title": "Building RESTful APIs",
      "goal": "Use Express.js to create structured REST APIs.",
      "topics": [
        "REST API Design Principles",
        "Controllers and Routes Separation",
        "CRUD Operations with JSON",
        "Status Codes and Error Responses"
      ],
      "practiceQuestions": [
        "Build a REST API for a book store (CRUD).",
        "Return appropriate status codes and messages.",
        "Organize API into controllers and route files."
      ]
    },
    {
      "stage": "Stage 4",
      "title": "Databases and Integration",
      "goal": "Connect Express with databases and persist data.",
      "topics": [
        "MongoDB Connection (mongoose)",
        "Schema Design and Models",
        "Create, Read, Update, Delete with DB",
        "Environment Variables with dotenv"
      ],
      "practiceQuestions": [
        "Connect to MongoDB and save user data.",
        "Create a blog schema and CRUD routes.",
        "Use .env to manage database connection string."
      ]
    },
    {
      "stage": "Stage 5",
      "title": "Authentication & Security",
      "goal": "Add user authentication and protect routes.",
      "topics": [
        "bcrypt for Password Hashing",
        "JWT for Token Authentication",
        "Role-based Access Control (RBAC)",
        "Security Middleware (helmet, rate-limit)"
      ],
      "practiceQuestions": [
        "Register/login user with hashed password.",
        "Protect a route using JWT middleware.",
        "Restrict admin-only routes."
      ]
    },
    {
      "stage": "Stage 6",
      "title": "Project and Deployment",
      "goal": "Build, test, and deploy your Express app.",
      "topics": [
        "Project Structure (MVC)",
        "API Testing with Postman",
        "Deploy to Vercel, Render or Railway",
        "CORS & Deployment Config",
        "Basic CI/CD Workflow"
      ],
      "projectIdeas": [
        "Task Manager API",
        "Blog API with Auth",
        "Notes App with Tags and Search",
        "User Dashboard API"
      ]
    }
  ],
  "bonus": {
    "title": "Interview Preparation Topics",
    "topics": [
      "Difference between Express and Node.js",
      "Synchronous vs Asynchronous in Express",
      "What are Middlewares?",
      "Stateless API Design",
      "How to handle errors globally?",
      "Rate limiting and security headers"
    ]
  }
}
