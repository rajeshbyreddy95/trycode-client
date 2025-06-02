export const dsa = {
  "id": "11",
  "title": "Data Structures & Algorithms Roadmap",
  "category": "Computer Science",
  "description": "Learn DSA for problem-solving and technical interviews.",
  "image": "https://images.unsplash.com/photo-1516117172878-f8902b66d6b1?auto=format&fit=crop&w=800&q=80",
  "route": "/roadmaps/dsa",
  "milestones": [
    {
      "title": "Introduction to DSA",
      "description": "Understand what Data Structures and Algorithms are, their importance in programming, and how they optimize problem-solving. Learn about time and space complexity (Big-O notation).",
      "project": {
        "title": "Complexity Analysis",
        "description": "Write a simple program to compare the time taken by two different approaches (e.g., linear vs. nested loops) to sum numbers from 1 to N, and analyze their time complexity."
      },
      "interview": {
        "theory": "Explain the difference between time complexity and space complexity. Why is Big-O notation important in algorithm analysis?",
        "coding_question": "Write a program to calculate the time complexity of a given algorithm (e.g., a nested loop). Example: Given a loop that runs N times inside another loop that runs N times, what is the overall time complexity?"
      }
    },
    {
      "title": "Arrays: Basics",
      "description": "Learn about arrays, their structure, and basic operations (insertion, deletion, traversal). Understand array indexing and memory allocation.",
      "project": {
        "title": "Array Operations",
        "description": "Implement a program to perform basic array operations: insert an element at a given index, delete an element, and print the array."
      },
      "interview": {
        "theory": "What are the advantages and disadvantages of arrays compared to other data structures like linked lists? How is memory allocated for arrays?",
        "coding_question": "Find the second largest element in an array. Example: Input: [3, 1, 4, 5, 2], Output: 4."
      }
    },
    {
      "title": "Arrays: Searching",
      "description": "Explore searching algorithms: Linear Search (O(n)) and Binary Search (O(log n)). Understand the prerequisites for Binary Search (sorted array) and its efficiency.",
      "project": {
        "title": "Search Implementation",
        "description": "Write a program to implement both Linear Search and Binary Search to find an element in an array, and compare their performance on a sorted array."
      },
      "interview": {
        "theory": "Explain how Binary Search works and why it requires a sorted array. What is the time complexity of Linear Search vs. Binary Search?",
        "coding_question": "Find the first and last position of an element in a sorted array (LeetCode #34). Example: Input: nums = [5,7,7,8,8,10], target = 8, Output: [3,4]."
      }
    },
    {
      "title": "Arrays: Sorting",
      "description": "Learn sorting algorithms: Bubble Sort (O(n²)), Selection Sort (O(n²)), and Merge Sort (O(n log n)). Understand their working, time complexity, and space complexity.",
      "project": {
        "title": "Bubble Sort Implementation",
        "description": "Implement Bubble Sort to sort an array in ascending order, and add a flag to optimize it by stopping if the array is already sorted."
      },
      "interview": {
        "theory": "Compare the time and space complexities of Bubble Sort, Selection Sort, and Merge Sort. Why is Merge Sort preferred over Bubble Sort for large datasets?",
        "coding_question": "Sort an array containing only 0s, 1s, and 2s (Dutch National Flag problem, LeetCode #75). Example: Input: [2,0,2,1,1,0], Output: [0,0,1,1,2,2]."
      }
    },
    {
      "title": "Linked Lists: Basics",
      "description": "Understand the structure of a Singly Linked List (nodes, head, tail). Learn basic operations: insertion (at beginning, end, middle), deletion, and traversal.",
      "project": {
        "title": "Linked List Operations",
        "description": "Implement a Singly Linked List with functions to insert a node at the beginning, delete a node by value, and print the list."
      },
      "interview": {
        "theory": "What are the differences between a Singly Linked List and a Doubly Linked List? What are the time complexities of insertion and deletion in a linked list?",
        "coding_question": "Reverse a Singly Linked List (LeetCode #206). Example: Input: 1->2->3->4->5->NULL, Output: 5->4->3->2->1->NULL."
      }
    },
    {
      "title": "Linked Lists: Advanced",
      "description": "Explore advanced operations: reversing a linked list, detecting a cycle (Floyd’s Cycle Detection Algorithm), and finding the middle node.",
      "project": {
        "title": "Reverse Linked List",
        "description": "Write a program to reverse a Singly Linked List and print both the original and reversed lists."
      },
      "interview": {
        "theory": "How does Floyd’s Cycle Detection Algorithm work? What are some common use cases for linked lists in real-world applications?",
        "coding_question": "Detect a cycle in a linked list (LeetCode #141). Example: Input: 3->2->0->-4 (cycle back to 2), Output: true."
      }
    },
    {
      "title": "Stacks: Basics",
      "description": "Learn about the Stack data structure (LIFO principle). Understand stack operations: push, pop, peek, and isEmpty. Explore implementation using arrays.",
      "project": {
        "title": "Stack Implementation",
        "description": "Implement a Stack using an array with push, pop, and peek operations, and test it by pushing and popping elements."
      },
      "interview": {
        "theory": "What is the LIFO principle? How can a stack be implemented using both an array and a linked list?",
        "coding_question": "Implement a stack with a getMin() function that returns the minimum element in O(1) time (LeetCode #155). Example: push(3), push(5), getMin() -> 3."
      }
    },
    {
      "title": "Stacks: Applications",
      "description": "Understand stack applications: balanced parentheses checking, undo mechanisms, and expression evaluation (infix to postfix).",
      "project": {
        "title": "Balanced Parentheses Checker",
        "description": "Write a program to check if a given string of parentheses (e.g., '()[]{}') is balanced using a stack."
      },
      "interview": {
        "theory": "Explain how a stack can be used to evaluate a postfix expression. What are some real-world applications of stacks?",
        "coding_question": "Valid Parentheses (LeetCode #20). Example: Input: '()[]{}', Output: true; Input: '(]', Output: false."
      }
    },
    {
      "title": "Queues: Basics",
      "description": "Learn about the Queue data structure (FIFO principle). Understand queue operations: enqueue, dequeue, front, and isEmpty. Explore implementation using arrays.",
      "project": {
        "title": "Queue Implementation",
        "description": "Implement a Queue using an array with enqueue, dequeue, and front operations, and test it by adding and removing elements."
      },
      "interview": {
        "theory": "What is the FIFO principle? How does a queue differ from a stack in terms of operations and use cases?",
        "coding_question": "Implement a queue using two stacks (LeetCode #232). Example: enqueue(1), enqueue(2), dequeue() -> 1."
      }
    },
    {
      "title": "Queues: Variations",
      "description": "Explore queue variations: Circular Queue (to optimize space) and Priority Queue (based on priority). Understand their use cases.",
      "project": {
        "title": "Circular Queue",
        "description": "Implement a Circular Queue to overcome the space wastage issue in a regular queue, and test it with enqueue and dequeue operations."
      },
      "interview": {
        "theory": "What is the difference between a Circular Queue and a Priority Queue? How is a Priority Queue implemented using a heap?",
        "coding_question": "Design a Circular Queue (LeetCode #622). Example: CircularQueue(3), enQueue(1), enQueue(2), enQueue(3), enQueue(4) -> false."
      }
    },
    {
      "title": "Trees: Basics",
      "description": "Learn about Binary Trees: structure (root, nodes, leaves), traversal methods (inorder, preorder, postorder), and basic operations (insertion, deletion).",
      "project": {
        "title": "Binary Tree Traversal",
        "description": "Implement a Binary Tree and write functions for inorder, preorder, and postorder traversals, then print the results."
      },
      "interview": {
        "theory": "Explain the different types of tree traversals and their use cases. What is the difference between a Binary Tree and a Binary Search Tree?",
        "coding_question": "Inorder Traversal of a Binary Tree (LeetCode #94). Example: Input: [1,null,2,3], Output: [1,3,2]."
      }
    },
    {
      "title": "Binary Search Trees (BST)",
      "description": "Understand Binary Search Trees: properties (left child < root < right child), insertion, deletion, and searching. Learn about balancing BSTs.",
      "project": {
        "title": "BST Operations",
        "description": "Implement a Binary Search Tree with functions to insert a node, search for a value, and delete a node, then test these operations."
      },
      "interview": {
        "theory": "What are the properties of a BST? How do you handle the deletion of a node with two children in a BST?",
        "coding_question": "Validate Binary Search Tree (LeetCode #98). Example: Input: [5,1,4,null,null,3,6], Output: false (4 is in the wrong position)."
      }
    },
    {
      "title": "Graphs: Basics",
      "description": "Learn about Graphs: representation (adjacency list, adjacency matrix), types (directed, undirected), and basic traversal (DFS, BFS).",
      "project": {
        "title": "BFS Implementation",
        "description": "Implement Breadth-First Search (BFS) on a graph using an adjacency list, and print the traversal order starting from a given node."
      },
      "interview": {
        "theory": "What are the differences between DFS and BFS? When would you use an adjacency list vs. an adjacency matrix?",
        "coding_question": "Number of Islands (LeetCode #200). Example: Input: grid = [['1','1','0'],['1','1','0'],['0','0','1']], Output: 2."
      }
    },
    {
      "title": "Graphs: Advanced",
      "description": "Explore advanced graph algorithms: Dijkstra’s algorithm for shortest path, detecting cycles, and topological sort (for DAGs).",
      "project": {
        "title": "Shortest Path Finder",
        "description": "Implement Dijkstra’s algorithm to find the shortest path between two nodes in a weighted graph."
      },
      "interview": {
        "theory": "Explain how Dijkstra’s algorithm works and its time complexity. What are the limitations of Dijkstra’s algorithm?",
        "coding_question": "Course Schedule (Topological Sort, LeetCode #207). Example: Input: numCourses = 2, prerequisites = [[1,0]], Output: true."
      }
    },
    {
      "title": "Hashing: Basics",
      "description": "Understand Hashing: hash tables, hash functions, collision resolution (chaining, open addressing), and their time complexity (O(1) average case).",
      "project": {
        "title": "Hash Table Implementation",
        "description": "Implement a simple Hash Table using chaining to handle collisions, and test it by inserting and searching for keys."
      },
      "interview": {
        "theory": "What are the common collision resolution techniques in hashing? What is the difference between chaining and open addressing?",
        "coding_question": "Two Sum (LeetCode #1). Example: Input: nums = [2,7,11,15], target = 9, Output: [0,1]."
      }
    },
    {
      "title": "Dynamic Programming: Basics",
      "description": "Learn Dynamic Programming: concepts (overlapping subproblems, optimal substructure), approaches (top-down, bottom-up), and examples (Fibonacci, knapsack).",
      "project": {
        "title": "Fibonacci Calculator",
        "description": "Implement the Fibonacci sequence using both recursive and dynamic programming approaches, and compare their performance."
      },
      "interview": {
        "theory": "What are the key characteristics of a problem that can be solved using Dynamic Programming? Explain top-down vs. bottom-up approaches.",
        "coding_question": "Climbing Stairs (LeetCode #70). Example: Input: n = 3, Output: 3 (distinct ways to climb to the top)."
      }
    },
    {
      "title": "Greedy Algorithms",
      "description": "Understand Greedy Algorithms: concept (local optimal choice), examples (fractional knapsack, activity selection), and their limitations.",
      "project": {
        "title": "Activity Selection",
        "description": "Implement the Activity Selection problem to select the maximum number of non-overlapping activities."
      },
      "interview": {
        "theory": "What is the Greedy Choice Property? Give an example of a problem where a greedy approach fails.",
        "coding_question": "Jump Game (LeetCode #55). Example: Input: nums = [2,3,1,1,4], Output: true (can reach the last index)."
      }
    },
    {
      "title": "Backtracking",
      "description": "Learn Backtracking: concept (trial and error), examples (N-Queens, Sudoku solver), and how it differs from brute force.",
      "project": {
        "title": "N-Queens Solver",
        "description": "Implement the N-Queens problem to place N queens on an NxN chessboard such that no two queens attack each other."
      },
      "interview": {
        "theory": "How does Backtracking differ from Dynamic Programming? What are the steps to solve a problem using Backtracking?",
        "coding_question": "Sudoku Solver (LeetCode #37). Example: Solve a 9x9 Sudoku board by filling the empty cells."
      }
    },
    {
      "title": "Advanced Topics: Tries",
      "description": "Understand Tries: structure, insertion, searching, and use cases (autocomplete, spell checker). Learn their time complexity.",
      "project": {
        "title": "Autocomplete Feature",
        "description": "Implement a Trie to store words and provide an autocomplete feature for a given prefix."
      },
      "interview": {
        "theory": "What is a Trie, and how does it differ from a Binary Search Tree? What are the time complexities for insertion and search in a Trie?",
        "coding_question": "Implement Trie (Prefix Tree, LeetCode #208). Example: Implement insert, search, and startsWith methods."
      }
    },
    {
      "title": "Advanced Topics: Segment Trees",
      "description": "Learn Segment Trees: structure, construction, and range queries (sum, min, max). Understand their applications in range-based problems.",
      "project": {
        "title": "Range Sum Query",
        "description": "Implement a Segment Tree to perform range sum queries and updates on an array."
      },
      "interview": {
        "theory": "What is a Segment Tree, and how does it work? What are its advantages over a simple array for range queries?",
        "coding_question": "Range Sum Query - Mutable (LeetCode #307). Example: Input: nums = [1,3,5], sumRange(0,2) -> 9, update(1,2), sumRange(0,2) -> 8."
      }
    },
    {
      "title": "Interview Preparation: Common Patterns",
      "description": "Explore common DSA patterns for interviews: sliding window, two pointers, fast and slow pointers, and prefix sums.",
      "project": {
        "title": "Sliding Window Problem",
        "description": "Solve a sliding window problem to find the maximum sum subarray of size K."
      },
      "interview": {
        "theory": "Explain the sliding window technique with an example. How does the two-pointer technique help in solving array problems?",
        "coding_question": "Longest Substring Without Repeating Characters (LeetCode #3). Example: Input: 'abcabcbb', Output: 3 ('abc')."
      }
    },
    {
      "title": "Mock Interview Practice",
      "description": "Practice solving problems under time constraints. Focus on explaining your thought process, optimizing solutions, and writing clean code.",
      "project": {
        "title": "Mock Interview",
        "description": "Solve a medium-level LeetCode problem (e.g., 'Longest Substring Without Repeating Characters') and write a detailed solution with explanations."
      },
      "interview": {
        "theory": "How do you approach a coding problem in an interview? What steps do you take to optimize your solution?",
        "coding_question": "Top K Frequent Elements (LeetCode #347). Example: Input: nums = [1,1,1,2,2,3], k = 2, Output: [1,2]."
      }
    }
  ]
}