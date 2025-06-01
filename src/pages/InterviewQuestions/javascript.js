export const jsquestions = {
  "theory": [
    {
      "id": "js-theory-1",
      "title": "What is JavaScript?",
      "content": "JavaScript is a high-level, interpreted programming language primarily used for adding interactivity to web pages. It runs in the browser and can manipulate the DOM, handle events, and make asynchronous requests (e.g., via AJAX). JavaScript is also used on the server-side with environments like Node.js.",
      "code": "// Example: Adding interactivity\nconsole.log('Hello, JavaScript!');"
    },
    {
      "id": "js-theory-2",
      "title": "What are the differences between var, let, and const?",
      "content": "- var: Function-scoped, can be redeclared and updated, hoisted with undefined.\n- let: Block-scoped, can be updated but not redeclared in the same scope, hoisted but not initialized (Temporal Dead Zone).\n- const: Block-scoped, cannot be updated or redeclared, must be initialized at declaration, hoisted but not initialized.",
      "code": "var x = 10;\nlet y = 20;\nconst z = 30;\n\nx = 15; // OK\ny = 25; // OK\nz = 35; // Error: Assignment to constant variable"
    },
    {
      "id": "js-theory-3",
      "title": "What is hoisting in JavaScript?",
      "content": "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. However, only declarations are hoisted, not initializations. var variables are hoisted and initialized with undefined, while let and const are hoisted but not initialized (leading to a Temporal Dead Zone).",
      "code": "console.log(a); // undefined\nvar a = 5;\n\nconsole.log(b); // ReferenceError: Cannot access 'b' before initialization\nlet b = 10;"
    },
    {
      "id": "js-theory-4",
      "title": "What is the difference between == and ===?",
      "content": "== checks for equality with type coercion (converts operands to the same type before comparison), while === checks for strict equality without type coercion (both value and type must match).",
      "code": "console.log(5 == '5'); // true (type coercion)\nconsole.log(5 === '5'); // false (different types)"
    },
    {
      "id": "js-theory-5",
      "title": "What is a closure in JavaScript?",
      "content": "A closure is a function that retains access to its outer (enclosing) scope's variables even after the outer function has finished executing. Closures are commonly used for data privacy and creating function factories.",
      "code": "function outer() {\n  let count = 0;\n  return function inner() {\n    return count++;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 0\nconsole.log(counter()); // 1"
    },
    {
      "id": "js-theory-6",
      "title": "What is the difference between null and undefined?",
      "content": "- undefined: A variable that has been declared but not assigned a value, or a function that returns nothing.\n- null: Represents the intentional absence of a value, explicitly set by the programmer.",
      "code": "let a;\nconsole.log(a); // undefined\na = null;\nconsole.log(a); // null"
    },
    {
      "id": "js-theory-7",
      "title": "What is event delegation?",
      "content": "Event delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements, leveraging event bubbling. This is efficient for dynamic elements and reduces memory usage.",
      "code": "document.getElementById('parent').addEventListener('click', (e) => {\n  if (e.target.tagName === 'BUTTON') {\n    console.log('Button clicked!');\n  }\n});"
    },
    {
      "id": "js-theory-8",
      "title": "What is the this keyword in JavaScript?",
      "content": "The this keyword refers to the context in which a function is executed. Its value depends on how the function is called:\n- Global context: window (in browsers).\n- Object method: The object itself.\n- Constructor: The new instance.\n- Event handler: The element that triggered the event.",
      "code": "const obj = {\n  name: 'John',\n  greet: function() {\n    console.log(this.name);\n  }\n};\nobj.greet(); // John"
    },
    {
      "id": "js-theory-9",
      "title": "What are arrow functions?",
      "content": "Arrow functions (introduced in ES6) provide a concise syntax for writing functions and do not have their own this, arguments, or prototype. They inherit this from the surrounding scope, making them ideal for callbacks and functional programming.",
      "code": "const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // 5"
    },
    {
      "id": "js-theory-10",
      "title": "What is the difference between call, apply, and bind?",
      "content": "- call: Invokes a function with a specified this and arguments passed individually.\n- apply: Invokes a function with a specified this and arguments passed as an array.\n- bind: Returns a new function with a specified this, arguments can be pre-set but the function is not invoked immediately.",
      "code": "function greet(greeting, punctuation) {\n  console.log(greeting + ', ' + this.name + punctuation);\n}\nconst person = { name: 'Alice' };\ngreet.call(person, 'Hello', '!'); // Hello, Alice!\ngreet.apply(person, ['Hi', '?']); // Hi, Alice?\nconst boundGreet = greet.bind(person, 'Hey', '.');\nboundGreet(); // Hey, Alice."
    },
    {
      "id": "js-theory-11",
      "title": "What is a Promise in JavaScript?",
      "content": "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, or rejected. Promises are used to handle asynchronous operations more cleanly than callbacks.",
      "code": "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success'), 1000);\n});\npromise.then(result => console.log(result)); // Success (after 1 second)"
    },
    {
      "id": "js-theory-12",
      "title": "What is async/await?",
      "content": "async/await is syntactic sugar built on Promises to handle asynchronous code more synchronously. An async function always returns a Promise, and await pauses execution until the Promise resolves.",
      "code": "async function fetchData() {\n  const response = await new Promise(resolve => setTimeout(() => resolve('Data'), 1000));\n  console.log(response);\n}\nfetchData(); // Data (after 1 second)"
    },
    {
      "id": "js-theory-13",
      "title": "What is the event loop?",
      "content": "The event loop is a mechanism in JavaScript that handles asynchronous operations by continuously checking the call stack and the task queue. If the stack is empty, it takes tasks from the queue (e.g., callbacks, promises) and executes them, ensuring non-blocking behavior.",
      "code": "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');\n// Output: Start, End, Timeout"
    },
    {
      "id": "js-theory-14",
      "title": "What are JavaScript data types?",
      "content": "JavaScript has two categories of data types:\n- Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.\n- Non-primitive: Object (including arrays, functions, etc.).",
      "code": "let str = 'Hello'; // String\nlet num = 42; // Number\nlet obj = { key: 'value' }; // Object"
    },
    {
      "id": "js-theory-15",
      "title": "What is type coercion in JavaScript?",
      "content": "Type coercion is the automatic conversion of one data type to another during operations (e.g., comparing with ==, arithmetic operations). It can lead to unexpected results, so using === is often preferred to avoid coercion.",
      "code": "console.log('5' + 3); // '53' (string concatenation)\nconsole.log('5' - 3); // 2 (string to number coercion)"
    },
    {
      "id": "js-theory-16",
      "title": "What is the difference between synchronous and asynchronous code?",
      "content": "Synchronous code executes line by line, blocking further execution until the current operation completes. Asynchronous code allows other operations to run while waiting for tasks (e.g., setTimeout, fetch) to complete, using callbacks, Promises, or async/await.",
      "code": "console.log('Sync 1');\nsetTimeout(() => console.log('Async'), 1000);\nconsole.log('Sync 2');\n// Output: Sync 1, Sync 2, Async"
    },
    {
      "id": "js-theory-17",
      "title": "What is a callback function?",
      "content": "A callback function is a function passed as an argument to another function, which is then executed after some operation completes. Callbacks are commonly used for asynchronous operations but can lead to callback hell if nested too deeply.",
      "code": "function fetchData(callback) {\n  setTimeout(() => callback('Data'), 1000);\n}\nfetchData(data => console.log(data)); // Data (after 1 second)"
    },
    {
      "id": "js-theory-18",
      "title": "What is callback hell?",
      "content": "Callback hell refers to the nested structure of callbacks in asynchronous code, making it hard to read and maintain. It can be avoided using Promises, async/await, or modular code design.",
      "code": "setTimeout(() => {\n  console.log('Step 1');\n  setTimeout(() => {\n    console.log('Step 2');\n    setTimeout(() => console.log('Step 3'), 1000);\n  }, 1000);\n}, 1000);"
    },
    {
      "id": "js-theory-19",
      "title": "What are template literals?",
      "content": "Template literals (introduced in ES6) allow string interpolation and multi-line strings using backticks (`). They support embedding expressions with ${expression} syntax.",
      "code": "const name = 'Alice';\nconsole.log(`Hello, ${name}!`); // Hello, Alice!\nconsole.log(`Multi-line\nstring`);"
    },
    {
      "id": "js-theory-20",
      "title": "What is destructuring in JavaScript?",
      "content": "Destructuring (ES6) allows unpacking values from arrays or properties from objects into distinct variables. It simplifies code by reducing the need for manual assignment.",
      "code": "const [a, b] = [1, 2];\nconsole.log(a, b); // 1 2\nconst { name, age } = { name: 'Bob', age: 30 };\nconsole.log(name, age); // Bob 30"
    },
    {
      "id": "js-theory-21",
      "title": "What is the spread operator?",
      "content": "The spread operator (...) (ES6) allows expanding elements of an iterable (like an array) or properties of an object. It’s used for copying, merging, or passing arguments.",
      "code": "const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4];\nconsole.log(arr2); // [1, 2, 3, 4]\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 };\nconsole.log(obj2); // { a: 1, b: 2 }"
    },
    {
      "id": "js-theory-22",
      "title": "What is the rest operator?",
      "content": "The rest operator (...) collects the remaining elements or properties into a single variable. It’s often used in function parameters or destructuring.",
      "code": "function sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10\nconst [first, ...rest] = [1, 2, 3, 4];\nconsole.log(rest); // [2, 3, 4]"
    },
    {
      "id": "js-theory-23",
      "title": "What are default parameters?",
      "content": "Default parameters (ES6) allow functions to set default values for parameters if no argument or undefined is passed.",
      "code": "function greet(name = 'Guest') {\n  console.log(`Hello, ${name}!`);\n}\ngreet(); // Hello, Guest!\ngreet('Alice'); // Hello, Alice!"
    },
    {
      "id": "js-theory-24",
      "title": "What are JavaScript modules?",
      "content": "Modules (ES6) allow you to split code into reusable files using import and export statements. They help with organization, encapsulation, and dependency management.",
      "code": "// math.js\nexport const add = (a, b) => a + b;\n\n// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3)); // 5"
    },
    {
      "id": "js-theory-25",
      "title": "What is the difference between forEach and map?",
      "content": "- forEach: Iterates over an array and executes a callback for each element, does not return a new array.\n- map: Iterates over an array, applies a callback to each element, and returns a new array with the results.",
      "code": "const arr = [1, 2, 3];\narr.forEach(num => console.log(num * 2)); // 2, 4, 6\nconst doubled = arr.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6]"
    },
    {
      "id": "js-theory-26",
      "title": "What is the difference between for...in and for...of?",
      "content": "- for...in: Iterates over the enumerable properties of an object (e.g., keys).\n- for...of: Iterates over the values of an iterable (e.g., arrays, strings).",
      "code": "const obj = { a: 1, b: 2 };\nfor (let key in obj) {\n  console.log(key); // a, b\n}\nconst arr = [10, 20, 30];\nfor (let value of arr) {\n  console.log(value); // 10, 20, 30\n}"
    },
    {
      "id": "js-theory-27",
      "title": "What is a higher-order function?",
      "content": "A higher-order function is a function that takes another function as an argument or returns a function as a result. Common examples include map, filter, and reduce.",
      "code": "const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6]"
    },
    {
      "id": "js-theory-28",
      "title": "What is the difference between slice and splice?",
      "content": "- slice: Returns a shallow copy of a portion of an array without modifying the original array.\n- splice: Modifies the original array by removing, replacing, or adding elements.",
      "code": "const arr = [1, 2, 3, 4];\nconsole.log(arr.slice(1, 3)); // [2, 3]\nconsole.log(arr); // [1, 2, 3, 4]\narr.splice(1, 2, 'a');\nconsole.log(arr); // [1, 'a', 4]"
    },
    {
      "id": "js-theory-29",
      "title": "What is the DOM?",
      "content": "The Document Object Model (DOM) is a programming interface for web documents. It represents the page as a tree of objects, allowing JavaScript to manipulate the content, structure, and styles dynamically.",
      "code": "const element = document.getElementById('myId');\nelement.textContent = 'Updated text';"
    },
    {
      "id": "js-theory-30",
      "title": "What is event bubbling?",
      "content": "Event bubbling is the process where an event triggered on a nested element propagates up through its ancestors in the DOM tree. It’s the default behavior for most events in JavaScript.",
      "code": "document.getElementById('child').addEventListener('click', () => console.log('Child clicked'));\ndocument.getElementById('parent').addEventListener('click', () => console.log('Parent clicked'));\n// Clicking the child logs: Child clicked, Parent clicked"
    },
    {
      "id": "js-theory-31",
      "title": "What is event capturing?",
      "content": "Event capturing (or trickling) is the opposite of bubbling, where the event starts from the topmost ancestor and moves down to the target element. It can be enabled by setting the third argument of addEventListener to true.",
      "code": "document.getElementById('parent').addEventListener('click', () => console.log('Parent clicked'), true);\ndocument.getElementById('child').addEventListener('click', () => console.log('Child clicked'), true);\n// Clicking the child logs: Parent clicked, Child clicked"
    },
    {
      "id": "js-theory-32",
      "title": "What is the difference between stopPropagation and preventDefault?",
      "content": "- stopPropagation: Prevents further propagation of the event in the bubbling or capturing phase.\n- preventDefault: Prevents the default action of the event (e.g., form submission, link navigation) without stopping propagation.",
      "code": "document.getElementById('link').addEventListener('click', (e) => {\n  e.preventDefault();\n  console.log('Link clicked, but navigation prevented');\n});\ndocument.getElementById('child').addEventListener('click', (e) => {\n  e.stopPropagation();\n  console.log('Child clicked, propagation stopped');\n});"
    },
    {
      "id": "js-theory-33",
      "title": "What is a prototype in JavaScript?",
      "content": "A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype, accessible via __proto__ or Object.getPrototypeOf(). Prototypes are used for inheritance.",
      "code": "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function() {\n  console.log(`Hello, ${this.name}`);\n};\nconst person = new Person('Alice');\nperson.greet(); // Hello, Alice"
    },
    {
      "id": "js-theory-34",
      "title": "What is prototypal inheritance?",
      "content": "Prototypal inheritance allows objects to inherit properties and methods from other objects via their prototype chain. If a property is not found on an object, JavaScript looks up the prototype chain until it finds it or reaches the end (null).",
      "code": "const parent = { greet: () => console.log('Hello') };\nconst child = Object.create(parent);\nchild.greet(); // Hello"
    },
    {
      "id": "js-theory-35",
      "title": "What is the difference between Object.create and new?",
      "content": "- Object.create: Creates a new object with the specified prototype object.\n- new: Creates a new instance of a constructor function, setting its prototype and invoking the constructor.",
      "code": "const proto = { greet: () => console.log('Hello') };\nconst obj1 = Object.create(proto);\nobj1.greet(); // Hello\nfunction Person() {}\nPerson.prototype.greet = function() { console.log('Hi'); };\nconst obj2 = new Person();\nobj2.greet(); // Hi"
    },
    {
      "id": "js-theory-36",
      "title": "What are IIFEs?",
      "content": "An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It’s often used to create a private scope and avoid polluting the global namespace.",
      "code": "(function() {\n  let message = 'Hello';\n  console.log(message);\n})(); // Hello\nconsole.log(typeof message); // undefined"
    },
    {
      "id": "js-theory-37",
      "title": "What is the difference between setTimeout and setInterval?",
      "content": "- setTimeout: Executes a function once after a specified delay (in milliseconds).\n- setInterval: Repeatedly executes a function with a fixed delay between each call until cleared.",
      "code": "setTimeout(() => console.log('One-time'), 1000);\nconst interval = setInterval(() => console.log('Repeating'), 1000);\nsetTimeout(() => clearInterval(interval), 5000); // Stops after 5 seconds"
    },
    {
      "id": "js-theory-38",
      "title": "What is debouncing?",
      "content": "Debouncing is a technique to limit the rate at which a function is executed, often used for events like window resizing or input typing. It ensures the function is called only after a certain delay since the last event.",
      "code": "function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), delay);\n  };\n}\nconst log = debounce(() => console.log('Debounced'), 1000);\nlog();"
    },
    {
      "id": "js-theory-39",
      "title": "What is throttling?",
      "content": "Throttling ensures a function is executed at most once every specified interval, even if the event is triggered continuously. It’s useful for rate-limiting events like scrolling or mouse movements.",
      "code": "function throttle(func, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      func(...args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\nconst log = throttle(() => console.log('Throttled'), 1000);\nlog();"
    },
    {
      "id": "js-theory-40",
      "title": "What is the difference between localStorage and sessionStorage?",
      "content": "- localStorage: Stores data with no expiration (until explicitly cleared).\n- sessionStorage: Stores data for the duration of the page session (cleared when the tab is closed).\nBoth store key-value pairs as strings.",
      "code": "localStorage.setItem('key', 'value');\nconsole.log(localStorage.getItem('key')); // value\nsessionStorage.setItem('temp', 'data');\nconsole.log(sessionStorage.getItem('temp')); // data"
    },
    {
      "id": "js-theory-41",
      "title": "What are JavaScript cookies?",
      "content": "Cookies are small pieces of data stored by the browser, often used to remember user information or track behavior. They are sent with HTTP requests and can have expiration dates, domains, and paths.",
      "code": "document.cookie = 'username=Alice; expires=Fri, 31 Dec 2025 23:59:59 GMT';\nconsole.log(document.cookie); // username=Alice"
    },
    {
      "id": "js-theory-42",
      "title": "What is AJAX?",
      "content": "AJAX (Asynchronous JavaScript and XML) is a technique to make asynchronous HTTP requests from the browser to the server, allowing data to be fetched without reloading the page. It often uses XMLHttpRequest or the modern fetch API.",
      "code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));"
    },
    {
      "id": "js-theory-43",
      "title": "What is the fetch API?",
      "content": "The fetch API is a modern interface for making HTTP requests, replacing XMLHttpRequest. It returns a Promise and supports methods like GET, POST, etc., with a simpler syntax.",
      "code": "fetch('https://api.example.com/data', { method: 'GET' })\n  .then(response => response.json())\n  .then(data => console.log(data));"
    },
    {
      "id": "js-theory-44",
      "title": "What is JSON?",
      "content": "JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data. It’s easy to read and write, and JavaScript provides methods like JSON.parse() and JSON.stringify() to work with it.",
      "code": "const obj = { name: 'Alice', age: 25 };\nconst json = JSON.stringify(obj);\nconsole.log(json); // {\"name\":\"Alice\",\"age\":25}\nconst parsed = JSON.parse(json);\nconsole.log(parsed.name); // Alice"
    },
    {
      "id": "js-theory-45",
      "title": "What is strict mode in JavaScript?",
      "content": "Strict mode ('use strict') is a way to opt into a restricted variant of JavaScript, catching common coding mistakes and preventing certain unsafe actions (e.g., using undeclared variables).",
      "code": "'use strict';\nx = 10; // ReferenceError: x is not defined"
    },
    {
      "id": "js-theory-46",
      "title": "What are JavaScript symbols?",
      "content": "Symbols (ES6) are a primitive data type used to create unique identifiers, often for object properties to avoid naming collisions. They are created with Symbol() and are not equal even if their descriptions match.",
      "code": "const sym1 = Symbol('id');\nconst sym2 = Symbol('id');\nconsole.log(sym1 === sym2); // false\nconst obj = { [sym1]: 'value' };\nconsole.log(obj[sym1]); // value"
    },
    {
      "id": "js-theory-47",
      "title": "What is the difference between shallow copy and deep copy?",
      "content": "- Shallow copy: Copies the top-level properties of an object, but nested objects are still referenced (e.g., using spread operator).\n- Deep copy: Creates a fully independent copy of an object, including nested objects (e.g., using JSON.parse(JSON.stringify())).",
      "code": "const obj = { a: 1, b: { c: 2 } };\nconst shallow = { ...obj };\nshallow.b.c = 3;\nconsole.log(obj.b.c); // 3 (affected)\nconst deep = JSON.parse(JSON.stringify(obj));\ndeep.b.c = 4;\nconsole.log(obj.b.c); // 3 (not affected)"
    },
    {
      "id": "js-theory-48",
      "title": "What are JavaScript generators?",
      "content": "Generators (ES6) are functions that can be paused and resumed, yielding multiple values over time using the yield keyword. They are defined with function* and return an iterator.",
      "code": "function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = generator();\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2"
    },
    {
      "id": "js-theory-49",
      "title": "What is the difference between Array.prototype.filter and Array.prototype.find?",
      "content": "- filter: Returns a new array with all elements that pass the test (callback returns true).\n- find: Returns the first element that passes the test (or undefined if none found).",
      "code": "const arr = [1, 2, 3, 4];\nconsole.log(arr.filter(x => x > 2)); // [3, 4]\nconsole.log(arr.find(x => x > 2)); // 3"
    },
    {
      "id": "js-theory-50",
      "title": "What is the reduce method in JavaScript?",
      "content": "The reduce method executes a reducer function on each element of an array, resulting in a single output value. It takes an accumulator and the current element as arguments.",
      "code": "const arr = [1, 2, 3, 4];\nconst sum = arr.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 10"
    },
    {
      "id": "js-theory-51",
      "title": "What are JavaScript iterators?",
      "content": "Iterators are objects that define a sequence and a way to iterate over it, using a next() method that returns { value, done }. Arrays, strings, and other iterables have built-in iterators.",
      "code": "const arr = [1, 2, 3];\nconst iterator = arr[Symbol.iterator]();\nconsole.log(iterator.next()); // { value: 1, done: false }\nconsole.log(iterator.next()); // { value: 2, done: false }"
    },
    {
      "id": "js-theory-52",
      "title": "What are JavaScript Sets?",
      "content": "A Set (ES6) is a collection of unique values (no duplicates). It provides methods like add, has, and delete, and is iterable.",
      "code": "const set = new Set();\nset.add(1);\nset.add(2);\nset.add(1); // Duplicate, ignored\nconsole.log(set); // Set(2) { 1, 2 }"
    },
    {
      "id": "js-theory-53",
      "title": "What are JavaScript Maps?",
      "content": "A Map (ES6) is a collection of key-value pairs where keys can be any type (unlike objects, where keys are strings or symbols). It provides methods like set, get, has, and delete.",
      "code": "const map = new Map();\nmap.set('name', 'Alice');\nmap.set(1, 'number');\nconsole.log(map.get('name')); // Alice\nconsole.log(map.has(1)); // true"
    },
    {
      "id": "js-theory-54",
      "title": "What is the difference between a function declaration and a function expression?",
      "content": "- Function declaration: Defined with the function keyword and hoisted entirely (can be called before definition).\n- Function expression: Defined as part of an expression (e.g., assigned to a variable), not hoisted fully (only the variable is hoisted).",
      "code": "console.log(decl()); // Works\nfunction decl() { return 'Declaration'; }\nconsole.log(expr); // undefined\nconst expr = function() { return 'Expression'; };"
    },
    {
      "id": "js-theory-55",
      "title": "What is the difference between undefined and not defined?",
      "content": "- undefined: A variable has been declared but not assigned a value.\n- not defined: A variable has not been declared at all, resulting in a ReferenceError.",
      "code": "let x;\nconsole.log(x); // undefined\nconsole.log(y); // ReferenceError: y is not defined"
    },
    {
      "id": "js-theory-56",
      "title": "What is the difference between Array.prototype.push and Array.prototype.concat?",
      "content": "- push: Adds elements to the end of the original array (mutates it).\n- concat: Creates a new array by combining the original array with other arrays or values (does not mutate).",
      "code": "const arr = [1, 2];\narr.push(3);\nconsole.log(arr); // [1, 2, 3]\nconst newArr = arr.concat([4, 5]);\nconsole.log(newArr); // [1, 2, 3, 4, 5]"
    },
    {
      "id": "js-theory-57",
      "title": "What is the difference between null and 0?",
      "content": "- null: Represents the intentional absence of a value.\n- 0: A numeric value (zero). They behave differently in comparisons and operations.",
      "code": "console.log(null == 0); // false\nconsole.log(null === 0); // false\nconsole.log(null + 1); // 1\nconsole.log(0 + 1); // 1"
    },
    {
      "id": "js-theory-58",
      "title": "What are JavaScript classes?",
      "content": "Classes (ES6) are syntactic sugar over JavaScript’s prototypal inheritance, providing a cleaner way to create constructor functions and inheritance using class, constructor, extends, and super.",
      "code": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log(`Hello, ${this.name}`);\n  }\n}\nconst person = new Person('Alice');\nperson.greet(); // Hello, Alice"
    },
    {
      "id": "js-theory-59",
      "title": "What is inheritance in JavaScript classes?",
      "content": "Inheritance in JavaScript classes is achieved using the extends keyword. The subclass inherits properties and methods from the parent class, and super is used to call the parent’s constructor or methods.",
      "code": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    console.log(`${this.name} barks`);\n  }\n}\nconst dog = new Dog('Rex');\ndog.speak(); // Rex barks"
    },
    {
      "id": "js-theory-60",
      "title": "What are getters and setters in JavaScript?",
      "content": "Getters and setters are special methods in objects or classes to get and set property values, allowing control over how properties are accessed or modified.",
      "code": "const obj = {\n  _name: 'Alice',\n  get name() {\n    return this._name;\n  },\n  set name(value) {\n    this._name = value;\n  }\n};\nconsole.log(obj.name); // Alice\nobj.name = 'Bob';\nconsole.log(obj.name); // Bob"
    },
    {
      "id": "js-theory-61",
      "title": "What is the difference between Array.prototype.includes and Array.prototype.indexOf?",
      "content": "- includes: Returns true if the array contains the element (uses strict equality).\n- indexOf: Returns the first index of the element (or -1 if not found).",
      "code": "const arr = [1, 2, 3];\nconsole.log(arr.includes(2)); // true\nconsole.log(arr.indexOf(2)); // 1\nconsole.log(arr.indexOf(4)); // -1"
    },
    {
      "id": "js-theory-62",
      "title": "What is the difference between Array.prototype.every and Array.prototype.some?",
      "content": "- every: Returns true if all elements pass the test (callback returns true).\n- some: Returns true if at least one element passes the test.",
      "code": "const arr = [1, 2, 3, 4];\nconsole.log(arr.every(x => x > 0)); // true\nconsole.log(arr.some(x => x > 3)); // true"
    },
    {
      "id": "js-theory-63",
      "title": "What is the difference between Array.prototype.join and Array.prototype.toString?",
      "content": "- join: Converts an array to a string with a specified separator (default is comma).\n- toString: Converts an array to a string with a comma separator (no customization).",
      "code": "const arr = [1, 2, 3];\nconsole.log(arr.join('-')); // 1-2-3\nconsole.log(arr.toString()); // 1,2,3"
    },
    {
      "id": "js-theory-64",
      "title": "What is the difference between Array.prototype.pop and Array.prototype.shift?",
      "content": "- pop: Removes and returns the last element of an array.\n- shift: Removes and returns the first element of an array.",
      "code": "const arr = [1, 2, 3];\nconsole.log(arr.pop()); // 3\nconsole.log(arr); // [1, 2]\nconsole.log(arr.shift()); // 1\nconsole.log(arr); // [2]"
    },
    {
      "id": "js-theory-65",
      "title": "What is the difference between Array.prototype.reverse and Array.prototype.sort?",
      "content": "- reverse: Reverses the order of elements in the array (mutates the original array).\n- sort: Sorts the elements of an array (mutates the original array), optionally using a comparison function.",
      "code": "const arr = [3, 1, 2];\narr.reverse();\nconsole.log(arr); // [2, 1, 3]\narr.sort((a, b) => a - b);\nconsole.log(arr); // [1, 2, 3]"
    },
    {
      "id": "js-theory-66",
      "title": "What is the difference between Object.keys and Object.values?",
      "content": "- Object.keys: Returns an array of the object’s own property names.\n- Object.values: Returns an array of the object’s own property values.",
      "code": "const obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(obj)); // ['a', 'b', 'c']\nconsole.log(Object.values(obj)); // [1, 2, 3]"
    },
    {
      "id": "js-theory-67",
      "title": "What is Object.entries?",
      "content": "Object.entries (ES2017) returns an array of the object’s own key-value pairs as [key, value] arrays.",
      "code": "const obj = { a: 1, b: 2 };\nconsole.log(Object.entries(obj)); // [['a', 1], ['b', 2]]"
    },
    {
      "id": "js-theory-68",
      "title": "What is Object.assign?",
      "content": "Object.assign copies properties from one or more source objects to a target object, performing a shallow copy. It’s often used for merging objects.",
      "code": "const target = { a: 1 };\nconst source = { b: 2, c: 3 };\nObject.assign(target, source);\nconsole.log(target); // { a: 1, b: 2, c: 3 }"
    },
    {
      "id": "js-theory-69",
      "title": "What is Object.freeze?",
      "content": "Object.freeze prevents an object from being modified (no adding, deleting, or updating properties). It performs a shallow freeze (nested objects can still be modified).",
      "code": "const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2; // Ignored in strict mode, throws error\nconsole.log(obj.a); // 1"
    },
    {
      "id": "js-theory-70",
      "title": "What is Object.seal?",
      "content": "Object.seal prevents adding or deleting properties from an object, but allows existing properties to be modified. It performs a shallow seal.",
      "code": "const obj = { a: 1 };\nObject.seal(obj);\nobj.b = 2; // Ignored\ndelete obj.a; // Ignored\nobj.a = 3; // Allowed\nconsole.log(obj); // { a: 3 }"
    },
    {
      "id": "js-theory-71",
      "title": "What is the difference between undefined and NaN?",
      "content": "- undefined: A variable has been declared but not assigned a value.\n- NaN: Represents an invalid number (e.g., result of an invalid mathematical operation). Use isNaN() to check for NaN.",
      "code": "let x;\nconsole.log(x); // undefined\nconsole.log('a' * 2); // NaN\nconsole.log(isNaN('a' * 2)); // true"
    },
    {
      "id": "js-theory-72",
      "title": "What is the difference between global scope and block scope?",
      "content": "- Global scope: Variables declared outside any function or block, accessible everywhere.\n- Block scope: Variables declared inside a block (e.g., with let or const) are only accessible within that block.",
      "code": "var global = 'I am global';\nif (true) {\n  let block = 'I am block-scoped';\n  console.log(global); // I am global\n}\nconsole.log(block); // ReferenceError"
    },
    {
      "id": "js-theory-73",
      "title": "What is the difference between a method and a function?",
      "content": "- Function: A standalone procedure that performs a task or returns a value.\n- Method: A function that belongs to an object or class (a property of an object that is a function).",
      "code": "function standalone() { return 'Function'; }\nconst obj = {\n  method: function() { return 'Method'; }\n};\nconsole.log(standalone()); // Function\nconsole.log(obj.method()); // Method"
    },
    {
      "id": "js-theory-74",
      "title": "What is the difference between a parameter and an argument?",
      "content": "- Parameter: A variable in the function definition (placeholder).\n- Argument: The actual value passed to the function when it’s called.",
      "code": "function add(a, b) { // a, b are parameters\n  return a + b;\n}\nconsole.log(add(2, 3)); // 2, 3 are arguments"
    },
    {
      "id": "js-theory-75",
      "title": "What is the arguments object?",
      "content": "The arguments object is an array-like object available inside functions, containing all arguments passed to the function. It’s not available in arrow functions.",
      "code": "function example() {\n  console.log(arguments);\n}\nexample(1, 2, 3); // Arguments [1, 2, 3]"
    },
    {
      "id": "js-theory-76",
      "title": "What is the difference between a unary operator and a binary operator?",
      "content": "- Unary operator: Operates on a single operand (e.g., ++, --, !).\n- Binary operator: Operates on two operands (e.g., +, -, *, /).",
      "code": "let x = 5;\nconsole.log(-x); // -5 (unary)\nconsole.log(x + 3); // 8 (binary)"
    },
    {
      "id": "js-theory-77",
      "title": "What is the difference between == and !=?",
      "content": "- ==: Checks for equality with type coercion.\n- !=: Checks for inequality with type coercion.",
      "code": "console.log(5 == '5'); // true\nconsole.log(5 != '5'); // false"
    },
    {
      "id": "js-theory-78",
      "title": "What is the difference between === and !==?",
      "content": "- ===: Strict equality (value and type must match).\n- !==: Strict inequality (value or type must differ).",
      "code": "console.log(5 === '5'); // false\nconsole.log(5 !== '5'); // true"
    },
    {
      "id": "js-theory-79",
      "title": "What is the difference between null and '' (empty string)?",
      "content": "- null: Represents the absence of a value.\n- '': An empty string, which is a valid string value with length 0.",
      "code": "console.log(null == ''); // false\nconsole.log(''.length); // 0"
    },
    {
      "id": "js-theory-80",
      "title": "What is the difference between Array.isArray and instanceof Array?",
      "content": "- Array.isArray: A method to check if a value is an array (recommended).\n- instanceof Array: Checks if an object is an instance of Array (can fail across different contexts, e.g., iframes).",
      "code": "const arr = [1, 2, 3];\nconsole.log(Array.isArray(arr)); // true\nconsole.log(arr instanceof Array); // true"
    },
    {
      "id": "js-theory-81",
      "title": "What is the difference between parseInt and parseFloat?",
      "content": "- parseInt: Converts a string to an integer (ignores decimals).\n- parseFloat: Converts a string to a floating-point number (includes decimals).",
      "code": "console.log(parseInt('123.45')); // 123\nconsole.log(parseFloat('123.45')); // 123.45"
    },
    {
      "id": "js-theory-82",
      "title": "What is the difference between encodeURI and encodeURIComponent?",
      "content": "- encodeURI: Encodes a URI but does not encode characters like : / ? (used for full URLs).\n- encodeURIComponent: Encodes a URI component, including characters like : / ? (used for query parameters).",
      "code": "const uri = 'http://example.com?name=John Doe';\nconsole.log(encodeURI(uri)); // http://example.com?name=John%20Doe\nconsole.log(encodeURIComponent('John Doe')); // John%20Doe"
    },
    {
      "id": "js-theory-83",
      "title": "What is the difference between window.onload and DOMContentLoaded?",
      "content": "- window.onload: Fires when the entire page (including images and other resources) has loaded.\n- DOMContentLoaded: Fires when the DOM is fully parsed, but before external resources like images load.",
      "code": "window.onload = () => console.log('Page fully loaded');\ndocument.addEventListener('DOMContentLoaded', () => console.log('DOM loaded'));"
    },
    {
      "id": "js-theory-84",
      "title": "What is the difference between Array.prototype.flat and Array.prototype.flatMap?",
      "content": "- flat: Flattens a nested array to a specified depth.\n- flatMap: Maps each element using a function, then flattens the result into a single array.",
      "code": "const arr = [1, [2, 3], [4, [5]]];\nconsole.log(arr.flat(2)); // [1, 2, 3, 4, 5]\nconsole.log(arr.flatMap(x => Array.isArray(x) ? x : [x, x])); // [1, 1, 2, 3, 4, [5]]"
    },
    {
      "id": "js-theory-85",
      "title": "What is the difference between Number.isNaN and global isNaN?",
      "content": "- Number.isNaN: Strictly checks if the value is NaN (recommended).\n- isNaN: Coerces the value to a number before checking, leading to unexpected results.",
      "code": "console.log(Number.isNaN(NaN)); // true\nconsole.log(Number.isNaN('text')); // false\nconsole.log(isNaN('text')); // true (coerces to NaN)"
    },
    {
      "id": "js-theory-86",
      "title": "What is the difference between Array.prototype.forEach and Array.prototype.map?",
      "content": "- forEach: Executes a callback for each element, does not return a value.\n- map: Executes a callback for each element and returns a new array with the results.",
      "code": "const arr = [1, 2, 3];\narr.forEach(x => console.log(x * 2)); // 2, 4, 6\nconst newArr = arr.map(x => x * 2);\nconsole.log(newArr); // [2, 4, 6]"
    },
    {
      "id": "js-theory-87",
      "title": "What is the difference between Array.prototype.reduce and Array.prototype.reduceRight?",
      "content": "- reduce: Processes the array from left to right.\n- reduceRight: Processes the array from right to left.",
      "code": "const arr = [1, 2, 3];\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0)); // 6\nconsole.log(arr.reduceRight((acc, curr) => acc + curr, 0)); // 6"
    },
    {
      "id": "js-theory-88",
      "title": "What is the difference between String.prototype.slice and String.prototype.substring?",
      "content": "- slice: Extracts a portion of a string, supports negative indices.\n- substring: Extracts a portion of a string, does not support negative indices (treats them as 0).",
      "code": "const str = 'Hello';\nconsole.log(str.slice(1, 3)); // 'el'\nconsole.log(str.substring(1, 3)); // 'el'\nconsole.log(str.slice(-2)); // 'lo'\nconsole.log(str.substring(-2)); // 'Hello'"
    },
    {
      "id": "js-theory-89",
      "title": "What is the difference between String.prototype.split and String.prototype.match?",
      "content": "- split: Splits a string into an array based on a delimiter or regular expression.\n- match: Returns an array of matches for a regular expression in the string.",
      "code": "const str = 'a,b,c';\nconsole.log(str.split(',')); // ['a', 'b', 'c']\nconst str2 = 'abc123';\nconsole.log(str2.match(/\d+/g)); // ['123']"
    },
    {
      "id": "js-theory-90",
      "title": "What is the difference between String.prototype.replace and String.prototype.replaceAll?",
      "content": "- replace: Replaces the first occurrence of a substring or pattern.\n- replaceAll: Replaces all occurrences of a substring or pattern (ES2020).",
      "code": "const str = 'hello hello';\nconsole.log(str.replace('hello', 'hi')); // hi hello\nconsole.log(str.replaceAll('hello', 'hi')); // hi hi"
    },
    {
      "id": "js-theory-91",
      "title": "What is the difference between a regular function and an arrow function in terms of this?",
      "content": "- Regular function: this is determined by how the function is called (dynamic binding).\n- Arrow function: this is lexically bound (inherits from the surrounding scope).",
      "code": "const obj = {\n  name: 'Alice',\n  regular: function() { console.log(this.name); },\n  arrow: () => console.log(this.name)\n};\nobj.regular(); // Alice\nobj.arrow(); // undefined (this is global)"
    },
    {
      "id": "js-theory-92",
      "title": "What is the difference between Array.prototype.concat and the spread operator?",
      "content": "- concat: Combines arrays into a new array, can take multiple arrays as arguments.\n- Spread operator: Expands an array into individual elements, more flexible for combining arrays or passing arguments.",
      "code": "const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconsole.log(arr1.concat(arr2)); // [1, 2, 3, 4]\nconsole.log([...arr1, ...arr2]); // [1, 2, 3, 4]"
    },
    {
      "id": "js-theory-93",
      "title": "What is the difference between window.alert and console.log?",
      "content": "- window.alert: Displays a popup dialog with a message (blocks execution until dismissed).\n- console.log: Logs a message to the console (non-blocking, for debugging).",
      "code": "window.alert('This is an alert!');\nconsole.log('This is a log message');"
    },
    {
      "id": "js-theory-94",
      "title": "What is the difference between Array.prototype.fill and Array.prototype.map?",
      "content": "- fill: Fills all elements of an array with a static value (mutates the array).\n- map: Creates a new array with the results of applying a function to each element.",
      "code": "const arr = [1, 2, 3];\narr.fill(0);\nconsole.log(arr); // [0, 0, 0]\nconst mapped = arr.map(() => 1);\nconsole.log(mapped); // [1, 1, 1]"
    },
    {
      "id": "js-theory-95",
      "title": "What is the difference between a primitive value and a reference value?",
      "content": "- Primitive value: Stored directly in memory (e.g., number, string, boolean). Copied by value.\n- Reference value: Stored as a reference to a memory location (e.g., object, array). Copied by reference.",
      "code": "let a = 5;\nlet b = a;\nb = 10;\nconsole.log(a); // 5\nlet obj1 = { x: 1 };\nlet obj2 = obj1;\nobj2.x = 2;\nconsole.log(obj1.x); // 2"
    },
    {
      "id": "js-theory-96",
      "title": "What is the difference between Array.prototype.length and Array.prototype.size?",
      "content": "- length: A property of arrays that returns the number of elements.\n- size: Not a property of arrays (used with Sets and Maps to get the number of entries).",
      "code": "const arr = [1, 2, 3];\nconsole.log(arr.length); // 3\nconst set = new Set([1, 2, 3]);\nconsole.log(set.size); // 3"
    },
    {
      "id": "js-theory-97",
      "title": "What is the difference between Function.prototype.bind and Function.prototype.apply?",
      "content": "- bind: Returns a new function with a specified this (does not execute immediately).\n- apply: Executes the function immediately with a specified this and arguments as an array.",
      "code": "function greet() { console.log(this.name); }\nconst obj = { name: 'Alice' };\nconst bound = greet.bind(obj);\nbound(); // Alice\ngreet.apply(obj); // Alice"
    },
    {
      "id": "js-theory-98",
      "title": "What is the difference between a for loop and a while loop?",
      "content": "- for loop: Used when the number of iterations is known, with initialization, condition, and update in one line.\n- while loop: Used when the number of iterations is unknown, with only a condition.",
      "code": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n} // 0, 1, 2\nlet j = 0;\nwhile (j < 3) {\n  console.log(j);\n  j++;\n} // 0, 1, 2"
    },
    {
      "id": "js-theory-99",
      "title": "What is the difference between break and continue in a loop?",
      "content": "- break: Exits the loop entirely.\n- continue: Skips the current iteration and proceeds to the next one.",
      "code": "for (let i = 0; i < 5; i++) {\n  if (i === 2) break;\n  console.log(i);\n} // 0, 1\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n} // 0, 1, 3, 4"
    },
    {
      "id": "js-theory-100",
      "title": "What is the difference between a try-catch block and a Promise.catch?",
      "content": "- try-catch: Handles synchronous errors in a block of code.\n- Promise.catch: Handles asynchronous errors in a Promise chain.",
      "code": "try {\n  throw new Error('Sync error');\n} catch (e) {\n  console.log(e.message);\n}\nPromise.reject('Async error').catch(e => console.log(e));"
    }
  ],
  "practice": {
    "basic": [
      {
        "id": "js-basic-1",
        "title": "Reverse a String",
        "content": "Write a function to reverse a given string.\n\n**Example:**\nInput: 'hello'\nOutput: 'olleh'",
        "code": "function reverseString(str) {\n  return str.split('').reverse().join('');\n}\nconsole.log(reverseString('hello')); // 'olleh'"
      },
      {
        "id": "js-basic-2",
        "title": "Check if a Number is Even",
        "content": "Write a function to check if a number is even.\n\n**Example:**\nInput: 4\nOutput: true\nInput: 7\nOutput: false",
        "code": "function isEven(num) {\n  return num % 2 === 0;\n}\nconsole.log(isEven(4)); // true\nconsole.log(isEven(7)); // false"
      },
      {
        "id": "js-basic-3",
        "title": "Sum of Array Elements",
        "content": "Write a function to calculate the sum of all elements in an array.\n\n**Example:**\nInput: [1, 2, 3, 4]\nOutput: 10",
        "code": "function sumArray(arr) {\n  return arr.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumArray([1, 2, 3, 4])); // 10"
      },
      {
        "id": "js-basic-4",
        "title": "Find the Maximum Number in an Array",
        "content": "Write a function to find the maximum number in an array.\n\n**Example:**\nInput: [3, 1, 4, 2]\nOutput: 4",
        "code": "function findMax(arr) {\n  return Math.max(...arr);\n}\nconsole.log(findMax([3, 1, 4, 2])); // 4"
      },
      {
        "id": "js-basic-5",
        "title": "Check if a String is a Palindrome",
        "content": "Write a function to check if a string is a palindrome (reads the same forward and backward).\n\n**Example:**\nInput: 'radar'\nOutput: true\nInput: 'hello'\nOutput: false",
        "code": "function isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanStr === cleanStr.split('').reverse().join('');\n}\nconsole.log(isPalindrome('radar')); // true\nconsole.log(isPalindrome('hello')); // false"
      },
      {
        "id": "js-basic-6",
        "title": "Factorial of a Number",
        "content": "Write a function to calculate the factorial of a number.\n\n**Example:**\nInput: 5\nOutput: 120 (5 * 4 * 3 * 2 * 1)",
        "code": "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // 120"
      },
      {
        "id": "js-basic-7",
        "title": "Count Vowels in a String",
        "content": "Write a function to count the number of vowels in a string.\n\n**Example:**\nInput: 'hello'\nOutput: 2 (e, o)",
        "code": "function countVowels(str) {\n  const matches = str.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}\nconsole.log(countVowels('hello')); // 2"
      },
      {
        "id": "js-basic-8",
        "title": "Capitalize First Letter of Each Word",
        "content": "Write a function to capitalize the first letter of each word in a string.\n\n**Example:**\nInput: 'hello world'\nOutput: 'Hello World'",
        "code": "function capitalizeWords(str) {\n  return str\n    .split(' ')\n    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())\n    .join(' ');\n}\nconsole.log(capitalizeWords('hello world')); // 'Hello World'"
      },
      {
        "id": "js-basic-9",
        "title": "Remove Duplicates from an Array",
        "content": "Write a function to remove duplicates from an array.\n\n**Example:**\nInput: [1, 2, 2, 3, 1]\nOutput: [1, 2, 3]",
        "code": "function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}\nconsole.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]"
      },
      {
        "id": "js-basic-10",
        "title": "Find the Length of the Longest Word",
        "content": "Write a function to find the length of the longest word in a string.\n\n**Example:**\nInput: 'The quick brown fox'\nOutput: 5 (brown)",
        "code": "function longestWordLength(str) {\n  return Math.max(...str.split(' ').map(word => word.length));\n}\nconsole.log(longestWordLength('The quick brown fox')); // 5"
      }
    ],
    "intermediate": [
      {
        "id": "js-intermediate-1",
        "title": "Flatten a Nested Array",
        "content": "Write a function to flatten a nested array (convert it to a single-level array).\n\n**Example:**\nInput: [1, [2, 3], [4, [5]]]\nOutput: [1, 2, 3, 4, 5]",
        "code": "function flattenArray(arr) {\n  return arr.flat(Infinity);\n}\nconsole.log(flattenArray([1, [2, 3], [4, [5]]])); // [1, 2, 3, 4, 5]"
      },
      {
        "id": "js-intermediate-2",
        "title": "Find the First Non-Repeating Character",
        "content": "Write a function to find the first non-repeating character in a string.\n\n**Example:**\nInput: 'aabbcde'\nOutput: 'c'",
        "code": "function firstNonRepeatingChar(str) {\n  const charCount = {};\n  for (let char of str) {\n    charCount[char] = (charCount[char] || 0) + 1;\n  }\n  for (let char of str) {\n    if (charCount[char] === 1) return char;\n  }\n  return null;\n}\nconsole.log(firstNonRepeatingChar('aabbcde')); // 'c'"
      },
      {
        "id": "js-intermediate-3",
        "title": "Group Anagrams",
        "content": "Write a function to group anagrams in an array of strings. Anagrams are words that have the same letters with the same frequency but in a different order.\n\n**Example:**\nInput: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']\nOutput: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
        "code": "function groupAnagrams(arr) {\n  const map = {};\n  for (let str of arr) {\n    const sorted = str.split('').sort().join('');\n    if (!map[sorted]) map[sorted] = [];\n    map[sorted].push(str);\n  }\n  return Object.values(map);\n}\nconsole.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]"
      },
      {
        "id": "js-intermediate-4",
        "title": "Longest Substring Without Repeating Characters",
        "content": "Write a function to find the length of the longest substring without repeating characters.\n\n**Example:**\nInput: 'abcabcbb'\nOutput: 3 ('abc')\nInput: 'bbbbb'\nOutput: 1 ('b')",
        "code": "function lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let maxLen = 0, start = 0;\n  for (let end = 0; end < s.length; end++) {\n    if (seen.has(s[end])) {\n      start = Math.max(start, seen.get(s[end]) + 1);\n    }\n    seen.set(s[end], end);\n    maxLen = Math.max(maxLen, end - start + 1);\n  }\n  return maxLen;\n}\nconsole.log(lengthOfLongestSubstring('abcabcbb')); // 3\nconsole.log(lengthOfLongestSubstring('bbbbb')); // 1"
      },
      {
        "id": "js-intermediate-5",
        "title": "Rotate an Array",
        "content": "Write a function to rotate an array to the right by k steps.\n\n**Example:**\nInput: [1, 2, 3, 4, 5], k = 2\nOutput: [4, 5, 1, 2, 3]",
        "code": "function rotateArray(arr, k) {\n  k = k % arr.length;\n  const rotated = arr.slice(-k).concat(arr.slice(0, arr.length - k));\n  return rotated;\n}\nconsole.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]"
      },
      {
        "id": "js-intermediate-6",
        "title": "Implement a Stack Using Arrays",
        "content": "Implement a stack data structure using arrays with methods push, pop, and peek.\n\n**Example:**\nstack.push(1)\nstack.push(2)\nstack.peek() // 2\nstack.pop() // 2",
        "code": "class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) {\n    this.items.push(item);\n  }\n  pop() {\n    return this.items.pop();\n  }\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n}\nconst stack = new Stack();\nstack.push(1);\nstack.push(2);\nconsole.log(stack.peek()); // 2\nconsole.log(stack.pop()); // 2"
      },
      {
        "id": "js-intermediate-7",
        "title": "Implement a Queue Using Arrays",
        "content": "Implement a queue data structure using arrays with methods enqueue, dequeue, and front.\n\n**Example:**\nqueue.enqueue(1)\nqueue.enqueue(2)\nqueue.front() // 1\nqueue.dequeue() // 1",
        "code": "class Queue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(item) {\n    this.items.push(item);\n  }\n  dequeue() {\n    return this.items.shift();\n  }\n  front() {\n    return this.items[0];\n  }\n}\nconst queue = new Queue();\nqueue.enqueue(1);\nqueue.enqueue(2);\nconsole.log(queue.front()); // 1\nconsole.log(queue.dequeue()); // 1"
      },
      {
        "id": "js-intermediate-8",
        "title": "Find Two Numbers That Sum to Target",
        "content": "Write a function to find two numbers in an array that sum to a target value and return their indices.\n\n**Example:**\nInput: [2, 7, 11, 15], target = 9\nOutput: [0, 1] (2 + 7 = 9)",
        "code": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]"
      },
      {
        "id": "js-intermediate-9",
        "title": "Generate Fibonacci Sequence",
        "content": "Write a function to generate the Fibonacci sequence up to n terms.\n\n**Example:**\nInput: 6\nOutput: [0, 1, 1, 2, 3, 5]",
        "code": "function fibonacci(n) {\n  const fib = [0, 1];\n  for (let i = 2; i < n; i++) {\n    fib[i] = fib[i - 1] + fib[i - 2];\n  }\n  return fib.slice(0, n);\n}\nconsole.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]"
      },
      {
        "id": "js-intermediate-10",
        "title": "Check for Balanced Parentheses",
        "content": "Write a function to check if a string of parentheses is balanced.\n\n**Example:**\nInput: '()(()())'\nOutput: true\nInput: '(()'\nOutput: false",
        "code": "function isBalanced(str) {\n  const stack = [];\n  for (let char of str) {\n    if (char === '(') {\n      stack.push(char);\n    } else if (char === ')') {\n      if (stack.length === 0) return false;\n      stack.pop();\n    }\n  }\n  return stack.length === 0;\n}\nconsole.log(isBalanced('()(()())')); // true\nconsole.log(isBalanced('(()')); // false"
      }
    ]
  }
}