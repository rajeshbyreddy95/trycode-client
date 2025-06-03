export const mediumdsa = {
  "id": "12",
  "title": "Medium Data Structures & Algorithms Roadmap",
  "category": "Computer Science",
  "description": "Learn intermediate DSA concepts for problem-solving.",
  "image": "https://images.unsplash.com/photo-1516117172878-f8902b66d6b1?auto=format&fit=crop&w=800&q=80",
  "route": "/roadmaps/dsa/medium",
  "milestones": [
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
          {
            "name": "Queue Reconstruction by Height",
            "description": "Reconstruct a queue based on height and positions (LeetCode #406). Example: Input: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]], Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]].",
            "route": "/roadmaps/dsa/queue-reconstruction-height",
            "completed": false
          },
          {
            "name": "Non-overlapping Intervals",
            "description": "Remove the minimum number of intervals to make the rest non-overlapping (LeetCode #435). Example: Input: intervals = [[1,2],[2,3],[3,4],[1,3]], Output: 1.",
            "route": "/roadmaps/dsa/non-overlapping-intervals",
            "completed": false
          },
          {
            "name": "Partition Labels",
            "description": "Partition a string into as many parts as possible (LeetCode #763). Example: Input: s = 'ababcbacadefegdehijhklij', Output: [9,7,8].",
            "route": "/roadmaps/dsa/partition-labels",
            "completed": false
          },
          {
            "name": "Minimum Cost to Hire K Workers",
            "description": "Find the minimum cost to hire K workers (LeetCode #857). Example: Input: quality = [10,20,5], wage = [70,50,30], k = 2, Output: 105.00000.",
            "route": "/roadmaps/dsa/minimum-cost-hire-k-workers",
            "completed": false
          },
          {
            "name": "Task Scheduler",
            "description": "Find the least number of intervals to schedule tasks (LeetCode #621). Example: Input: tasks = ['A','A','A','B','B','B'], n = 2, Output: 8.",
            "route": "/roadmaps/dsa/task-scheduler",
            "completed": false
          }
        ]
      }
    }
  ]
}