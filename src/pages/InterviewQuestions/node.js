export const nodequestions = {
  "theory": [
    {
      "id": "node-theory-1",
      "title": "What is Node.js?",
      "content": "Node.js is an open-source, cross-platform runtime environment for executing JavaScript code on the server side. Built on Chrome's V8 JavaScript engine, it allows developers to build scalable network applications using JavaScript, leveraging an event-driven, non-blocking I/O model.",
      "code": "// A simple Node.js server\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, Node.js!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
    },
    {
      "id": "node-theory-2",
      "title": "What is the V8 engine in Node.js?",
      "content": "The V8 engine is an open-source JavaScript engine developed by Google, used in Chrome and Node.js. It compiles JavaScript directly to native machine code, enabling fast execution. In Node.js, V8 provides the runtime environment for executing JavaScript outside the browser.",
      "code": "// Node.js uses V8 to execute JavaScript\nconsole.log('V8 version:', process.versions.v8);\n\n// Example of JavaScript execution\nconst add = (a, b) => a + b;\nconsole.log(add(2, 3)); // 5"
    },
    {
      "id": "node-theory-3",
      "title": "What is the event-driven architecture in Node.js?",
      "content": "Node.js uses an event-driven architecture where an event loop handles asynchronous operations. Events are emitted (e.g., when a request arrives), and event handlers process them. This model makes Node.js highly efficient for I/O-heavy tasks like web servers.",
      "code": "const EventEmitter = require('events');\n\nconst myEmitter = new EventEmitter();\n\nmyEmitter.on('greet', () => {\n  console.log('Hello, Event!');\n});\n\nmyEmitter.emit('greet');"
    },
    {
      "id": "node-theory-4",
      "title": "What is the event loop in Node.js?",
      "content": "The event loop is a core concept in Node.js that manages asynchronous operations. It continuously checks the event queue for tasks (e.g., I/O operations, timers) and executes their callbacks in a single-threaded, non-blocking manner, ensuring efficient handling of concurrency.",
      "code": "// Demonstrating the event loop with setTimeout\nconsole.log('Start');\n\nsetTimeout(() => {\n  console.log('Timer callback');\n}, 0);\n\nconsole.log('End');\n// Output: Start -> End -> Timer callback"
    },
    {
      "id": "node-theory-5",
      "title": "What is non-blocking I/O in Node.js?",
      "content": "Non-blocking I/O (or asynchronous I/O) in Node.js allows operations like reading files or making HTTP requests to proceed without blocking the main thread. This enables Node.js to handle many requests concurrently, making it ideal for scalable applications.",
      "code": "const fs = require('fs');\n\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log('File content:', data);\n});\n\nconsole.log('Reading file...');\n// Reading file... (non-blocking, continues immediately)"
    },
    {
      "id": "node-theory-6",
      "title": "What is the difference between blocking and non-blocking in Node.js?",
      "content": "- Blocking (synchronous): Operations block the main thread until complete.\n- Non-blocking (asynchronous): Operations run in the background, and a callback is executed when they finish, allowing the main thread to continue.",
      "code": "const fs = require('fs');\n\n// Blocking\nconst dataSync = fs.readFileSync('example.txt', 'utf8');\nconsole.log('Sync:', dataSync);\n\n// Non-blocking\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  console.log('Async:', data);\n});"
    },
    {
      "id": "node-theory-7",
      "title": "What is the role of the package.json file in Node.js?",
      "content": "The package.json file is the manifest for a Node.js project. It contains metadata like the project name, version, dependencies, scripts, and author information. It helps manage dependencies and configure the project.",
      "code": "{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"description\": \"A Node.js app\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"start\": \"node index.js\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.17.1\"\n  }\n}"
    },
    {
      "id": "node-theory-8",
      "title": "What is npm in Node.js?",
      "content": "npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, manage, and share JavaScript packages (libraries and dependencies) for Node.js projects.",
      "code": "// Installing a package using npm\n// Run in terminal: npm install express\n\n// Using the installed package\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Hello, npm!'));\napp.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "node-theory-9",
      "title": "What are Node.js modules?",
      "content": "Node.js modules are reusable blocks of code encapsulated in separate files. Node.js uses the CommonJS module system, where modules are imported using require() and exported using module.exports or exports.",
      "code": "// myModule.js\nmodule.exports = {\n  sayHello: () => console.log('Hello from module!')\n};\n\n// index.js\nconst myModule = require('./myModule');\nmyModule.sayHello(); // Hello from module!"
    },
    {
      "id": "node-theory-10",
      "title": "What is the difference between module.exports and exports in Node.js?",
      "content": "- module.exports: The actual object exported by a module.\n- exports: A shorthand reference to module.exports. However, assigning directly to exports breaks the reference, so module.exports is preferred for consistency.",
      "code": "// Using module.exports\n// myModule.js\nmodule.exports = function greet() {\n  console.log('Hello!');\n};\n\n// Using exports (shorthand)\n// myModule.js\nexports.greet = () => console.log('Hello!');\n\n// index.js\nconst greet = require('./myModule');\ngreet(); // Hello!"
    },
    {
      "id": "node-theory-11",
      "title": "What are the core modules in Node.js?",
      "content": "Core modules in Node.js are built-in modules that provide essential functionality, such as:\n- fs: File system operations.\n- http: HTTP server and client.\n- path: File path utilities.\n- os: Operating system information.\nThese modules don’t require installation.",
      "code": "const fs = require('fs');\nconst path = require('path');\n\nconsole.log('OS:', require('os').platform());\nconsole.log('Path:', path.join(__dirname, 'file.txt'));\nfs.writeFileSync('example.txt', 'Hello, Core Modules!');"
    },
    {
      "id": "node-theory-12",
      "title": "What is the fs module in Node.js?",
      "content": "The fs (File System) module provides APIs to interact with the file system. It includes methods for reading, writing, updating, and deleting files, both synchronously and asynchronously.",
      "code": "const fs = require('fs');\n\n// Write to a file\nfs.writeFile('example.txt', 'Hello, fs!', (err) => {\n  if (err) throw err;\n  console.log('File written');\n});\n\n// Read from a file\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log('File content:', data);\n});"
    },
    {
      "id": "node-theory-13",
      "title": "What is the path module in Node.js?",
      "content": "The path module provides utilities for working with file and directory paths. It helps handle path separators, resolve relative paths, and extract file names or extensions in a platform-independent way.",
      "code": "const path = require('path');\n\n// Join paths\nconst filePath = path.join(__dirname, 'folder', 'file.txt');\nconsole.log('Joined Path:', filePath);\n\n// Get file extension\nconst ext = path.extname('example.txt');\nconsole.log('Extension:', ext); // .txt"
    },
    {
      "id": "node-theory-14",
      "title": "What is the http module in Node.js?",
      "content": "The http module allows Node.js to create HTTP servers and make HTTP requests. It provides methods to handle requests, responses, and server setup, forming the foundation for web applications.",
      "code": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, http module!');\n});\n\nserver.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "node-theory-15",
      "title": "What is Express in Node.js?",
      "content": "Express is a minimal and flexible web application framework for Node.js. It simplifies the creation of HTTP servers, routing, middleware integration, and API development, making it a popular choice for building web apps and APIs.",
      "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello, Express!');\n});\n\napp.listen(3000, () => console.log('Express server on port 3000'));"
    },
    {
      "id": "node-theory-16",
      "title": "What is middleware in Express?",
      "content": "Middleware in Express are functions that have access to the request (req), response (res), and the next middleware function in the application’s request-response cycle. They can modify req/res, end the cycle, or pass control to the next middleware.",
      "code": "const express = require('express');\nconst app = express();\n\n// Middleware\napp.use((req, res, next) => {\n  console.log('Request URL:', req.url);\n  next();\n});\n\napp.get('/', (req, res) => res.send('Hello!'));\napp.listen(3000, () => console.log('Server on port 3000'));"
    },
    {
      "id": "node-theory-17",
      "title": "What is the difference between process.nextTick and setImmediate?",
      "content": "- process.nextTick: Executes its callback immediately after the current execution phase, before the event loop continues.\n- setImmediate: Queues its callback to run in the next iteration of the event loop, after I/O events.",
      "code": "console.log('Start');\n\nprocess.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('setImmediate'));\n\nconsole.log('End');\n// Output: Start -> End -> nextTick -> setImmediate"
    },
    {
      "id": "node-theory-18",
      "title": "What are streams in Node.js?",
      "content": "Streams in Node.js are objects that allow you to read or write data continuously. They are useful for handling large datasets (e.g., files, network requests) efficiently by processing data in chunks rather than loading it all into memory.",
      "code": "const fs = require('fs');\n\n// Reading a file using a readable stream\nconst readStream = fs.createReadStream('largeFile.txt', 'utf8');\n\nreadStream.on('data', (chunk) => {\n  console.log('Chunk received:', chunk);\n});\n\nreadStream.on('end', () => console.log('Stream ended'));"
    },
    {
      "id": "node-theory-19",
      "title": "What are the types of streams in Node.js?",
      "content": "Node.js streams come in four types:\n- Readable: For reading data (e.g., fs.createReadStream).\n- Writable: For writing data (e.g., fs.createWriteStream).\n- Duplex: For both reading and writing (e.g., TCP sockets).\n- Transform: A type of duplex stream that modifies data (e.g., zlib.createGzip).",
      "code": "const fs = require('fs');\n\n// Readable stream\nconst readStream = fs.createReadStream('input.txt');\n\n// Writable stream\nconst writeStream = fs.createWriteStream('output.txt');\n\n// Pipe the readable stream to the writable stream\nreadStream.pipe(writeStream);\nconsole.log('File copied using streams');"
    },
    {
      "id": "node-theory-20",
      "title": "What is the Buffer class in Node.js?",
      "content": "The Buffer class in Node.js is used to handle binary data directly. It’s a global class that provides a way to work with raw data, often used with streams, file operations, or network protocols.",
      "code": "// Creating a Buffer\nconst buffer = Buffer.from('Hello, Node.js!', 'utf8');\n\nconsole.log('Buffer:', buffer);\nconsole.log('Buffer to string:', buffer.toString());\n\n// Writing to a Buffer\nconst buf = Buffer.alloc(5);\nbuf.write('Hello');\nconsole.log('Written Buffer:', buf.toString());"
    },
    {
      "id": "node-theory-21",
      "title": "What is the difference between Buffer and Stream in Node.js?",
      "content": "- Buffer: A temporary storage for binary data, holding the entire dataset in memory.\n- Stream: A way to process data in chunks, ideal for large datasets that don’t fit in memory.",
      "code": "const fs = require('fs');\n\n// Buffer: Load entire file into memory\nconst data = fs.readFileSync('file.txt');\nconst buffer = Buffer.from(data);\nconsole.log('Buffer:', buffer.toString());\n\n// Stream: Process file in chunks\nconst stream = fs.createReadStream('file.txt');\nstream.on('data', (chunk) => console.log('Chunk:', chunk.toString()));"
    },
    {
      "id": "node-theory-22",
      "title": "What is the global object in Node.js?",
      "content": "The global object in Node.js provides global variables and functions available throughout the application, such as console, process, setTimeout, and __dirname. Unlike the browser’s window object, global is specific to Node.js.",
      "code": "// Accessing global objects\nconsole.log('Current directory:', __dirname);\nconsole.log('Current file:', __filename);\n\n// Using global functions\nglobal.setTimeout(() => {\n  console.log('Hello from global!');\n}, 1000);"
    },
    {
      "id": "node-theory-23",
      "title": "What is the process object in Node.js?",
      "content": "The process object is a global object in Node.js that provides information and control over the current Node.js process. It includes properties like process.env (environment variables) and methods like process.exit().",
      "code": "// Accessing process information\nconsole.log('Process ID:', process.pid);\nconsole.log('Node version:', process.version);\n\n// Environment variables\nconsole.log('Environment:', process.env.NODE_ENV);\n\n// Exiting the process\n// process.exit(0);"
    },
    {
      "id": "node-theory-24",
      "title": "What are environment variables in Node.js?",
      "content": "Environment variables in Node.js are key-value pairs defined outside the application, accessible via process.env. They are used to configure the app’s behavior (e.g., setting the port, database URL, or environment mode like development/production).",
      "code": "// Accessing environment variables\nconsole.log('Port:', process.env.PORT || 3000);\n\n// Setting an environment variable (for the current process)\nprocess.env.NODE_ENV = 'development';\nconsole.log('Environment:', process.env.NODE_ENV);\n\n// Using in an app\nconst port = process.env.PORT || 3000;\nconsole.log(`Server running on port ${port}`);"
    },
    {
      "id": "node-theory-25",
      "title": "What is the difference between process.env and dotenv in Node.js?",
      "content": "- process.env: Built-in way to access environment variables.\n- dotenv: A third-party package that loads environment variables from a .env file into process.env, making it easier to manage variables during development.",
      "code": "require('dotenv').config();\n\n// Accessing variables from .env file\n// .env: API_KEY=12345\nconsole.log('API Key:', process.env.API_KEY);\n\n// Direct process.env usage\nconsole.log('Port:', process.env.PORT || 3000);"
    },
    {
      "id": "node-theory-26",
      "title": "What is the os module in Node.js?",
      "content": "The os module provides operating system-related utility methods and properties, such as getting the platform, CPU information, memory usage, and hostname.",
      "code": "const os = require('os');\n\nconsole.log('Platform:', os.platform());\nconsole.log('Architecture:', os.arch());\nconsole.log('Free Memory:', os.freemem() / (1024 * 1024), 'MB');\nconsole.log('Hostname:', os.hostname());"
    },
    {
      "id": "node-theory-27",
      "title": "What is the difference between setTimeout and setInterval in Node.js?",
      "content": "- setTimeout: Executes a callback once after a specified delay.\n- setInterval: Repeatedly executes a callback at a specified interval until cleared.",
      "code": "// setTimeout: Runs once after 1 second\nsetTimeout(() => console.log('Timeout!'), 1000);\n\n// setInterval: Runs every 1 second\nconst interval = setInterval(() => console.log('Interval!'), 1000);\n\n// Stop after 3 seconds\nsetTimeout(() => clearInterval(interval), 3000);"
    },
    {
      "id": "node-theory-28",
      "title": "What is the cluster module in Node.js?",
      "content": "The cluster module allows Node.js to create child processes (workers) to take advantage of multi-core systems. It enables a single Node.js process to fork multiple workers that share the same server port, improving performance.",
      "code": "const cluster = require('cluster');\nconst http = require('http');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} is running`);\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n} else {\n  http.createServer((req, res) => {\n    res.writeHead(200);\n    res.end('Hello from worker!');\n  }).listen(3000);\n  console.log(`Worker ${process.pid} started`);\n}"
    },
    {
      "id": "node-theory-29",
      "title": "What is the difference between fork and spawn in Node.js?",
      "content": "- fork: A special case of spawn that creates a new Node.js process, communicating via IPC (Inter-Process Communication).\n- spawn: Creates a new process to run a command, with streaming I/O but no IPC by default.",
      "code": "const { fork, spawn } = require('child_process');\n\n// fork: Run a Node.js module\nconst child = fork('child.js');\nchild.on('message', (msg) => console.log('Message from child:', msg));\n\n// spawn: Run a command\nconst ls = spawn('ls', ['-lh']);\nls.stdout.on('data', (data) => console.log('Output:', data.toString()));"
    },
    {
      "id": "node-theory-30",
      "title": "What is the child_process module in Node.js?",
      "content": "The child_process module enables Node.js to spawn subprocesses, execute shell commands, and communicate with them. It provides methods like spawn, fork, exec, and execFile for creating and managing child processes.",
      "code": "const { exec } = require('child_process');\n\n// Execute a shell command\nexec('ls -lh', (err, stdout, stderr) => {\n  if (err) {\n    console.error('Error:', stderr);\n    return;\n  }\n  console.log('Output:', stdout);\n});"
    },
    {
      "id": "node-theory-31",
      "title": "What is the difference between exec and execFile in child_process?",
      "content": "- exec: Runs a command in a shell, buffering the output (good for small outputs).\n- execFile: Runs an executable file directly, without a shell, more efficient for larger outputs.",
      "code": "const { exec, execFile } = require('child_process');\n\n// exec: Using shell\nexec('ls -lh', (err, stdout) => console.log(stdout));\n\n// execFile: Direct execution\nexecFile('ls', ['-lh'], (err, stdout) => console.log(stdout));"
    },
    {
      "id": "node-theory-32",
      "title": "What is the util module in Node.js?",
      "content": "The util module provides utility functions for Node.js developers, such as util.format (for string formatting), util.promisify (for converting callbacks to promises), and util.inspect (for debugging objects).",
      "code": "const util = require('util');\n\n// Formatting a string\nconst message = util.format('Hello, %s! You are %d years old.', 'Alice', 25);\nconsole.log(message);\n\n// Promisify a callback-based function\nconst setTimeoutPromise = util.promisify(setTimeout);\n(async () => {\n  await setTimeoutPromise(1000);\n  console.log('1 second later');\n})();"
    },
    {
      "id": "node-theory-33",
      "title": "What is util.promisify in Node.js?",
      "content": "util.promisify converts a callback-based function into a promise-based one. It’s useful for modernizing older APIs to use async/await syntax, improving code readability and error handling.",
      "code": "const util = require('util');\nconst fs = require('fs');\n\n// Promisify fs.readFile\nconst readFilePromise = util.promisify(fs.readFile);\n\n(async () => {\n  try {\n    const data = await readFilePromise('example.txt', 'utf8');\n    console.log('File content:', data);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n})();"
    },
    {
      "id": "node-theory-34",
      "title": "What is the difference between callbacks and promises in Node.js?",
      "content": "- Callbacks: Functions passed as arguments to handle asynchronous results, can lead to callback hell.\n- Promises: Objects representing the eventual completion (or failure) of an async operation, enabling chaining and better error handling.",
      "code": "// Callback\nconst fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log('Callback:', data);\n});\n\n// Promise\nconst readFilePromise = util.promisify(fs.readFile);\nreadFilePromise('file.txt', 'utf8')\n  .then(data => console.log('Promise:', data))\n  .catch(err => console.error(err));"
    },
    {
      "id": "node-theory-35",
      "title": "What is async/await in Node.js?",
      "content": "Async/await is syntactic sugar over promises in Node.js (introduced in ES8). It allows writing asynchronous code that looks synchronous, using async functions (which return promises) and await to pause execution until a promise resolves.",
      "code": "const fs = require('fs').promises;\n\n// Using async/await\n(async () => {\n  try {\n    const data = await fs.readFile('example.txt', 'utf8');\n    console.log('File content:', data);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n})();"
    },
    {
      "id": "node-theory-36",
      "title": "What is the difference between promises and async/await?",
      "content": "- Promises: Use .then() and .catch() for handling asynchronous results, more verbose.\n- Async/await: Built on promises, allows writing cleaner, synchronous-looking code with try/catch for error handling.",
      "code": "const fs = require('fs').promises;\n\n// Promise\nfs.readFile('file.txt', 'utf8')\n  .then(data => console.log('Promise:', data))\n  .catch(err => console.error(err));\n\n// Async/await\n(async () => {\n  try {\n    const data = await fs.readFile('file.txt', 'utf8');\n    console.log('Async/await:', data);\n  } catch (err) {\n    console.error(err);\n  }\n})();"
    },
    {
      "id": "node-theory-37",
      "title": "What is the dns module in Node.js?",
      "content": "The dns module provides methods for performing DNS (Domain Name System) lookups and name resolution. It can resolve domain names to IP addresses, perform reverse lookups, and more.",
      "code": "const dns = require('dns');\n\n// Resolve a domain name to IP addresses\ndns.resolve4('example.com', (err, addresses) => {\n  if (err) throw err;\n  console.log('Addresses:', addresses);\n});\n\n// Reverse lookup (IP to domain)\ndns.reverse('8.8.8.8', (err, hostnames) => {\n  if (err) throw err;\n  console.log('Hostnames:', hostnames);\n});"
    },
    {
      "id": "node-theory-38",
      "title": "What is the net module in Node.js?",
      "content": "The net module provides an API for creating TCP servers and clients. It enables low-level networking, allowing you to build custom protocols or communicate over sockets.",
      "code": "const net = require('net');\n\n// TCP Server\nconst server = net.createServer((socket) => {\n  socket.write('Hello, client!');\n  socket.end();\n});\n\nserver.listen(3000, () => console.log('TCP server on port 3000'));\n\n// TCP Client\nconst client = net.createConnection({ port: 3000 }, () => {\n  console.log('Connected to server');\n});\nclient.on('data', (data) => console.log('Received:', data.toString()));\nclient.on('end', () => console.log('Disconnected'));"
    },
    {
      "id": "node-theory-39",
      "title": "What is the difference between http and net modules in Node.js?",
      "content": "- http: High-level module for HTTP servers and clients, handling requests and responses.\n- net: Low-level module for TCP sockets, providing raw networking capabilities.",
      "code": "// http module\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.end('Hello, HTTP!');\n}).listen(3000);\n\n// net module\nconst net = require('net');\nnet.createServer((socket) => {\n  socket.write('Hello, TCP!');\n  socket.end();\n}).listen(3001);"
    },
    {
      "id": "node-theory-40",
      "title": "What is the zlib module in Node.js?",
      "content": "The zlib module provides compression and decompression functionality using Gzip, Deflate, and other algorithms. It’s useful for compressing data in HTTP responses, file operations, or streams.",
      "code": "const zlib = require('zlib');\nconst fs = require('fs');\n\n// Compress a file\nconst input = fs.createReadStream('input.txt');\nconst output = fs.createWriteStream('input.txt.gz');\ninput.pipe(zlib.createGzip()).pipe(output);\n\n// Decompress a file\nconst compressed = fs.createReadStream('input.txt.gz');\nconst decompressed = fs.createWriteStream('decompressed.txt');\ncompressed.pipe(zlib.createGunzip()).pipe(decompressed);"
    },
    {
      "id": "node-theory-41",
      "title": "What is the crypto module in Node.js?",
      "content": "The crypto module provides cryptographic functionality, including hashing, encryption, decryption, and signing. It supports algorithms like SHA, MD5, AES, and HMAC for secure operations.",
      "code": "const crypto = require('crypto');\n\n// Hashing\nconst hash = crypto.createHash('sha256');\nhash.update('Hello, Node.js!');\nconsole.log('Hash:', hash.digest('hex'));\n\n// HMAC\nconst hmac = crypto.createHmac('sha256', 'secret');\nhmac.update('Hello, Node.js!');\nconsole.log('HMAC:', hmac.digest('hex'));"
    },
    {
      "id": "node-theory-42",
      "title": "What is the difference between hashing and encryption in Node.js?",
      "content": "- Hashing: One-way process to generate a fixed-length string (e.g., SHA256), used for integrity checks.\n- Encryption: Two-way process to encode data (e.g., AES), reversible with the correct key.",
      "code": "const crypto = require('crypto');\n\n// Hashing\nconst hash = crypto.createHash('sha256').update('data').digest('hex');\nconsole.log('Hash:', hash);\n\n// Encryption\nconst cipher = crypto.createCipher('aes-256-cbc', 'key');\nlet encrypted = cipher.update('data', 'utf8', 'hex');\nencrypted += cipher.final('hex');\nconsole.log('Encrypted:', encrypted);"
    },
    {
      "id": "node-theory-43",
      "title": "What is the events module in Node.js?",
      "content": "The events module provides the EventEmitter class, which is the foundation for event-driven programming in Node.js. It allows objects to emit and listen for events, enabling asynchronous communication.",
      "code": "const EventEmitter = require('events');\n\nconst emitter = new EventEmitter();\n\nemitter.on('message', (msg) => console.log('Message:', msg));\nemitter.emit('message', 'Hello, EventEmitter!');\n\n// Multiple listeners\nemitter.on('event', () => console.log('Listener 1'));\nemitter.on('event', () => console.log('Listener 2'));\nemitter.emit('event');"
    },
    {
      "id": "node-theory-44",
      "title": "What is the difference between on and once in EventEmitter?",
      "content": "- on: Adds a listener that will be called every time the event is emitted.\n- once: Adds a listener that will be called only once and then removed.",
      "code": "const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\n// on: Called every time\nemitter.on('event', () => console.log('on: Event occurred'));\n\n// once: Called only once\nemitter.once('event', () => console.log('once: Event occurred'));\n\nemitter.emit('event');\nemitter.emit('event');\n// Output: both 'on' and 'once' for the first emit, only 'on' for the second"
    },
    {
      "id": "node-theory-45",
      "title": "What is the REPL in Node.js?",
      "content": "REPL (Read-Eval-Print-Loop) is an interactive shell in Node.js that allows you to execute JavaScript code line by line. It’s useful for testing, debugging, and learning Node.js APIs.",
      "code": "// Start REPL by running 'node' in the terminal\n// Example REPL session:\n> const a = 5;\n> a * 2\n10\n> console.log('Hello, REPL!');\nHello, REPL!\nundefined\n> .exit"
    },
    {
      "id": "node-theory-46",
      "title": "What is the difference between Node.js and browser JavaScript?",
      "content": "- Node.js: Runs JavaScript on the server, with access to file systems, networking, and OS APIs.\n- Browser JavaScript: Runs in the browser, with access to DOM, window, and browser-specific APIs.",
      "code": "// Node.js: File system access\nconst fs = require('fs');\nfs.writeFileSync('file.txt', 'Hello, Node.js!');\n\n// Browser: DOM access (not available in Node.js)\n// document.body.innerHTML = 'Hello, Browser!';"
    },
    {
      "id": "node-theory-47",
      "title": "What are globals in Node.js?",
      "content": "Globals in Node.js are variables and functions available throughout the application without requiring imports, such as process, console, __dirname, __filename, and module.",
      "code": "console.log('Directory:', __dirname);\nconsole.log('File:', __filename);\nconsole.log('Process ID:', process.pid);\n\n// Global setTimeout\nsetTimeout(() => console.log('Global timeout'), 1000);"
    },
    {
      "id": "node-theory-48",
      "title": "What is the difference between __dirname and process.cwd()?",
      "content": "- __dirname: The directory name of the current module (file).\n- process.cwd(): The current working directory of the Node.js process (where the process was started).",
      "code": "console.log('__dirname:', __dirname);\n// /path/to/current/file\n\nconsole.log('process.cwd():', process.cwd());\n// /path/where/node/was/run\n\n// Example usage\nconst path = require('path');\nconst filePath = path.join(__dirname, 'file.txt');\nconsole.log('File path:', filePath);"
    },
    {
      "id": "node-theory-49",
      "title": "What is the vm module in Node.js?",
      "content": "The vm (Virtual Machine) module provides APIs to execute JavaScript code in a sandboxed environment. It allows running code in a separate context, isolating it from the global scope.",
      "code": "const vm = require('vm');\n\n// Run code in a new context\nconst script = new vm.Script('globalVar = 42;');\nconst context = vm.createContext({ globalVar: 0 });\n\nscript.runInContext(context);\nconsole.log('Context globalVar:', context.globalVar); // 42\nconsole.log('Global globalVar:', global.globalVar); // undefined"
    },
    {
      "id": "node-theory-50",
      "title": "What is the difference between CommonJS and ES Modules in Node.js?",
      "content": "- CommonJS: The default module system in Node.js, using require() and module.exports.\n- ES Modules: The ECMAScript standard, using import/export syntax, supported in Node.js with the .mjs extension or \"type\": \"module\" in package.json.",
      "code": "// CommonJS\n// math.js\nmodule.exports.add = (a, b) => a + b;\n// index.js\nconst { add } = require('./math');\nconsole.log(add(2, 3));\n\n// ES Modules (in package.json: \"type\": \"module\")\n// math.mjs\nexport const add = (a, b) => a + b;\n// index.mjs\nimport { add } from './math.mjs';\nconsole.log(add(2, 3));"
    },
    {
      "id": "node-theory-51",
      "title": "What is the worker_threads module in Node.js?",
      "content": "The worker_threads module allows Node.js to run JavaScript in parallel threads, bypassing the single-threaded event loop for CPU-intensive tasks. Each worker runs in its own thread with its own memory.",
      "code": "const { Worker, isMainThread, parentPort } = require('worker_threads');\n\nif (isMainThread) {\n  const worker = new Worker(__filename);\n  worker.on('message', (msg) => console.log('Worker says:', msg));\n} else {\n  // Worker thread\n  parentPort.postMessage('Hello from worker!');\n}"
    },
    {
      "id": "node-theory-52",
      "title": "What is the difference between cluster and worker_threads?",
      "content": "- cluster: Forks multiple Node.js processes (workers) to handle load, sharing the same port.\n- worker_threads: Runs multiple threads within a single Node.js process, each with isolated memory for CPU-intensive tasks.",
      "code": "// cluster\nconst cluster = require('cluster');\nif (cluster.isMaster) {\n  cluster.fork();\n} else {\n  console.log('Worker running');\n}\n\n// worker_threads\nconst { Worker, isMainThread } = require('worker_threads');\nif (isMainThread) {\n  new Worker(__filename);\n} else {\n  console.log('Thread running');\n}"
    },
    {
      "id": "node-theory-53",
      "title": "What is the url module in Node.js?",
      "content": "The url module provides utilities for parsing and formatting URLs. It can break down a URL into components (e.g., protocol, host, query) or construct URLs from components.",
      "code": "const url = require('url');\n\n// Parse a URL\nconst myUrl = url.parse('https://example.com/path?name=John');\nconsole.log('Host:', myUrl.host);\nconsole.log('Query:', myUrl.query);\n\n// Format a URL\nconst formatted = url.format({\n  protocol: 'https',\n  host: 'example.com',\n  pathname: '/path',\n  query: { name: 'John' }\n});\nconsole.log('Formatted URL:', formatted);"
    },
    {
      "id": "node-theory-54",
      "title": "What is the querystring module in Node.js?",
      "content": "The querystring module provides utilities for parsing and formatting URL query strings. It can convert a query string into an object and vice versa.",
      "code": "const querystring = require('querystring');\n\n// Parse a query string\nconst query = querystring.parse('name=John&age=25');\nconsole.log('Parsed:', query); // { name: 'John', age: '25' }\n\n// Stringify an object\nconst str = querystring.stringify({ name: 'John', age: 25 });\nconsole.log('Stringified:', str); // name=John&age=25"
    },
    {
      "id": "node-theory-55",
      "title": "What is the difference between url and querystring modules?",
      "content": "- url: Handles the entire URL, including protocol, host, path, and query string.\n- querystring: Specifically handles the query string portion of a URL.",
      "code": "const url = require('url');\nconst querystring = require('querystring');\n\n// url module\nconst myUrl = url.parse('https://example.com/?name=John');\nconsole.log('Query:', myUrl.query);\n\n// querystring module\nconst query = querystring.parse(myUrl.query);\nconsole.log('Parsed Query:', query);"
    },
    {
      "id": "node-theory-56",
      "title": "What is the tls module in Node.js?",
      "content": "The tls (Transport Layer Security) module provides an implementation of the TLS/SSL protocols, enabling secure communication over the network. It’s used for creating secure servers and clients.",
      "code": "const tls = require('tls');\nconst fs = require('fs');\n\n// TLS server\nconst options = {\n  key: fs.readFileSync('server-key.pem'),\n  cert: fs.readFileSync('server-cert.pem')\n};\n\nconst server = tls.createServer(options, (socket) => {\n  socket.write('Hello, TLS!');\n  socket.end();\n});\n\nserver.listen(3000, () => console.log('TLS server on port 3000'));"
    },
    {
      "id": "node-theory-57",
      "title": "What is the difference between http and https modules?",
      "content": "- http: Handles HTTP requests, unsecured communication.\n- https: Handles HTTPS requests, using TLS/SSL for secure communication.",
      "code": "// http\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// https\nconst https = require('https');\nconst fs = require('fs');\nhttps.createServer({\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n}, (req, res) => res.end('Hello')).listen(3001);"
    },
    {
      "id": "node-theory-58",
      "title": "What is the readline module in Node.js?",
      "content": "The readline module provides an interface for reading data from a readable stream (like process.stdin) one line at a time. It’s useful for creating interactive CLI applications.",
      "code": "const readline = require('readline');\n\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nrl.question('What is your name? ', (answer) => {\n  console.log(`Hello, ${answer}!`);\n  rl.close();\n});"
    },
    {
      "id": "node-theory-59",
      "title": "What is the tty module in Node.js?",
      "content": "The tty module provides classes to interact with terminal (TTY) devices, such as checking if a stream is a TTY or getting terminal dimensions. It’s useful for building CLI tools.",
      "code": "const tty = require('tty');\n\n// Check if stdout is a TTY\nif (tty.isatty(process.stdout.fd)) {\n  console.log('This is a TTY');\n}\n\n// Get terminal dimensions\nconst [width, height] = process.stdout.getWindowSize();\nconsole.log('Terminal size:', width, 'x', height);"
    },
    {
      "id": "node-theory-60",
      "title": "What is the v8 module in Node.js?",
      "content": "The v8 module provides access to V8 engine-specific functionality, such as getting heap statistics or forcing garbage collection. It’s useful for debugging and performance optimization.",
      "code": "const v8 = require('v8');\n\n// Get heap statistics\nconsole.log('Heap Stats:', v8.getHeapStatistics());\n\n// Force garbage collection (if available)\nif (global.gc) {\n  global.gc();\n  console.log('Garbage collection triggered');\n} else {\n  console.log('Run with --expose-gc to enable GC');\n}"
    },
    {
      "id": "node-theory-61",
      "title": "What is the difference between Node.js and Deno?",
      "content": "- Node.js: Uses CommonJS by default, npm for packages, and has a mature ecosystem.\n- Deno: Uses ES Modules, built-in TypeScript support, and a standard library, focusing on security (permissions).",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// Deno (equivalent)\n// deno run --allow-net server.ts\nimport { serve } from 'https://deno.land/std/http/server.ts';\nfor await (const req of serve({ port: 3000 })) {\n  req.respond({ body: 'Hello' });\n}"
    },
    {
      "id": "node-theory-62",
      "title": "What is the inspector module in Node.js?",
      "content": "The inspector module provides an API for interacting with the V8 inspector, enabling debugging and profiling of Node.js applications. It’s used by tools like Chrome DevTools.",
      "code": "const inspector = require('inspector');\n\n// Start an inspector session\ninspector.open(9229, 'localhost', true);\nconsole.log('Inspector opened. Connect with Chrome DevTools at localhost:9229');\n\n// Run with: node --inspect server.js\nsetTimeout(() => {\n  console.log('Debug me!');\n}, 5000);"
    },
    {
      "id": "node-theory-63",
      "title": "What is the difference between npm and Yarn?",
      "content": "- npm: Default package manager for Node.js, widely used, focuses on simplicity.\n- Yarn: Alternative package manager, faster due to parallel downloads, with a lockfile for consistent installs.",
      "code": "// npm\nnpm install express\n\n// Yarn\nyarn add express\n\n// Example package.json\n{\n  \"dependencies\": {\n    \"express\": \"^4.17.1\"\n  }\n}"
    },
    {
      "id": "node-theory-64",
      "title": "What is the difference between dependencies and devDependencies in package.json?",
      "content": "- dependencies: Packages required for the application to run in production.\n- devDependencies: Packages needed only during development (e.g., testing, build tools).",
      "code": "{\n  \"dependencies\": {\n    \"express\": \"^4.17.1\"\n  },\n  \"devDependencies\": {\n    \"jest\": \"^27.0.0\"\n  }\n}\n\n// Install production dependencies only\n// npm install --production"
    },
    {
      "id": "node-theory-65",
      "title": "What is the nvm tool in Node.js?",
      "content": "nvm (Node Version Manager) is a tool for managing multiple versions of Node.js on a single machine. It allows you to install, switch, and manage different Node.js versions easily.",
      "code": "// Install nvm (example commands, not run in Node.js)\n// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\n// Use nvm to install a Node.js version\n// nvm install 16\n// nvm use 16\n\n// Check Node.js version in Node.js\nconsole.log('Node version:', process.version);"
    },
    {
      "id": "node-theory-66",
      "title": "What is the difference between LTS and Current versions of Node.js?",
      "content": "-Edward LTS (Long Term Support): Stable versions with long-term support, recommended for production.\n- Current: Latest versions with new features, may include experimental APIs.",
      "code": "// Check Node.js version\nconsole.log('Node version:', process.version);\n\n// Example: Using an LTS feature (e.g., stable fs.prom sospechises)\nconst fs = require('fs').promises;\n(async () => {\n  const data = await fs.readFile('file.txt', 'utf8');\n  console.log(data);\n})();"
    },
    {
      "id": "node-theory-67",
      "title": "What is the assert module in Node.js?",
      "content": "The assert module provides a set of assertionazor assertions for testing and debugging. It includes methods like assert.strictEqual() and assert.throws() to verify conditions in code.",
      "code": "const assert = require('assert');\n\n// Basic assertion\nconst value = 42;\nassert.strictEqual(value, 42, 'Value is not 42');\n\n// Testing for errors\nfunction willThrow() {\n  throw new Error('Test error');\n}\nassert.throws(willThrow, /Test error/, 'Function did not throw');"
    },
    {
      "id": "node-theory-68",
      "title": "What is the difference between assert and console.assert?",
      "content": "- assert module: Throws an error if the condition fails, used for testing.\n- console.assert: Logs a message to the console if the condition fails, does not stop execution.",
      "code": "const assert = require('assert');\n\n// assert module\ntry {\n  assert.strictEqual(1, 2, 'Not equal');\n} catch (err) {\n  console.log('Assert failed:', err.message);\n}\n\n// console.assert\nconsole.assert(1 === 2, 'Not equal');\nconsole.log('This still runs');"
    },
    {
      "id": "node-theory-69",
      "title": "What is the difference between Node.js and PHP?",
      "content": "- Node.js: JavaScript runtime for asynchronous, event-driven applications, ideal for real-time apps.\n- PHP: Server-side scripting language, synchronous, commonly used for web development with frameworks like Laravel.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// PHP (equivalent)\n<?php\n  echo 'Hello';\n?>"
    },
    {
      "id": "node-theory-70",
      "title": "What is the difference between Node.js and Python for backend?",
      "content": "- Node.js: Asynchronous, event-driven, great for I/O-heavy apps (e.g., real-time).\n- Python: Synchronous byuno by default, general-purpose, with frameworks like Django for backend.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// Python (Flask)\nfrom flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello'\nif __name__ == '__main__':\n    app.run(port=3000)"
    },
    {
      "id": "node-theory-71",
      "title": "What is the difference between Node.js and Ruby on Rails?",
      "content": "- Node.js: JavaScript runtime, lightweight and flexible for building APIs.\n- Ruby on Rails: Full-stack framework on Ruby, with conventions for rapid development.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Ruby on Rails (config/routes.rb)\nRails.application.routes.draw do\n  get '/', to: 'welcome#index'\nend\n# app/controllers/welcome_controller.rb\nclass WelcomeController < ApplicationController\n  def index\n    render plain: 'Hello'\n  end\nend"
    },
    {
      "id": "node-theory-72",
      "title": "What is the difference between Node.js and Java for backend?",
      "content": "- Node.js: JavaScript, asynchronous, lightweight, great for real-time apps.\n- Java: Strongly typed, synchronous, enterprise-grade with frameworks like Spring.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// Java (Spring Boot)\n@RestController\npublic class HelloController {\n    @GetMapping(\"/\")\n    public String hello() {\n        return \"Hello\";\n    }\n}\n// Run with SpringApplication.run()"
    },
    {
      "id": "node-theory-73",
      "title": "What is the difference between Node.js and Go for backend?",
      "content": "- Node.js: JavaScript, event-driven, great for I/O-bound apps.\n- Go: Compiled, concurrent with goroutines, great for performance and scalability.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// Go\npackage main\nimport \"net/http\"\nfunc main() {\n    http.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n        w.Write([]byte(\"Hello\"))\n    })\n    http.ListenAndServe(\":3000\", nil)\n}"
    },
    {
      "id": "node-theory-74",
      "title": "What is pm2 in Node.js?",
      "content": "PM2 is a process manager for Node.js applications. It provides features like process monitoring, automatic restarts, clustering, and log management, making it easier to manage Node.js apps in production.",
      "code": "// Install PM2\n// npm install -g pm2\n\n// Start a Node.js app with PM2\n// pm2 start app.js\n\n// Monitor processes\n// pm2 list\n\n// Restart on crash\n// pm2 start app.js --watch"
    },
    {
      "id": "node-theory-75",
      "title": "What is the difference between pm2 and nodemon?",
      "content": "- pm2: Production-grade process manager for managing and scaling Node.js apps.\n- nodemon: Development tool that automatically restarts the server on file changes.",
      "code": "// pm2 (production)\n// pm2 start app.js\n\n// nodemon (development)\n// nodemon app.js\n\n// Example app.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);"
    },
    {
      "id": "node-theory-76",
      "title": "What is the difference between Node.js and ASP.NET for backend?",
      "content": "- Node.js: JavaScript, lightweight, great for real-time apps.\n- ASP.NET: C#, Microsoft’s framework, robust for enterprise apps with .NET ecosystem.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// ASP.NET (C#)\n[HttpGet(\"/\")]\npublic IActionResult Hello() {\n    return Ok(\"Hello\");\n}"
    },
    {
      "id": "node-theory-77",
      "title": "What is the difference between Node.js and Django for backend?",
      "content": "- Node.js: JavaScript, asynchronous, great for I/O-heavy apps.\n- Django: Python framework, synchronous, with ORM and admin interface.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Django (views.py)\nfrom django.http import HttpResponse\ndef hello(request):\n    return HttpResponse('Hello')"
    },
    {
      "id": "node-theory-78",
      "title": "What is the difference between Node.js and Flask for backend?",
      "content": "- Node.js: JavaScript, asynchronous, great for real-time apps.\n- Flask: Lightweight Python framework, synchronous, minimalistic.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Flask\nfrom flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello'\napp.run(port=3000)"
    },
    {
      "id": "node-theory-79",
      "title": "What is the difference between Node.js and Spring Boot?",
      "content": "- Node.js: JavaScript, lightweight, great for I/O-bound apps.\n- Spring Boot: Java framework, robust, with dependency injection and enterprise features.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Spring Boot\n@RestController\npublic class HelloController {\n    @GetMapping(\"/\")\n    public String hello() {\n        return \"Hello\";\n    }\n}"
    },
    {
      "id": "node-theory-80",
      "title": "What is the difference between Node.js and Laravel?",
      "content": "- Node.js: JavaScript, asynchronous, great for real-time apps.\n- Laravel: PHP framework, synchronous, with ORM and Blade templating.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Laravel (web.php)\nRoute::get('/', function () {\n    return 'Hello';\n});"
    },
    {
      "id": "node-theory-81",
      "title": "What is the difference between Node.js and Fastify?",
      "content": "- Node.js: Core runtime, requires manual server setup.\n- Fastify: High-performance Node.js framework, similar to Express but faster and more extensible.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// Fastify\nconst fastify = require('fastify')();\nfastify.get('/', async (req, res) => 'Hello');\nfastify.listen(3000);"
    },
    {
      "id": "node-theory-82",
      "title": "What is the difference between Express and Fastify?",
      "content": "- Express: Popular, widely-used Node.js framework, simple but slower for high loads.\n- Fastify: High-performance Node.js framework, faster than Express, with better plugin support.",
      "code": "// Express\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Fastify\nconst fastify = require('fastify')();\nfastify.get('/', async () => 'Hello');\nfastify.listen(3000);"
    },
    {
      "id": "node-theory-83",
      "title": "What is the difference between Express and Koa?",
      "content": "- Express: Older, widely-used, middleware-based, but can be slower.\n- Koa: Modern Node.js framework, uses async/await, lighter and more modular.",
      "code": "// Express\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Koa\nconst Koa = require('koa');\nconst app = new Koa();\napp.use(async (ctx) => {\n    ctx.body = 'Hello';\n});\napp.listen(3000);"
    },
    {
      "id": "node-theory-84",
      "title": "What is the difference between Node.js and Bun?",
      "content": "- Node.js: Mature runtime, uses V8, with a large ecosystem.\n- Bun: Newer runtime, uses JavaScriptCore, faster startup and built-in tools like a bundler.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// Bun (bun run server.js)\nBun.serve({\n    port: 3000,\n    fetch(req) {\n        return new Response('Hello');\n    }\n});"
    },
    {
      "id": "node-theory-85",
      "title": "What is the difference between Node.js and serverless frameworks?",
      "content": "- Node.js: Traditional server runtime, requires manual server management.\n- Serverless Frameworks: Run Node.js code in a serverless environment (e.g., AWS Lambda), auto-scaling, pay-per-use.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Serverless (AWS Lambda)\nexports.handler = async (event) => {\n    return {\n        statusCode: 200,\n        body: 'Hello'\n    };\n};"
    },
    {
      "id": "node-theory-86",
      "title": "What is the difference between Node.js and GraphQL servers?",
      "content": "- Node.js: General-purpose runtime, can be used to build any server.\n- GraphQL Servers: Node.js-based servers using libraries like Apollo Server for GraphQL APIs.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// GraphQL (Apollo Server)\nconst { ApolloServer, gql } = require('apollo-server');\nconst typeDefs = gql`type Query { hello: String }`;\nconst resolvers = { Query: { hello: () => 'Hello' } };\nconst server = new ApolloServer({ typeDefs, resolvers });\nserver.listen(3000);"
    },
    {
      "id": "node-theory-87",
      "title": "What is the difference between REST and GraphQL in Node.js?",
      "content": "- REST: Traditional API approach, multiple endpoints, can over-fetch/under-fetch data.\n- GraphQL: Query-based API, single endpoint, fetch exactly the data needed.",
      "code": "// REST (Express)\nconst express = require('express');\nconst app = express();\napp.get('/hello', (req, res) => res.json({ message: 'Hello' }));\napp.listen(3000);\n\n// GraphQL (Apollo Server)\nconst { ApolloServer, gql } = require('apollo-server');\nconst typeDefs = gql`type Query { hello: String }`;\nconst resolvers = { Query: { hello: () => 'Hello' } };\nconst server = new ApolloServer({ typeDefs, resolvers });\nserver.listen(3000);"
    },
    {
      "id": "node-theory-88",
      "title": "What is the difference between Node.js and WebSocket servers?",
      "content": "- Node.js: General-purpose runtime, can be used for any server type.\n- WebSocket Servers: Node.js-based servers using libraries like ws for real-time, bidirectional communication.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// WebSocket (ws)\nconst WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 3000 });\nwss.on('connection', (ws) => {\n    ws.send('Hello');\n    ws.on('message', (msg) => console.log(msg));\n});"
    },
    {
      "id": "node-theory-89",
      "title": "What is the difference between HTTP and WebSocket in Node.js?",
      "content": "- HTTP: Request-response protocol, stateless, suitable for traditional APIs.\n- WebSocket: Persistent, bidirectional connection, ideal for real-time apps.",
      "code": "// HTTP\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// WebSocket\nconst WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 3001 });\nwss.on('connection', (ws) => ws.send('Hello'));"
    },
    {
      "id": "node-theory-90",
      "title": "What is the difference between Node.js and gRPC servers?",
      "content": "- Node.js: General-purpose runtime, can be used for any server type.\n- gRPC Servers: Node.js-based servers using gRPC for high-performance RPC (Remote Procedure Call) communication.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// gRPC\nconst grpc = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\nconst definition = protoLoader.loadSync('hello.proto');\nconst helloProto = grpc.loadPackageDefinition(definition).hello;\nconst server = new grpc.Server();\nserver.addService(helloProto.HelloService.service, {\n    SayHello: (call, callback) => callback(null, { message: 'Hello' })\n});\nserver.bindAsync('0.0.0.0:3000', grpc.ServerCredentials.createInsecure(), () => server.start());"
    },
    {
      "id": "node-theory-91",
      "title": "What is the difference between REST and gRPC in Node.js?",
      "content": "- REST: HTTP-based, human-readable, suitable for web APIs.\n- gRPC: Protocol Buffers-based, high-performance, suitable for microservices.",
      "code": "// REST\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.json({ message: 'Hello' }));\napp.listen(3000);\n\n// gRPC\nconst grpc = require('@grpc/grpc-js');\nconst server = new grpc.Server();\nserver.addService(helloProto.HelloService.service, {\n    SayHello: (call, callback) => callback(null, { message: 'Hello' })\n});\nserver.bindAsync('0.0.0.0:3000', grpc.ServerCredentials.createInsecure(), () => server.start());"
    },
    {
      "id": "node-theory-92",
      "title": "What is the difference between Node.js and Socket.IO?",
      "content": "- Node.js: Core runtime, requires manual setup for real-time communication.\n- Socket.IO: Library built on Node.js, simplifies WebSocket and fallback mechanisms for real-time apps.",
      "code": "// Node.js with ws\nconst WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 3000 });\nwss.on('connection', (ws) => ws.send('Hello'));\n\n// Socket.IO\nconst io = require('socket.io')(3000);\nio.on('connection', (socket) => {\n    socket.emit('message', 'Hello');\n});"
    },
    {
      "id": "node-theory-93",
      "title": "What is the difference between WebSocket and Socket.IO?",
      "content": "- WebSocket: Low-level protocol for bidirectional communication.\n- Socket.IO: Higher-level library on top of WebSocket, with fallbacks (e.g., polling) and features like rooms.",
      "code": "// WebSocket\nconst WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 3000 });\nwss.on('connection', (ws) => ws.send('Hello'));\n\n// Socket.IO\nconst io = require('socket.io')(3000);\nio.on('connection', (socket) => socket.emit('message', 'Hello'));"
    },
    {
      "id": "node-theory-94",
      "title": "What is the difference between Node.js and MQTT servers?",
      "content": "- Node.js: General-purpose runtime, can be used for any server.\n- MQTT Servers: Node.js-based servers using protocols like MQTT for IoT messaging.",
      "code": "// Node.js\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// MQTT (using Mosca)\nconst mosca = require('mosca');\nconst server = new mosca.Server({ port: 1883 });\nserver.on('clientConnected', (client) => {\n    console.log('Client connected:', client.id);\n});\nserver.on('published', (packet) => console.log('Published:', packet.payload.toString()));"
    },
    {
      "id": "node-theory-95",
      "title": "What is the difference between HTTP and MQTT in Node.js?",
      "content": "- HTTP: Request-response, stateless, for web APIs.\n- MQTT: Publish-subscribe, lightweight, for IoT messaging.",
      "code": "// HTTP\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello')).listen(3000);\n\n// MQTT\nconst mosca = require('mosca');\nconst server = new mosca.Server({ port: 1883 });\nserver.on('published', (packet) => console.log(packet.payload.toString()));"
    },
    {
      "id": "node-theory-96",
      "title": "What is the difference between Node.js and microservices?",
      "content": "- Node.js: Runtime for building applications, can be used for microservices.\n- Microservices: Architectural style where Node.js apps are split into small, independent services.",
      "code": "// Node.js Monolith\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Microservice (example)\nconst express = require('express');\nconst app = express();\napp.get('/service1', (req, res) => res.send('Service 1'));\napp.listen(3001);"
    },
    {
      "id": "node-theory-97",
      "title": "What is the difference between monolithic and microservices in Node.js?",
      "content": "- Monolithic: Single, unified Node.js app with all functionality.\n- Microservices: Multiple small Node.js apps, each handling a specific function.",
      "code": "// Monolithic\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('All features'));\napp.listen(3000);\n\n// Microservices\nconst express = require('express');\nconst app1 = express();\napp1.get('/auth', (req, res) => res.send('Auth service'));\napp1.listen(3001);\nconst app2 = express();\napp2.get('/users', (req, res) => res.send('User service'));\napp2.listen(3002);"
    },
    {
      "id": "node-theory-98",
      "title": "What is the difference between Node.js and containers (Docker)?",
      "content": "- Node.js: Runtime for running JavaScript applications.\n- Containers (Docker): Package Node.js apps with dependencies into isolated containers for deployment.",
      "code": "// Node.js app\n// app.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Dockerfile for Node.js app\nFROM node:16\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nCMD [\"node\", \"app.js\"]\n\n// Run with Docker\n// docker build -t my-app .\n// docker run -p 3000:3000 my-app"
    },
    {
      "id": "node-theory-99",
      "title": "What is the difference between Node.js and Kubernetes?",
      "content": "- Node.js: Runtime for building apps.\n- Kubernetes: Orchestrates Node.js apps in containers, managing scaling, deployment, and load balancing.",
      "code": "// Node.js app\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// Kubernetes deployment (example YAML)\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:latest\n        ports:\n        - containerPort: 3000"
    },
    {
      "id": "node-theory-100",
      "title": "What is the difference between Node.js and AWS Lambda?",
      "content": "- Node.js: Traditional runtime, requires server management.\n- AWS Lambda: Serverless compute service, runs Node.js code in response to events, auto-scales.",
      "code": "// Node.js\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\n\n// AWS Lambda\nexports.handler = async (event) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify({ message: 'Hello' })\n    };\n};"
    }
  ]
}