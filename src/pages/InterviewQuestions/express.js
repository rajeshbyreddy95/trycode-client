export const expressquestions = 
    {
  "theory": [
    {
      "id": "express-theory-1",
      "title": "What is Express.js?",
      "content": "Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web and mobile applications, simplifying the process of creating HTTP servers, handling routes, and managing middleware.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello, Express!');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));"
    },
    {
      "id": "express-theory-2",
      "title": "What are the key features of Express.js?",
      "content": "Express.js offers:\n- **Routing**: Define routes for HTTP methods.\n- **Middleware**: Process requests with a chain of functions.\n- **Template Engines**: Support for rendering dynamic HTML.\n- **Error Handling**: Built-in mechanisms for handling errors.\n- **Extensibility**: Large ecosystem of middleware and plugins.",
      "code": "const express = require('express');\nconst app = express();\n\n// Middleware\napp.use(express.json());\n\n// Route\napp.get('/hello', (req, res) => res.send('Hello!'));\n\napp.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "express-theory-3",
      "title": "How does Express.js handle HTTP requests?",
      "content": "Express.js handles HTTP requests using routes defined for specific HTTP methods (GET, POST, etc.). Each route is associated with a callback function that processes the request and sends a response.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('GET request received');\n});\n\napp.post('/', (req, res) => {\n  res.send('POST request received');\n});\n\napp.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "express-theory-4",
      "title": "What is middleware in Express.js?",
      "content": "Middleware functions in Express.js are functions that have access to the request (req), response (res), and the next middleware function in the request-response cycle. They can modify req/res, end the cycle, or pass control to the next middleware.",
      "code": "const express = require('express');\nconst app = express();\n\n// Middleware\napp.use((req, res, next) => {\n  console.log('Request URL:', req.url);\n  next();\n});\n\napp.get('/', (req, res) => res.send('Hello!'));\napp.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "express-theory-5",
      "title": "What are the types of middleware in Express.js?",
      "content": "- **Application-level**: Applied to the entire app using app.use().\n- **Router-level**: Applied to specific routes using router.use().\n- **Error-handling**: Handles errors with four arguments (err, req, res, next).\n- **Built-in**: Provided by Express, like express.json().\n- **Third-party**: External middleware like cors or helmet.",
      "code": "const express = require('express');\nconst app = express();\n\n// Application-level middleware\napp.use(express.json());\n\n// Error-handling middleware\napp.use((err, req, res, next) => {\n  res.status(500).send('Something broke!');\n});\n\napp.get('/', (req, res) => res.send('Hello!'));\napp.listen(3000);"
    },
    {
      "id": "express-theory-6",
      "title": "What is the difference between app.use() and app.get() in Express.js?",
      "content": "- **app.use()**: Used for middleware, applies to all HTTP methods and paths (unless specified).\n- **app.get()**: Defines a route handler for GET requests to a specific path.",
      "code": "const express = require('express');\nconst app = express();\n\n// Middleware with app.use()\napp.use((req, res, next) => {\n  console.log('Middleware triggered');\n  next();\n});\n\n// Route with app.get()\napp.get('/', (req, res) => res.send('GET route'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-7",
      "title": "What is the role of the next() function in Express.js middleware?",
      "content": "The next() function in Express.js middleware passes control to the next middleware or route handler in the chain. If not called, the request will hang, and the response won't be sent.",
      "code": "const express = require('express');\nconst app = express();\n\napp.use((req, res, next) => {\n  console.log('First middleware');\n  next(); // Pass control to the next handler\n});\n\napp.use((req, res, next) => {\n  console.log('Second middleware');\n  res.send('Response sent');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-8",
      "title": "How do you handle errors in Express.js?",
      "content": "Express.js handles errors using error-handling middleware, which has four arguments: (err, req, res, next). This middleware catches errors thrown in the app and sends an appropriate response.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  throw new Error('Something went wrong!');\n});\n\n// Error-handling middleware\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Internal Server Error');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-9",
      "title": "What is the difference between synchronous and asynchronous error handling in Express.js?",
      "content": "- **Synchronous Errors**: Automatically caught by Express if thrown in a route handler.\n- **Asynchronous Errors**: Must be passed to next() manually using next(err) in async functions.",
      "code": "const express = require('express');\nconst app = express();\n\n// Synchronous error\napp.get('/sync', (req, res) => {\n  throw new Error('Sync error');\n});\n\n// Asynchronous error\napp.get('/async', async (req, res, next) => {\n  try {\n    throw new Error('Async error');\n  } catch (err) {\n    next(err); // Pass to error handler\n  }\n});\n\napp.use((err, req, res, next) => {\n  res.status(500).send(err.message);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-10",
      "title": "What is routing in Express.js?",
      "content": "Routing in Express.js refers to defining endpoints (URIs) and how the application responds to client requests to those endpoints. Routes are defined using methods like app.get(), app.post(), etc., for specific HTTP methods.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/users', (req, res) => {\n  res.send('List of users');\n});\n\napp.post('/users', (req, res) => {\n  res.send('User created');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-11",
      "title": "What are route parameters in Express.js?",
      "content": "Route parameters in Express.js are named URL segments used to capture values from the URL. They are defined with a colon (:) and accessed via req.params.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/users/:id', (req, res) => {\n  const userId = req.params.id;\n  res.send(`User ID: ${userId}`);\n});\n\napp.listen(3000);\n// Access: /users/123 -> User ID: 123"
    },
    {
      "id": "express-theory-12",
      "title": "What are query parameters in Express.js?",
      "content": "Query parameters in Express.js are key-value pairs in the URL after a question mark (?), used to pass additional data to the server. They are accessed via req.query.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/search', (req, res) => {\n  const query = req.query.q;\n  res.send(`Search query: ${query}`);\n});\n\napp.listen(3000);\n// Access: /search?q=javascript -> Search query: javascript"
    },
    {
      "id": "express-theory-13",
      "title": "What is the difference between route parameters and query parameters?",
      "content": "- **Route Parameters**: Part of the URL path, used for required data (e.g., /users/:id).\n- **Query Parameters**: Optional data in the URL after ?, used for filtering or searching (e.g., /search?q=term).",
      "code": "const express = require('express');\nconst app = express();\n\n// Route parameter\napp.get('/users/:id', (req, res) => {\n  res.send(`User ID: ${req.params.id}`);\n});\n\n// Query parameter\napp.get('/search', (req, res) => {\n  res.send(`Query: ${req.query.q}`);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-14",
      "title": "What is the Express Router?",
      "content": "The Express Router is a mini-app within Express that allows you to modularize routes. It can handle routes, middleware, and HTTP methods independently, making the app more organized.",
      "code": "const express = require('express');\nconst router = express.Router();\n\n// Define routes on the router\nrouter.get('/', (req, res) => res.send('Router Home'));\nrouter.get('/about', (req, res) => res.send('Router About'));\n\nconst app = express();\napp.use('/api', router); // Mount the router\n\napp.listen(3000);\n// Access: /api -> Router Home, /api/about -> Router About"
    },
    {
      "id": "express-theory-15",
      "title": "How do you handle form data in Express.js?",
      "content": "To handle form data in Express.js, use the express.urlencoded() middleware for URL-encoded data (from HTML forms) or express.json() for JSON data. Third-party middleware like multer can handle file uploads.",
      "code": "const express = require('express');\nconst app = express();\n\n// Middleware to parse form data\napp.use(express.urlencoded({ extended: true }));\n\napp.post('/form', (req, res) => {\n  const { name } = req.body;\n  res.send(`Form submitted: ${name}`);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-16",
      "title": "What is the express.json() middleware?",
      "content": "The express.json() middleware parses incoming requests with JSON payloads and makes the data available in req.body. It’s built into Express and essential for handling JSON data in APIs.",
      "code": "const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.post('/data', (req, res) => {\n  const data = req.body;\n  res.send(`Received: ${JSON.stringify(data)}`);\n});\n\napp.listen(3000);\n// POST /data with body: {\"name\": \"John\"} -> Received: {\"name\": \"John\"}"
    },
    {
      "id": "express-theory-17",
      "title": "What is the express.urlencoded() middleware?",
      "content": "The express.urlencoded() middleware parses incoming requests with URL-encoded payloads, typically from HTML forms. It populates req.body with the form data.",
      "code": "const express = require('express');\nconst app = express();\n\napp.use(express.urlencoded({ extended: true }));\n\napp.post('/submit', (req, res) => {\n  const { username } = req.body;\n  res.send(`Username: ${username}`);\n});\n\napp.listen(3000);\n// POST /submit with body: username=John -> Username: John"
    },
    {
      "id": "express-theory-18",
      "title": "What is the difference between express.json() and express.urlencoded()?",
      "content": "- **express.json()**: Parses JSON payloads (e.g., from API requests).\n- **express.urlencoded()**: Parses URL-encoded data (e.g., from HTML forms).",
      "code": "const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\napp.post('/json', (req, res) => res.send(req.body));\napp.post('/form', (req, res) => res.send(req.body));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-19",
      "title": "How do you serve static files in Express.js?",
      "content": "Express.js serves static files (e.g., images, CSS, JavaScript) using the express.static middleware. You specify a directory, and Express serves the files from that directory.",
      "code": "const express = require('express');\nconst app = express();\n\n// Serve static files from 'public' directory\napp.use(express.static('public'));\n\napp.listen(3000);\n// Access: /image.jpg -> serves public/image.jpg"
    },
    {
      "id": "express-theory-20",
      "title": "What is the difference between res.send() and res.json() in Express.js?",
      "content": "- **res.send()**: Sends a response of any type (string, HTML, buffer, etc.), automatically setting the Content-Type.\n- **res.json()**: Sends a JSON response, setting the Content-Type to application/json.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/send', (req, res) => {\n  res.send('Hello');\n});\n\napp.get('/json', (req, res) => {\n  res.json({ message: 'Hello' });\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-21",
      "title": "What is the difference between res.send() and res.end() in Express.js?",
      "content": "- **res.send()**: Sends the response and sets headers like Content-Type, used for sending data.\n- **res.end()**: Ends the response process without sending data, typically used with low-level responses.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/send', (req, res) => {\n  res.send('Hello');\n});\n\napp.get('/end', (req, res) => {\n  res.end(); // No data sent\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-22",
      "title": "How do you set HTTP status codes in Express.js?",
      "content": "In Express.js, HTTP status codes are set using res.status() before sending the response. Common codes include 200 (OK), 404 (Not Found), and 500 (Server Error).",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/success', (req, res) => {\n  res.status(200).send('Success');\n});\n\napp.get('/not-found', (req, res) => {\n  res.status(404).send('Not Found');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-23",
      "title": "How do you handle 404 errors in Express.js?",
      "content": "To handle 404 errors in Express.js, add a middleware at the end of your routes that catches unmatched routes and sends a 404 response.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Home'));\n\n// 404 handler\napp.use((req, res, next) => {\n  res.status(404).send('Page Not Found');\n});\n\napp.listen(3000);\n// Access: /non-existent -> Page Not Found"
    },
    {
      "id": "express-theory-24",
      "title": "How do you enable CORS in Express.js?",
      "content": "CORS (Cross-Origin Resource Sharing) in Express.js is enabled using the cors middleware. It allows requests from different origins by setting appropriate headers.",
      "code": "const express = require('express');\nconst cors = require('cors');\nconst app = express();\n\n// Enable CORS for all routes\napp.use(cors());\n\napp.get('/', (req, res) => res.send('CORS enabled'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-25",
      "title": "What is the helmet middleware in Express.js?",
      "content": "Helmet is a third-party middleware for Express.js that enhances security by setting various HTTP headers, such as Content-Security-Policy, X-Frame-Options, and Strict-Transport-Security.",
      "code": "const express = require('express');\nconst helmet = require('helmet');\nconst app = express();\n\n// Use helmet for security headers\napp.use(helmet());\n\napp.get('/', (req, res) => res.send('Secure route'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-26",
      "title": "How do you handle file uploads in Express.js?",
      "content": "File uploads in Express.js are handled using the multer middleware, which processes multipart/form-data and saves files to the server.",
      "code": "const express = require('express');\nconst multer = require('multer');\nconst app = express();\n\nconst upload = multer({ dest: 'uploads/' });\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  res.send('File uploaded');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-27",
      "title": "What is the difference between app.all() and app.use() in Express.js?",
      "content": "- **app.all()**: Handles all HTTP methods for a specific route.\n- **app.use()**: Applies middleware to all routes and methods, typically used for middleware.",
      "code": "const express = require('express');\nconst app = express();\n\n// app.use() for middleware\napp.use((req, res, next) => {\n  console.log('Middleware');\n  next();\n});\n\n// app.all() for a specific route\napp.all('/test', (req, res) => {\n  res.send('All methods');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-28",
      "title": "How do you create a REST API in Express.js?",
      "content": "A REST API in Express.js is created by defining routes for CRUD operations (Create, Read, Update, Delete) using HTTP methods like GET, POST, PUT, and DELETE.",
      "code": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet users = [];\n\napp.get('/users', (req, res) => res.json(users));\napp.post('/users', (req, res) => {\n  users.push(req.body);\n  res.status(201).json(req.body);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-29",
      "title": "What is the difference between app.route() and express.Router()?",
      "content": "- **app.route()**: Chains multiple HTTP methods for a single path.\n- **express.Router()**: Creates a modular router for organizing routes separately.",
      "code": "const express = require('express');\nconst app = express();\n\n// app.route()\napp.route('/user')\n  .get((req, res) => res.send('Get user'))\n  .post((req, res) => res.send('Create user'));\n\n// express.Router()\nconst router = express.Router();\nrouter.get('/info', (req, res) => res.send('Info'));\napp.use('/api', router);\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-30",
      "title": "How do you implement authentication in Express.js?",
      "content": "Authentication in Express.js can be implemented using middleware like passport.js or JWT (JSON Web Tokens). A common approach is to verify tokens in a middleware function.",
      "code": "const express = require('express');\nconst jwt = require('jsonwebtoken');\nconst app = express();\napp.use(express.json());\n\nconst authenticate = (req, res, next) => {\n  const token = req.headers['authorization'];\n  jwt.verify(token, 'secret', (err, user) => {\n    if (err) return res.status(403).send('Forbidden');\n    req.user = user;\n    next();\n  });\n};\n\napp.get('/protected', authenticate, (req, res) => res.send('Authenticated'));\napp.listen(3000);"
    },
    {
      "id": "express-theory-31",
      "title": "What is JWT and how do you use it in Express.js?",
      "content": "JWT (JSON Web Token) is a standard for securely transmitting information between parties as a JSON object. In Express.js, it’s used for authentication by generating a token on login and verifying it on protected routes.",
      "code": "const express = require('express');\nconst jwt = require('jsonwebtoken');\nconst app = express();\napp.use(express.json());\n\napp.post('/login', (req, res) => {\n  const token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1h' });\n  res.json({ token });\n});\n\napp.get('/protected', (req, res) => {\n  const token = req.headers['authorization'];\n  jwt.verify(token, 'secret', (err, user) => {\n    if (err) return res.status(403).send('Forbidden');\n    res.send('Protected data');\n  });\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-32",
      "title": "How do you implement session-based authentication in Express.js?",
      "content": "Session-based authentication in Express.js uses the express-session middleware to store user session data on the server and a session ID in a cookie on the client.",
      "code": "const express = require('express');\nconst session = require('express-session');\nconst app = express();\n\napp.use(session({\n  secret: 'secret-key',\n  resave: false,\n  saveUninitialized: false\n}));\n\napp.post('/login', (req, res) => {\n  req.session.user = { id: 1 };\n  res.send('Logged in');\n});\n\napp.get('/profile', (req, res) => {\n  if (req.session.user) {\n    res.send('User profile');\n  } else {\n    res.status(401).send('Unauthorized');\n  }\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-33",
      "title": "What is the difference between JWT and session-based authentication in Express.js?",
      "content": "- **JWT**: Stateless, token-based, scalable, good for APIs.\n- **Session-based**: Stateful, stores session data on the server, uses cookies, good for traditional web apps.",
      "code": "const express = require('express');\nconst jwt = require('jsonwebtoken');\nconst session = require('express-session');\nconst app = express();\n\n// JWT\napp.get('/jwt', (req, res) => {\n  const token = req.headers['authorization'];\n  jwt.verify(token, 'secret', (err) => {\n    if (err) return res.status(403).send('Forbidden');\n    res.send('JWT Auth');\n  });\n});\n\n// Session\napp.use(session({ secret: 'secret' }));\napp.get('/session', (req, res) => {\n  if (req.session.user) res.send('Session Auth');\n  else res.status(401).send('Unauthorized');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-34",
      "title": "How do you secure an Express.js application?",
      "content": "To secure an Express.js app:\n- Use helmet for security headers.\n- Enable CORS with cors middleware.\n- Validate and sanitize input.\n- Use HTTPS with an SSL certificate.\n- Implement rate limiting with express-rate-limit.",
      "code": "const express = require('express');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\n\napp.use(helmet());\napp.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));\n\napp.get('/', (req, res) => res.send('Secure app'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-35",
      "title": "What is rate limiting in Express.js?",
      "content": "Rate limiting in Express.js restricts the number of requests a client can make in a given time period, preventing abuse. It’s implemented using middleware like express-rate-limit.",
      "code": "const express = require('express');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // Limit to 100 requests\n});\n\napp.use(limiter);\n\napp.get('/', (req, res) => res.send('Rate limited route'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-36",
      "title": "How do you implement logging in Express.js?",
      "content": "Logging in Express.js can be implemented using middleware like morgan, which logs HTTP requests to the console or a file in various formats.",
      "code": "const express = require('express');\nconst morgan = require('morgan');\nconst app = express();\n\n// Log requests\napp.use(morgan('combined'));\n\napp.get('/', (req, res) => res.send('Logged route'));\n\napp.listen(3000);\n// Logs: GET / 200 ..."
    },
    {
      "id": "express-theory-37",
      "title": "What is the difference between morgan and winston for logging?",
      "content": "- **morgan**: Middleware for logging HTTP requests, simple and focused.\n- **winston**: General-purpose logging library, more customizable, supports multiple transports (e.g., file, database).",
      "code": "const express = require('express');\nconst morgan = require('morgan');\nconst winston = require('winston');\nconst app = express();\n\n// morgan\napp.use(morgan('tiny'));\n\n// winston\nconst logger = winston.createLogger({\n  transports: [new winston.transports.Console()]\n});\napp.use((req, res, next) => {\n  logger.info('Custom log');\n  next();\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-38",
      "title": "How do you handle environment variables in Express.js?",
      "content": "Environment variables in Express.js are managed using the dotenv package, which loads variables from a .env file into process.env for configuration (e.g., port, database URL).",
      "code": "require('dotenv').config();\nconst express = require('express');\nconst app = express();\n\n// Use environment variable\nconst port = process.env.PORT || 3000;\n\napp.get('/', (req, res) => res.send('Using env vars'));\n\napp.listen(port, () => console.log(`Server on port ${port}`));\n// .env: PORT=3000"
    },
    {
      "id": "express-theory-39",
      "title": "What is the difference between process.env and dotenv in Express.js?",
      "content": "- **process.env**: Built-in Node.js way to access environment variables.\n- **dotenv**: A package that loads environment variables from a .env file into process.env.",
      "code": "require('dotenv').config();\nconst express = require('express');\nconst app = express();\n\n// Using process.env with dotenv\nconsole.log('DB URL:', process.env.DB_URL);\n\napp.get('/', (req, res) => res.send('Using env'));\n\napp.listen(3000);\n// .env: DB_URL=mongodb://localhost:27017"
    },
    {
      "id": "express-theory-40",
      "title": "How do you connect Express.js to a database?",
      "content": "Express.js can connect to a database like MongoDB using packages such as mongoose. You typically set up the connection in a separate file and use it in your routes.",
      "code": "const express = require('express');\nconst mongoose = require('mongoose');\nconst app = express();\n\nmongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });\n\napp.get('/', (req, res) => res.send('Connected to DB'));\n\napp.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "express-theory-41",
      "title": "How do you use Express.js with MongoDB and Mongoose?",
      "content": "Express.js integrates with MongoDB using Mongoose to define schemas and interact with the database. Routes can perform CRUD operations using Mongoose models.",
      "code": "const express = require('express');\nconst mongoose = require('mongoose');\nconst app = express();\napp.use(express.json());\n\nmongoose.connect('mongodb://localhost:27017/mydb');\n\nconst User = mongoose.model('User', new mongoose.Schema({ name: String }));\n\napp.post('/users', async (req, res) => {\n  const user = new User(req.body);\n  await user.save();\n  res.status(201).json(user);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-42",
      "title": "How do you use Express.js with a SQL database like MySQL?",
      "content": "Express.js can connect to a SQL database like MySQL using the mysql2 package. You can use it with promises or async/await for database queries.",
      "code": "const express = require('express');\nconst mysql = require('mysql2/promise');\nconst app = express();\n\n// Create a connection pool\nconst pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'mydb' });\n\napp.get('/users', async (req, res) => {\n  const [rows] = await pool.query('SELECT * FROM users');\n  res.json(rows);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-43",
      "title": "What is the difference between using MongoDB and MySQL with Express.js?",
      "content": "- **MongoDB**: NoSQL, schema-less, uses Mongoose for ORM, good for unstructured data.\n- **MySQL**: Relational, structured, uses packages like mysql2, good for structured data with relationships.",
      "code": "const express = require('express');\nconst mongoose = require('mongoose');\nconst mysql = require('mysql2/promise');\nconst app = express();\n\n// MongoDB with Mongoose\nmongoose.connect('mongodb://localhost:27017/mydb');\nconst User = mongoose.model('User', { name: String });\napp.get('/mongo', async (req, res) => res.json(await User.find()));\n\n// MySQL\nconst pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'mydb' });\napp.get('/mysql', async (req, res) => {\n  const [rows] = await pool.query('SELECT * FROM users');\n  res.json(rows);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-44",
      "title": "How do you implement template engines in Express.js?",
      "content": "Express.js supports template engines like Pug or EJS for rendering dynamic HTML. You set the view engine and specify the views directory, then use res.render() to render templates.",
      "code": "const express = require('express');\nconst app = express();\n\napp.set('view engine', 'pug');\napp.set('views', './views');\n\napp.get('/', (req, res) => {\n  res.render('index', { title: 'Home', message: 'Hello, Pug!' });\n});\n\napp.listen(3000);\n// views/index.pug:\n// html\n//   head\n//     title= title\n//   body\n//     h1= message"
    },
    {
      "id": "express-theory-45",
      "title": "What is the difference between Pug and EJS in Express.js?",
      "content": "- **Pug**: Uses indentation-based syntax, concise, but less familiar to HTML developers.\n- **EJS**: Embeds JavaScript in HTML, more familiar syntax, but can be messier with logic.",
      "code": "const express = require('express');\nconst app = express();\n\n// Pug\napp.set('view engine', 'pug');\napp.get('/pug', (req, res) => res.render('index', { message: 'Hello' }));\n// index.pug: p= message\n\n// EJS\napp.set('view engine', 'ejs');\napp.get('/ejs', (req, res) => res.render('index', { message: 'Hello' }));\n// index.ejs: <p><%= message %></p>\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-46",
      "title": "How do you handle redirects in Express.js?",
      "content": "Redirects in Express.js are handled using res.redirect(), which sends a redirect response to the client with a specified status code (default 302) and URL.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/old', (req, res) => {\n  res.redirect('/new');\n});\n\napp.get('/new', (req, res) => {\n  res.send('This is the new route');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-47",
      "title": "How do you set cookies in Express.js?",
      "content": "Cookies in Express.js are set using res.cookie(). You can specify options like maxAge, httpOnly, and secure. The cookie-parser middleware is used to parse incoming cookies.",
      "code": "const express = require('express');\nconst cookieParser = require('cookie-parser');\nconst app = express();\n\napp.use(cookieParser());\n\napp.get('/set-cookie', (req, res) => {\n  res.cookie('username', 'John', { maxAge: 900000, httpOnly: true });\n  res.send('Cookie set');\n});\n\napp.get('/get-cookie', (req, res) => {\n  res.send(`Cookie: ${req.cookies.username}`);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-48",
      "title": "How do you clear cookies in Express.js?",
      "content": "Cookies in Express.js are cleared using res.clearCookie(), which removes a cookie by name. You need the cookie-parser middleware to manage cookies.",
      "code": "const express = require('express');\nconst cookieParser = require('cookie-parser');\nconst app = express();\n\napp.use(cookieParser());\n\napp.get('/set', (req, res) => {\n  res.cookie('username', 'John');\n  res.send('Cookie set');\n});\n\napp.get('/clear', (req, res) => {\n  res.clearCookie('username');\n  res.send('Cookie cleared');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-49",
      "title": "What is the difference between cookies and sessions in Express.js?",
      "content": "- **Cookies**: Store data on the client, managed with cookie-parser.\n- **Sessions**: Store data on the server, with a session ID in a cookie, managed with express-session.",
      "code": "const express = require('express');\nconst cookieParser = require('cookie-parser');\nconst session = require('express-session');\nconst app = express();\n\n// Cookies\napp.use(cookieParser());\napp.get('/cookie', (req, res) => res.cookie('name', 'John').send('Cookie set'));\n\n// Sessions\napp.use(session({ secret: 'secret' }));\napp.get('/session', (req, res) => {\n  req.session.name = 'John';\n  res.send('Session set');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-50",
      "title": "How do you implement WebSocket in Express.js?",
      "content": "Express.js can integrate with WebSocket using the ws library. You create a WebSocket server and attach it to the Express HTTP server for real-time communication.",
      "code": "const express = require('express');\nconst http = require('http');\nconst WebSocket = require('ws');\nconst app = express();\n\nconst server = http.createServer(app);\nconst wss = new WebSocket.Server({ server });\n\nwss.on('connection', (ws) => {\n  ws.on('message', (msg) => ws.send(`Echo: ${msg}`));\n  ws.send('Connected');\n});\n\napp.get('/', (req, res) => res.send('WebSocket server'));\n\nserver.listen(3000);"
    },
    {
      "id": "express-theory-51",
      "title": "What is the difference between WebSocket and HTTP in Express.js?",
      "content": "- **HTTP**: Request-response, stateless, used for traditional APIs.\n- **WebSocket**: Persistent, bidirectional connection, used for real-time apps.",
      "code": "const express = require('express');\nconst WebSocket = require('ws');\nconst app = express();\n\n// HTTP\napp.get('/http', (req, res) => res.send('HTTP response'));\n\n// WebSocket\nconst server = require('http').createServer(app);\nconst wss = new WebSocket.Server({ server });\nwss.on('connection', (ws) => ws.send('WebSocket connected'));\n\nserver.listen(3000);"
    },
    {
      "id": "express-theory-52",
      "title": "How do you use Socket.IO with Express.js?",
      "content": "Socket.IO integrates with Express.js for real-time communication. It builds on WebSocket and provides fallbacks, making it easier to handle real-time events.",
      "code": "const express = require('express');\nconst http = require('http');\nconst { Server } = require('socket.io');\nconst app = express();\nconst server = http.createServer(app);\nconst io = new Server(server);\n\nio.on('connection', (socket) => {\n  socket.emit('message', 'Connected');\n  socket.on('chat', (msg) => socket.emit('chat', `Echo: ${msg}`));\n});\n\napp.get('/', (req, res) => res.send('Socket.IO server'));\n\nserver.listen(3000);"
    },
    {
      "id": "express-theory-53",
      "title": "What is the difference between WebSocket and Socket.IO in Express.js?",
      "content": "- **WebSocket**: Low-level protocol, requires manual setup.\n- **Socket.IO**: Higher-level library, built on WebSocket, with fallbacks and features like rooms.",
      "code": "const express = require('express');\nconst WebSocket = require('ws');\nconst { Server } = require('socket.io');\nconst app = express();\n\n// WebSocket\nconst wss = new WebSocket.Server({ server: app.listen(3000) });\nwss.on('connection', (ws) => ws.send('Connected'));\n\n// Socket.IO\nconst server = require('http').createServer(app);\nconst io = new Server(server);\nio.on('connection', (socket) => socket.emit('message', 'Connected'));\n\nserver.listen(3001);"
    },
    {
      "id": "express-theory-54",
      "title": "How do you handle file downloads in Express.js?",
      "content": "File downloads in Express.js are handled using res.download(), which prompts the client to download a file from the server.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/download', (req, res) => {\n  const file = './files/example.pdf';\n  res.download(file, 'example.pdf', (err) => {\n    if (err) res.status(500).send('Error downloading file');\n  });\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-55",
      "title": "What is the difference between res.sendFile() and res.download() in Express.js?",
      "content": "- **res.sendFile()**: Sends a file to the client, typically for displaying (e.g., HTML, images).\n- **res.download()**: Prompts the client to download the file with a specified name.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/send', (req, res) => {\n  res.sendFile(__dirname + '/file.txt');\n});\n\napp.get('/download', (req, res) => {\n  res.download(__dirname + '/file.txt', 'downloaded.txt');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-56",
      "title": "How do you implement pagination in Express.js?",
      "content": "Pagination in Express.js is implemented by using query parameters (e.g., page and limit) to slice data and return a subset of results.",
      "code": "const express = require('express');\nconst app = express();\n\nconst data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);\n\napp.get('/items', (req, res) => {\n  const page = parseInt(req.query.page) || 1;\n  const limit = parseInt(req.query.limit) || 10;\n  const start = (page - 1) * limit;\n  const end = page * limit;\n  res.json(data.slice(start, end));\n});\n\napp.listen(3000);\n// Access: /items?page=2&limit=10"
    },
    {
      "id": "express-theory-57",
      "title": "How do you implement caching in Express.js?",
      "content": "Caching in Express.js can be implemented using middleware like apicache to cache responses, reducing server load for repeated requests.",
      "code": "const express = require('express');\nconst apicache = require('apicache');\nconst app = express();\n\nconst cache = apicache.middleware;\n\napp.get('/data', cache('5 minutes'), (req, res) => {\n  res.json({ timestamp: new Date().toISOString() });\n});\n\napp.listen(3000);\n// Response cached for 5 minutes"
    },
    {
      "id": "express-theory-58",
      "title": "What is the difference between client-side and server-side rendering in Express.js?",
      "content": "- **Client-side Rendering**: Rendering happens in the browser (e.g., with React).\n- **Server-side Rendering**: Rendering happens on the server (e.g., with Express and Pug).",
      "code": "const express = require('express');\nconst app = express();\n\n// Server-side rendering with Pug\napp.set('view engine', 'pug');\napp.get('/ssr', (req, res) => res.render('index', { message: 'Hello' }));\n\n// Client-side rendering (serving a React app)\napp.use(express.static('public'));\napp.get('/csr', (req, res) => res.sendFile(__dirname + '/public/index.html'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-59",
      "title": "How do you implement server-side rendering with Express.js?",
      "content": "Server-side rendering (SSR) in Express.js can be implemented using a template engine like Pug or by integrating with frameworks like React for SSR.",
      "code": "const express = require('express');\nconst app = express();\n\napp.set('view engine', 'pug');\napp.set('views', './views');\n\napp.get('/', (req, res) => {\n  res.render('index', { title: 'SSR', message: 'Hello, SSR!' });\n});\n\napp.listen(3000);\n// views/index.pug:\n// html\n//   head\n//     title= title\n//   body\n//     h1= message"
    },
    {
      "id": "express-theory-60",
      "title": "How do you integrate React with Express.js for server-side rendering?",
      "content": "To integrate React with Express.js for SSR, use ReactDOMServer.renderToString() to render React components on the server and send the HTML to the client.",
      "code": "const express = require('express');\nconst React = require('react');\nconst ReactDOMServer = require('react-dom/server');\nconst app = express();\n\nconst App = () => <h1>Hello, SSR with React!</h1>;\n\napp.get('/', (req, res) => {\n  const html = ReactDOMServer.renderToString(<App />);\n  res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-61",
      "title": "What is the difference between Express.js and Koa.js?",
      "content": "- **Express.js**: Older, widely-used, middleware-based, callback-based.\n- **Koa.js**: Modern, uses async/await, lighter, more modular.",
      "code": "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Express'));\napp.listen(3000);\n\n// Koa\nconst Koa = require('koa');\nconst app = new Koa();\napp.use(async (ctx) => {\n  ctx.body = 'Koa';\n});\napp.listen(3001);"
    },
    {
      "id": "express-theory-62",
      "title": "What is the difference between Express.js and Fastify?",
      "content": "- **Express.js**: Popular, widely-used, simpler, slower for high loads.\n- **Fastify**: High-performance, faster than Express, better plugin system.",
      "code": "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Express'));\napp.listen(3000);\n\n// Fastify\nconst fastify = require('fastify')();\nfastify.get('/', async () => 'Fastify');\nfastify.listen(3001);"
    },
    {
      "id": "express-theory-63",
      "title": "How do you handle versioning in an Express.js API?",
      "content": "API versioning in Express.js can be handled by prefixing routes with a version number (e.g., /v1/) or using a custom header. Using express.Router() helps organize versioned routes.",
      "code": "const express = require('express');\nconst app = express();\n\nconst v1 = express.Router();\nv1.get('/users', (req, res) => res.send('V1 Users'));\n\nconst v2 = express.Router();\nv2.get('/users', (req, res) => res.send('V2 Users'));\n\napp.use('/v1', v1);\napp.use('/v2', v2);\n\napp.listen(3000);\n// Access: /v1/users -> V1 Users, /v2/users -> V2 Users"
    },
    {
      "id": "express-theory-64",
      "title": "How do you implement a middleware for request validation in Express.js?",
      "content": "Request validation in Express.js can be implemented using middleware like express-validator to validate and sanitize incoming data.",
      "code": "const express = require('express');\nconst { body, validationResult } = require('express-validator');\nconst app = express();\napp.use(express.json());\n\napp.post('/user', \n  body('email').isEmail(),\n  body('password').isLength({ min: 5 }),\n  (req, res) => {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) return res.status(400).json(errors.array());\n    res.send('User created');\n  }\n);\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-65",
      "title": "What is the difference between express-validator and Joi for validation?",
      "content": "- **express-validator**: Middleware-based, integrates directly with Express, uses validator.js.\n- **Joi**: Standalone, more flexible, often used with custom middleware.",
      "code": "const express = require('express');\nconst { body, validationResult } = require('express-validator');\nconst app = express();\napp.use(express.json());\n\n// express-validator\napp.post('/validate', body('email').isEmail(), (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) return res.status(400).json(errors.array());\n  res.send('Validated');\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-66",
      "title": "How do you handle file compression in Express.js?",
      "content": "File compression in Express.js is handled using the compression middleware, which compresses responses using gzip or deflate, reducing response size.",
      "code": "const express = require('express');\nconst compression = require('compression');\nconst app = express();\n\n// Enable compression\napp.use(compression());\n\napp.get('/', (req, res) => res.send('Compressed response'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-67",
      "title": "How do you implement HTTPS in Express.js?",
      "content": "HTTPS in Express.js is implemented by creating an HTTPS server with an SSL certificate and key, using the https module alongside Express.",
      "code": "const express = require('express');\nconst https = require('https');\nconst fs = require('fs');\nconst app = express();\n\nconst options = {\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n};\n\napp.get('/', (req, res) => res.send('HTTPS server'));\n\nhttps.createServer(options, app).listen(3000);"
    },
    {
      "id": "express-theory-68",
      "title": "How do you integrate Express.js with a reverse proxy like Nginx?",
      "content": "Express.js can be used behind a reverse proxy like Nginx by configuring Nginx to forward requests to the Express server running on a specific port.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Behind Nginx'));\n\napp.listen(3000);\n\n// Nginx config (nginx.conf):\n// server {\n//   listen 80;\n//   server_name example.com;\n//   location / {\n//     proxy_pass http://localhost:3000;\n//     proxy_set_header Host $host;\n//   }\n// }"
    },
    {
      "id": "express-theory-69",
      "title": "What is the difference between Express.js and NestJS?",
      "content": "- **Express.js**: Lightweight, minimal, requires manual setup.\n- **NestJS**: Built on Express, provides structure, TypeScript support, and dependency injection.",
      "code": "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Express'));\napp.listen(3000);\n\n// NestJS (main.ts)\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n}\nbootstrap();"
    },
    {
      "id": "express-theory-70",
      "title": "How do you handle graceful shutdown in Express.js?",
      "content": "Graceful shutdown in Express.js involves closing the server and handling existing connections before shutting down, using server.close() and process signals.",
      "code": "const express = require('express');\nconst app = express();\n\nconst server = app.listen(3000, () => console.log('Server on port 3000'));\n\napp.get('/', (req, res) => res.send('Hello'));\n\nprocess.on('SIGTERM', () => {\n  server.close(() => {\n    console.log('Server closed');\n    process.exit(0);\n  });\n});"
    },
    {
      "id": "express-theory-71",
      "title": "How do you implement clustering in Express.js?",
      "content": "Clustering in Express.js uses the Node.js cluster module to fork multiple worker processes, improving performance by utilizing multiple CPU cores.",
      "code": "const express = require('express');\nconst cluster = require('cluster');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n} else {\n  const app = express();\n  app.get('/', (req, res) => res.send('Clustered'));\n  app.listen(3000);\n}"
    },
    {
      "id": "express-theory-72",
      "title": "What is the difference between clustering and load balancing in Express.js?",
      "content": "- **Clustering**: Uses Node.js cluster to fork processes within a single machine.\n- **Load Balancing**: Distributes traffic across multiple servers, often using a tool like Nginx.",
      "code": "const express = require('express');\nconst cluster = require('cluster');\n\n// Clustering\nif (cluster.isMaster) {\n  cluster.fork();\n} else {\n  const app = express();\n  app.get('/', (req, res) => res.send('Clustered'));\n  app.listen(3000);\n}\n\n// Load balancing with Nginx:\n// upstream backend {\n//   server localhost:3000;\n//   server localhost:3001;\n// }"
    },
    {
      "id": "express-theory-73",
      "title": "How do you implement GraphQL with Express.js?",
      "content": "GraphQL in Express.js is implemented using libraries like express-graphql or Apollo Server, defining a schema and resolvers for handling GraphQL queries.",
      "code": "const express = require('express');\nconst { graphqlHTTP } = require('express-graphql');\nconst { buildSchema } = require('graphql');\nconst app = express();\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\nconst root = { hello: () => 'Hello, GraphQL!' };\n\napp.use('/graphql', graphqlHTTP({\n  schema,\n  rootValue: root,\n  graphiql: true\n}));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-74",
      "title": "What is the difference between REST and GraphQL in Express.js?",
      "content": "- **REST**: Multiple endpoints, can over-fetch/under-fetch data.\n- **GraphQL**: Single endpoint, fetch exactly the data needed.",
      "code": "const express = require('express');\nconst { graphqlHTTP } = require('express-graphql');\nconst { buildSchema } = require('graphql');\nconst app = express();\n\n// REST\napp.get('/rest', (req, res) => res.json({ message: 'REST' }));\n\n// GraphQL\nconst schema = buildSchema('type Query { message: String }');\napp.use('/graphql', graphqlHTTP({\n  schema,\n  rootValue: { message: 'GraphQL' },\n  graphiql: true\n}));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-75",
      "title": "How do you implement gRPC with Express.js?",
      "content": "gRPC in Express.js requires running a separate gRPC server, as Express handles HTTP/1.1. You can integrate them by running both servers and using Express for HTTP routes.",
      "code": "const express = require('express');\nconst grpc = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\nconst app = express();\n\n// Express\napp.get('/', (req, res) => res.send('HTTP route'));\napp.listen(3000);\n\n// gRPC\nconst definition = protoLoader.loadSync('hello.proto');\nconst helloProto = grpc.loadPackageDefinition(definition).hello;\nconst server = new grpc.Server();\nserver.addService(helloProto.HelloService.service, {\n  SayHello: (call, callback) => callback(null, { message: 'Hello' })\n});\nserver.bindAsync('0.0.0.0:3001', grpc.ServerCredentials.createInsecure(), () => server.start());"
    },
    {
      "id": "express-theory-76",
      "title": "What is the difference between REST and gRPC in Express.js?",
      "content": "- **REST**: HTTP-based, human-readable, suitable for web APIs.\n- **gRPC**: Protocol Buffers-based, high-performance, suitable for microservices.",
      "code": "const express = require('express');\nconst app = express();\n\n// REST\napp.get('/rest', (req, res) => res.json({ message: 'REST' }));\n\napp.listen(3000);\n\n// gRPC\nconst grpc = require('@grpc/grpc-js');\nconst server = new grpc.Server();\nserver.addService(helloProto.HelloService.service, {\n  SayHello: (call, callback) => callback(null, { message: 'gRPC' })\n});\nserver.bindAsync('0.0.0.0:3001', grpc.ServerCredentials.createInsecure(), () => server.start());"
    },
    {
      "id": "express-theory-77",
      "title": "How do you handle request timeouts in Express.js?",
      "content": "Request timeouts in Express.js can be handled using the express-timeout middleware or by setting a timeout on the server directly.",
      "code": "const express = require('express');\nconst timeout = require('express-timeout');\nconst app = express();\n\napp.use(timeout('5s'));\n\napp.get('/long', (req, res) => {\n  setTimeout(() => res.send('Delayed response'), 10000);\n});\n\napp.listen(3000);\n// Request times out after 5 seconds"
    },
    {
      "id": "express-theory-78",
      "title": "How do you implement API rate limiting with Redis in Express.js?",
      "content": "API rate limiting with Redis in Express.js uses express-rate-limit with a Redis store to persist rate limit data across server restarts.",
      "code": "const express = require('express');\nconst rateLimit = require('express-rate-limit');\nconst RedisStore = require('rate-limit-redis');\nconst Redis = require('ioredis');\nconst app = express();\n\nconst client = new Redis();\nconst limiter = rateLimit({\n  store: new RedisStore({ client }),\n  windowMs: 15 * 60 * 1000,\n  max: 100\n});\n\napp.use(limiter);\napp.get('/', (req, res) => res.send('Rate limited with Redis'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-79",
      "title": "How do you implement a health check endpoint in Express.js?",
      "content": "A health check endpoint in Express.js is a simple route that returns a status to indicate the server’s health, often used for monitoring.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/health', (req, res) => {\n  res.status(200).json({ status: 'OK', uptime: process.uptime() });\n});\n\napp.listen(3000);\n// Access: /health -> { \"status\": \"OK\", \"uptime\": 123 }"
    },
    {
      "id": "express-theory-80",
      "title": "How do you handle cross-site scripting (XSS) in Express.js?",
      "content": "To prevent XSS in Express.js:\n- Use helmet to set Content-Security-Policy headers.\n- Sanitize user input with libraries like express-validator.\n- Escape output in templates.",
      "code": "const express = require('express');\nconst helmet = require('helmet');\nconst app = express();\n\napp.use(helmet());\n\napp.get('/', (req, res) => {\n  const userInput = req.query.input || 'Hello';\n  res.send(`Output: ${userInput.replace(/</g, '&lt;')}`);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-81",
      "title": "How do you handle SQL injection in Express.js?",
      "content": "To prevent SQL injection in Express.js:\n- Use parameterized queries or ORMs like Sequelize.\n- Validate and sanitize input with express-validator.\n- Avoid raw queries with user input.",
      "code": "const express = require('express');\nconst mysql = require('mysql2/promise');\nconst app = express();\n\nconst pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'mydb' });\n\napp.get('/user', async (req, res) => {\n  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.query.id]);\n  res.json(rows);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-82",
      "title": "How do you implement role-based access control in Express.js?",
      "content": "Role-based access control (RBAC) in Express.js uses middleware to check user roles before granting access to routes.",
      "code": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nconst checkRole = (role) => (req, res, next) => {\n  const userRole = req.body.role; // Assume role from token\n  if (userRole !== role) return res.status(403).send('Forbidden');\n  next();\n};\n\napp.get('/admin', checkRole('admin'), (req, res) => res.send('Admin access'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-83",
      "title": "How do you handle file streaming in Express.js?",
      "content": "File streaming in Express.js uses streams to efficiently handle large files, such as piping a file stream to the response.",
      "code": "const express = require('express');\nconst fs = require('fs');\nconst app = express();\n\napp.get('/stream', (req, res) => {\n  const stream = fs.createReadStream('large-file.txt');\n  stream.pipe(res);\n});\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-84",
      "title": "How do you implement a middleware for logging response time in Express.js?",
      "content": "A middleware for logging response time in Express.js measures the time taken to process a request and logs it.",
      "code": "const express = require('express');\nconst app = express();\n\napp.use((req, res, next) => {\n  const start = Date.now();\n  res.on('finish', () => {\n    console.log(`Response time: ${Date.now() - start}ms`);\n  });\n  next();\n});\n\napp.get('/', (req, res) => res.send('Hello'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-85",
      "title": "How do you handle internationalization (i18n) in Express.js?",
      "content": "Internationalization in Express.js uses the i18n middleware to manage translations and locale-specific content.",
      "code": "const express = require('express');\nconst i18n = require('i18n');\nconst app = express();\n\ni18n.configure({\n  locales: ['en', 'fr'],\n  directory: __dirname + '/locales'\n});\napp.use(i18n.init);\n\napp.get('/', (req, res) => res.send(req.__('hello')));\n\napp.listen(3000);\n// locales/en.json: {\"hello\": \"Hello\"}\n// locales/fr.json: {\"hello\": \"Bonjour\"}"
    },
    {
      "id": "express-theory-86",
      "title": "How do you handle API documentation in Express.js?",
      "content": "API documentation in Express.js can be handled using Swagger/OpenAPI with swagger-ui-express to generate interactive API docs.",
      "code": "const express = require('express');\nconst swaggerUi = require('swagger-ui-express');\nconst swaggerJsdoc = require('swagger-jsdoc');\nconst app = express();\n\nconst options = {\n  definition: { openapi: '3.0.0', info: { title: 'API', version: '1.0.0' } },\n  apis: ['./routes/*.js']\n};\nconst swaggerSpec = swaggerJsdoc(options);\n\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));\napp.get('/', (req, res) => res.send('API'));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-87",
      "title": "What is the difference between Swagger and Postman for API testing?",
      "content": "- **Swagger**: Generates interactive API documentation, often integrated into the app.\n- **Postman**: A standalone tool for testing APIs, sending requests, and automation.",
      "code": "const express = require('express');\nconst swaggerUi = require('swagger-ui-express');\nconst swaggerJsdoc = require('swagger-jsdoc');\nconst app = express();\n\nconst options = {\n  definition: { openapi: '3.0.0', info: { title: 'API', version: '1.0.0' } },\n  apis: ['./routes/*.js']\n};\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));\n\napp.listen(3000);"
    },
    {
      "id": "express-theory-88",
      "title": "How do you implement a microservices architecture with Express.js?",
      "content": "Express.js in a microservices architecture involves creating separate Express apps for each service, communicating via HTTP, gRPC, or message queues like RabbitMQ.",
      "code": "const express = require('express');\nconst app1 = express();\n\n// Service 1: User Service\napp1.get('/users', (req, res) => res.send('User Service'));\napp1.listen(3000);\n\n// Service 2: Order Service\nconst app2 = express();\napp2.get('/orders', (req, res) => res.send('Order Service'));\napp2.listen(3001);"
    },
    {
      "id": "express-theory-89",
      "title": "What is the difference between monolithic and microservices in Express.js?",
      "content": "- **Monolithic**: Single Express app with all functionality.\n- **Microservices**: Multiple Express apps, each handling a specific function.",
      "code": "const express = require('express');\n\n// Monolithic\nconst app = express();\napp.get('/users', (req, res) => res.send('Users'));\napp.get('/orders', (req, res) => res.send('Orders'));\napp.listen(3000);\n\n// Microservices\nconst app1 = express();\napp1.get('/users', (req, res) => res.send('Users'));\napp1.listen(3001);\nconst app2 = express();\napp2.get('/orders', (req, res) => res.send('Orders'));\napp2.listen(3002);"
    },
    {
      "id": "express-theory-90",
      "title": "How do you use Express.js in a serverless environment?",
      "content": "Express.js in a serverless environment (e.g., AWS Lambda) uses serverless-http to wrap the Express app for compatibility with serverless functions.",
      "code": "const express = require('express');\nconst serverlessHttp = require('serverless-http');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Serverless Express'));\n\nmodule.exports.handler = serverlessHttp(app);\n// serverless.yml:\n// functions:\n//   app:\n//     handler: index.handler\n//     events:\n//       - http: ANY /"
    },
    {
      "id": "express-theory-91",
      "title": "What is the difference between traditional and serverless Express.js apps?",
      "content": "- **Traditional**: Runs continuously on a server, requires manual scaling.\n- **Serverless**: Runs on-demand, auto-scales, pay-per-use.",
      "code": "const express = require('express');\n\n// Traditional\nconst app = express();\napp.get('/', (req, res) => res.send('Traditional'));\napp.listen(3000);\n\n// Serverless\nconst serverlessHttp = require('serverless-http');\nconst app2 = express();\napp2.get('/', (req, res) => res.send('Serverless'));\nmodule.exports.handler = serverlessHttp(app2);"
    },
    {
      "id": "express-theory-92",
      "title": "How do you implement testing in Express.js?",
      "content": "Testing in Express.js uses frameworks like Mocha, Chai, and Supertest to write unit and integration tests for routes and middleware.",
      "code": "const express = require('express');\nconst request = require('supertest');\nconst app = express();\n\napp.get('/test', (req, res) => res.send('Test'));\n\n// test.js (using Mocha, Chai, Supertest)\ndescribe('GET /test', () => {\n  it('should return Test', (done) => {\n    request(app)\n      .get('/test')\n      .expect(200)\n      .expect('Test', done);\n  });\n});\n\napp.listen(3000);"
    }
    ]
}