export const sqlquestions = {
  "theory": [
    {
      "id": "sql-theory-1",
      "title": "What is SQL?",
      "content": "SQL, or Structured Query Language, is a standardized language used to manage and manipulate relational databases. It allows users to perform operations like querying data, inserting records, updating data, and deleting records, as well as managing database structures like tables and indexes."
    },
    {
      "id": "sql-theory-2",
      "title": "What is a relational database?",
      "content": "A relational database is a type of database that organizes data into tables, where each table consists of rows and columns. Tables are related through specific columns (keys), allowing data to be retrieved or manipulated using SQL queries based on these relationships."
    },
    {
      "id": "sql-theory-3",
      "title": "What is the difference between SQL and NoSQL?",
      "content": "SQL databases are relational, using structured tables with a predefined schema, ideal for complex queries and structured data. NoSQL databases are non-relational, designed for unstructured or semi-structured data, offering flexibility and scalability for large-scale, distributed systems."
    },
    {
      "id": "sql-theory-4",
      "title": "What are the main types of SQL commands?",
      "content": "SQL commands are categorized into several types: DDL (Data Definition Language) for defining structures like tables; DML (Data Manipulation Language) for managing data like inserting or updating; DCL (Data Control Language) for permissions; and TCL (Transaction Control Language) for managing transactions."
    },
    {
      "id": "sql-theory-5",
      "title": "What is a primary key?",
      "content": "A primary key is a unique identifier for each record in a table. It ensures that no two rows have the same value in the primary key column(s) and cannot contain NULL values, enforcing data integrity."
    },
    {
      "id": "sql-theory-6",
      "title": "What is a foreign key?",
      "content": "A foreign key is a column or set of columns in one table that refers to the primary key in another table. It establishes a relationship between the two tables, ensuring referential integrity by restricting values to those that exist in the primary key."
    },
    {
      "id": "sql-theory-7",
      "title": "What is the difference between a primary key and a foreign key?",
      "content": "A primary key uniquely identifies each record in a table and cannot contain NULL values. A foreign key links two tables by referencing the primary key of another table, ensuring that the referenced value exists, and can contain NULL values."
    },
    {
      "id": "sql-theory-8",
      "title": "What is normalization in SQL?",
      "content": "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into tables and defining relationships between them according to rules like 1NF, 2NF, and 3NF."
    },
    {
      "id": "sql-theory-9",
      "title": "What is denormalization?",
      "content": "Denormalization is the process of intentionally introducing redundancy into a database by merging tables or adding redundant data. It is used to improve query performance, especially for read-heavy operations, at the cost of increased storage and potential data inconsistency."
    },
    {
      "id": "sql-theory-10",
      "title": "What is an index in SQL?",
      "content": "An index is a database structure that improves the speed of data retrieval operations on a table. It works like a lookup table for the database, allowing faster searches, but it can slow down write operations like inserts and updates."
    },
    {
      "id": "sql-theory-11",
      "title": "What are the types of indexes in SQL?",
      "content": "Common types of indexes include: Clustered Index, which determines the physical order of data in a table; Non-Clustered Index, which creates a separate structure for lookups; Unique Index, which enforces uniqueness; and Full-Text Index, for text-based searches."
    },
    {
      "id": "sql-theory-12",
      "title": "What is the difference between a clustered and non-clustered index?",
      "content": "A clustered index determines the physical order of data in a table, so there can only be one per table. A non-clustered index creates a separate structure with pointers to the data, allowing multiple non-clustered indexes on a table."
    },
    {
      "id": "sql-theory-13",
      "title": "What is a view in SQL?",
      "content": "A view is a virtual table created by a query that combines data from one or more tables. It doesn’t store data itself but provides a way to simplify complex queries, enhance security, or present data in a specific format."
    },
    {
      "id": "sql-theory-14",
      "title": "What is the difference between a table and a view?",
      "content": "A table stores actual data in the database, while a view is a virtual table that doesn’t store data but retrieves it from underlying tables using a query. Views are used for abstraction and security, while tables hold the raw data."
    },
    {
      "id": "sql-theory-15",
      "title": "What is a stored procedure?",
      "content": "A stored procedure is a precompiled set of SQL statements stored in the database. It can be executed as a single unit, often used to encapsulate business logic, improve performance, and enhance security by controlling access."
    },
    {
      "id": "sql-theory-16",
      "title": "What is the difference between a stored procedure and a function?",
      "content": "A stored procedure is a set of SQL statements that can perform tasks and may or may not return a value. A function is designed to return a single value and can be used in SQL expressions, while stored procedures cannot."
    },
    {
      "id": "sql-theory-17",
      "title": "What is a trigger in SQL?",
      "content": "A trigger is a special type of stored procedure that automatically executes in response to specific events, such as INSERT, UPDATE, or DELETE operations on a table. It’s used to enforce business rules or automate tasks."
    },
    {
      "id": "sql-theory-18",
      "title": "What are the types of triggers in SQL?",
      "content": "Triggers can be classified as: BEFORE triggers, which execute before the event; AFTER triggers, which execute after the event; and INSTEAD OF triggers, which replace the event. They can also be DML triggers (for data changes) or DDL triggers (for schema changes)."
    },
    {
      "id": "sql-theory-19",
      "title": "What is a transaction in SQL?",
      "content": "A transaction is a sequence of SQL operations that are executed as a single unit. It follows the ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure data integrity, even in the case of failures."
    },
    {
      "id": "sql-theory-20",
      "title": "What are the ACID properties in a transaction?",
      "content": "ACID stands for Atomicity (ensures all operations complete or none do), Consistency (ensures the database remains in a valid state), Isolation (ensures transactions are independent), and Durability (ensures committed changes are saved, even after a failure)."
    },
    {
      "id": "sql-theory-21",
      "title": "What is the difference between COMMIT and ROLLBACK?",
      "content": "COMMIT saves all changes made during a transaction to the database, making them permanent. ROLLBACK undoes all changes made during the transaction, reverting the database to its state before the transaction began."
    },
    {
      "id": "sql-theory-22",
      "title": "What is a JOIN in SQL?",
      "content": "A JOIN is a SQL operation that combines rows from two or more tables based on a related column. It allows you to retrieve data from multiple tables in a single query by matching values in the specified columns."
    },
    {
      "id": "sql-theory-23",
      "title": "What are the different types of JOINs in SQL?",
      "content": "Types of JOINs include: INNER JOIN (returns matching records from both tables), LEFT JOIN (returns all records from the left table and matching records from the right), RIGHT JOIN (opposite of LEFT JOIN), FULL JOIN (returns all records when there’s a match in either table), and CROSS JOIN (returns the Cartesian product of both tables)."
    },
    {
      "id": "sql-theory-24",
      "title": "What is the difference between INNER JOIN and LEFT JOIN?",
      "content": "INNER JOIN returns only the rows where there is a match in both tables. LEFT JOIN returns all rows from the left table and the matching rows from the right table; if there’s no match, NULL values are returned for columns from the right table."
    },
    {
      "id": "sql-theory-25",
      "title": "What is a self-join?",
      "content": "A self-join is a regular join where a table is joined with itself. It’s useful for querying hierarchical data or comparing rows within the same table, such as finding employees who report to a specific manager."
    },
    {
      "id": "sql-theory-26",
      "title": "What is a subquery in SQL?",
      "content": "A subquery is a query nested inside another query, often used to return data that will be used by the outer query. It can be used in SELECT, WHERE, or FROM clauses and is typically enclosed in parentheses."
    },
    {
      "id": "sql-theory-27",
      "title": "What is the difference between a correlated and non-correlated subquery?",
      "content": "A non-correlated subquery is independent of the outer query and executes once, providing a result for the outer query to use. A correlated subquery depends on the outer query, executing repeatedly for each row of the outer query, often using values from the outer query."
    },
    {
      "id": "sql-theory-28",
      "title": "What is a CTE in SQL?",
      "content": "A Common Table Expression (CTE) is a temporary result set defined within a query using the WITH clause. It simplifies complex queries, improves readability, and can be referenced multiple times within the same query."
    },
    {
      "id": "sql-theory-29",
      "title": "What is the difference between a CTE and a subquery?",
      "content": "A CTE is defined using the WITH clause and can be referenced multiple times in a query, improving readability. A subquery is embedded within the main query, often in parentheses, and is typically used once, making it less reusable within the same query."
    },
    {
      "id": "sql-theory-30",
      "title": "What is a temporary table in SQL?",
      "content": "A temporary table is a short-lived table that exists only for the duration of a session or transaction. It’s used to store intermediate results and is automatically dropped when the session ends, unless explicitly dropped earlier."
    },
    {
      "id": "sql-theory-31",
      "title": "What is the difference between a temporary table and a table variable?",
      "content": "A temporary table is stored in the tempdb database and can be used across sessions (if global). A table variable is stored in memory or tempdb, has a smaller scope (within a batch or function), and typically has better performance for small datasets."
    },
    {
      "id": "sql-theory-32",
      "title": "What is a schema in SQL?",
      "content": "A schema is a logical container within a database that groups related objects like tables, views, and stored procedures. It helps organize and manage database objects and can be used to control access permissions."
    },
    {
      "id": "sql-theory-33",
      "title": "What is the difference between DELETE and TRUNCATE?",
      "content": "DELETE removes specific rows from a table based on a condition and can be rolled back, as it’s a DML command. TRUNCATE removes all rows from a table without logging individual row deletions, is faster, and cannot be rolled back in some databases, as it’s a DDL command."
    },
    {
      "id": "sql-theory-34",
      "title": "What is the difference between DROP and TRUNCATE?",
      "content": "DROP removes the entire table, including its structure, indexes, and data, and cannot be rolled back in most databases. TRUNCATE removes all rows from a table but retains the table structure, and in some databases, it can be rolled back if within a transaction."
    },
    {
      "id": "sql-theory-35",
      "title": "What is a constraint in SQL?",
      "content": "A constraint is a rule enforced on a column or table to ensure data integrity. Common constraints include NOT NULL (ensures a column cannot have NULL values), UNIQUE (ensures all values are unique), and CHECK (ensures values meet a specific condition)."
    },
    {
      "id": "sql-theory-36",
      "title": "What is the difference between UNIQUE and PRIMARY KEY constraints?",
      "content": "A UNIQUE constraint ensures all values in a column are unique but allows one NULL value. A PRIMARY KEY constraint ensures uniqueness and does not allow NULL values, and there can only be one primary key per table."
    },
    {
      "id": "sql-theory-37",
      "title": "What is a composite key?",
      "content": "A composite key is a primary key that consists of two or more columns used together to uniquely identify each row in a table. It’s used when a single column isn’t sufficient to ensure uniqueness."
    },
    {
      "id": "sql-theory-38",
      "title": "What is the difference between GROUP BY and ORDER BY?",
      "content": "GROUP BY groups rows with the same values in specified columns into summary rows, often used with aggregate functions like SUM or COUNT. ORDER BY sorts the result set in ascending or descending order based on one or more columns."
    },
    {
      "id": "sql-theory-39",
      "title": "What is the HAVING clause in SQL?",
      "content": "The HAVING clause filters the results of a GROUP BY query based on a condition applied to aggregated data, such as SUM or COUNT. It’s similar to WHERE but is used specifically with grouped results."
    },
    {
      "id": "sql-theory-40",
      "title": "What is the difference between WHERE and HAVING clauses?",
      "content": "WHERE filters individual rows before grouping and is used with non-aggregated data. HAVING filters grouped results after a GROUP BY and is used with aggregated data, such as the results of SUM or COUNT."
    },
    {
      "id": "sql-theory-41",
      "title": "What are aggregate functions in SQL?",
      "content": "Aggregate functions perform calculations on a set of rows and return a single value. Common aggregate functions include COUNT (counts rows), SUM (adds values), AVG (calculates the average), MAX (finds the maximum), and MIN (finds the minimum)."
    },
    {
      "id": "sql-theory-42",
      "title": "What is a window function in SQL?",
      "content": "A window function performs calculations across a set of rows related to the current row, without grouping the rows into a single output. It’s used with OVER, PARTITION BY, and ORDER BY clauses to define the window, often for running totals or rankings."
    },
    {
      "id": "sql-theory-43",
      "title": "What is the difference between RANK, DENSE_RANK, and ROW_NUMBER?",
      "content": "RANK assigns a rank to each row, with gaps in rank numbers for ties (e.g., 1, 1, 3). DENSE_RANK also ranks rows but without gaps (e.g., 1, 1, 2). ROW_NUMBER assigns a unique number to each row, even for ties (e.g., 1, 2, 3)."
    },
    {
      "id": "sql-theory-44",
      "title": "What is a database schema design?",
      "content": "Database schema design is the process of defining the structure of a database, including tables, columns, data types, relationships, and constraints. It ensures data is organized efficiently, supports queries, and maintains integrity."
    },
    {
      "id": "sql-theory-45",
      "title": "What is a star schema?",
      "content": "A star schema is a database schema design used in data warehousing, where a central fact table (containing quantitative data) is connected to multiple dimension tables (containing descriptive data) in a star-like structure, simplifying queries."
    },
    {
      "id": "sql-theory-46",
      "title": "What is a snowflake schema?",
      "content": "A snowflake schema is a variation of the star schema where dimension tables are normalized into multiple related tables, forming a snowflake-like structure. It reduces redundancy but can make queries more complex."
    },
    {
      "id": "sql-theory-47",
      "title": "What is database optimization?",
      "content": "Database optimization involves improving the performance of a database system by tuning queries, creating indexes, normalizing or denormalizing data, and optimizing hardware or configurations to reduce query execution time and resource usage."
    },
    {
      "id": "sql-theory-48",
      "title": "What is query optimization in SQL?",
      "content": "Query optimization is the process of improving a SQL query’s performance by choosing the most efficient execution plan. It involves techniques like using indexes, avoiding unnecessary columns in SELECT, and rewriting queries for better performance."
    },
    {
      "id": "sql-theory-49",
      "title": "What is the EXPLAIN plan in SQL?",
      "content": "The EXPLAIN plan is a tool used to analyze how a SQL query will be executed by the database engine. It shows the execution plan, including the order of operations, use of indexes, and estimated costs, helping to optimize queries."
    },
    {
      "id": "sql-theory-50",
      "title": "What is database security in SQL?",
      "content": "Database security in SQL involves protecting the database from unauthorized access, data breaches, and corruption. It includes measures like user authentication, role-based access control, encryption, and auditing to ensure data integrity and confidentiality."
    }
  ],
  "query": [
    {
      "id": "sql-query-1",
      "title": "Retrieve all columns from a table",
      "content": "Write a query to select all columns from a table named 'employees'.",
      "code": "SELECT * FROM employees;"
    },
    {
      "id": "sql-query-2",
      "title": "Select specific columns from a table",
      "content": "Write a query to select the 'first_name' and 'last_name' columns from the 'employees' table.",
      "code": "SELECT first_name, last_name FROM employees;"
    },
    {
      "id": "sql-query-3",
      "title": "Filter rows with a WHERE clause",
      "content": "Write a query to select all employees from the 'employees' table where the department is 'HR'.",
      "code": "SELECT * FROM employees WHERE department = 'HR';"
    },
    {
      "id": "sql-query-4",
      "title": "Filter rows with multiple conditions",
      "content": "Write a query to select employees from the 'employees' table who are in the 'HR' department and have a salary greater than 50000.",
      "code": "SELECT * FROM employees WHERE department = 'HR' AND salary > 50000;"
    },
    {
      "id": "sql-query-5",
      "title": "Sort results with ORDER BY",
      "content": "Write a query to select all employees from the 'employees' table and sort them by salary in descending order.",
      "code": "SELECT * FROM employees ORDER BY salary DESC;"
    },
    {
      "id": "sql-query-6",
      "title": "Limit the number of rows returned",
      "content": "Write a query to select the top 5 employees from the 'employees' table based on their salary in descending order.",
      "code": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;"
    },
    {
      "id": "sql-query-7",
      "title": "Count the number of rows",
      "content": "Write a query to count the total number of employees in the 'employees' table.",
      "code": "SELECT COUNT(*) FROM employees;"
    },
    {
      "id": "sql-query-8",
      "title": "Calculate the average salary",
      "content": "Write a query to calculate the average salary of employees in the 'employees' table.",
      "code": "SELECT AVG(salary) FROM employees;"
    },
    {
      "id": "sql-query-9",
      "title": "Find the maximum salary",
      "content": "Write a query to find the maximum salary in the 'employees' table.",
      "code": "SELECT MAX(salary) FROM employees;"
    },
    {
      "id": "sql-query-10",
      "title": "Group employees by department",
      "content": "Write a query to count the number of employees in each department from the 'employees' table.",
      "code": "SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department;"
    },
    {
      "id": "sql-query-11",
      "title": "Filter grouped data with HAVING",
      "content": "Write a query to find departments in the 'employees' table with more than 10 employees.",
      "code": "SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department HAVING COUNT(*) > 10;"
    },
    {
      "id": "sql-query-12",
      "title": "Join two tables with INNER JOIN",
      "content": "Write a query to join the 'employees' table with the 'departments' table to get employee names and their department names.",
      "code": "SELECT e.first_name, e.last_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;"
    },
    {
      "id": "sql-query-13",
      "title": "Join two tables with LEFT JOIN",
      "content": "Write a query to get all employees and their department names, including employees without a department, using the 'employees' and 'departments' tables.",
      "code": "SELECT e.first_name, e.last_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;"
    },
    {
      "id": "sql-query-14",
      "title": "Perform a self-join",
      "content": "Write a query to find employees and their managers from the 'employees' table, where the 'manager_id' column refers to the 'employee_id' of the manager.",
      "code": "SELECT e1.first_name AS employee_name, e2.first_name AS manager_name FROM employees e1 LEFT JOIN employees e2 ON e1.manager_id = e2.employee_id;"
    },
    {
      "id": "sql-query-15",
      "title": "Use a subquery to filter data",
      "content": "Write a query to find employees from the 'employees' table whose salary is greater than the average salary.",
      "code": "SELECT first_name, last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
    },
    {
      "id": "sql-query-16",
      "title": "Use a correlated subquery",
      "content": "Write a query to find employees in the 'employees' table who earn more than the average salary in their department.",
      "code": "SELECT first_name, last_name, salary, department FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department);"
    },
    {
      "id": "sql-query-17",
      "title": "Use a CTE for readability",
      "content": "Write a query using a CTE to find the top 3 departments by employee count from the 'employees' table.",
      "code": "WITH DepartmentCounts AS (SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department) SELECT department, emp_count FROM DepartmentCounts ORDER BY emp_count DESC LIMIT 3;"
    },
    {
      "id": "sql-query-18",
      "title": "Insert a new record",
      "content": "Write a query to insert a new employee into the 'employees' table with the following details: first_name='John', last_name='Doe', department='IT', salary=60000.",
      "code": "INSERT INTO employees (first_name, last_name, department, salary) VALUES ('John', 'Doe', 'IT', 60000);"
    },
    {
      "id": "sql-query-19",
      "title": "Update records",
      "content": "Write a query to increase the salary of all employees in the 'HR' department by 10% in the 'employees' table.",
      "code": "UPDATE employees SET salary = salary * 1.10 WHERE department = 'HR';"
    },
    {
      "id": "sql-query-20",
      "title": "Delete records",
      "content": "Write a query to delete all employees from the 'employees' table who are in the 'Sales' department.",
      "code": "DELETE FROM employees WHERE department = 'Sales';"
    },
    {
      "id": "sql-query-21",
      "title": "Use LIKE for pattern matching",
      "content": "Write a query to find employees from the 'employees' table whose first name starts with 'A'.",
      "code": "SELECT * FROM employees WHERE first_name LIKE 'A%';"
    },
    {
      "id": "sql-query-22",
      "title": "Use IN to filter multiple values",
      "content": "Write a query to select employees from the 'employees' table who are in the 'HR', 'IT', or 'Finance' departments.",
      "code": "SELECT * FROM employees WHERE department IN ('HR', 'IT', 'Finance');"
    },
    {
      "id": "sql-query-23",
      "title": "Use BETWEEN for range filtering",
      "content": "Write a query to select employees from the 'employees' table whose salary is between 40000 and 60000.",
      "code": "SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;"
    },
    {
      "id": "sql-query-24",
      "title": "Handle NULL values",
      "content": "Write a query to find employees from the 'employees' table who do not have a manager (manager_id is NULL).",
      "code": "SELECT * FROM employees WHERE manager_id IS NULL;"
    },
    {
      "id": "sql-query-25",
      "title": "Use DISTINCT to remove duplicates",
      "content": "Write a query to get a list of unique departments from the 'employees' table.",
      "code": "SELECT DISTINCT department FROM employees;"
    },
    {
      "id": "sql-query-26",
      "title": "Concatenate strings",
      "content": "Write a query to concatenate the first_name and last_name of employees in the 'employees' table into a full name.",
      "code": "SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;"
    },
    {
      "id": "sql-query-27",
      "title": "Use CASE for conditional logic",
      "content": "Write a query to classify employees in the 'employees' table as 'High Earner' if their salary is above 70000, otherwise 'Standard Earner'.",
      "code": "SELECT first_name, last_name, salary, CASE WHEN salary > 70000 THEN 'High Earner' ELSE 'Standard Earner' END AS earner_type FROM employees;"
    },
    {
      "id": "sql-query-28",
      "title": "Use UNION to combine results",
      "content": "Write a query to combine the list of employees from the 'employees' table in the 'HR' department with those in the 'IT' department.",
      "code": "SELECT first_name, last_name FROM employees WHERE department = 'HR' UNION SELECT first_name, last_name FROM employees WHERE department = 'IT';"
    },
    {
      "id": "sql-query-29",
      "title": "Use COALESCE to handle NULLs",
      "content": "Write a query to replace NULL values in the 'manager_id' column of the 'employees' table with the value 0.",
      "code": "SELECT first_name, last_name, COALESCE(manager_id, 0) AS manager_id FROM employees;"
    },
    {
      "id": "sql-query-30",
      "title": "Calculate running total with a window function",
      "content": "Write a query to calculate a running total of salaries in the 'employees' table, ordered by employee_id.",
      "code": "SELECT employee_id, first_name, salary, SUM(salary) OVER (ORDER BY employee_id) AS running_total FROM employees;"
    },
    {
      "id": "sql-query-31",
      "title": "Rank employees by salary",
      "content": "Write a query to rank employees in the 'employees' table based on their salary in descending order using RANK().",
      "code": "SELECT first_name, last_name, salary, RANK() OVER (ORDER BY salary DESC) AS salary_rank FROM employees;"
    },
    {
      "id": "sql-query-32",
      "title": "Find top N salaries per department",
      "content": "Write a query to find the top 2 highest-paid employees in each department from the 'employees' table.",
      "code": "WITH RankedEmployees AS (SELECT first_name, last_name, department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk FROM employees) SELECT first_name, last_name, department, salary FROM RankedEmployees WHERE rnk <= 2;"
    },
    {
      "id": "sql-query-33",
      "title": "Find duplicate records",
      "content": "Write a query to find duplicate email addresses in the 'employees' table.",
      "code": "SELECT email, COUNT(*) AS email_count FROM employees GROUP BY email HAVING COUNT(*) > 1;"
    },
    {
      "id": "sql-query-34",
      "title": "Delete duplicate records",
      "content": "Write a query to delete duplicate email addresses from the 'employees' table, keeping the record with the lowest employee_id.",
      "code": "DELETE e1 FROM employees e1 JOIN employees e2 WHERE e1.email = e2.email AND e1.employee_id > e2.employee_id;"
    },
    {
      "id": "sql-query-35",
      "title": "Pivot data using CASE",
      "content": "Write a query to pivot the 'employees' table to show the total salary for each department as columns (HR, IT, Finance).",
      "code": "SELECT SUM(CASE WHEN department = 'HR' THEN salary ELSE 0 END) AS HR_salary, SUM(CASE WHEN department = 'IT' THEN salary ELSE 0 END) AS IT_salary, SUM(CASE WHEN department = 'Finance' THEN salary ELSE 0 END) AS Finance_salary FROM employees;"
    },
    {
      "id": "sql-query-36",
      "title": "Unpivot data",
      "content": "Assume a table 'sales' with columns 'year', 'q1', 'q2', 'q3', 'q4'. Write a query to unpivot the quarterly sales into rows.",
      "code": "SELECT year, 'Q1' AS quarter, q1 AS sales FROM sales UNION SELECT year, 'Q2', q2 FROM sales UNION SELECT year, 'Q3', q3 FROM sales UNION SELECT year, 'Q4', q4 FROM sales;"
    },
    {
      "id": "sql-query-37",
      "title": "Find employees hired in the last year",
      "content": "Write a query to find employees from the 'employees' table who were hired in the last year, assuming the current date is '2025-06-01'.",
      "code": "SELECT * FROM employees WHERE hire_date >= DATE_SUB('2025-06-01', INTERVAL 1 YEAR);"
    },
    {
      "id": "sql-query-38",
      "title": "Calculate the difference between dates",
      "content": "Write a query to calculate the number of days each employee in the 'employees' table has been employed as of '2025-06-01'.",
      "code": "SELECT first_name, last_name, DATEDIFF('2025-06-01', hire_date) AS days_employed FROM employees;"
    },
    {
      "id": "sql-query-39",
      "title": "Extract year from a date",
      "content": "Write a query to extract the year of hire for each employee in the 'employees' table.",
      "code": "SELECT first_name, last_name, YEAR(hire_date) AS hire_year FROM employees;"
    },
    {
      "id": "sql-query-40",
      "title": "Use string functions",
      "content": "Write a query to convert the first_name of employees in the 'employees' table to uppercase.",
      "code": "SELECT UPPER(first_name) AS first_name_upper, last_name FROM employees;"
    },
    {
      "id": "sql-query-41",
      "title": "Find employees with similar names",
      "content": "Write a query to find employees in the 'employees' table whose first_name contains 'son' (case-insensitive).",
      "code": "SELECT * FROM employees WHERE UPPER(first_name) LIKE '%SON%';"
    },
    {
      "id": "sql-query-42",
      "title": "Use aggregate functions with JOIN",
      "content": "Write a query to find the total salary for each department by joining the 'employees' and 'departments' tables.",
      "code": "SELECT d.department_name, SUM(e.salary) AS total_salary FROM employees e JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;"
    },
    {
      "id": "sql-query-43",
      "title": "Find employees without a department",
      "content": "Write a query to find employees in the 'employees' table who are not assigned to any department (department_id is NULL).",
      "code": "SELECT first_name, last_name FROM employees WHERE department_id IS NULL;"
    },
    {
      "id": "sql-query-44",
      "title": "Find departments with no employees",
      "content": "Write a query to find departments in the 'departments' table that have no employees, using the 'employees' table.",
      "code": "SELECT d.department_name FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id WHERE e.employee_id IS NULL;"
    },
    {
      "id": "sql-query-45",
      "title": "Calculate percentage of total",
      "content": "Write a query to calculate each employee’s salary as a percentage of the total salary in the 'employees' table.",
      "code": "SELECT first_name, last_name, salary, (salary / (SELECT SUM(salary) FROM employees) * 100) AS salary_percentage FROM employees;"
    },
    {
      "id": "sql-query-46",
      "title": "Find second-highest salary",
      "content": "Write a query to find the second-highest salary in the 'employees' table.",
      "code": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
    },
    {
      "id": "sql-query-47",
      "title": "Find employees with the same salary",
      "content": "Write a query to find employees in the 'employees' table who have the same salary.",
      "code": "SELECT salary, COUNT(*) AS employee_count FROM employees GROUP BY salary HAVING COUNT(*) > 1;"
    },
    {
      "id": "sql-query-48",
      "title": "Use a window function for cumulative count",
      "content": "Write a query to calculate a cumulative count of employees in the 'employees' table, ordered by hire_date.",
      "code": "SELECT first_name, last_name, hire_date, COUNT(*) OVER (ORDER BY hire_date) AS cumulative_count FROM employees;"
    },
    {
      "id": "sql-query-49",
      "title": "Find employees with above-average tenure",
      "content": "Write a query to find employees in the 'employees' table whose tenure (days since hire_date as of '2025-06-01') is above the average tenure.",
      "code": "SELECT first_name, last_name, DATEDIFF('2025-06-01', hire_date) AS tenure FROM employees WHERE DATEDIFF('2025-06-01', hire_date) > (SELECT AVG(DATEDIFF('2025-06-01', hire_date)) FROM employees);"
    },
    {
      "id": "sql-query-50",
      "title": "Find employees in multiple departments",
      "content": "Assume an 'employee_departments' table with 'employee_id' and 'department_id'. Write a query to find employees who are assigned to more than one department.",
      "code": "SELECT employee_id, COUNT(department_id) AS dept_count FROM employee_departments GROUP BY employee_id HAVING COUNT(department_id) > 1;"
    },
    {
      "id": "sql-query-51",
      "title": "Find employees with the highest salary in each department",
      "content": "Write a query to find the employee with the highest salary in each department from the 'employees' table.",
      "code": "WITH RankedSalaries AS (SELECT first_name, last_name, department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk FROM employees) SELECT first_name, last_name, department, salary FROM RankedSalaries WHERE rnk = 1;"
    },
    {
      "id": "sql-query-52",
      "title": "Find employees who joined on the same date",
      "content": "Write a query to find employees in the 'employees' table who were hired on the same date.",
      "code": "SELECT hire_date, COUNT(*) AS hire_count FROM employees GROUP BY hire_date HAVING COUNT(*) > 1;"
    },
    {
      "id": "sql-query-53",
      "title": "Calculate the total salary per year of hire",
      "content": "Write a query to calculate the total salary of employees in the 'employees' table, grouped by the year they were hired.",
      "code": "SELECT YEAR(hire_date) AS hire_year, SUM(salary) AS total_salary FROM employees GROUP BY YEAR(hire_date);"
    },
    {
      "id": "sql-query-54",
      "title": "Find employees with a salary increase",
      "content": "Assume a 'salary_history' table with 'employee_id', 'salary', and 'change_date'. Write a query to find employees whose salary increased in their latest change compared to the previous change.",
      "code": "WITH RankedSalaries AS (SELECT employee_id, salary, change_date, LAG(salary) OVER (PARTITION BY employee_id ORDER BY change_date) AS prev_salary FROM salary_history) SELECT employee_id, salary, prev_salary FROM RankedSalaries WHERE salary > prev_salary AND prev_salary IS NOT NULL;"
    },
    {
      "id": "sql-query-55",
      "title": "Find gaps in a sequence",
      "content": "Assume an 'orders' table with an 'order_id' column that should be sequential. Write a query to find missing order IDs (gaps in the sequence).",
      "code": "WITH Sequence AS (SELECT a.order_id + 1 AS missing_id FROM orders a LEFT JOIN orders b ON a.order_id + 1 = b.order_id WHERE b.order_id IS NULL) SELECT missing_id FROM Sequence WHERE missing_id <= (SELECT MAX(order_id) FROM orders);"
    },
    {
      "id": "sql-query-56",
      "title": "Find the longest streak of consecutive days",
      "content": "Assume a 'logins' table with 'user_id' and 'login_date'. Write a query to find the longest streak of consecutive login days for each user.",
      "code": "WITH LoginGroups AS (SELECT user_id, login_date, DATE_SUB(login_date, INTERVAL ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) DAY) AS group_id FROM logins) SELECT user_id, COUNT(*) AS streak_length FROM LoginGroups GROUP BY user_id, group_id ORDER BY streak_length DESC LIMIT 1;"
    },
    {
      "id": "sql-query-57",
      "title": "Find employees with the same manager",
      "content": "Write a query to find pairs of employees in the 'employees' table who share the same manager.",
      "code": "SELECT e1.first_name AS employee1, e2.first_name AS employee2, e1.manager_id FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.manager_id AND e1.employee_id < e2.employee_id;"
    },
    {
      "id": "sql-query-58",
      "title": "Calculate the median salary",
      "content": "Write a query to calculate the median salary in the 'employees' table.",
      "code": "WITH RankedSalaries AS (SELECT salary, ROW_NUMBER() OVER (ORDER BY salary) AS row_num, COUNT(*) OVER () AS total_rows FROM employees) SELECT AVG(salary) AS median_salary FROM RankedSalaries WHERE row_num IN (FLOOR((total_rows + 1) / 2), CEIL((total_rows + 1) / 2));"
    },
    {
      "id": "sql-query-59",
      "title": "Find overlapping date ranges",
      "content": "Assume a 'projects' table with 'project_id', 'start_date', and 'end_date'. Write a query to find pairs of projects with overlapping date ranges.",
      "code": "SELECT p1.project_id AS project1, p2.project_id AS project2 FROM projects p1 JOIN projects p2 ON p1.project_id < p2.project_id WHERE p1.start_date <= p2.end_date AND p1.end_date >= p2.start_date;"
    },
    {
      "id": "sql-query-60",
      "title": "Generate a recursive hierarchy",
      "content": "Write a query to generate the full hierarchy of employees in the 'employees' table, where 'manager_id' refers to the 'employee_id' of the manager.",
      "code": "WITH RECURSIVE EmployeeHierarchy AS (SELECT employee_id, first_name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.employee_id, e.first_name, e.manager_id, eh.level + 1 FROM employees e JOIN EmployeeHierarchy eh ON e.manager_id = eh.employee_id) SELECT * FROM EmployeeHierarchy;"
    },
    {
      "id": "sql-query-61",
      "title": "Find employees who are managers",
      "content": "Write a query to find employees in the 'employees' table who are managers (i.e., their employee_id appears in the manager_id column of other employees).",
      "code": "SELECT DISTINCT e1.first_name, e1.last_name FROM employees e1 JOIN employees e2 ON e1.employee_id = e2.manager_id;"
    },
    {
      "id": "sql-query-62",
      "title": "Calculate the growth rate of salaries",
      "content": "Write a query to calculate the year-over-year salary growth rate for each department in the 'employees' table, grouped by hire year.",
      "code": "WITH YearlySalaries AS (SELECT YEAR(hire_date) AS hire_year, department, SUM(salary) AS total_salary FROM employees GROUP BY YEAR(hire_date), department) SELECT hire_year, department, total_salary, LAG(total_salary) OVER (PARTITION BY department ORDER BY hire_year) AS prev_salary, ((total_salary - LAG(total_salary) OVER (PARTITION BY department ORDER BY hire_year)) / LAG(total_salary) OVER (PARTITION BY department ORDER BY hire_year) * 100) AS growth_rate FROM YearlySalaries;"
    },
    {
      "id": "sql-query-63",
      "title": "Find employees with missing email addresses",
      "content": "Write a query to find employees in the 'employees' table whose email address is either NULL or an empty string.",
      "code": "SELECT first_name, last_name FROM employees WHERE email IS NULL OR email = '';"
    },
    {
      "id": "sql-query-64",
      "title": "Find the most recent login per user",
      "content": "Assume a 'logins' table with 'user_id' and 'login_date'. Write a query to find the most recent login date for each user.",
      "code": "SELECT user_id, MAX(login_date) AS last_login FROM logins GROUP BY user_id;"
    },
    {
      "id": "sql-query-65",
      "title": "Find employees who haven't logged in recently",
      "content": "Assume a 'logins' table with 'user_id' and 'login_date'. Write a query to find employees from the 'employees' table who haven't logged in within the last 30 days (as of '2025-06-01').",
      "code": "SELECT e.first_name, e.last_name FROM employees e LEFT JOIN (SELECT user_id, MAX(login_date) AS last_login FROM logins GROUP BY user_id) l ON e.employee_id = l.user_id WHERE l.last_login IS NULL OR l.last_login < DATE_SUB('2025-06-01', INTERVAL 30 DAY);"
    },
    {
      "id": "sql-query-66",
      "title": "Find employees with above-average salary in their hire year",
      "content": "Write a query to find employees in the 'employees' table whose salary is above the average salary for their hire year.",
      "code": "WITH YearlyAverages AS (SELECT YEAR(hire_date) AS hire_year, AVG(salary) AS avg_salary FROM employees GROUP BY YEAR(hire_date)) SELECT e.first_name, e.last_name, e.salary, e.hire_date FROM employees e JOIN YearlyAverages ya ON YEAR(e.hire_date) = ya.hire_year WHERE e.salary > ya.avg_salary;"
    },
    {
      "id": "sql-query-67",
      "title": "Find the most common salary",
      "content": "Write a query to find the most common salary in the 'employees' table.",
      "code": "WITH SalaryCounts AS (SELECT salary, COUNT(*) AS salary_count FROM employees GROUP BY salary) SELECT salary FROM SalaryCounts WHERE salary_count = (SELECT MAX(salary_count) FROM SalaryCounts);"
    },
    {
      "id": "sql-query-68",
      "title": "Find employees with a specific tenure range",
      "content": "Write a query to find employees in the 'employees' table who have been employed between 1 and 3 years as of '2025-06-01'.",
      "code": "SELECT first_name, last_name, hire_date FROM employees WHERE DATEDIFF('2025-06-01', hire_date) BETWEEN 365 AND 1095;"
    },
    {
      "id": "sql-query-69",
      "title": "Find the department with the highest average salary",
      "content": "Write a query to find the department in the 'employees' table with the highest average salary.",
      "code": "SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department ORDER BY avg_salary DESC LIMIT 1;"
    },
    {
      "id": "sql-query-70",
      "title": "Find employees who are also customers",
      "content": "Assume a 'customers' table with 'customer_id', 'first_name', and 'last_name'. Write a query to find employees from the 'employees' table who are also customers (based on matching first_name and last_name).",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN customers c ON e.first_name = c.first_name AND e.last_name = c.last_name;"
    },
    {
      "id": "sql-query-71",
      "title": "Find employees with a salary change history",
      "content": "Assume a 'salary_history' table with 'employee_id', 'salary', and 'change_date'. Write a query to find employees in the 'employees' table who have had at least 2 salary changes.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN (SELECT employee_id, COUNT(*) AS change_count FROM salary_history GROUP BY employee_id HAVING COUNT(*) >= 2) sh ON e.employee_id = sh.employee_id;"
    },
    {
      "id": "sql-query-72",
      "title": "Find employees with no salary change",
      "content": "Assume a 'salary_history' table with 'employee_id', 'salary', and 'change_date'. Write a query to find employees in the 'employees' table who have never had a salary change.",
      "code": "SELECT e.first_name, e.last_name FROM employees e LEFT JOIN salary_history sh ON e.employee_id = sh.employee_id WHERE sh.employee_id IS NULL;"
    },
    {
      "id": "sql-query-73",
      "title": "Find the top 3 most frequent departments",
      "content": "Write a query to find the top 3 departments in the 'employees' table with the most employees.",
      "code": "SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department ORDER BY emp_count DESC LIMIT 3;"
    },
    {
      "id": "sql-query-74",
      "title": "Find employees with a specific role",
      "content": "Assume an 'employee_roles' table with 'employee_id' and 'role'. Write a query to find employees in the 'employees' table who have the role 'Manager'.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN employee_roles er ON e.employee_id = er.employee_id WHERE er.role = 'Manager';"
    },
    {
      "id": "sql-query-75",
      "title": "Find employees with multiple roles",
      "content": "Assume an 'employee_roles' table with 'employee_id' and 'role'. Write a query to find employees in the 'employees' table who have more than one role.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN (SELECT employee_id, COUNT(*) AS role_count FROM employee_roles GROUP BY employee_id HAVING COUNT(*) > 1) er ON e.employee_id = er.employee_id;"
    },
    {
      "id": "sql-query-76",
      "title": "Find employees with a salary decrease",
      "content": "Assume a 'salary_history' table with 'employee_id', 'salary', and 'change_date'. Write a query to find employees who have had a salary decrease in their latest change compared to the previous change.",
      "code": "WITH RankedSalaries AS (SELECT employee_id, salary, change_date, LAG(salary) OVER (PARTITION BY employee_id ORDER BY change_date) AS prev_salary FROM salary_history) SELECT employee_id, salary, prev_salary FROM RankedSalaries WHERE salary < prev_salary AND prev_salary IS NOT NULL;"
    },
    {
      "id": "sql-query-77",
      "title": "Find the most recent project per employee",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', and 'start_date'. Write a query to find the most recent project for each employee.",
      "code": "WITH RankedProjects AS (SELECT employee_id, project_id, start_date, ROW_NUMBER() OVER (PARTITION BY employee_id ORDER BY start_date DESC) AS rnk FROM projects) SELECT e.first_name, e.last_name, p.project_id, p.start_date FROM employees e JOIN RankedProjects p ON e.employee_id = p.employee_id WHERE p.rnk = 1;"
    },
    {
      "id": "sql-query-78",
      "title": "Find employees with overlapping project assignments",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', 'start_date', and 'end_date'. Write a query to find employees who have overlapping project assignments.",
      "code": "SELECT DISTINCT p1.employee_id FROM projects p1 JOIN projects p2 ON p1.employee_id = p2.employee_id AND p1.project_id != p2.project_id WHERE p1.start_date <= p2.end_date AND p1.end_date >= p2.start_date;"
    },
    {
      "id": "sql-query-79",
      "title": "Find employees with a specific project duration",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', 'start_date', and 'end_date'. Write a query to find employees whose projects lasted more than 6 months.",
      "code": "SELECT e.first_name, e.last_name, p.project_id FROM employees e JOIN projects p ON e.employee_id = p.employee_id WHERE DATEDIFF(p.end_date, p.start_date) > 180;"
    },
    {
      "id": "sql-query-80",
      "title": "Find the total project duration per employee",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', 'start_date', and 'end_date'. Write a query to calculate the total project duration (in days) for each employee.",
      "code": "SELECT e.first_name, e.last_name, SUM(DATEDIFF(p.end_date, p.start_date)) AS total_duration FROM employees e JOIN projects p ON e.employee_id = p.employee_id GROUP BY e.employee_id, e.first_name, e.last_name;"
    },
    {
      "id": "sql-query-81",
      "title": "Find employees with a specific email domain",
      "content": "Write a query to find employees in the 'employees' table whose email addresses end with '@company.com'.",
      "code": "SELECT first_name, last_name, email FROM employees WHERE email LIKE '%@company.com';"
    },
    {
      "id": "sql-query-82",
      "title": "Find employees with invalid email formats",
      "content": "Write a query to find employees in the 'employees' table whose email addresses do not contain an '@' symbol (indicating an invalid email).",
      "code": "SELECT first_name, last_name, email FROM employees WHERE email NOT LIKE '%@%';"
    },
    {
      "id": "sql-query-83",
      "title": "Find employees with a specific hire month",
      "content": "Write a query to find employees in the 'employees' table who were hired in June (any year).",
      "code": "SELECT first_name, last_name, hire_date FROM employees WHERE MONTH(hire_date) = 6;"
    },
    {
      "id": "sql-query-84",
      "title": "Find employees hired on a specific day of the week",
      "content": "Write a query to find employees in the 'employees' table who were hired on a Monday.",
      "code": "SELECT first_name, last_name, hire_date FROM employees WHERE DAYNAME(hire_date) = 'Monday';"
    },
    {
      "id": "sql-query-85",
      "title": "Find employees with a specific salary range by department",
      "content": "Write a query to find employees in the 'employees' table whose salary is between 50000 and 70000, grouped by department.",
      "code": "SELECT department, first_name, last_name, salary FROM employees WHERE salary BETWEEN 50000 AND 70000 ORDER BY department;"
    },
    {
      "id": "sql-query-86",
      "title": "Find the department with the most projects",
      "content": "Assume a 'projects' table with 'project_id', 'department_id', and a 'departments' table. Write a query to find the department with the most projects.",
      "code": "SELECT d.department_name, COUNT(p.project_id) AS project_count FROM departments d JOIN projects p ON d.department_id = p.department_id GROUP BY d.department_name ORDER BY project_count DESC LIMIT 1;"
    },
    {
      "id": "sql-query-87",
      "title": "Find employees with a specific number of direct reports",
      "content": "Write a query to find employees in the 'employees' table who have exactly 5 direct reports (based on the manager_id column).",
      "code": "SELECT e1.first_name, e1.last_name FROM employees e1 JOIN employees e2 ON e1.employee_id = e2.manager_id GROUP BY e1.employee_id, e1.first_name, e1.last_name HAVING COUNT(e2.employee_id) = 5;"
    },
    {
      "id": "sql-query-88",
      "title": "Find employees with a specific tenure milestone",
      "content": "Write a query to find employees in the 'employees' table who have reached a 5-year tenure milestone as of '2025-06-01'.",
      "code": "SELECT first_name, last_name, hire_date FROM employees WHERE DATEDIFF('2025-06-01', hire_date) >= 1825 AND DATEDIFF('2025-06-01', hire_date) < 1840;"
    },
    {
      "id": "sql-query-89",
      "title": "Find employees with a specific project count",
      "content": "Assume a 'projects' table with 'employee_id' and 'project_id'. Write a query to find employees in the 'employees' table who have worked on exactly 3 projects.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN (SELECT employee_id, COUNT(project_id) AS project_count FROM projects GROUP BY employee_id HAVING COUNT(project_id) = 3) p ON e.employee_id = p.employee_id;"
    },
    {
      "id": "sql-query-90",
      "title": "Find employees with a specific login frequency",
      "content": "Assume a 'logins' table with 'user_id' and 'login_date'. Write a query to find employees in the 'employees' table who have logged in at least 10 times in the last 30 days (as of '2025-06-01').",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN (SELECT user_id, COUNT(*) AS login_count FROM logins WHERE login_date >= DATE_SUB('2025-06-01', INTERVAL 30 DAY) GROUP BY user_id HAVING COUNT(*) >= 10) l ON e.employee_id = l.user_id;"
    },
    {
      "id": "sql-query-91",
      "title": "Find employees with a specific salary percentile",
      "content": "Write a query to find employees in the 'employees' table whose salary is in the top 10% of all salaries.",
      "code": "WITH RankedSalaries AS (SELECT first_name, last_name, salary, NTILE(100) OVER (ORDER BY salary DESC) AS percentile FROM employees) SELECT first_name, last_name, salary FROM RankedSalaries WHERE percentile <= 10;"
    },
    {
      "id": "sql-query-92",
      "title": "Find employees with a specific project type",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', and 'project_type'. Write a query to find employees in the 'employees' table who have worked on a project of type 'Development'.",
      "code": "SELECT DISTINCT e.first_name, e.last_name FROM employees e JOIN projects p ON e.employee_id = p.employee_id WHERE p.project_type = 'Development';"
    },
    {
      "id": "sql-query-93",
      "title": "Find employees with a specific role duration",
      "content": "Assume an 'employee_roles' table with 'employee_id', 'role', 'start_date', and 'end_date'. Write a query to find employees who have been in the 'Manager' role for more than 1 year.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN employee_roles er ON e.employee_id = er.employee_id WHERE er.role = 'Manager' AND DATEDIFF(COALESCE(er.end_date, '2025-06-01'), er.start_date) > 365;"
    },
    {
      "id": "sql-query-94",
      "title": "Find employees with a specific login pattern",
      "content": "Assume a 'logins' table with 'user_id' and 'login_date'. Write a query to find employees in the 'employees' table who logged in every day for the last 7 days (as of '2025-06-01').",
      "code": "WITH DailyLogins AS (SELECT user_id, COUNT(DISTINCT login_date) AS login_days FROM logins WHERE login_date >= DATE_SUB('2025-06-01', INTERVAL 7 DAY) GROUP BY user_id) SELECT e.first_name, e.last_name FROM employees e JOIN DailyLogins dl ON e.employee_id = dl.user_id WHERE dl.login_days = 7;"
    },
    {
      "id": "sql-query-95",
      "title": "Find employees with a specific project overlap",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', 'start_date', and 'end_date'. Write a query to find employees who worked on more than one project at the same time (overlapping dates).",
      "code": "WITH OverlappingProjects AS (SELECT employee_id FROM projects p1 JOIN projects p2 ON p1.employee_id = p2.employee_id AND p1.project_id != p2.project_id WHERE p1.start_date <= p2.end_date AND p1.end_date >= p2.start_date GROUP BY employee_id) SELECT e.first_name, e.last_name FROM employees e JOIN OverlappingProjects op ON e.employee_id = op.employee_id;"
    },
    {
      "id": "sql-query-96",
      "title": "Find employees with a specific salary trend",
      "content": "Assume a 'salary_history' table with 'employee_id', 'salary', and 'change_date'. Write a query to find employees whose salary has consistently increased with each change.",
      "code": "WITH SalaryChanges AS (SELECT employee_id, salary, change_date, LAG(salary) OVER (PARTITION BY employee_id ORDER BY change_date) AS prev_salary FROM salary_history) SELECT DISTINCT e.first_name, e.last_name FROM employees e JOIN SalaryChanges sc ON e.employee_id = sc.employee_id WHERE sc.prev_salary IS NOT NULL GROUP BY e.employee_id, e.first_name, e.last_name HAVING MIN(CASE WHEN sc.salary > sc.prev_salary THEN 1 ELSE 0 END) = 1;"
    },
    {
      "id": "sql-query-97",
      "title": "Find employees with a specific department history",
      "content": "Assume a 'department_history' table with 'employee_id', 'department_id', and 'change_date'. Write a query to find employees who have worked in more than 3 departments.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN (SELECT employee_id, COUNT(DISTINCT department_id) AS dept_count FROM department_history GROUP BY employee_id HAVING COUNT(DISTINCT department_id) > 3) dh ON e.employee_id = dh.employee_id;"
    },
    {
      "id": "sql-query-98",
      "title": "Find employees with a specific project completion rate",
      "content": "Assume a 'projects' table with 'employee_id', 'project_id', and 'status'. Write a query to find employees whose project completion rate (status='Completed') is above 80%.",
      "code": "WITH ProjectStats AS (SELECT employee_id, COUNT(*) AS total_projects, SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_projects FROM projects GROUP BY employee_id) SELECT e.first_name, e.last_name, (ps.completed_projects / ps.total_projects * 100) AS completion_rate FROM employees e JOIN ProjectStats ps ON e.employee_id = ps.employee_id WHERE (ps.completed_projects / ps.total_projects * 100) > 80;"
    },
    {
      "id": "sql-query-99",
      "title": "Find employees with a specific login time",
      "content": "Assume a 'logins' table with 'user_id', 'login_date', and 'login_time'. Write a query to find employees who logged in between 9 AM and 5 PM on '2025-05-31'.",
      "code": "SELECT e.first_name, e.last_name FROM employees e JOIN logins l ON e.employee_id = l.user_id WHERE l.login_date = '2025-05-31' AND l.login_time BETWEEN '09:00:00' AND '17:00:00';"
    },
    {
      "id": "sql-query-100",
      "title": "Find employees with a specific salary distribution",
      "content": "Write a query to find departments in the 'employees' table where the salary standard deviation is greater than 10000.",
      "code": "SELECT department, STDDEV(salary) AS salary_stddev FROM employees GROUP BY department HAVING STDDEV(salary) > 10000;"
    }
  ]
}