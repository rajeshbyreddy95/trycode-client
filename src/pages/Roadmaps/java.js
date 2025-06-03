export const javaRoadmapData = {
  courseTitle: "Java Roadmap for Beginners (2025 Edition)",
  description: "A complete guide from beginner to intermediate Java developer, covering core Java, OOP, collections, DSA, and project building.",
  stages: [
    {
      stage: "Stage 1",
      title: "Java Basics – Fundamentals",
      goal: "Understand syntax, data types, loops, and logic.",
      topics: [
        "What is Java? (JVM, JDK, JRE)",
        "Variables and Data Types",
        "Operators",
        "Conditional Statements (if, else, switch)",
        "Loops (for, while, do-while)",
        "Input/Output (Scanner, System.out)"
      ],
      practiceQuestions: [
        "Write a program to check if a number is even or odd.",
        "Print the multiplication table of any number.",
        "Write a simple calculator using switch.",
        "Print prime numbers from 1 to 100."
      ]
    },
    {
      stage: "Stage 2",
      title: "Object-Oriented Programming (OOP)",
      goal: "Master class-based design, encapsulation, inheritance, etc.",
      topics: [
        "Classes and Objects",
        "Constructors",
        "Inheritance (Single, Multilevel)",
        "Polymorphism (Method Overloading & Overriding)",
        "Abstraction (Abstract classes, Interfaces)",
        "Encapsulation"
      ],
      practiceQuestions: [
        "Design a class Student with attributes and methods.",
        "Create a class hierarchy: Person → Employee → Manager.",
        "Demonstrate method overriding with animal sounds.",
        "Create an abstract class Shape and implement area() in Circle and Rectangle."
      ]
    },
    {
      stage: "Stage 3",
      title: "Java Intermediate Topics",
      goal: "Learn deeper features for real apps and job prep.",
      topics: [
        "Static keyword",
        "this and super",
        "Access Modifiers",
        "Packages",
        "Exception Handling (try, catch, finally, throw, throws)",
        "File Handling (File, Scanner, BufferedReader, FileWriter)"
      ],
      practiceQuestions: [
        "Read a file and count the number of words.",
        "Handle division by zero with exception handling.",
        "Write a program that serializes and deserializes an object.",
        "Create your own package and use it."
      ]
    },
    {
      stage: "Stage 4",
      title: "Java Collections Framework (JCF)",
      goal: "Store and manipulate structured data efficiently.",
      topics: [
        "List (ArrayList, LinkedList)",
        "Set (HashSet, TreeSet)",
        "Map (HashMap, TreeMap)",
        "Stack & Queue",
        "Iterators"
      ],
      practiceQuestions: [
        "Store and sort student names using ArrayList.",
        "Create a phonebook using HashMap.",
        "Remove duplicate values from a list using Set.",
        "Implement a simple LRU cache using LinkedHashMap."
      ]
    },
    {
      stage: "Stage 5",
      title: "Java DSA (Data Structures & Algorithms)",
      goal: "Prepare for coding interviews.",
      topics: [
        "Arrays & Strings",
        "Searching & Sorting",
        "Recursion",
        "Linked Lists",
        "Stacks & Queues",
        "Trees (Binary Tree, BST)",
        "Hashing",
        "Graphs (Basics)"
      ],
      practiceQuestions: [
        "Find the second largest number in an array.",
        "Check if a string is a palindrome.",
        "Reverse a linked list.",
        "Inorder traversal of a binary tree.",
        "Dijkstra's algorithm for shortest path."
      ]
    },
    {
      stage: "Stage 6",
      title: "Java for Projects (Optional Stage)",
      goal: "Build real-world apps.",
      topics: [
        "GUI with JavaFX / Swing (basic)",
        "JDBC (Java Database Connectivity)",
        "Build a CLI app (e.g., To-Do App)",
        "Use Maven or Gradle (build tools)"
      ],
      projectIdeas: [
        "Student Management System",
        "Banking App",
        "Quiz App",
        "Library Management App (with DB)"
      ]
    }
  ],
  bonus: {
    title: "Interview Preparation Topics",
    topics: [
      "Difference between == and .equals()",
      "Pass-by-value or reference?",
      "Java Memory Model (Heap vs Stack)",
      "Garbage Collection",
      "Threads and Concurrency (basic)"
    ]
  }
};
