export const react = {
  "theory": [
    {
      "id": "react-theory-1",
      "title": "What is React?",
      "content": "React is a JavaScript library for building user interfaces, primarily focused on creating reusable UI components. Developed by Facebook, it allows developers to build single-page applications (SPAs) with a component-based architecture. React uses a virtual DOM to optimize rendering and improve performance.",
      "code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n  return <h1>Hello, React!</h1>;\n};\n\nReactDOM.render(<App />, document.getElementById('root'));"
    },
    {
      "id": "react-theory-2",
      "title": "What is a React component?",
      "content": "A React component is a reusable building block for your UI, representing a part of the user interface. Components can be either functional (stateless) or class-based (stateful). They accept inputs called props and return JSX elements to describe what should appear on the screen.",
      "code": "// Functional Component\nimport React from 'react';\n\nconst Greeting = (props) => {\n  return <h1>Hello, {props.name}!</h1>;\n};\n\nexport default Greeting;"
    },
    {
      "id": "react-theory-3",
      "title": "What is the difference between functional and class components?",
      "content": "- Functional Components: Simple functions that return JSX, stateless by default, but can use hooks for state and lifecycle (since React 16.8). Preferred for their simplicity.\n- Class Components: ES6 classes that extend React.Component, have built-in lifecycle methods, and manage state via this.state. More verbose but useful for complex logic.",
      "code": "// Functional Component with Hook\nimport React, { useState } from 'react';\nconst CounterFunc = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\n// Class Component\nimport React, { Component } from 'react';\nclass CounterClass extends Component {\n  state = { count: 0 };\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}"
    },
    {
      "id": "react-theory-4",
      "title": "What is JSX?",
      "content": "JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the UI. It looks like HTML but is compiled into JavaScript by tools like Babel. JSX allows you to write HTML-like code in JavaScript, making it easier to create React elements.",
      "code": "import React from 'react';\n\nconst Element = () => {\n  return (\n    <div className=\"container\">\n      <h1>Hello, JSX!</h1>\n      <p>This is a paragraph.</p>\n    </div>\n  );\n};\n\nexport default Element;"
    },
    {
      "id": "react-theory-5",
      "title": "What is the Virtual DOM?",
      "content": "The Virtual DOM is a lightweight in-memory representation of the real DOM. React uses it to optimize updates by comparing the virtual DOM with the real DOM (via a process called reconciliation) and only updating the parts that have changed, improving performance.",
      "code": "// React keeps a Virtual DOM and updates the real DOM efficiently\nconst App = () => {\n  const [text, setText] = React.useState('Initial');\n  return (\n    <div>\n      <p>{text}</p>\n      <button onClick={() => setText('Updated')}>Update</button>\n    </div>\n  );\n};"
    },
    {
      "id": "react-theory-6",
      "title": "What are props in React?",
      "content": "Props (short for properties) are read-only inputs passed to a React component to customize its behavior or rendering. Props allow parent components to pass data to child components, making components reusable and dynamic.",
      "code": "import React from 'react';\n\nconst Child = ({ message }) => {\n  return <p>{message}</p>;\n};\n\nconst Parent = () => {\n  return <Child message=\"Hello from Parent!\" />;\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-7",
      "title": "What is state in React?",
      "content": "State is a built-in object in React that holds data that can change over time, affecting a component's rendering. In functional components, state is managed using the useState hook. In class components, it’s managed via this.state and this.setState.",
      "code": "import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;"
    },
    {
      "id": "react-theory-8",
      "title": "What is the difference between state and props?",
      "content": "- State: Managed within a component, mutable, and used to handle dynamic data (e.g., user input, counters).\n- Props: Passed from parent to child, immutable within the child, and used to configure a component.",
      "code": "import React, { useState } from 'react';\n\nconst Child = ({ label }) => {\n  return <p>{label}</p>;\n};\n\nconst Parent = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>State: {count}</p>\n      <Child label={`Count: ${count}`} />\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-9",
      "title": "What are React hooks?",
      "content": "React hooks (introduced in React 16.8) are functions that let you use state and other React features in functional components. Common hooks include useState (for state), useEffect (for side effects), and useContext (for context).",
      "code": "import React, { useState, useEffect } from 'react';\n\nconst Example = () => {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    setTimeout(() => setData('Loaded!'), 1000);\n  }, []);\n\n  return <div>{data || 'Loading...'}</div>;\n};\n\nexport default Example;"
    },
    {
      "id": "react-theory-10",
      "title": "What is the useState hook?",
      "content": "The useState hook allows you to add state to functional components. It returns an array with the current state value and a function to update it. Calling the update function triggers a re-render with the new state.",
      "code": "import React, { useState } from 'react';\n\nconst Toggle = () => {\n  const [isOn, setIsOn] = useState(false);\n  return (\n    <button onClick={() => setIsOn(!isOn)}>\n      {isOn ? 'ON' : 'OFF'}\n    </button>\n  );\n};\n\nexport default Toggle;"
    },
    {
      "id": "react-theory-11",
      "title": "What is the useEffect hook?",
      "content": "The useEffect hook handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. It runs after every render by default but can be controlled with a dependency array.",
      "code": "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(interval); // Cleanup\n  }, []);\n\n  return <p>Seconds: {seconds}</p>;\n};\n\nexport default Timer;"
    },
    {
      "id": "react-theory-12",
      "title": "What are lifecycle methods in React?",
      "content": "Lifecycle methods are special methods in class components that run at specific points in a component’s lifecycle:\n- componentDidMount: After the component is mounted.\n- componentDidUpdate: After updates.\n- componentWillUnmount: Before the component is removed.",
      "code": "import React, { Component } from 'react';\n\nclass Lifecycle extends Component {\n  state = { data: null };\n\n  componentDidMount() {\n    console.log('Mounted!');\n    this.setState({ data: 'Loaded' });\n  }\n\n  componentDidUpdate() {\n    console.log('Updated!');\n  }\n\n  componentWillUnmount() {\n    console.log('Unmounting!');\n  }\n\n  render() {\n    return <div>{this.state.data || 'Loading...'}</div>;\n  }\n}\n\nexport default Lifecycle;"
    },
    {
      "id": "react-theory-13",
      "title": "How do you handle events in React?",
      "content": "React handles events using synthetic events, which are wrappers around native DOM events. Event handlers are passed as props (e.g., onClick, onChange) and are camelCased. You can pass functions to these handlers to respond to user interactions.",
      "code": "import React, { useState } from 'react';\n\nconst Button = () => {\n  const [clicked, setClicked] = useState(false);\n\n  const handleClick = () => {\n    setClicked(true);\n    console.log('Button clicked!');\n  };\n\n  return (\n    <button onClick={handleClick}>\n      {clicked ? 'Clicked!' : 'Click Me'}\n    </button>\n  );\n};\n\nexport default Button;"
    },
    {
      "id": "react-theory-14",
      "title": "What is conditional rendering in React?",
      "content": "Conditional rendering in React involves rendering different UI elements based on certain conditions. This is typically done using JavaScript operators like if, &&, or the ternary operator within JSX.",
      "code": "import React, { useState } from 'react';\n\nconst Conditional = () => {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n\n  return (\n    <div>\n      {isLoggedIn ? (\n        <p>Welcome, User!</p>\n      ) : (\n        <button onClick={() => setIsLoggedIn(true)}>Login</button>\n      )}\n    </div>\n  );\n};\n\nexport default Conditional;"
    },
    {
      "id": "react-theory-15",
      "title": "What are lists and keys in React?",
      "content": "Lists in React are created by mapping over an array and rendering elements. Keys are special attributes used to uniquely identify elements in a list, helping React efficiently update the DOM by tracking which items have changed, been added, or removed.",
      "code": "import React from 'react';\n\nconst List = () => {\n  const items = ['Apple', 'Banana', 'Orange'];\n\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default List;"
    },
    {
      "id": "react-theory-16",
      "title": "What is the purpose of the key prop?",
      "content": "The key prop helps React identify which items in a list have changed, been added, or removed. It ensures efficient re-rendering by minimizing DOM updates. Keys should be unique and stable within the list.",
      "code": "import React from 'react';\n\nconst DynamicList = () => {\n  const todos = [\n    { id: 1, task: 'Learn React' },\n    { id: 2, task: 'Build a project' },\n  ];\n\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>{todo.task}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default DynamicList;"
    },
    {
      "id": "react-theory-17",
      "title": "What is the useContext hook?",
      "content": "The useContext hook allows functional components to access a React context, which is used to share data globally without prop drilling. It takes a context object (created by React.createContext) and returns its current value.",
      "code": "import React, { useContext, createContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nconst Child = () => {\n  const theme = useContext(ThemeContext);\n  return <p>Current Theme: {theme}</p>;\n};\n\nconst App = () => {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Child />\n    </ThemeContext.Provider>\n  );\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-18",
      "title": "What is prop drilling?",
      "content": "Prop drilling occurs when props are passed through multiple levels of components that don’t need the data, just to reach a deeply nested component. It can be avoided using context or state management libraries like Redux.",
      "code": "import React from 'react';\n\nconst GrandChild = ({ user }) => <p>User: {user}</p>;\nconst Child = (props) => <GrandChild {...props} />;\nconst Parent = () => <Child user=\"Alice\" />;\n\nexport default Parent;"
    },
    {
      "id": "react-theory-19",
      "title": "What is React Router?",
      "content": "React Router is a library for handling navigation and routing in React applications. It allows you to create single-page applications with multiple views by mapping URLs to components using components like BrowserRouter, Route, and Link.",
      "code": "import React from 'react';\nimport { BrowserRouter as Router, Route, Link } from 'react-router-dom';\n\nconst Home = () => <h2>Home</h2>;\nconst About = () => <h2>About</h2>;\n\nconst App = () => (\n  <Router>\n    <nav>\n      <Link to=\"/\">Home</Link> | <Link to=\"/about\">About</Link>\n    </nav>\n    <Route exact path=\"/\" component={Home} />\n    <Route path=\"/about\" component={About} />\n  </Router>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-20",
      "title": "What is the useReducer hook?",
      "content": "The useReducer hook is used for managing complex state logic in functional components. It’s an alternative to useState, taking a reducer function and initial state, and returning the current state and a dispatch function.",
      "code": "import React, { useReducer } from 'react';\n\nconst initialState = { count: 0 };\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n};\n\nconst Counter = () => {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>\n    </div>\n  );\n};\n\nexport default Counter;"
    },
    {
      "id": "react-theory-21",
      "title": "What is the difference between useState and useReducer?",
      "content": "- useState: Best for simple state updates (e.g., toggles, counters).\n- useReducer: Better for complex state logic with multiple actions or dependencies, using a reducer function to manage state transitions.",
      "code": "import React, { useState, useReducer } from 'react';\n\n// useState\nconst SimpleCounter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Add</button>\n    </div>\n  );\n};\n\n// useReducer\nconst initialState = { count: 0 };\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    default: return state;\n  }\n};\n\nconst ComplexCounter = () => {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>Add</button>\n    </div>\n  );\n};"
    },
    {
      "id": "react-theory-22",
      "title": "What is the useCallback hook?",
      "content": "The useCallback hook returns a memoized callback function that only changes if one of its dependencies changes. It’s used to prevent unnecessary re-renders of child components that rely on callback props.",
      "code": "import React, { useState, useCallback } from 'react';\n\nconst Child = React.memo(({ onClick }) => {\n  console.log('Child rendered');\n  return <button onClick={onClick}>Click Me</button>;\n});\n\nconst Parent = () => {\n  const [count, setCount] = useState(0);\n  const handleClick = useCallback(() => {\n    console.log('Button clicked');\n  }, []);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n      <Child onClick={handleClick} />\n    </div>\n  );\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-23",
      "title": "What is the useMemo hook?",
      "content": "The useMemo hook memoizes the result of a computation, recomputing it only when its dependencies change. It’s used to optimize performance by avoiding expensive calculations on every render.",
      "code": "import React, { useState, useMemo } from 'react';\n\nconst ExpensiveComponent = () => {\n  const [count, setCount] = useState(0);\n  const [other, setOther] = useState(0);\n\n  const expensiveCalculation = useMemo(() => {\n    console.log('Calculating...');\n    return count * 2;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Result: {expensiveCalculation}</p>\n      <button onClick={() => setCount(count + 1)}>Increment Count</button>\n      <button onClick={() => setOther(other + 1)}>Increment Other</button>\n    </div>\n  );\n};\n\nexport default ExpensiveComponent;"
    },
    {
      "id": "react-theory-24",
      "title": "What is the useRef hook?",
      "content": "The useRef hook creates a mutable ref object that persists across renders. It’s commonly used to access DOM elements directly or to store values that don’t trigger re-renders when updated.",
      "code": "import React, { useRef, useEffect } from 'react';\n\nconst InputFocus = () => {\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" placeholder=\"I am focused!\" />\n    </div>\n  );\n};\n\nexport default InputFocus;"
    },
    {
      "id": "react-theory-25",
      "title": "What are controlled components?",
      "content": "Controlled components are form elements whose value is controlled by React state. The input’s value is set via a state variable, and changes are handled by updating the state, ensuring a single source of truth.",
      "code": "import React, { useState } from 'react';\n\nconst ControlledForm = () => {\n  const [value, setValue] = useState('');\n\n  const handleChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return (\n    <form>\n      <input\n        type=\"text\"\n        value={value}\n        onChange={handleChange}\n        placeholder=\"Type something...\"\n      />\n      <p>You typed: {value}</p>\n    </form>\n  );\n};\n\nexport default ControlledForm;"
    },
    {
      "id": "react-theory-26",
      "title": "What are uncontrolled components?",
      "content": "Uncontrolled components are form elements that manage their own state internally, typically accessed via a ref. They are less common in React but can be useful for integrating with non-React code or libraries.",
      "code": "import React, { useRef } from 'react';\n\nconst UncontrolledForm = () => {\n  const inputRef = useRef(null);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Input value: ${inputRef.current.value}`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type=\"text\" ref={inputRef} defaultValue=\"Initial\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n};\n\nexport default UncontrolledForm;"
    },
    {
      "id": "react-theory-27",
      "title": "What is the difference between controlled and uncontrolled components?",
      "content": "- Controlled: The form element’s value is managed by React state (via value and onChange).\n- Uncontrolled: The form element manages its own state, accessed via a ref.",
      "code": "import React, { useState, useRef } from 'react';\n\n// Controlled\nconst ControlledInput = () => {\n  const [value, setValue] = useState('');\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n};\n\n// Uncontrolled\nconst UncontrolledInput = () => {\n  const inputRef = useRef(null);\n  return <input ref={inputRef} defaultValue=\"Initial\" />;\n};"
    },
    {
      "id": "react-theory-28",
      "title": "What are React fragments?",
      "content": "React fragments let you group multiple elements without adding extra nodes to the DOM. They are useful when you need to return multiple elements from a component but don’t want a wrapping div.",
      "code": "import React from 'react';\n\nconst FragmentExample = () => {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Paragraph 1</p>\n      <p>Paragraph 2</p>\n    </>\n  );\n};\n\nexport default FragmentExample;"
    },
    {
      "id": "react-theory-29",
      "title": "What is reconciliation in React?",
      "content": "Reconciliation is the process React uses to update the DOM efficiently. When a component’s state or props change, React compares the new virtual DOM with the previous one (diffing) and updates only the changed parts in the real DOM.",
      "code": "import React, { useState } from 'react';\n\nconst ReconciliationExample = () => {\n  const [text, setText] = useState('Initial');\n\n  return (\n    <div>\n      <p>{text}</p>\n      <button onClick={() => setText('Updated')}>Update</button>\n    </div>\n  );\n};\n\nexport default ReconciliationExample;"
    },
    {
      "id": "react-theory-30",
      "title": "What is the purpose of shouldComponentUpdate?",
      "content": "shouldComponentUpdate is a lifecycle method in class components that determines whether a component should re-render. By default, it returns true, but you can override it to optimize performance by preventing unnecessary renders.",
      "code": "import React, { Component } from 'react';\n\nclass OptimizedComponent extends Component {\n  shouldComponentUpdate(nextProps) {\n    return nextProps.value !== this.props.value;\n  }\n\n  render() {\n    console.log('Rendering...');\n    return <div>Value: {this.props.value}</div>;\n  }\n}\n\nexport default OptimizedComponent;"
    },
    {
      "id": "react-theory-31",
      "title": "What is React.memo?",
      "content": "React.memo is a higher-order component that memoizes functional components, preventing re-renders if the props haven’t changed. It’s similar to shouldComponentUpdate but for functional components.",
      "code": "import React from 'react';\n\nconst Child = React.memo(({ value }) => {\n  console.log('Child rendered');\n  return <div>Value: {value}</div>;\n});\n\nconst Parent = () => {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n      <Child value=\"Static\" />\n    </div>\n  );\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-32",
      "title": "What are higher-order components (HOCs)?",
      "content": "Higher-order components are functions that take a component and return a new component with enhanced functionality. HOCs are used for code reuse, such as adding props, managing state, or implementing logic like authentication.",
      "code": "import React from 'react';\n\nconst withLogger = (WrappedComponent) => {\n  return (props) => {\n    console.log('Rendering:', WrappedComponent.name);\n    return <WrappedComponent {...props} />;\n  };\n};\n\nconst SimpleComponent = () => <div>Simple</div>;\nconst LoggedComponent = withLogger(SimpleComponent);\n\nexport default LoggedComponent;"
    },
    {
      "id": "react-theory-33",
      "title": "What are render props?",
      "content": "Render props is a pattern where a component accepts a function as a prop (usually called render) and uses it to render part of its content. It’s a way to share logic between components, similar to HOCs.",
      "code": "import React from 'react';\n\nconst MouseTracker = ({ render }) => {\n  const [position, setPosition] = React.useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (e) => {\n    setPosition({ x: e.clientX, y: e.clientY });\n  };\n\n  return (\n    <div onMouseMove={handleMouseMove} style={{ height: '100px' }}>\n      {render(position)}\n    </div>\n  );\n};\n\nconst App = () => (\n  <MouseTracker render={({ x, y }) => (\n    <p>Mouse position: ({x}, {y})</p>\n  )} />\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-34",
      "title": "What is the difference between HOCs and render props?",
      "content": "- HOCs: Wrap a component to add functionality, returning a new component.\n- Render Props: Pass a render function as a prop to share logic, allowing dynamic rendering.",
      "code": "// HOC\nimport React from 'react';\nconst withData = (Component) => (props) => <Component data=\"Shared\" {...props} />;\nconst DataComponent = withData(() => <div>{props.data}</div>);\n\n// Render Props\nconst DataProvider = ({ render }) => render('Shared');\nconst RenderPropComponent = () => (\n  <DataProvider render={(data) => <div>{data}</div>} />\n);"
    },
    {
      "id": "react-theory-35",
      "title": "What is lazy loading in React?",
      "content": "Lazy loading in React involves loading components only when they are needed, reducing the initial bundle size. React provides React.lazy and Suspense to implement lazy loading.",
      "code": "import React, { lazy, Suspense } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nconst App = () => (\n  <Suspense fallback={<div>Loading...</div>}>\n    <LazyComponent />\n  </Suspense>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-36",
      "title": "What is Suspense in React?",
      "content": "Suspense is a React feature that lets you specify a fallback UI (like a loading spinner) while a component is being loaded (e.g., with lazy loading) or while waiting for data (with Suspense for data fetching in React 18+).",
      "code": "import React, { Suspense } from 'react';\n\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nconst App = () => (\n  <Suspense fallback={<div>Loading...</div>}>\n    <LazyComponent />\n  </Suspense>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-37",
      "title": "What is code splitting in React?",
      "content": "Code splitting is a technique to split your JavaScript bundle into smaller chunks, loading them on demand. In React, this is often done using React.lazy and Suspense to improve performance by reducing initial load time.",
      "code": "import React, { lazy, Suspense } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nconst App = () => (\n  <Suspense fallback={<div>Loading...</div>}>\n    <LazyComponent />\n  </Suspense>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-38",
      "title": "What is the useImperativeHandle hook?",
      "content": "The useImperativeHandle hook customizes the instance value that is exposed to parent components when using ref. It’s typically used with forwardRef to control what methods or values a parent can access.",
      "code": "import React, { useRef, useImperativeHandle, forwardRef } from 'react';\n\nconst CustomInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    focus: () => inputRef.current.focus(),\n  }));\n\n  return <input ref={inputRef} type=\"text\" />;\n});\n\nconst Parent = () => {\n  const inputRef = useRef();\n  return (\n    <div>\n      <CustomInput ref={inputRef} />\n      <button onClick={() => inputRef.current.focus()}>Focus Input</button>\n    </div>\n  );\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-39",
      "title": "What is forwardRef in React?",
      "content": "forwardRef is a function that allows you to pass a ref from a parent component to a child component, enabling the parent to directly access the child’s DOM element or instance.",
      "code": "import React, { useRef, forwardRef } from 'react';\n\nconst Child = forwardRef((props, ref) => {\n  return <input ref={ref} type=\"text\" />;\n});\n\nconst Parent = () => {\n  const inputRef = useRef();\n  const focusInput = () => inputRef.current.focus();\n\n  return (\n    <div>\n      <Child ref={inputRef} />\n      <button onClick={focusInput}>Focus Input</button>\n    </div>\n  );\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-40",
      "title": "What is the difference between useEffect and useLayoutEffect?",
      "content": "- useEffect: Runs asynchronously after the DOM has been updated, suitable for most side effects.\n- useLayoutEffect: Runs synchronously after DOM updates but before the browser paints, useful for DOM measurements.",
      "code": "import React, { useEffect, useLayoutEffect, useState } from 'react';\n\nconst Example = () => {\n  const [value, setValue] = useState(0);\n\n  useEffect(() => {\n    console.log('useEffect: After render');\n  }, [value]);\n\n  useLayoutEffect(() => {\n    console.log('useLayoutEffect: Before paint');\n  }, [value]);\n\n  return <button onClick={() => setValue(value + 1)}>Update</button>;\n};\n\nexport default Example;"
    },
    {
      "id": "react-theory-41",
      "title": "What are React portals?",
      "content": "React portals allow you to render a component’s content into a different DOM node outside the parent component’s DOM hierarchy. This is useful for modals, tooltips, or overlays.",
      "code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst Modal = ({ children }) => {\n  return ReactDOM.createPortal(\n    <div className=\"modal\">{children}</div>,\n    document.getElementById('modal-root')\n  );\n};\n\nconst App = () => (\n  <div>\n    <Modal>\n      <h1>Modal Content</h1>\n    </Modal>\n  </div>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-42",
      "title": "What are error boundaries in React?",
      "content": "Error boundaries are React components that catch JavaScript errors in their child component tree, log them, and display a fallback UI. They are implemented using componentDidCatch and static getDerivedStateFromError in class components.",
      "code": "import React, { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children;\n  }\n}\n\nconst BuggyComponent = () => {\n  throw new Error('I crashed!');\n};\n\nconst App = () => (\n  <ErrorBoundary>\n    <BuggyComponent />\n  </ErrorBoundary>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-43",
      "title": "What is the purpose of getDerivedStateFromError?",
      "content": "getDerivedStateFromError is a static lifecycle method in error boundaries that updates the state when an error occurs, allowing the component to render a fallback UI. It works alongside componentDidCatch.",
      "code": "import React, { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Error occurred!</h1>;\n    }\n    return this.props.children;\n  }\n}\n\nexport default ErrorBoundary;"
    },
    {
      "id": "react-theory-44",
      "title": "What is the difference between React and ReactDOM?",
      "content": "- React: The core library for building components and managing state.\n- ReactDOM: Handles rendering React components to the DOM (e.g., ReactDOM.render).",
      "code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => <h1>Hello, ReactDOM!</h1>;\n\nReactDOM.render(<App />, document.getElementById('root'));"
    },
    {
      "id": "react-theory-45",
      "title": "What are synthetic events in React?",
      "content": "Synthetic events are React’s cross-browser wrapper around the browser’s native events. They provide a consistent API for handling events across different browsers and normalize event properties.",
      "code": "import React from 'react';\n\nconst EventExample = () => {\n  const handleClick = (e) => {\n    console.log('Synthetic Event:', e.type);\n  };\n\n  return <button onClick={handleClick}>Click Me</button>;\n};\n\nexport default EventExample;"
    },
    {
      "id": "react-theory-46",
      "title": "What is the difference between React Native and React?",
      "content": "- React: A library for building web applications using components rendered to the DOM.\n- React Native: A framework for building mobile apps using React, rendering native components instead of DOM elements.",
      "code": "// React (Web)\nimport React from 'react';\nconst App = () => <View>Hello, React!</View>;\n\n// React Native\nimport React from 'react';\nimport { View, Text } from 'react-native';\nconst App = () => (\n  <View>\n    <Text>Hello, React Native!</Text>\n  </View>\n);"
    },
    {
      "id": "react-theory-47",
      "title": "What are React children?",
      "content": "React children refer to the content passed between a component’s opening and closing tags. The children prop allows components to render nested elements or components dynamically.",
      "code": "import React from 'react';\n\nconst Wrapper = ({ children }) => {\n  return <div className=\"wrapper\">{children}</div>;\n};\n\nconst App = () => (\n  <Wrapper>\n    <h1>Child Content</h1>\n    <p>More child content</p>\n  </Wrapper>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-48",
      "title": "What is the purpose of React.Children utilities?",
      "content": "React.Children provides utilities to manipulate and traverse the children prop, such as React.Children.map, React.Children.forEach, and React.Children.count, ensuring safe handling of children.",
      "code": "import React from 'react';\n\nconst List = ({ children }) => {\n  return (\n    <ul>\n      {React.Children.map(children, (child, index) => (\n        <li key={index}>{child}</li>\n      ))}\n    </ul>\n  );\n};\n\nconst App = () => (\n  <List>\n    <span>Item 1</span>\n    <span>Item 2</span>\n  </List>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-49",
      "title": "What are defaultProps in React?",
      "content": "defaultProps is a static property in a component that defines default values for props, used when a prop is undefined. It ensures components have fallback values.",
      "code": "import React from 'react';\n\nconst Button = ({ label }) => {\n  return <button>{label}</button>;\n};\n\nButton.defaultProps = {\n  label: 'Click Me',\n};\n\nexport default Button;"
    },
    {
      "id": "react-theory-50",
      "title": "What is propTypes in React?",
      "content": "propTypes is a mechanism for type-checking props in React components. It helps catch bugs by validating the types of props passed to a component during development.",
      "code": "import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst User = ({ name, age }) => {\n  return <p>{name}, {age} years old</p>;\n};\n\nUser.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number.isRequired,\n};\n\nexport default User;"
    },
    {
      "id": "react-theory-51",
      "title": "What is the difference between defaultProps and propTypes?",
      "content": "- defaultProps: Sets default values for props if they are undefined.\n- propTypes: Validates the types of props during development to catch errors.",
      "code": "import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst Component = ({ text }) => <div>{text}</div>;\n\nComponent.defaultProps = {\n  text: 'Default Text',\n};\n\nComponent.propTypes = {\n  text: PropTypes.string,\n};\n\nexport default Component;"
    },
    {
      "id": "react-theory-52",
      "title": "What are React portals used for?",
      "content": "Portals are used to render a component’s content into a different DOM node, outside the parent’s DOM hierarchy. Common use cases include modals, popups, and tooltips.",
      "code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst Modal = ({ children }) => {\n  return ReactDOM.createPortal(\n    <div className=\"modal\">{children}</div>,\n    document.getElementById('modal-root')\n  );\n};\n\nexport default Modal;"
    },
    {
      "id": "react-theory-53",
      "title": "What is server-side rendering (SSR) in React?",
      "content": "Server-side rendering (SSR) involves rendering React components on the server and sending the generated HTML to the client. It improves SEO and initial load performance. Frameworks like Next.js simplify SSR in React.",
      "code": "// pages/index.js in Next.js\nimport React from 'react';\n\nexport default function Home({ data }) {\n  return <div>{data}</div>;\n}\n\nexport async function getServerSideProps() {\n  const data = 'Server-side rendered';\n  return { props: { data } };\n}"
    },
    {
      "id": "react-theory-54",
      "title": "What is static site generation (SSG) in React?",
      "content": "Static site generation (SSG) pre-renders React pages at build time into static HTML files. It’s useful for content that doesn’t change often, improving performance. Next.js supports SSG via getStaticProps.",
      "code": "// pages/index.js in Next.js\nimport React from 'react';\n\nexport default function Home({ data }) {\n  return <div>{data}</div>;\n}\n\nexport async function getStaticProps() {\n  const data = 'Static content';\n  return { props: { data } };\n}"
    },
    {
      "id": "react-theory-55",
      "title": "What is the difference between SSR and SSG?",
      "content": "- SSR: Renders pages on the server for each request, good for dynamic data.\n- SSG: Pre-renders pages at build time, good for static content.",
      "code": "// SSR in Next.js\nexport async function getServerSideProps() {\n  const data = 'Dynamic';\n  return { props: { data } };\n}\n\n// SSG in Next.js\nexport async function getStaticProps() {\n  const data = 'Static';\n  return { props: { data } };\n}"
    },
    {
      "id": "react-theory-56",
      "title": "What are React hooks rules?",
      "content": "React hooks have two main rules:\n1. Only call hooks at the top level (not inside loops, conditions, or nested functions).\n2. Only call hooks from React functional components (not regular JavaScript functions).",
      "code": "import React, { useState, useEffect } from 'react';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return <button onClick={() => setCount(count + 1)}>Increment</button>;\n};\n\nexport default Example;"
    },
    {
      "id": "react-theory-57",
      "title": "What is the purpose of the dependency array in useEffect?",
      "content": "The dependency array in useEffect determines when the effect runs. If empty, the effect runs once on mount. If it includes variables, the effect runs whenever those variables change.",
      "code": "import React, { useState, useEffect } from 'react';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    console.log('Effect ran:', count);\n  }, [count]);\n\n  return <button onClick={() => setCount(count + 1)}>Increment</button>;\n};\n\nexport default Example;"
    },
    {
      "id": "react-theory-58",
      "title": "What is a custom hook in React?",
      "content": "A custom hook is a reusable function that encapsulates hook-based logic (e.g., useState, useEffect) to share functionality across components. Custom hooks must start with 'use' by convention.",
      "code": "import React, { useState, useEffect } from 'react';\n\nconst useWindowSize = () => {\n  const [size, setSize] = useState({ width: 0, height: 0 });\n\n  useEffect(() => {\n    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });\n    window.addEventListener('resize', handleResize);\n    handleResize();\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return size;\n};\n\nconst App = () => {\n  const { width, height } = useWindowSize();\n  return <p>Window: {width} x {height}</p>;\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-59",
      "title": "How do you optimize performance in React?",
      "content": "Performance optimization in React includes:\n- Using React.memo to prevent unnecessary renders.\n- Memoizing expensive computations with useMemo.\n- Using useCallback for callbacks.\n- Code splitting with React.lazy and Suspense.\n- Avoiding unnecessary state updates.",
      "code": "import React, { useState, useMemo } from 'react';\n\nconst Child = React.memo(({ value }) => <div>{value}</div>);\n\nconst Parent = () => {\n  const [count, setCount] = useState(0);\n  const expensiveValue = useMemo(() => count * 2, [count]);\n\n  return (\n    <div>\n      <Child value={expensiveValue} />\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\nexport default Parent;"
    },
    {
      "id": "react-theory-60",
      "title": "What are React strict mode?",
      "content": "StrictMode is a development tool in React that highlights potential problems by activating additional checks and warnings, such as detecting unsafe lifecycle methods or deprecated APIs.",
      "code": "import React from 'react';\n\nconst App = () => {\n  return (\n    <React.StrictMode>\n      <div>Hello, StrictMode!</div>\n    </React.StrictMode>\n  );\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-61",
      "title": "What is the difference between element and component in React?",
      "content": "- Element: A plain object describing what you want to appear on the screen (e.g., JSX).\n- Component: A function or class that accepts props and returns a React element.",
      "code": "// Element\nconst element = <h1>Hello</h1>;\n\n// Component\nimport React from 'react';\nconst Component = () => <h1>Hello</h1>;\n\nconst App = () => <Component />;"
    },
    {
      "id": "react-theory-62",
      "title": "What is the difference between stateful and stateless components?",
      "content": "- Stateful: Components that manage state (e.g., using useState or this.state).\n- Stateless: Components that don’t manage state, only rendering based on props.",
      "code": "// Stateful\nimport React, { useState } from 'react';\nconst Stateful = () => {\n  const [count, setCount] = useState(0);\n  return <p>{count}</p>;\n};\n\n// Stateless\nconst Stateless = ({ count }) => <p>{count}</p>;"
    },
    {
      "id": "react-theory-63",
      "title": "What is the purpose of useEffect cleanup?",
      "content": "The cleanup function in useEffect (returned from the effect) runs before the next effect or when the component unmounts. It’s used to clean up resources like timers, subscriptions, or event listeners.",
      "code": "import React, { useEffect } from 'react';\n\nconst Timer = () => {\n  useEffect(() => {\n    const timer = setInterval(() => console.log('Tick'), 1000);\n    return () => clearInterval(timer);\n  }, []);\n\n  return <div>Timer running...</div>;\n};\n\nexport default Timer;"
    },
    {
      "id": "react-theory-64",
      "title": "What are React hooks benefits?",
      "content": "Hooks benefits include:\n- Reusing stateful logic without HOCs or render props.\n- Avoiding class component complexity.\n- Better organization of related code (e.g., grouping state and effects).",
      "code": "import React, { useState, useEffect } from 'react';\n\nconst Example = () => {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    setTimeout(() => setData('Loaded'), 1000);\n  }, []);\n\n  return <div>{data || 'Loading...'}</div>;\n};\n\nexport default Example;"
    },
    {
      "id": "react-theory-65",
      "title": "What is the difference between React and Vue?",
      "content": "- React: A library focused on components and JSX, with a larger ecosystem (e.g., React Router, Redux).\n- Vue: A framework with a template-based syntax, built-in features like Vuex and Vue Router, and a more gradual learning curve.",
      "code": "// React\nimport React from 'react';\nconst App = () => <div>Hello, React!</div>;\n\n// Vue (equivalent)\n<template>\n  <div>Hello, Vue!</div>\n</template>\n<script>\nexport default {\n  name: 'App'\n}\n</script>"
    },
    {
      "id": "react-theory-66",
      "title": "What is Redux in React?",
      "content": "Redux is a state management library for React that provides a predictable state container. It uses a single source of truth (store), actions to describe changes, and reducers to update the state.",
      "code": "import { createStore } from 'redux';\n\n// Reducer\nconst counter = (state = 0, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n};\n\n// Store\nconst store = createStore(counter);\n\nstore.dispatch({ type: 'INCREMENT' });\nconsole.log(store.getState()); // 1"
    },
    {
      "id": "react-theory-67",
      "title": "What are the three principles of Redux?",
      "content": "1. Single Source of Truth: The state is stored in a single store.\n2. State is Read-Only: The only way to change state is by dispatching actions.\n3. Changes are Made with Pure Functions: Reducers are pure functions that take the current state and an action to return a new state.",
      "code": "import { createStore } from 'redux';\n\nconst reducer = (state = { count: 0 }, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer);\nstore.dispatch({ type: 'INCREMENT' });\nconsole.log(store.getState()); // { count: 1 }"
    },
    {
      "id": "react-theory-68",
      "title": "What is the useSelector hook in React-Redux?",
      "content": "The useSelector hook in React-Redux allows functional components to access the Redux store’s state. It takes a selector function to extract the desired state and re-renders the component when that state changes.",
      "code": "import React from 'react';\nimport { useSelector, useDispatch } from 'react-redux';\n\nconst Counter = () => {\n  const count = useSelector((state) => state.count);\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;"
    },
    {
      "id": "react-theory-69",
      "title": "What is the useDispatch hook in React-Redux?",
      "content": "The useDispatch hook in React-Redux returns the dispatch function from the Redux store, allowing you to dispatch actions to update the state from functional components.",
      "code": "import React from 'react';\nimport { useDispatch } from 'react-redux';\n\nconst Button = () => {\n  const dispatch = useDispatch();\n\n  return (\n    <button onClick={() => dispatch({ type: 'INCREMENT' })}>\n      Increment\n    </button>\n  );\n};\n\nexport default Button;"
    },
    {
      "id": "react-theory-70",
      "title": "What is Redux Toolkit?",
      "content": "Redux Toolkit is the official, recommended way to write Redux logic. It simplifies Redux setup with utilities like createSlice (for reducers), configureStore, and built-in middleware like Redux Thunk.",
      "code": "import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { count: 0 },\n  reducers: {\n    increment(state) {\n      state.count += 1;\n    },\n  },\n});\n\nconst store = configureStore({\n  reducer: counterSlice.reducer,\n});\n\nstore.dispatch(counterSlice.actions.increment());\nconsole.log(store.getState()); // { count: 1 }"
    },
    {
      "id": "react-theory-71",
      "title": "What is React Context API?",
      "content": "The Context API is a React feature for sharing global state without prop drilling. It consists of a Provider (to supply the data) and a Consumer (or useContext hook) to access the data.",
      "code": "import React, { createContext, useContext } from 'react';\n\nconst UserContext = createContext();\n\nconst Child = () => {\n  const user = useContext(UserContext);\n  return <p>User: {user}</p>;\n};\n\nconst App = () => (\n  <UserContext.Provider value=\"Alice\">\n    <Child />\n  </UserContext.Provider>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-72",
      "title": "What is the difference between Redux and Context API?",
      "content": "- Context API: Built into React, good for simple global state (e.g., theme, user data).\n- Redux: A full state management library, better for complex state logic with middleware and dev tools.",
      "code": "// Context API\nimport React, { createContext, useContext } from 'react';\nconst ThemeContext = createContext('light');\nconst App = () => (\n  <ThemeContext.Provider value=\"dark\">\n    <Child />\n  </ThemeContext.Provider>\n);\n\n// Redux\nimport { createStore } from 'redux';\nconst store = createStore((state = { theme: 'light' }, action) => state);"
    },
    {
      "id": "react-theory-73",
      "title": "What is React Fiber?",
      "content": "React Fiber is the rewritten reconciliation engine introduced in React 16. It improves rendering performance by breaking work into smaller units, enabling features like concurrent rendering, Suspense, and better scheduling.",
      "code": "// React Fiber enables features like Suspense\nimport React, { Suspense } from 'react';\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nconst App = () => (\n  <Suspense fallback={<div>Loading...</div>}>\n    <LazyComponent />\n  </Suspense>\n);\n\nexport default App;"
    },
    {
      "id": "react-theory-74",
      "title": "What is concurrent rendering in React?",
      "content": "Concurrent rendering (introduced in React 18) allows React to work on multiple tasks simultaneously, prioritizing important updates (e.g., user interactions) over less urgent ones, improving responsiveness.",
      "code": "import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst App = () => <h1>Concurrent Rendering</h1>;\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);"
    },
    {
      "id": "react-theory-75",
      "title": "What are React concurrent features?",
      "content": "React concurrent features (React 18) include:\n- Concurrent rendering with createRoot.\n- Automatic batching of state updates.\n- Transitions (startTransition) for non-urgent updates.\n- Suspense for data fetching.",
      "code": "import React, { useState, startTransition } from 'react';\n\nconst App = () => {\n  const [data, setData] = useState('');\n\n  const handleClick = () => {\n    startTransition(() => {\n      setData('Non-urgent update');\n    });\n  };\n\n  return <button onClick={handleClick}>Update</button>;\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-76",
      "title": "What is automatic batching in React 18?",
      "content": "Automatic batching in React 18 groups multiple state updates into a single re-render, even for asynchronous updates (e.g., in setTimeout or Promises), improving performance.",
      "code": "import React, { useState } from 'react';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n\n  const handleClick = () => {\n    setTimeout(() => {\n      setCount(c => c + 1);\n      setFlag(f => !f);\n    }, 1000);\n  };\n\n  console.log('Rendered');\n  return <button onClick={handleClick}>Update</button>;\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-77",
      "title": "What is the startTransition API?",
      "content": "The startTransition API (React 18) marks state updates as non-urgent, allowing React to prioritize more important updates (e.g., user interactions) while deferring less critical ones.",
      "code": "import React, { useState, startTransition } from 'react';\n\nconst App = () => {\n  const [text, setText] = useState('');\n\n  const handleChange = (e) => {\n    startTransition(() => {\n      setText(e.target.value);\n    });\n  };\n\n  return (\n    <div>\n      <input onChange={handleChange} value={text} />\n      <p>{text}</p>\n    </div>\n  );\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-78",
      "title": "What are React dev tools?",
      "content": "React Developer Tools is a browser extension that allows you to inspect the React component tree, view props and state, and debug performance issues. It’s available for Chrome and Firefox.",
      "code": "// Install React DevTools and inspect the component tree\nimport React from 'react';\nconst App = () => <div>Check me in DevTools!</div>;\n\nexport default App;"
    },
    {
      "id": "react-theory-79",
      "title": "What is the difference between useState and Redux?",
      "content": "- useState: Local state management for a single component.\n- Redux: Global state management for the entire app, with a predictable state container.",
      "code": "// useState\nimport React, { useState } from 'react';\nconst LocalCounter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n};\n\n// Redux\nimport { useSelector, useDispatch } from 'react-redux';\nconst GlobalCounter = () => {\n  const count = useSelector((state) => state.count);\n  const dispatch = useDispatch();\n  return <button onClick={() => dispatch({ type: 'INCREMENT' })}>{count}</button>;\n};"
    },
    {
      "id": "react-theory-80",
      "title": "What is the difference between useMemo and useCallback?",
      "content": "- useMemo: Memoizes a computed value, recomputing only when dependencies change.\n- useCallback: Memoizes a function, re-creating it only when dependencies change.",
      "code": "import React, { useState, useMemo, useCallback } from 'react';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const memoizedValue = useMemo(() => count * 2, [count]);\n  const memoizedCallback = useCallback(() => console.log(count), [count]);\n\n  return (\n    <div>\n      <p>Value: {memoizedValue}</p>\n      <button onClick={memoizedCallback}>Log Count</button>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-81",
      "title": "What is the purpose of useDebugValue?",
      "content": "useDebugValue is a hook used in custom hooks to display a label in React DevTools, making it easier to debug the hook’s internal state or values.",
      "code": "import React, { useState, useDebugValue } from 'react';\n\nconst useCustomHook = () => {\n  const [value, setValue] = useState(0);\n  useDebugValue(`Value: ${value}`);\n  return [value, setValue];\n};\n\nconst App = () => {\n  const [value] = useCustomHook();\n  return <div>{value}</div>;\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-82",
      "title": "What is hydration in React?",
      "content": "Hydration is the process of attaching event listeners and React state to server-rendered HTML on the client side. It’s used in SSR to make the static HTML interactive.",
      "code": "import React from 'react';\nimport { hydrateRoot } from 'react-dom/client';\n\nconst App = () => <div>Hello, Hydrated!</div>;\n\n// Hydrate server-rendered HTML\nhydrateRoot(document.getElementById('root'), <App />);"
    },
    {
      "id": "react-theory-83",
      "title": "What is the difference between createElement and JSX?",
      "content": "- createElement: A React function to create elements programmatically.\n- JSX: A syntax sugar that gets transpiled into createElement calls, making the code more readable.",
      "code": "// createElement\nimport React from 'react';\nconst element = React.createElement('h1', null, 'Hello');\n\n// JSX\nconst jsxElement = <h1>Hello</h1>;"
    },
    {
      "id": "react-theory-84",
      "title": "What are React hooks limitations?",
      "content": "Hooks limitations include:\n- They can only be used in functional components.\n- They must be called at the top level (not inside loops or conditions).\n- They can’t be used to replace all class features (e.g., getSnapshotBeforeUpdate).",
      "code": "import React, { useState } from 'react';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n  // Correct: Top-level\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n};\n\nexport default Example;"
    },
    {
      "id": "react-theory-85",
      "title": "What is the difference between React and Angular?",
      "content": "- React: A library for building UI components, uses JSX, and focuses on flexibility.\n- Angular: A full framework with TypeScript, templates, and a more opinionated structure.",
      "code": "// React\nimport React from 'react';\nconst App = () => <div>Hello, React!</div>;\n\n// Angular (equivalent)\n@Component({\n  selector: 'app-root',\n  template: '<div>Hello, Angular!</div>'\n})\nexport class AppComponent {}"
    },
    {
      "id": "react-theory-86",
      "title": "What is the difference between useEffect and componentDidMount?",
      "content": "- useEffect: Hook for side effects in functional components, can run on mount and updates.\n- componentDidMount: Lifecycle method in class components, runs only once after mounting.",
      "code": "// useEffect\nimport React, { useEffect } from 'react';\nconst FuncComponent = () => {\n  useEffect(() => {\n    console.log('Mounted');\n  }, []);\n  return <div>Functional</div>;\n};\n\n// componentDidMount\nimport React, { Component } from 'react';\nclass ClassComponent extends Component {\n  componentDidMount() {\n    console.log('Mounted');\n  }\n  render() {\n    return <div>Class</div>;\n  }\n}"
    },
    {
      "id": "react-theory-87",
      "title": "What is the purpose of useId in React 18?",
      "content": "useId (React 18) generates a unique ID that can be used for accessibility attributes (e.g., associating labels with inputs). It ensures consistency across server and client rendering.",
      "code": "import React, { useId } from 'react';\n\nconst Form = () => {\n  const id = useId();\n  return (\n    <div>\n      <label htmlFor={id}>Name:</label>\n      <input id={id} type=\"text\" />\n    </div>\n  );\n};\n\nexport default Form;"
    },
    {
      "id": "react-theory-88",
      "title": "What is the difference between React and Next.js?",
      "content": "- React: A library for building UI components.\n- Next.js: A React framework with built-in features like SSR, SSG, file-based routing, and API routes.",
      "code": "// React\nimport React from 'react';\nconst App = () => <div>Hello, React!</div>;\n\n// Next.js (pages/index.js)\nimport React from 'react';\nexport default function Home() {\n  return <div>Hello, Next.js!</div>;\n}"
    },
    {
      "id": "react-theory-89",
      "title": "What is React reconciliation algorithm?",
      "content": "React’s reconciliation algorithm (diffing) compares the new virtual DOM with the previous one to determine the minimal set of DOM updates needed. It uses heuristics like assuming elements with the same key are the same.",
      "code": "import React, { useState } from 'react';\n\nconst App = () => {\n  const [items, setItems] = useState(['A', 'B']);\n\n  return (\n    <div>\n      {items.map((item) => <div key={item}>{item}</div>)}\n      <button onClick={() => setItems(['B', 'A'])}>Swap</button>\n    </div>\n  );\n};\n\nexport default App;"
    },
    {
      "id": "react-theory-90",
      "title": "What are React inline styles?",
      "content": "Inline styles in React are applied using the style prop with a JavaScript object. Property names are camelCased (e.g., backgroundColor), and values are typically strings or numbers.",
      "code": "import React from 'react';\n\nconst StyledComponent = () => {\n  const styles = {\n    backgroundColor: 'lightblue',\n    padding: '10px',\n    borderRadius: '5px',\n  };\n\n  return <div style={styles}>Styled Div</div>;\n};\n\nexport default StyledComponent;"
    },
    {
      "id": "react-theory-91",
      "title": "What is the difference between inline styles and CSS modules?",
      "content": "- Inline Styles: Applied via the style prop, scoped to the component, but harder to manage for large apps.\n- CSS Modules: Scoped CSS files imported into components, providing better organization and specificity.",
      "code": "// Inline Styles\nimport React from 'react';\nconst Inline = () => <div style={{ color: 'blue' }}>Inline</div>;\n\n// CSS Modules (styles.module.css)\n/* .text { color: blue; } */\n// Component\nimport React from 'react';\nimport styles from './styles.module.css';\nconst Module = () => <div className={styles.text}>Module</div>;"
    },
    {
      "id": "react-theory-92",
      "title": "What are React synthetic events benefits?",
      "content": "Synthetic events benefits include:\n- Cross-browser consistency.\n- Event delegation for better performance.\n- Automatic cleanup of event listeners.",
      "code": "import React from 'react';\n\nconst Button = () => {\n  const handleClick = (e) => {\n    console.log(e.type); // 'click'\n  };\n\n  return <button onClick={handleClick}>Click Me</button>;\n};\n\nexport default Button;"
    },
    {
      "id": "react-theory-93",
      "title": "What is the difference between useRef and createRef?",
      "content": "- useRef: Hook for functional components, persists across renders.\n- createRef: Function for class components, creates a new ref on each render.",
      "code": "// useRef\nimport React, { useRef } from 'react';\nconst FuncComponent = () => {\n  const ref = useRef(null);\n  return <div ref={ref}>Functional</div>;\n};\n\n// createRef\nimport React, { Component, createRef } from 'react';\nclass ClassComponent extends Component {\n  constructor() {\n    super();\n    this.ref = createRef();\n  }\n  render() {\n    return <div ref={this.ref}>Class</div>;\n  }\n}"
    }]}