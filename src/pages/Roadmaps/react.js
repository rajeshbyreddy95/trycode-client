export const reactroadmap = {
  "courseTitle": "React.js Roadmap for Beginners (2025 Edition)",
  "description": "A beginner-friendly roadmap to learn React.js for building modern web applications with hands-on projects and interview prep.",
  "stages": [
    {
      "stage": "Stage 1",
      "title": "React Basics",
      "goal": "Understand React's core concepts and create your first components.",
      "topics": [
        "What is React?",
        "JSX Syntax",
        "Functional vs Class Components",
        "Props and Component Reusability",
        "useState Hook",
        "Handling Events",
        "Basic Conditional Rendering"
      ],
      "practiceQuestions": [
        "Create a counter using useState.",
        "Build a reusable Button component.",
        "Create a Greeting component that accepts a name prop.",
        "Toggle a div on button click."
      ]
    },
    {
      "stage": "Stage 2",
      "title": "Component Communication and Lists",
      "goal": "Learn how components interact and manage dynamic content.",
      "topics": [
        "Passing Props Between Components",
        "Lifting State Up",
        "Rendering Lists with map()",
        "Keys in React",
        "Basic Forms and Input Handling"
      ],
      "practiceQuestions": [
        "Create a Todo List app with add and delete functionality.",
        "Pass data from a child to a parent component using callbacks.",
        "Render a list of products dynamically from an array.",
        "Build a form that shows live input values."
      ]
    },
    {
      "stage": "Stage 3",
      "title": "State Management with Hooks",
      "goal": "Manage more complex state and side effects.",
      "topics": [
        "useEffect Hook",
        "Dependency Arrays",
        "Conditional Side Effects",
        "Fetching API Data",
        "Loading and Error States",
        "Custom Hooks (Intro)"
      ],
      "practiceQuestions": [
        "Fetch and display a list of users from an API.",
        "Show a loading spinner while fetching data.",
        "Create a custom hook for toggling state.",
        "Implement a clock using useEffect."
      ]
    },
    {
      "stage": "Stage 4",
      "title": "Routing and Navigation",
      "goal": "Add pages and navigation to your React app.",
      "topics": [
        "React Router Basics",
        "Route, Link, NavLink",
        "Dynamic Routes",
        "Passing Params and Query Strings",
        "Nested Routes",
        "404 Page Handling"
      ],
      "practiceQuestions": [
        "Create a multi-page app with Home, About, and Contact.",
        "Implement navigation using NavLink.",
        "Pass route parameters and display details dynamically.",
        "Build a Not Found (404) page."
      ]
    },
    {
      "stage": "Stage 5",
      "title": "Advanced React",
      "goal": "Understand advanced techniques used in real-world apps.",
      "topics": [
        "Context API",
        "useContext Hook",
        "Performance Optimization (React.memo, useCallback)",
        "Error Boundaries",
        "Ref and useRef Hook",
        "Portals (Intro)"
      ],
      "practiceQuestions": [
        "Build a theme switcher using Context API.",
        "Optimize re-renders using React.memo.",
        "Use refs to focus an input on load.",
        "Handle errors gracefully with Error Boundaries."
      ]
    },
    {
      "stage": "Stage 6",
      "title": "React for Real Projects",
      "goal": "Build complete apps and deploy them.",
      "topics": [
        "Folder Structure and Modularization",
        "Project Planning and Component Tree",
        "Forms with Formik or React Hook Form",
        "State Management with Redux or Context",
        "Deployment to Vercel/Netlify",
        "Environment Variables"
      ],
      "projectIdeas": [
        "Blog Website",
        "Portfolio Site",
        "Weather App using API",
        "Movie Search App",
        "E-commerce Cart UI"
      ]
    }
  ],
  "bonus": {
    "title": "Interview Preparation Topics",
    "topics": [
      "Difference between Props and State",
      "Why use React?",
      "Virtual DOM and Reconciliation",
      "Lifecycle Methods vs Hooks",
      "Controlled vs Uncontrolled Components",
      "React Key Prop and its Importance"
    ]
  }
}
