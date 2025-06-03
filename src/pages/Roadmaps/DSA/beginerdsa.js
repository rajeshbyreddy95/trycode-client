export const beginnerdsa = {
  "id": "11",
  "title": "Beginner Data Structures & Algorithms Roadmap",
  "category": "Computer Science",
  "description": "Learn foundational DSA concepts for beginners.",
  "image": "https://images.unsplash.com/photo-1516117172878-f8902b66d6b1?auto=format&fit=crop&w=800&q=80",
  "route": "/roadmaps/dsa/beginner",
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
        "questions": [
          {
            "name": "Analyze Time Complexity of a Loop",
            "description": "Write a program to calculate the time complexity of a given algorithm (e.g., a nested loop that runs N times inside another loop that runs N times).",
            "route": "/roadmaps/dsa/analyze-time-complexity",
            "completed": false
          },
          {
            "name": "Space Complexity Analysis",
            "description": "Analyze the space complexity of a recursive algorithm (e.g., factorial calculation).",
            "route": "/roadmaps/dsa/space-complexity-analysis",
            "completed": false
          },
          {
            "name": "Big-O Notation Examples",
            "description": "Provide the Big-O notation for common algorithms (e.g., linear search, binary search, bubble sort).",
            "route": "/roadmaps/dsa/big-o-notation-examples",
            "completed": false
          },
          {
            "name": "Compare Algorithm Efficiency",
            "description": "Compare the efficiency of two algorithms solving the same problem (e.g., iterative vs. recursive Fibonacci).",
            "route": "/roadmaps/dsa/compare-algorithm-efficiency",
            "completed": false
          },
          {
            "name": "Time Complexity of Matrix Operations",
            "description": "Calculate the time complexity of matrix multiplication for two NxN matrices.",
            "route": "/roadmaps/dsa/time-complexity-matrix-operations",
            "completed": false
          },
          {
            "name": "Amortized Analysis",
            "description": "Explain amortized analysis with an example (e.g., dynamic array resizing).",
            "route": "/roadmaps/dsa/amortized-analysis",
            "completed": false
          },
          {
            "name": "Best, Average, and Worst Case",
            "description": "Explain the best, average, and worst-case time complexities of quicksort.",
            "route": "/roadmaps/dsa/best-average-worst-case",
            "completed": false
          },
          {
            "name": "Complexity of Recursive Functions",
            "description": "Analyze the time complexity of a recursive function (e.g., recursive tree traversal).",
            "route": "/roadmaps/dsa/complexity-recursive-functions",
            "completed": false
          },
          {
            "name": "Space-Time Tradeoff",
            "description": "Discuss a problem where you can trade space for time (e.g., memoization in Fibonacci).",
            "route": "/roadmaps/dsa/space-time-tradeoff",
            "completed": false
          },
          {
            "name": "Asymptotic Analysis",
            "description": "Explain the difference between O, Ω, and Θ notations with examples.",
            "route": "/roadmaps/dsa/asymptotic-analysis",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Find the Duplicate Number",
            "description": "Find the duplicate number in an array of integers from 1 to n (LeetCode #287). Example: Input: [1,3,4,2,2], Output: 2.",
            "route": "/roadmaps/dsa/find-duplicate-number",
            "completed": false
          },
          {
            "name": "Find the Missing Number",
            "description": "Find the missing number from an array of integers from 0 to n (LeetCode #268). Example: Input: [3,0,1], Output: 2.",
            "route": "/roadmaps/dsa/find-missing-number",
            "completed": false
          },
          {
            "name": "Maximum Subarray Sum (Kadane’s Algorithm)",
            "description": "Find the maximum subarray sum in an array (LeetCode #53). Example: Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6 ([4,-1,2,1]).",
            "route": "/roadmaps/dsa/maximum-subarray-sum",
            "completed": false
          },
          {
            "name": "Two Sum Problem",
            "description": "Find two numbers in an array that add up to a target (LeetCode #1). Example: Input: nums = [2,7,11,15], target = 9, Output: [0,1].",
            "route": "/roadmaps/dsa/two-sum-problem",
            "completed": false
          },
          {
            "name": "Move All Zeroes to the End",
            "description": "Move all zeroes to the end of an array while maintaining relative order (LeetCode #283). Example: Input: [0,1,0,3,12], Output: [1,3,12,0,0].",
            "route": "/roadmaps/dsa/move-all-zeroes",
            "completed": false
          },
          {
            "name": "Best Time to Buy and Sell Stock",
            "description": "Find the maximum profit from buying and selling a stock (LeetCode #121). Example: Input: [7,1,5,3,6,4], Output: 5 (buy at 1, sell at 6).",
            "route": "/roadmaps/dsa/best-time-buy-sell-stock",
            "completed": false
          },
          {
            "name": "Check if Array Contains Duplicates",
            "description": "Check if an array contains any duplicates (LeetCode #217). Example: Input: [1,2,3,1], Output: true.",
            "route": "/roadmaps/dsa/check-array-duplicates",
            "completed": false
          },
          {
            "name": "Intersection of Two Arrays",
            "description": "Find the intersection of two arrays (LeetCode #349). Example: Input: nums1 = [1,2,2,1], nums2 = [2,2], Output: [2].",
            "route": "/roadmaps/dsa/intersection-two-arrays",
            "completed": false
          },
          {
            "name": "Rotate Array by K Steps",
            "description": "Rotate an array by k steps (LeetCode #189). Example: Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4].",
            "route": "/roadmaps/dsa/rotate-array-k-steps",
            "completed": false
          },
          {
            "name": "Sort Array by Parity",
            "description": "Sort an array by parity (even numbers followed by odd numbers, LeetCode #905). Example: Input: [3,1,2,4], Output: [2,4,3,1].",
            "route": "/roadmaps/dsa/sort-array-parity",
            "completed": false
          }
        ]
      }
    },
    {
      "title": "Strings: Basics",
      "description": "Learn about strings, their representation, and basic operations (concatenation, substring, length). Understand string immutability and manipulation.",
      "project": {
        "title": "String Manipulation",
        "description": "Implement a program to perform basic string operations: reverse a string, check if it's a palindrome, and count character frequency."
      },
      "interview": {
        "theory": "What is string immutability? How do you handle string manipulation efficiently in your preferred programming language?",
        "questions": [
          {
            "name": "Reverse String",
            "description": "Reverse a string in-place (LeetCode #344). Example: Input: s = ['h','e','l','l','o'], Output: ['o','l','l','e','h'].",
            "route": "/roadmaps/dsa/reverse-string",
            "completed": false
          },
          {
            "name": "Valid Palindrome",
            "description": "Check if a string is a palindrome after removing non-alphanumeric characters (LeetCode #125). Example: Input: s = 'A man, a plan, a canal: Panama', Output: true.",
            "route": "/roadmaps/dsa/valid-palindrome",
            "completed": false
          },
          {
            "name": "First Unique Character in a String",
            "description": "Find the first unique character in a string (LeetCode #387). Example: Input: s = 'leetcode', Output: 0.",
            "route": "/roadmaps/dsa/first-unique-character-string",
            "completed": false
          },
          {
            "name": "Valid Anagram",
            "description": "Check if two strings are anagrams (LeetCode #242). Example: Input: s = 'anagram', t = 'nagaram', Output: true.",
            "route": "/roadmaps/dsa/valid-anagram",
            "completed": false
          },
          {
            "name": "String to Integer (atoi)",
            "description": "Convert a string to an integer (LeetCode #8). Example: Input: s = '42', Output: 42.",
            "route": "/roadmaps/dsa/string-to-integer",
            "completed": false
          },
          {
            "name": "Longest Common Prefix",
            "description": "Find the longest common prefix among an array of strings (LeetCode #14). Example: Input: strs = ['flower','flow','flight'], Output: 'fl'.",
            "route": "/roadmaps/dsa/longest-common-prefix",
            "completed": false
          },
          {
            "name": "Implement strStr()",
            "description": "Find the first occurrence of a substring in a string (LeetCode #28). Example: Input: haystack = 'hello', needle = 'll', Output: 2.",
            "route": "/roadmaps/dsa/implement-strstr",
            "completed": false
          },
          {
            "name": "Count and Say",
            "description": "Generate the nth term of the count-and-say sequence (LeetCode #38). Example: Input: n = 4, Output: '1211'.",
            "route": "/roadmaps/dsa/count-and-say",
            "completed": false
          },
          {
            "name": "Reverse Words in a String III",
            "description": "Reverse each word in a string (LeetCode #557). Example: Input: s = 'Let's take LeetCode contest', Output: 's'teL ekat edoCteeL tsetnoc'.",
            "route": "/roadmaps/dsa/reverse-words-string-iii",
            "completed": false
          },
          {
            "name": "Add Strings",
            "description": "Add two numbers represented as strings (LeetCode #415). Example: Input: num1 = '11', num2 = '123', Output: '134'.",
            "route": "/roadmaps/dsa/add-strings",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Reverse Linked List",
            "description": "Reverse a Singly Linked List (LeetCode #206). Example: Input: 1->2->3->4->5->NULL, Output: 5->4->3->2->1->NULL.",
            "route": "/roadmaps/dsa/reverse-linked-list",
            "completed": false
          },
          {
            "name": "Merge Two Sorted Lists",
            "description": "Merge two sorted linked lists (LeetCode #21). Example: Input: 1->2->4, 1->3->4, Output: 1->1->2->3->4->4.",
            "route": "/roadmaps/dsa/merge-two-sorted-lists",
            "completed": false
          },
          {
            "name": "Remove Nth Node from End",
            "description": "Remove the nth node from the end of a linked list (LeetCode #19). Example: Input: 1->2->3->4->5, n = 2, Output: 1->2->3->5.",
            "route": "/roadmaps/dsa/remove-nth-node-from-end",
            "completed": false
          },
          {
            "name": "Add Two Numbers",
            "description": "Add two numbers represented by linked lists (LeetCode #2). Example: Input: 2->4->3, 5->6->4, Output: 7->0->8.",
            "route": "/roadmaps/dsa/add-two-numbers",
            "completed": false
          },
          {
            "name": "Intersection of Two Linked Lists",
            "description": "Find the intersection point of two linked lists (LeetCode #160). Example: Input: 4->1->8->4->5, 5->6->1->8->4->5, Output: 8.",
            "route": "/roadmaps/dsa/intersection-two-linked-lists",
            "completed": false
          },
          {
            "name": "Palindrome Linked List",
            "description": "Check if a linked list is a palindrome (LeetCode #234). Example: Input: 1->2->2->1, Output: true.",
            "route": "/roadmaps/dsa/palindrome-linked-list",
            "completed": false
          },
          {
            "name": "Odd Even Linked List",
            "description": "Group all odd nodes followed by even nodes (LeetCode #328). Example: Input: 1->2->3->4->5, Output: 1->3->5->2->4.",
            "route": "/roadmaps/dsa/odd-even-linked-list",
            "completed": false
          },
          {
            "name": "Remove Duplicates from Sorted List",
            "description": "Remove duplicates from a sorted linked list (LeetCode #83). Example: Input: 1->1->2, Output: 1->2.",
            "route": "/roadmaps/dsa/remove-duplicates-sorted-list",
            "completed": false
          },
          {
            "name": "Sort List",
            "description": "Sort a linked list using merge sort (LeetCode #148). Example: Input: 4->2->1->3, Output: 1->2->3->4.",
            "route": "/roadmaps/dsa/sort-list",
            "completed": false
          },
          {
            "name": "Swap Nodes in Pairs",
            "description": "Swap nodes in pairs in a linked list (LeetCode #24). Example: Input: 1->2->3->4, Output: 2->1->4->3.",
            "route": "/roadmaps/dsa/swap-nodes-in-pairs",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Valid Parentheses",
            "description": "Check if a string of parentheses is valid (LeetCode #20). Example: Input: '()[]{}', Output: true; Input: '(]', Output: false.",
            "route": "/roadmaps/dsa/valid-parentheses",
            "completed": false
          },
          {
            "name": "Min Stack",
            "description": "Implement a stack with a getMin() function that returns the minimum element in O(1) time (LeetCode #155). Example: push(3), push(5), getMin() -> 3.",
            "route": "/roadmaps/dsa/min-stack",
            "completed": false
          },
          {
            "name": "Next Greater Element",
            "description": "Find the next greater element for each element in an array (LeetCode #496). Example: Input: [4,1,2], [1,3,4,2], Output: [-1,3,-1].",
            "route": "/roadmaps/dsa/next-greater-element",
            "completed": false
          },
          {
            "name": "Evaluate Reverse Polish Notation",
            "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation (LeetCode #150). Example: Input: ['2','1','+','3','*'], Output: 9.",
            "route": "/roadmaps/dsa/evaluate-reverse-polish-notation",
            "completed": false
          },
          {
            "name": "Simplify Path",
            "description": "Simplify a Unix-style file path (LeetCode #71). Example: Input: '/home//foo/', Output: '/home/foo'.",
            "route": "/roadmaps/dsa/simplify-path",
            "completed": false
          },
          {
            "name": "Implement Stack using Queues",
            "description": "Implement a stack using queues (LeetCode #225). Example: Input: push(1), push(2), pop(), Output: 2.",
            "route": "/roadmaps/dsa/implement-stack-using-queues",
            "completed": false
          },
          {
            "name": "Backspace String Compare",
            "description": "Compare two strings after processing backspaces (LeetCode #844). Example: Input: s = 'ab#c', t = 'ad#c', Output: true.",
            "route": "/roadmaps/dsa/backspace-string-compare",
            "completed": false
          },
          {
            "name": "Daily Temperatures",
            "description": "Find the number of days until a warmer temperature (LeetCode #739). Example: Input: [73,74,75,71,69,72,76,73], Output: [1,1,4,2,1,1,0,0].",
            "route": "/roadmaps/dsa/daily-temperatures",
            "completed": false
          },
          {
            "name": "Basic Calculator",
            "description": "Implement a basic calculator to evaluate a simple expression (LeetCode #224). Example: Input: '(1+(4+5+2)-3)+(6+8)', Output: 23.",
            "route": "/roadmaps/dsa/basic-calculator",
            "completed": false
          },
          {
            "name": "Stock Span Problem",
            "description": "Find the span of stock prices (LeetCode #901). Example: Input: [100,80,60,70,60,75,85], Output: [1,1,1,2,1,4,6].",
            "route": "/roadmaps/dsa/stock-span-problem",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Implement Queue using Stacks",
            "description": "Implement a queue using two stacks (LeetCode #232). Example: enqueue(1), enqueue(2), dequeue() -> 1.",
            "route": "/roadmaps/dsa/implement-queue-using-stacks",
            "completed": false
          },
          {
            "name": "Design Circular Queue",
            "description": "Design a circular queue (LeetCode #622). Example: CircularQueue(3), enQueue(1), enQueue(2), enQueue(3), enQueue(4) -> false.",
            "route": "/roadmaps/dsa/design-circular-queue",
            "completed": false
          },
          {
            "name": "Number of Recent Calls",
            "description": "Track the number of recent calls within a 3000ms window (LeetCode #933). Example: Input: [1,100,3001,3002], Output: [1,2,3,3].",
            "route": "/roadmaps/dsa/number-recent-calls",
            "completed": false
          },
          {
            "name": "Design Circular Deque",
            "description": "Design a circular deque (LeetCode #641). Example: CircularDeque(3), insertLast(1), insertLast(2), insertFront(3), Output: true.",
            "route": "/roadmaps/dsa/design-circular-deque",
            "completed": false
          },
          {
            "name": "Moving Average from Data Stream",
            "description": "Calculate the moving average from a data stream (LeetCode #346). Example: Input: size = 3, [1,10,3,5], Output: [1,5.5,4.67,6].",
            "route": "/roadmaps/dsa/moving-average-data-stream",
            "completed": false
          },
          {
            "name": "Design Front Middle Back Queue",
            "description": "Design a queue that supports push and pop from front, middle, and back (LeetCode #1670). Example: pushFront(1), pushBack(2), popMiddle() -> 1.",
            "route": "/roadmaps/dsa/design-front-middle-back-queue",
            "completed": false
          },
          {
            "name": "First Unique Character in a Stream",
            "description": "Find the first unique character in a stream (LeetCode #387 variant). Example: Input: 'leetcode', Output: 0.",
            "route": "/roadmaps/dsa/first-unique-character-stream",
            "completed": false
          },
          {
            "name": "Task Scheduler",
            "description": "Find the least number of intervals to schedule tasks (LeetCode #621). Example: Input: tasks = ['A','A','A','B','B','B'], n = 2, Output: 8.",
            "route": "/roadmaps/dsa/task-scheduler",
            "completed": false
          },
          {
            "name": "Open the Lock",
            "description": "Find the minimum number of turns to open a lock (LeetCode #752). Example: Input: deadends = ['0201','0101'], target = '0202', Output: 1.",
            "route": "/roadmaps/dsa/open-the-lock",
            "completed": false
          },
          {
            "name": "Sliding Window Maximum",
            "description": "Find the maximum element in each sliding window of size k (LeetCode #239). Example: Input: [1,3,-1,-3,5,3,6,7], k = 3, Output: [3,3,5,5,6,7].",
            "route": "/roadmaps/dsa/sliding-window-maximum",
            "completed": false
          }
        ]
      }
    }
  ]
}