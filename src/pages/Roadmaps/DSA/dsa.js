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
            "name": "Product of Array Except Self",
            "description": "Calculate the product of all elements in an array except the current element (LeetCode #238). Example: Input: [1,2,3,4], Output: [24,12,8,6].",
            "route": "/roadmaps/dsa/product-array-except-self",
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
            "name": "Longest Consecutive Sequence",
            "description": "Find the length of the longest consecutive sequence in an array (LeetCode #128). Example: Input: [100,4,200,1,3,2], Output: 4 ([1,2,3,4]).",
            "route": "/roadmaps/dsa/longest-consecutive-sequence",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Find First and Last Position",
            "description": "Find the first and last position of an element in a sorted array (LeetCode #34). Example: Input: nums = [5,7,7,8,8,10], target = 8, Output: [3,4].",
            "route": "/roadmaps/dsa/find-first-and-last-position",
            "completed": false
          },
          {
            "name": "Search in Rotated Sorted Array",
            "description": "Search for a target in a rotated sorted array (LeetCode #33). Example: Input: nums = [4,5,6,7,0,1,2], target = 0, Output: 4.",
            "route": "/roadmaps/dsa/search-rotated-sorted-array",
            "completed": false
          },
          {
            "name": "Find Peak Element",
            "description": "Find a peak element in an array (LeetCode #162). Example: Input: [1,2,3,1], Output: 2 (3 is a peak element).",
            "route": "/roadmaps/dsa/find-peak-element",
            "completed": false
          },
          {
            "name": "Search Insert Position",
            "description": "Find the position to insert a target in a sorted array (LeetCode #35). Example: Input: nums = [1,3,5,6], target = 5, Output: 2.",
            "route": "/roadmaps/dsa/search-insert-position",
            "completed": false
          },
          {
            "name": "Find Minimum in Rotated Sorted Array",
            "description": "Find the minimum element in a rotated sorted array (LeetCode #153). Example: Input: [3,4,5,1,2], Output: 1.",
            "route": "/roadmaps/dsa/find-minimum-rotated-sorted-array",
            "completed": false
          },
          {
            "name": "Kth Smallest Element in Sorted Matrix",
            "description": "Find the kth smallest element in a sorted matrix (LeetCode #378). Example: Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8, Output: 13.",
            "route": "/roadmaps/dsa/kth-smallest-sorted-matrix",
            "completed": false
          },
          {
            "name": "Median of Two Sorted Arrays",
            "description": "Find the median of two sorted arrays (LeetCode #4). Example: Input: nums1 = [1,3], nums2 = [2], Output: 2.0.",
            "route": "/roadmaps/dsa/median-two-sorted-arrays",
            "completed": false
          },
          {
            "name": "Find Element in Infinite Sorted Array",
            "description": "Find an element in an infinite sorted array (LeetCode #704 variant). Example: Input: nums = [1,2,3,...], target = 3, Output: 2.",
            "route": "/roadmaps/dsa/find-element-infinite-sorted-array",
            "completed": false
          },
          {
            "name": "Sqrt(x)",
            "description": "Compute the square root of x using binary search (LeetCode #69). Example: Input: x = 8, Output: 2.",
            "route": "/roadmaps/dsa/sqrt-x",
            "completed": false
          },
          {
            "name": "Find K Closest Elements",
            "description": "Find k closest elements to a given value in a sorted array (LeetCode #658). Example: Input: arr = [1,2,3,4,5], k = 4, x = 3, Output: [1,2,3,4].",
            "route": "/roadmaps/dsa/find-k-closest-elements",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Sort an Array of 0s, 1s, and 2s (Dutch National Flag)",
            "description": "Sort an array containing only 0s, 1s, and 2s (LeetCode #75). Example: Input: [2,0,2,1,1,0], Output: [0,0,1,1,2,2].",
            "route": "/roadmaps/dsa/sort-colors",
            "completed": false
          },
          {
            "name": "Merge Two Sorted Arrays",
            "description": "Merge two sorted arrays without extra space (LeetCode #88). Example: Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3, Output: [1,2,2,3,5,6].",
            "route": "/roadmaps/dsa/merge-two-sorted-arrays",
            "completed": false
          },
          {
            "name": "Rotate Array by K Steps",
            "description": "Rotate an array by k steps (LeetCode #189). Example: Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4].",
            "route": "/roadmaps/dsa/rotate-array-k-steps",
            "completed": false
          },
          {
            "name": "Subarray Sum Equals K",
            "description": "Find the number of subarrays with sum equal to k (LeetCode #560). Example: Input: nums = [1,1,1], k = 2, Output: 2.",
            "route": "/roadmaps/dsa/subarray-sum-equals-k",
            "completed": false
          },
          {
            "name": "Rearrange Array Alternating Positive and Negative",
            "description": "Rearrange an array in alternating positive and negative items (LeetCode #2149 variant). Example: Input: [3,1,-2,-5,2,-4], Output: [3,-2,1,-5,2,-4].",
            "route": "/roadmaps/dsa/rearrange-alternating-positive-negative",
            "completed": false
          },
          {
            "name": "Sort Array by Parity",
            "description": "Sort an array by parity (even numbers followed by odd numbers, LeetCode #905). Example: Input: [3,1,2,4], Output: [2,4,3,1].",
            "route": "/roadmaps/dsa/sort-array-parity",
            "completed": false
          },
          {
            "name": "Kth Largest Element in Array",
            "description": "Find the kth largest element in an unsorted array (LeetCode #215). Example: Input: [3,2,1,5,6,4], k = 2, Output: 5.",
            "route": "/roadmaps/dsa/kth-largest-element",
            "completed": false
          },
          {
            "name": "Merge Intervals",
            "description": "Merge overlapping intervals (LeetCode #56). Example: Input: [[1,3],[2,6],[8,10],[15,18]], Output: [[1,6],[8,10],[15,18]].",
            "route": "/roadmaps/dsa/merge-intervals",
            "completed": false
          },
          {
            "name": "Sort Array by Increasing Frequency",
            "description": "Sort array by increasing frequency (LeetCode #1636). Example: Input: [1,1,2,2,2,3], Output: [3,1,1,2,2,2].",
            "route": "/roadmaps/dsa/sort-array-increasing-frequency",
            "completed": false
          },
          {
            "name": "Partition Array into Disjoint Intervals",
            "description": "Partition array into disjoint intervals (LeetCode #915). Example: Input: [5,0,3,8,6], Output: 3.",
            "route": "/roadmaps/dsa/partition-disjoint-intervals",
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
      "title": "Linked Lists: Advanced",
      "description": "Explore advanced operations: reversing a linked list, detecting a cycle (Floyd’s Cycle Detection Algorithm), and finding the middle node.",
      "project": {
        "title": "Reverse Linked List",
        "description": "Write a program to reverse a Singly Linked List and print both the original and reversed lists."
      },
      "interview": {
        "theory": "How does Floyd’s Cycle Detection Algorithm work? What are some common use cases for linked lists in real-world applications?",
        "questions": [
          {
            "name": "Detect Cycle in Linked List",
            "description": "Detect a cycle in a linked list (LeetCode #141). Example: Input: 3->2->0->-4 (cycle back to 2), Output: true.",
            "route": "/roadmaps/dsa/detect-cycle-linked-list",
            "completed": false
          },
          {
            "name": "Find Cycle Starting Point",
            "description": "Find the starting point of a cycle in a linked list (LeetCode #142). Example: Input: 3->2->0->-4 (cycle back to 2), Output: 2.",
            "route": "/roadmaps/dsa/find-cycle-starting-point",
            "completed": false
          },
          {
            "name": "LRU Cache Implementation",
            "description": "Implement an LRU Cache using a linked list and hash map (LeetCode #146). Example: Input: capacity = 2, Output: LRU operations.",
            "route": "/roadmaps/dsa/lru-cache-implementation",
            "completed": false
          },
          {
            "name": "Reverse Nodes in k-Group",
            "description": "Reverse nodes in k-group in a linked list (LeetCode #25). Example: Input: 1->2->3->4->5, k = 2, Output: 2->1->4->3->5.",
            "route": "/roadmaps/dsa/reverse-nodes-k-group",
            "completed": false
          },
          {
            "name": "Rotate List",
            "description": "Rotate a linked list to the right by k places (LeetCode #61). Example: Input: 1->2->3->4->5, k = 2, Output: 4->5->1->2->3.",
            "route": "/roadmaps/dsa/rotate-list",
            "completed": false
          },
          {
            "name": "Flatten a Linked List",
            "description": "Flatten a multilevel linked list (LeetCode #430). Example: Input: 1->2->3->4->5->6, Output: 1->2->3->4->5->6.",
            "route": "/roadmaps/dsa/flatten-linked-list",
            "completed": false
          },
          {
            "name": "Copy List with Random Pointer",
            "description": "Copy a linked list with random pointers (LeetCode #138). Example: Input: 1->2->3 with random pointers, Output: Deep copy.",
            "route": "/roadmaps/dsa/copy-list-random-pointer",
            "completed": false
          },
          {
            "name": "Reorder List",
            "description": "Reorder a linked list such that L0->Ln->L1->Ln-1 (LeetCode #143). Example: Input: 1->2->3->4, Output: 1->4->2->3.",
            "route": "/roadmaps/dsa/reorder-list",
            "completed": false
          },
          {
            "name": "Insert into a Sorted Circular Linked List",
            "description": "Insert a node into a sorted circular linked list (LeetCode #708). Example: Input: 3->4->1, insert 2, Output: 1->2->3->4.",
            "route": "/roadmaps/dsa/insert-sorted-circular-linked-list",
            "completed": false
          },
          {
            "name": "Partition List",
            "description": "Partition a linked list around a value x (LeetCode #86). Example: Input: 1->4->3->2->5->2, x = 3, Output: 1->2->2->4->3->5.",
            "route": "/roadmaps/dsa/partition-list",
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
            "name": "Daily Temperatures",
            "description": "Find the number of days until a warmer temperature (LeetCode #739). Example: Input: [73,74,75,71,69,72,76,73], Output: [1,1,4,2,1,1,0,0].",
            "route": "/roadmaps/dsa/daily-temperatures",
            "completed": false
          },
          {
            "name": "Evaluate Reverse Polish Notation",
            "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation (LeetCode #150). Example: Input: ['2','1','+','3','*'], Output: 9.",
            "route": "/roadmaps/dsa/evaluate-reverse-polish-notation",
            "completed": false
          },
          {
            "name": "Largest Rectangle in Histogram",
            "description": "Find the largest rectangle area in a histogram (LeetCode #84). Example: Input: [2,1,5,6,2,3], Output: 10.",
            "route": "/roadmaps/dsa/largest-rectangle-histogram",
            "completed": false
          },
          {
            "name": "Trapping Rain Water",
            "description": "Calculate how much water can be trapped between bars (LeetCode #42). Example: Input: [0,1,0,2,1,0,1,3,2,1,2,1], Output: 6.",
            "route": "/roadmaps/dsa/trapping-rain-water",
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
            "name": "Basic Calculator",
            "description": "Implement a basic calculator to evaluate a simple expression (LeetCode #224). Example: Input: '(1+(4+5+2)-3)+(6+8)', Output: 23.",
            "route": "/roadmaps/dsa/basic-calculator",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Valid Parentheses",
            "description": "Check if a string of parentheses is valid (LeetCode #20). Example: Input: '()[]{}', Output: true; Input: '(]', Output: false.",
            "route": "/roadmaps/dsa/valid-parentheses",
            "completed": false
          },
          {
            "name": "Next Greater Element II",
            "description": "Find the next greater element in a circular array (LeetCode #503). Example: Input: [1,2,1], Output: [2,-1,2].",
            "route": "/roadmaps/dsa/next-greater-element-ii",
            "completed": false
          },
          {
            "name": "Longest Valid Parentheses",
            "description": "Find the length of the longest valid parentheses substring (LeetCode #32). Example: Input: '(()', Output: 2.",
            "route": "/roadmaps/dsa/longest-valid-parentheses",
            "completed": false
          },
          {
            "name": "Remove K Digits",
            "description": "Remove k digits to form the smallest number (LeetCode #402). Example: Input: num = '1432219', k = 3, Output: '1219'.",
            "route": "/roadmaps/dsa/remove-k-digits",
            "completed": false
          },
          {
            "name": "Remove Duplicate Letters",
            "description": "Remove duplicate letters to get the smallest lexicographical order (LeetCode #316). Example: Input: 'bcabc', Output: 'abc'.",
            "route": "/roadmaps/dsa/remove-duplicate-letters",
            "completed": false
          },
          {
            "name": "Decode String",
            "description": "Decode a string with nested brackets (LeetCode #394). Example: Input: '3[a]2[bc]', Output: 'aaabcbc'.",
            "route": "/roadmaps/dsa/decode-string",
            "completed": false
          },
          {
            "name": "Asteroid Collision",
            "description": "Simulate asteroid collisions using a stack (LeetCode #735). Example: Input: [5,10,-5], Output: [5,10].",
            "route": "/roadmaps/dsa/asteroid-collision",
            "completed": false
          },
          {
            "name": "Backspace String Compare",
            "description": "Compare two strings after processing backspaces (LeetCode #844). Example: Input: s = 'ab#c', t = 'ad#c', Output: true.",
            "route": "/roadmaps/dsa/backspace-string-compare",
            "completed": false
          },
          {
            "name": "Stock Span Problem",
            "description": "Find the span of stock prices (LeetCode #901). Example: Input: [100,80,60,70,60,75,85], Output: [1,1,1,2,1,4,6].",
            "route": "/roadmaps/dsa/stock-span-problem",
            "completed": false
          },
          {
            "name": "Exclusive Time of Functions",
            "description": "Calculate exclusive time of functions from logs (LeetCode #636). Example: Input: n = 2, logs = ['0:start:0','1:start:2','1:end:5','0:end:6'], Output: [3,4].",
            "route": "/roadmaps/dsa/exclusive-time-functions",
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
            "name": "Sliding Window Maximum",
            "description": "Find the maximum element in each sliding window of size k (LeetCode #239). Example: Input: [1,3,-1,-3,5,3,6,7], k = 3, Output: [3,3,5,5,6,7].",
            "route": "/roadmaps/dsa/sliding-window-maximum",
            "completed": false
          },
          {
            "name": "First Unique Character in a Stream",
            "description": "Find the first unique character in a stream (LeetCode #387 variant). Example: Input: 'leetcode', Output: 0.",
            "route": "/roadmaps/dsa/first-unique-character-stream",
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
            "name": "Task Scheduler",
            "description": "Find the least number of intervals to schedule tasks (LeetCode #621). Example: Input: tasks = ['A','A','A','B','B','B'], n = 2, Output: 8.",
            "route": "/roadmaps/dsa/task-scheduler",
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
            "name": "Open the Lock",
            "description": "Find the minimum number of turns to open a lock (LeetCode #752). Example: Input: deadends = ['0201','0101'], target = '0202', Output: 1.",
            "route": "/roadmaps/dsa/open-the-lock",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Design Circular Queue",
            "description": "Design a circular queue (LeetCode #622). Example: CircularQueue(3), enQueue(1), enQueue(2), enQueue(3), enQueue(4) -> false.",
            "route": "/roadmaps/dsa/design-circular-queue",
            "completed": false
          },
          {
            "name": "Top K Frequent Elements",
            "description": "Find the top k frequent elements in an array (LeetCode #347). Example: Input: nums = [1,1,1,2,2,3], k = 2, Output: [1,2].",
            "route": "/roadmaps/dsa/top-k-frequent-elements",
            "completed": false
          },
          {
            "name": "Kth Largest Element in a Stream",
            "description": "Design a class to find the kth largest element in a stream (LeetCode #703). Example: Input: k = 3, nums = [4,5,8,2], Output: 4.",
            "route": "/roadmaps/dsa/kth-largest-element-stream",
            "completed": false
          },
          {
            "name": "Merge K Sorted Lists",
            "description": "Merge k sorted linked lists using a priority queue (LeetCode #23). Example: Input: [1->4->5, 1->3->4, 2->6], Output: 1->1->2->3->4->4->5->6.",
            "route": "/roadmaps/dsa/merge-k-sorted-lists",
            "completed": false
          },
          {
            "name": "Find Median from Data Stream",
            "description": "Find the median from a data stream using two heaps (LeetCode #295). Example: Input: [1,2], Output: 1.5.",
            "route": "/roadmaps/dsa/find-median-data-stream",
            "completed": false
          },
          {
            "name": "K Closest Points to Origin",
            "description": "Find k closest points to the origin (LeetCode #973). Example: Input: points = [[1,3],[-2,2]], k = 1, Output: [[-2,2]].",
            "route": "/roadmaps/dsa/k-closest-points-origin",
            "completed": false
          },
          {
            "name": "Minimum Cost to Connect Sticks",
            "description": "Find the minimum cost to connect sticks (LeetCode #1167). Example: Input: [2,4,3], Output: 14.",
            "route": "/roadmaps/dsa/minimum-cost-connect-sticks",
            "completed": false
          },
          {
            "name": "Rearrange String k Distance Apart",
            "description": "Rearrange a string so that same characters are at least k distance apart (LeetCode #358). Example: Input: s = 'aabbcc', k = 3, Output: 'abcabc'.",
            "route": "/roadmaps/dsa/rearrange-string-k-distance",
            "completed": false
          },
          {
            "name": "Sort Characters By Frequency",
            "description": "Sort characters in a string by frequency (LeetCode #451). Example: Input: 'tree', Output: 'eert'.",
            "route": "/roadmaps/dsa/sort-characters-frequency",
            "completed": false
          },
          {
            "name": "Kth Smallest Element in a BST",
            "description": "Find the kth smallest element in a BST using a priority queue (LeetCode #230). Example: Input: root = [3,1,4,null,2], k = 1, Output: 1.",
            "route": "/roadmaps/dsa/kth-smallest-element-bst",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Inorder Traversal of Binary Tree",
            "description": "Perform inorder traversal of a binary tree (LeetCode #94). Example: Input: [1,null,2,3], Output: [1,3,2].",
            "route": "/roadmaps/dsa/inorder-traversal-binary-tree",
            "completed": false
          },
          {
            "name": "Preorder Traversal of Binary Tree",
            "description": "Perform preorder traversal of a binary tree (LeetCode #144). Example: Input: [1,null,2,3], Output: [1,2,3].",
            "route": "/roadmaps/dsa/preorder-traversal-binary-tree",
            "completed": false
          },
          {
            "name": "Postorder Traversal of Binary Tree",
            "description": "Perform postorder traversal of a binary tree (LeetCode #145). Example: Input: [1,null,2,3], Output: [3,2,1].",
            "route": "/roadmaps/dsa/postorder-traversal-binary-tree",
            "completed": false
          },
          {
            "name": "Maximum Depth of Binary Tree",
            "description": "Find the maximum depth of a binary tree (LeetCode #104). Example: Input: [3,9,20,null,null,15,7], Output: 3.",
            "route": "/roadmaps/dsa/maximum-depth-binary-tree",
            "completed": false
          },
          {
            "name": "Symmetric Tree",
            "description": "Check if a binary tree is symmetric (LeetCode #101). Example: Input: [1,2,2,3,4,4,3], Output: true.",
            "route": "/roadmaps/dsa/symmetric-tree",
            "completed": false
          },
          {
            "name": "Path Sum",
            "description": "Check if there exists a root-to-leaf path with a given sum (LeetCode #112). Example: Input: [5,4,8,11,null,13,4,7,2,null,null,null,1], sum = 22, Output: true.",
            "route": "/roadmaps/dsa/path-sum",
            "completed": false
          },
          {
            "name": "Level Order Traversal",
            "description": "Perform level order traversal of a binary tree (LeetCode #102). Example: Input: [3,9,20,null,null,15,7], Output: [[3],[9,20],[15,7]].",
            "route": "/roadmaps/dsa/level-order-traversal",
            "completed": false
          },
          {
            "name": "Invert Binary Tree",
            "description": "Invert a binary tree (LeetCode #226). Example: Input: [4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1].",
            "route": "/roadmaps/dsa/invert-binary-tree",
            "completed": false
          },
          {
            "name": "Diameter of Binary Tree",
            "description": "Find the diameter of a binary tree (LeetCode #543). Example: Input: [1,2,3,4,5], Output: 3.",
            "route": "/roadmaps/dsa/diameter-binary-tree",
            "completed": false
          },
          {
            "name": "Lowest Common Ancestor",
            "description": "Find the lowest common ancestor of two nodes in a binary tree (LeetCode #236). Example: Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1, Output: 3.",
            "route": "/roadmaps/dsa/lowest-common-ancestor",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Validate Binary Search Tree",
            "description": "Validate if a binary tree is a BST (LeetCode #98). Example: Input: [5,1,4,null,null,3,6], Output: false.",
            "route": "/roadmaps/dsa/validate-binary-search-tree",
            "completed": false
          },
          {
            "name": "Kth Smallest Element in a BST",
            "description": "Find the kth smallest element in a BST (LeetCode #230). Example: Input: root = [3,1,4,null,2], k = 1, Output: 1.",
            "route": "/roadmaps/dsa/kth-smallest-element-bst",
            "completed": false
          },
          {
            "name": "Insert into a BST",
            "description": "Insert a value into a BST (LeetCode #701). Example: Input: root = [4,2,7,1,3], val = 5, Output: [4,2,7,1,3,5].",
            "route": "/roadmaps/dsa/insert-into-bst",
            "completed": false
          },
          {
            "name": "Delete Node in a BST",
            "description": "Delete a node from a BST (LeetCode #450). Example: Input: root = [5,3,6,2,4,null,7], key = 3, Output: [5,4,6,2,null,null,7].",
            "route": "/roadmaps/dsa/delete-node-bst",
            "completed": false
          },
          {
            "name": "Search in a BST",
            "description": "Search for a value in a BST (LeetCode #700). Example: Input: root = [4,2,7,1,3], val = 2, Output: [2,1,3].",
            "route": "/roadmaps/dsa/search-in-bst",
            "completed": false
          },
          {
            "name": "Lowest Common Ancestor in BST",
            "description": "Find the lowest common ancestor in a BST (LeetCode #235). Example: Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8, Output: 6.",
            "route": "/roadmaps/dsa/lowest-common-ancestor-bst",
            "completed": false
          },
          {
            "name": "Recover Binary Search Tree",
            "description": "Recover a BST where two nodes are swapped (LeetCode #99). Example: Input: [1,3,null,null,2], Output: [3,1,null,null,2].",
            "route": "/roadmaps/dsa/recover-binary-search-tree",
            "completed": false
          },
          {
            "name": "Convert Sorted Array to BST",
            "description": "Convert a sorted array to a height-balanced BST (LeetCode #108). Example: Input: [-10,-3,0,5,9], Output: [0,-3,9,-10,null,5].",
            "route": "/roadmaps/dsa/convert-sorted-array-bst",
            "completed": false
          },
          {
            "name": "Balance a BST",
            "description": "Balance a BST to make it height-balanced (LeetCode #1382). Example: Input: [1,null,2,null,3,null,4], Output: [2,1,3,null,null,null,4].",
            "route": "/roadmaps/dsa/balance-bst",
            "completed": false
          },
          {
            "name": "Inorder Successor in BST",
            "description": "Find the inorder successor of a node in a BST (LeetCode #285). Example: Input: root = [2,1,3], p = 1, Output: 2.",
            "route": "/roadmaps/dsa/inorder-successor-bst",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Number of Islands",
            "description": "Find the number of islands in a grid (LeetCode #200). Example: Input: grid = [['1','1','0'],['1','1','0'],['0','0','1']], Output: 2.",
            "route": "/roadmaps/dsa/number-of-islands",
            "completed": false
          },
          {
            "name": "Clone Graph",
            "description": "Clone an undirected graph (LeetCode #133). Example: Input: 1--2, 2--3, 3--1, Output: Cloned graph.",
            "route": "/roadmaps/dsa/clone-graph",
            "completed": false
          },
          {
            "name": "Course Schedule (Cycle Detection)",
            "description": "Determine if you can finish all courses given prerequisites (LeetCode #207). Example: Input: numCourses = 2, prerequisites = [[1,0]], Output: true.",
            "route": "/roadmaps/dsa/course-schedule",
            "completed": false
          },
          {
            "name": "Number of Connected Components",
            "description": "Find the number of connected components in an undirected graph (LeetCode #323). Example: Input: n = 5, edges = [[0,1],[1,2],[3,4]], Output: 2.",
            "route": "/roadmaps/dsa/number-connected-components",
            "completed": false
          },
          {
            "name": "Word Ladder",
            "description": "Find the shortest transformation sequence from beginWord to endWord (LeetCode #127). Example: Input: beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog'], Output: 5.",
            "route": "/roadmaps/dsa/word-ladder",
            "completed": false
          },
          {
            "name": "Rotting Oranges",
            "description": "Find the minimum time to rot all oranges (LeetCode #994). Example: Input: [[2,1,1],[1,1,0],[0,1,1]], Output: 4.",
            "route": "/roadmaps/dsa/rotting-oranges",
            "completed": false
          },
          {
            "name": "Flood Fill",
            "description": "Perform a flood fill on an image (LeetCode #733). Example: Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2, Output: [[2,2,2],[2,2,0],[2,0,1]].",
            "route": "/roadmaps/dsa/flood-fill",
            "completed": false
          },
          {
            "name": "Surrounded Regions",
            "description": "Capture surrounded regions in a board (LeetCode #130). Example: Input: [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']], Output: [['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']].",
            "route": "/roadmaps/dsa/surrounded-regions",
            "completed": false
          },
          {
            "name": "Pacific Atlantic Water Flow",
            "description": "Find cells where water can flow to both oceans (LeetCode #417). Example: Input: heights = [[1,2,2,3,5],[3,2,3,4,4]], Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]].",
            "route": "/roadmaps/dsa/pacific-atlantic-water-flow",
            "completed": false
          },
          {
            "name": "Walls and Gates",
            "description": "Fill each empty room with the distance to the nearest gate (LeetCode #286). Example: Input: [[INF,-1,0,INF],[INF,INF,INF,0]], Output: [[3,-1,0,1],[2,2,1,0]].",
            "route": "/roadmaps/dsa/walls-and-gates",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Course Schedule II (Topological Sort)",
            "description": "Find the order of courses to take given prerequisites (LeetCode #210). Example: Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]], Output: [0,1,2,3].",
            "route": "/roadmaps/dsa/course-schedule-ii",
            "completed": false
          },
          {
            "name": "Network Delay Time (Dijkstra’s)",
            "description": "Find the time to send a signal to all nodes (LeetCode #743). Example: Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2, Output: 2.",
            "route": "/roadmaps/dsa/network-delay-time",
            "completed": false
          },
          {
            "name": "Cheapest Flights Within K Stops",
            "description": "Find the cheapest price to reach a destination within k stops (LeetCode #787). Example: Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1, Output: 200.",
            "route": "/roadmaps/dsa/cheapest-flights-k-stops",
            "completed": false
          },
          {
            "name": "Minimum Spanning Tree (Prim’s/Kruskal’s)",
            "description": "Find the minimum spanning tree of a graph (LeetCode #1584). Example: Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]], Output: 20.",
            "route": "/roadmaps/dsa/minimum-spanning-tree",
            "completed": false
          },
          {
            "name": "Find if Path Exists in Graph",
            "description": "Check if there exists a path between two nodes (LeetCode #1971). Example: Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2, Output: true.",
            "route": "/roadmaps/dsa/find-path-exists-graph",
            "completed": false
          },
          {
            "name": "Alien Dictionary (Topological Sort)",
            "description": "Find the order of characters in an alien dictionary (LeetCode #269). Example: Input: words = ['wrt','wrf','er','ett','rftt'], Output: 'wertf'.",
            "route": "/roadmaps/dsa/alien-dictionary",
            "completed": false
          },
          {
            "name": "Shortest Path in Binary Matrix",
            "description": "Find the shortest path in a binary matrix (LeetCode #1091). Example: Input: grid = [[0,1],[1,0]], Output: 2.",
            "route": "/roadmaps/dsa/shortest-path-binary-matrix",
            "completed": false
          },
          {
            "name": "Word Search II",
            "description": "Find all words in a board (LeetCode #212). Example: Input: board = [['o','a','a','n'],['e','t','a','e']], words = ['oath','pea'], Output: ['oath'].",
            "route": "/roadmaps/dsa/word-search-ii",
            "completed": false
          },
          {
            "name": "Critical Connections in a Network",
            "description": "Find critical connections in a network (LeetCode #1192). Example: Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]], Output: [[1,3]].",
            "route": "/roadmaps/dsa/critical-connections-network",
            "completed": false
          },
          {
            "name": "Reconstruct Itinerary",
            "description": "Reconstruct an itinerary from tickets (LeetCode #332). Example: Input: tickets = [['MUC','LHR'],['JFK','MUC']], Output: ['JFK','MUC','LHR'].",
            "route": "/roadmaps/dsa/reconstruct-itinerary",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Two Sum",
            "description": "Find two numbers in an array that add up to a target (LeetCode #1). Example: Input: nums = [2,7,11,15], target = 9, Output: [0,1].",
            "route": "/roadmaps/dsa/two-sum",
            "completed": false
          },
          {
            "name": "Group Anagrams",
            "description": "Group anagrams together from a list of strings (LeetCode #49). Example: Input: ['eat','tea','tan','ate','nat','bat'], Output: [['eat','tea','ate'],['tan','nat'],['bat']].",
            "route": "/roadmaps/dsa/group-anagrams",
            "completed": false
          },
          {
            "name": "Longest Substring Without Repeating Characters",
            "description": "Find the length of the longest substring without repeating characters (LeetCode #3). Example: Input: 'abcabcbb', Output: 3 ('abc').",
            "route": "/roadmaps/dsa/longest-substring-without-repeating",
            "completed": false
          },
          {
            "name": "First Unique Character in a String",
            "description": "Find the first unique character in a string (LeetCode #387). Example: Input: 'leetcode', Output: 0.",
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
            "name": "Contains Duplicate",
            "description": "Check if an array contains any duplicates (LeetCode #217). Example: Input: [1,2,3,1], Output: true.",
            "route": "/roadmaps/dsa/contains-duplicate",
            "completed": false
          },
          {
            "name": "Longest Consecutive Sequence",
            "description": "Find the length of the longest consecutive sequence (LeetCode #128). Example: Input: [100,4,200,1,3,2], Output: 4 ([1,2,3,4]).",
            "route": "/roadmaps/dsa/longest-consecutive-sequence",
            "completed": false
          },
          {
            "name": "Subarray Sum Equals K",
            "description": "Find the number of subarrays with sum equal to k (LeetCode #560). Example: Input: nums = [1,1,1], k = 2, Output: 2.",
            "route": "/roadmaps/dsa/subarray-sum-equals-k",
            "completed": false
          },
          {
            "name": "Top K Frequent Elements",
            "description": "Find the top k frequent elements in an array (LeetCode #347). Example: Input: nums = [1,1,1,2,2,3], k = 2, Output: [1,2].",
            "route": "/roadmaps/dsa/top-k-frequent-elements",
            "completed": false
          },
          {
            "name": "Happy Number",
            "description": "Determine if a number is happy (LeetCode #202). Example: Input: n = 19, Output: true.",
            "route": "/roadmaps/dsa/happy-number",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Climbing Stairs",
            "description": "Find the number of distinct ways to climb n stairs (LeetCode #70). Example: Input: n = 3, Output: 3.",
            "route": "/roadmaps/dsa/climbing-stairs",
            "completed": false
          },
          {
            "name": "House Robber",
            "description": "Find the maximum amount of money you can rob without robbing adjacent houses (LeetCode #198). Example: Input: [1,2,3,1], Output: 4.",
            "route": "/roadmaps/dsa/house-robber",
            "completed": false
          },
          {
            "name": "Longest Increasing Subsequence",
            "description": "Find the length of the longest increasing subsequence (LeetCode #300). Example: Input: [10,9,2,5,3,7,101,18], Output: 4 ([2,3,7,101]).",
            "route": "/roadmaps/dsa/longest-increasing-subsequence",
            "completed": false
          },
          {
            "name": "Coin Change",
            "description": "Find the minimum number of coins to make a given amount (LeetCode #322). Example: Input: coins = [1,2,5], amount = 11, Output: 3 (5+5+1).",
            "route": "/roadmaps/dsa/coin-change",
            "completed": false
          },
          {
            "name": "Longest Common Subsequence",
            "description": "Find the length of the longest common subsequence of two strings (LeetCode #1143). Example: Input: text1 = 'abcde', text2 = 'ace', Output: 3 ('ace').",
            "route": "/roadmaps/dsa/longest-common-subsequence",
            "completed": false
          },
          {
            "name": "0/1 Knapsack Problem",
            "description": "Solve the 0/1 knapsack problem for a given capacity (LeetCode #416 variant). Example: Input: values = [60,100,120], weights = [10,20,30], W = 50, Output: 220.",
            "route": "/roadmaps/dsa/knapsack-problem",
            "completed": false
          },
          {
            "name": "Maximum Product Subarray",
            "description": "Find the maximum product subarray (LeetCode #152). Example: Input: [2,3,-2,4], Output: 6 ([2,3]).",
            "route": "/roadmaps/dsa/maximum-product-subarray",
            "completed": false
          },
          {
            "name": "Edit Distance",
            "description": "Find the minimum number of operations to convert one string to another (LeetCode #72). Example: Input: word1 = 'horse', word2 = 'ros', Output: 3.",
            "route": "/roadmaps/dsa/edit-distance",
            "completed": false
          },
          {
            "name": "Unique Paths",
            "description": "Find the number of unique paths in a grid (LeetCode #62). Example: Input: m = 3, n = 2, Output: 3.",
            "route": "/roadmaps/dsa/unique-paths",
            "completed": false
          },
          {
            "name": "Word Break",
            "description": "Determine if a string can be segmented into words from a dictionary (LeetCode #139). Example: Input: s = 'leetcode', wordDict = ['leet','code'], Output: true.",
            "route": "/roadmaps/dsa/word-break",
            "completed": false
          }
        ]
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
        "questions": [
          {
            "name": "Jump Game",
            "description": "Determine if you can reach the last index in an array (LeetCode #55). Example: Input: nums = [2,3,1,1,4], Output: true.",
            "route": "/roadmaps/dsa/jump-game",
            "completed": false
          },
          {
            "name": "Jump Game II",
            "description": "Find the minimum number of jumps to reach the last index (LeetCode #45). Example: Input: [2,3,1,1,4], Output: 2.",
            "route": "/roadmaps/dsa/jump-game-ii",
            "completed": false
          },
          {
            "name": "Gas Station",
            "description": "Find the starting gas station to complete a circuit (LeetCode #134). Example: Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2], Output: 3.",
            "route": "/roadmaps/dsa/gas-station",
            "completed": false
          },
          {
            "name": "Candy",
            "description": "Distribute candies to children based on ratings (LeetCode #135). Example: Input: ratings = [1,0,2], Output: 5.",
            "route": "/roadmaps/dsa/candy",
            "completed": false
          },
          {
            "name": "Minimum Number of Arrows to Burst Balloons",
            "description": "Find the minimum number of arrows to burst balloons (LeetCode #452). Example: Input: points = [[10,16],[2,8],[1,6],[7,12]], Output: 2.",
            "route": "/roadmaps/dsa/minimum-arrows-burst-balloons",
            "completed": false
          },
         ]
      }
    }
  ]
}