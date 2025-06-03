export const sqlroadmap = {
  "courseTitle": "SQL Roadmap for Beginners (2025 Edition)",
  "description": "A beginner-to-intermediate roadmap to master SQL for databases, development, data analysis, and interviews.",
  "stages": [
    {
      "stage": "Stage 1",
      "title": "SQL Basics",
      "goal": "Understand databases, basic queries, and SQL syntax.",
      "topics": [
        "What is SQL?",
        "RDBMS vs DBMS",
        "Database, Table, Row, Column",
        "Data Types in SQL",
        "SELECT Statement",
        "Filtering with WHERE",
        "ORDER BY and LIMIT"
      ],
      "practiceQuestions": [
        "Select all columns from a table called 'employees'.",
        "Write a query to find employees older than 30.",
        "Sort employee names alphabetically.",
        "Limit results to the top 5 salaries."
      ]
    },
    {
      "stage": "Stage 2",
      "title": "CRUD Operations",
      "goal": "Perform basic operations on SQL tables.",
      "topics": [
        "INSERT INTO",
        "UPDATE",
        "DELETE",
        "CREATE TABLE",
        "DROP and TRUNCATE",
        "NULL values"
      ],
      "practiceQuestions": [
        "Insert a new employee into a table.",
        "Update salary of a specific employee.",
        "Delete records where age is less than 25.",
        "Create a table for products with appropriate fields."
      ]
    },
    {
      "stage": "Stage 3",
      "title": "Advanced SELECT and Joins",
      "goal": "Query data across multiple tables.",
      "topics": [
        "JOIN Types: INNER, LEFT, RIGHT, FULL",
        "ON clause and JOIN conditions",
        "Aliases (AS)",
        "GROUP BY and HAVING",
        "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)"
      ],
      "practiceQuestions": [
        "Join 'employees' and 'departments' tables to show department names.",
        "Count how many employees each department has.",
        "Find the average salary per department.",
        "Use LEFT JOIN to show all departments with or without employees."
      ]
    },
    {
      "stage": "Stage 4",
      "title": "SQL Constraints and Relationships",
      "goal": "Learn about schema design, keys, and integrity constraints.",
      "topics": [
        "Primary Key and Foreign Key",
        "NOT NULL, UNIQUE, DEFAULT",
        "CHECK Constraints",
        "ON DELETE and ON UPDATE",
        "One-to-Many vs Many-to-Many Relationships"
      ],
      "practiceQuestions": [
        "Create a table with a primary key and foreign key.",
        "Set a default value for a column.",
        "Create a constraint that prevents negative salary input.",
        "Establish a relationship between orders and customers."
      ]
    },
    {
      "stage": "Stage 5",
      "title": "Subqueries and Advanced Techniques",
      "goal": "Write efficient and powerful SQL queries.",
      "topics": [
        "Subqueries (Single and Multi-row)",
        "IN, EXISTS, NOT EXISTS",
        "CASE Statement",
        "Views",
        "Indexes (Basic)",
        "Transactions (BEGIN, COMMIT, ROLLBACK)"
      ],
      "practiceQuestions": [
        "Find employees who earn more than the average salary.",
        "Create a view of high-earning employees.",
        "Use CASE to classify salaries into bands.",
        "Write a transaction that transfers balance between accounts."
      ]
    },
    {
      "stage": "Stage 6",
      "title": "SQL for Real Projects",
      "goal": "Apply SQL in real-world scenarios and tools.",
      "topics": [
        "ER Diagrams and Schema Design",
        "Using SQL in Web Apps (Node.js, Python, etc.)",
        "Basic SQL Injection Awareness",
        "Connecting to SQL from apps",
        "Exporting and Importing CSV/Excel Data"
      ],
      "projectIdeas": [
        "Build an employee management system backend",
        "Create a sales dashboard schema",
        "Design a library database with book lending logic",
        "Inventory and stock management project"
      ]
    }
  ],
  "bonus": {
    "title": "Interview Preparation Topics",
    "topics": [
      "Difference between WHERE and HAVING",
      "JOIN vs UNION",
      "Normalization (1NF, 2NF, 3NF)",
      "ACID Properties",
      "SQL vs NoSQL",
      "Explain a complex SQL query"
    ]
  }
}
