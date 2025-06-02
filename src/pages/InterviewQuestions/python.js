export const pythonquestions = {
  "theory": [
    {
      "id": "py-th-001",
      "title": "What is Python?",
      "content": "Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming."
    },
    {
      "id": "py-th-002",
      "title": "What are Python's built-in data types?",
      "content": "Python has several built-in data types, including integers (`int`), floating-point numbers (`float`), strings (`str`), lists (`list`), tuples (`tuple`), dictionaries (`dict`), sets (`set`), and booleans (`bool`)."
    },
    {
      "id": "py-th-003",
      "title": "What is the difference between a list and a tuple in Python?",
      "content": "A list is mutable, meaning its elements can be changed after creation, while a tuple is immutable, meaning its elements cannot be modified. Lists are defined with square brackets `[]`, and tuples are defined with parentheses `()`."
    },
    {
      "id": "py-th-004",
      "title": "What are Python decorators?",
      "content": "Decorators are a way to modify or extend the behavior of functions or methods without changing their code. They are often used for logging, access control, or memoization, and are denoted with the `@` symbol."
    },
    {
      "id": "py-th-005",
      "title": "What is the difference between `==` and `is` in Python?",
      "content": "`==` checks for value equality between two objects, while `is` checks for identity (whether two objects are the same in memory). For example, `[1, 2] == [1, 2]` is `True`, but `[1, 2] is [1, 2]` is `False`."
    },
    {
      "id": "py-th-006",
      "title": "What is a Python generator?",
      "content": "A generator is a special type of iterator that yields values one at a time using the `yield` keyword, allowing for memory-efficient iteration over large datasets."
    },
    {
      "id": "py-th-007",
      "title": "What is the purpose of the `__init__` method?",
      "content": "The `__init__` method is a constructor in Python classes, used to initialize instance variables when an object is created."
    },
    {
      "id": "py-th-008",
      "title": "What is the difference between `deepcopy` and `copy` in Python?",
      "content": "The `copy` module provides `copy()` for shallow copying (copies the object but not nested objects) and `deepcopy()` for deep copying (copies the object and all nested objects recursively)."
    },
    {
      "id": "py-th-009",
      "title": "What are Python's magic methods?",
      "content": "Magic methods, also called dunder methods (e.g., `__str__`, `__add__`), are special methods in Python that allow you to define how objects behave with built-in operations."
    },
    {
      "id": "py-th-010",
      "title": "What is the Global Interpreter Lock (GIL) in Python?",
      "content": "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once, which can limit true multi-threading in CPython."
    },
    {
      "id": "py-th-011",
      "title": "What is a lambda function in Python?",
      "content": "A lambda function is an anonymous function defined using the `lambda` keyword, often used for short, one-line operations, e.g., `lambda x: x + 1`."
    },
    {
      "id": "py-th-012",
      "title": "What are list comprehensions in Python?",
      "content": "List comprehensions provide a concise way to create lists, e.g., `[x * 2 for x in range(5)]` creates `[0, 2, 4, 6, 8]`."
    },
    {
      "id": "py-th-013",
      "title": "What is the difference between `append` and `extend` in Python lists?",
      "content": "`append` adds a single element to the end of a list, while `extend` adds all elements of an iterable to the list."
    },
    {
      "id": "py-th-014",
      "title": "What is the `zip` function in Python?",
      "content": "The `zip` function takes iterables and returns an iterator of tuples where each tuple contains the corresponding elements of the input iterables."
    },
    {
      "id": "py-th-015",
      "title": "What is a Python module?",
      "content": "A module is a file containing Python code (functions, classes, variables) that can be imported and used in other Python programs using the `import` statement."
    },
    {
      "id": "py-th-016",
      "title": "What are Python's exception handling keywords?",
      "content": "Python uses `try`, `except`, `finally`, and `raise` for exception handling to manage errors during program execution."
    },
    {
      "id": "py-th-017",
      "title": "What is the difference between a class variable and an instance variable?",
      "content": "A class variable is shared among all instances of a class, while an instance variable is unique to each instance."
    },
    {
      "id": "py-th-018",
      "title": "What is the `self` keyword in Python?",
      "content": "`self` refers to the instance of the class and is used to access instance variables and methods within the class."
    },
    {
      "id": "py-th-019",
      "title": "What is the purpose of the `pass` statement?",
      "content": "The `pass` statement is a placeholder that does nothing, often used as a stub in functions or loops that will be implemented later."
    },
    {
      "id": "py-th-020",
      "title": "What is PEP 8?",
      "content": "PEP 8 is Python's style guide, providing conventions for writing readable and consistent Python code, such as naming conventions and indentation rules."
    },
    {
      "id": "py-th-021",
      "title": "What are Python's built-in functions for type conversion?",
      "content": "Python provides functions like `int()`, `float()`, `str()`, `list()`, `tuple()`, and `set()` for converting between data types."
    },
    {
      "id": "py-th-022",
      "title": "What is the difference between `__str__` and `__repr__`?",
      "content": "`__str__` is used for a readable string representation of an object (for end users), while `__repr__` is used for an unambiguous representation (for developers)."
    },
    {
      "id": "py-th-023",
      "title": "What are Python's context managers?",
      "content": "Context managers, often used with the `with` statement, manage resources like files or database connections, ensuring they are properly set up and cleaned up."
    },
    {
      "id": "py-th-024",
      "title": "What is the `map` function in Python?",
      "content": "The `map` function applies a given function to each item of an iterable and returns an iterator, e.g., `map(str, [1, 2, 3])` yields `['1', '2', '3']`."
    },
    {
      "id": "py-th-025",
      "title": "What is the `filter` function in Python?",
      "content": "The `filter` function applies a predicate function to each item of an iterable and returns an iterator of items for which the function returns `True`."
    },
    {
      "id": "py-th-026",
      "title": "What is the difference between a set and a frozenset?",
      "content": "A `set` is mutable, allowing elements to be added or removed, while a `frozenset` is immutable and cannot be modified after creation."
    },
    {
      "id": "py-th-027",
      "title": "What is the `super()` function in Python?",
      "content": "The `super()` function is used to call methods of a parent class in a child class, often used in inheritance to initialize the parent class."
    },
    {
      "id": "py-th-028",
      "title": "What are Python's default arguments?",
      "content": "Default arguments are parameters in a function that have default values if no argument is provided during the function call."
    },
    {
      "id": "py-th-029",
      "title": "What is the difference between `*args` and `**kwargs`?",
      "content": "`*args` allows a function to accept a variable number of positional arguments, while `**kwargs` allows a variable number of keyword arguments."
    },
    {
      "id": "py-th-030",
      "title": "What is the `enumerate` function in Python?",
      "content": "The `enumerate` function adds a counter to an iterable and returns it as an enumerate object, often used in loops to get both index and value."
    },
    {
      "id": "py-th-031",
      "title": "What is the `any` function in Python?",
      "content": "The `any` function returns `True` if any element in an iterable is `True`, otherwise it returns `False`."
    },
    {
      "id": "py-th-032",
      "title": "What is the `all` function in Python?",
      "content": "The `all` function returns `True` if all elements in an iterable are `True`, otherwise it returns `False`."
    },
    {
      "id": "py-th-033",
      "title": "What are Python's string methods?",
      "content": "Python strings have methods like `upper()`, `lower()`, `strip()`, `split()`, `join()`, `replace()`, and `find()` for manipulating string data."
    },
    {
      "id": "py-th-034",
      "title": "What is the `join` method in Python?",
      "content": "The `join` method concatenates an iterable of strings into a single string, using the string on which the method is called as a separator."
    },
    {
      "id": "py-th-035",
      "title": "What is the `split` method in Python?",
      "content": "The `split` method splits a string into a list of substrings based on a specified delimiter, defaulting to whitespace."
    },
    {
      "id": "py-th-036",
      "title": "What are Python's file handling modes?",
      "content": "Python supports file modes like `'r'` (read), `'w'` (write), `'a'` (append), `'r+'` (read/write), and `'b'` (binary mode) for file operations."
    },
    {
      "id": "py-th-037",
      "title": "What is the `with` statement in Python?",
      "content": "The `with` statement simplifies resource management by ensuring resources like files are properly closed after use, even if an error occurs."
    },
    {
      "id": "py-th-038",
      "title": "What are Python's built-in modules?",
      "content": "Python has built-in modules like `math`, `datetime`, `os`, `sys`, `random`, and `json` for various functionalities."
    },
    {
      "id": "py-th-039",
      "title": "What is the `random` module in Python?",
      "content": "The `random` module provides functions for generating random numbers, such as `random.randint()`, `random.choice()`, and `random.shuffle()`."
    },
    {
      "id": "py-th-040",
      "title": "What is the `datetime` module in Python?",
      "content": "The `datetime` module provides classes for manipulating dates and times, such as `datetime.date`, `datetime.time`, and `datetime.datetime`."
    },
    {
      "id": "py-th-041",
      "title": "What is the `os` module in Python?",
      "content": "The `os` module provides functions for interacting with the operating system, such as `os.path`, `os.mkdir()`, and `os.remove()`."
    },
    {
      "id": "py-th-042",
      "title": "What is the `sys` module in Python?",
      "content": "The `sys` module provides access to system-specific parameters and functions, such as `sys.argv`, `sys.exit()`, and `sys.path`."
    },
    {
      "id": "py-th-043",
      "title": "What are Python's comparison operators?",
      "content": "Python's comparison operators include `==`, `!=`, `<`, `>`, `<=`, and `>=` for comparing values."
    },
    {
      "id": "py-th-044",
      "title": "What are Python's logical operators?",
      "content": "Python's logical operators are `and`, `or`, and `not` for combining or negating boolean expressions."
    },
    {
      "id": "py-th-045",
      "title": "What are Python's bitwise operators?",
      "content": "Python's bitwise operators include `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), and `>>` (right shift)."
    },
    {
      "id": "py-th-046",
      "title": "What is the `in` operator in Python?",
      "content": "The `in` operator checks if a value exists in a sequence (like a list, tuple, or string), returning `True` or `False`."
    },
    {
      "id": "py-th-047",
      "title": "What are Python's membership operators?",
      "content": "Python's membership operators are `in` and `not in`, used to test membership in sequences."
    },
    {
      "id": "py-th-048",
      "title": "What are Python's identity operators?",
      "content": "Python's identity operators are `is` and `is not`, used to compare object identities."
    },
    {
      "id": "py-th-049",
      "title": "What is the `range` function in Python?",
      "content": "The `range` function generates a sequence of numbers, often used in loops, e.g., `range(5)` generates numbers from 0 to 4."
    },
    {
      "id": "py-th-050",
      "title": "What are Python's loop constructs?",
      "content": "Python supports `for` loops (for iterating over sequences) and `while` loops (for condition-based iteration)."
    }
  ],
  "coding": [
    {
      "id": "py-code-001",
      "title": "Reverse a string",
      "content": "Write a function to reverse a given string.",
      "code": "def reverse_string(s):\n    return s[::-1]\n\n# Example\ns = 'hello'\nprint(reverse_string(s))  # Output: 'olleh'"
    },
    {
      "id": "py-code-002",
      "title": "Check if a string is a palindrome",
      "content": "Write a function to check if a string is a palindrome (reads the same forwards and backwards).",
      "code": "def is_palindrome(s):\n    s = s.lower().replace(' ', '')\n    return s == s[::-1]\n\n# Example\ns = 'racecar'\nprint(is_palindrome(s))  # Output: True"
    },
    {
      "id": "py-code-003",
      "title": "Find the factorial of a number",
      "content": "Write a function to calculate the factorial of a non-negative integer.",
      "code": "def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\n\n# Example\nn = 5\nprint(factorial(n))  # Output: 120"
    },
    {
      "id": "py-code-004",
      "title": "Fibonacci sequence",
      "content": "Write a function to generate the first n numbers in the Fibonacci sequence.",
      "code": "def fibonacci(n):\n    fib = [0, 1]\n    for i in range(2, n):\n        fib.append(fib[i-1] + fib[i-2])\n    return fib[:n]\n\n# Example\nn = 7\nprint(fibonacci(n))  # Output: [0, 1, 1, 2, 3, 5, 8]"
    },
    {
      "id": "py-code-005",
      "title": "Check if a number is prime",
      "content": "Write a function to check if a number is prime.",
      "code": "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\n# Example\nn = 17\nprint(is_prime(n))  # Output: True"
    },
    {
      "id": "py-code-006",
      "title": "Find the largest element in a list",
      "content": "Write a function to find the largest element in a list.",
      "code": "def find_largest(nums):\n    return max(nums)\n\n# Example\nnums = [3, 1, 4, 1, 5, 9, 2]\nprint(find_largest(nums))  # Output: 9"
    },
    {
      "id": "py-code-007",
      "title": "Remove duplicates from a list",
      "content": "Write a function to remove duplicates from a list.",
      "code": "def remove_duplicates(nums):\n    return list(set(nums))\n\n# Example\nnums = [1, 2, 2, 3, 1, 4]\nprint(remove_duplicates(nums))  # Output: [1, 2, 3, 4]"
    },
    {
      "id": "py-code-008",
      "title": "Count vowels in a string",
      "content": "Write a function to count the number of vowels in a string.",
      "code": "def count_vowels(s):\n    vowels = 'aeiouAEIOU'\n    return sum(1 for char in s if char in vowels)\n\n# Example\ns = 'hello world'\nprint(count_vowels(s))  # Output: 3"
    },
    {
      "id": "py-code-009",
      "title": "Find the second largest number in a list",
      "content": "Write a function to find the second largest number in a list.",
      "code": "def second_largest(nums):\n    if len(nums) < 2:\n        return None\n    unique_nums = sorted(set(nums), reverse=True)\n    return unique_nums[1] if len(unique_nums) >= 2 else None\n\n# Example\nnums = [3, 1, 4, 1, 5, 9, 2]\nprint(second_largest(nums))  # Output: 5"
    },
    {
      "id": "py-code-010",
      "title": "Check if two strings are anagrams",
      "content": "Write a function to check if two strings are anagrams of each other.",
      "code": "def are_anagrams(s1, s2):\n    return sorted(s1) == sorted(s2)\n\n# Example\ns1, s2 = 'listen', 'silent'\nprint(are_anagrams(s1, s2))  # Output: True"
    },
    {
      "id": "py-code-011",
      "title": "Reverse a list in-place",
      "content": "Write a function to reverse a list in-place.",
      "code": "def reverse_list(nums):\n    nums[:] = nums[::-1]\n    return nums\n\n# Example\nnums = [1, 2, 3, 4, 5]\nprint(reverse_list(nums))  # Output: [5, 4, 3, 2, 1]"
    },
    {
      "id": "py-code-012",
      "title": "Find the sum of all elements in a list",
      "content": "Write a function to calculate the sum of all elements in a list.",
      "code": "def sum_list(nums):\n    return sum(nums)\n\n# Example\nnums = [1, 2, 3, 4, 5]\nprint(sum_list(nums))  # Output: 15"
    },
    {
      "id": "py-code-013",
      "title": "Capitalize the first letter of each word in a string",
      "content": "Write a function to capitalize the first letter of each word in a string.",
      "code": "def capitalize_words(s):\n    return ' '.join(word.capitalize() for word in s.split())\n\n# Example\ns = 'hello world'\nprint(capitalize_words(s))  # Output: 'Hello World'"
    },
    {
      "id": "py-code-014",
      "title": "Find the GCD of two numbers",
      "content": "Write a function to find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.",
      "code": "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\n# Example\na, b = 48, 18\nprint(gcd(a, b))  # Output: 6"
    },
    {
      "id": "py-code-015",
      "title": "Generate all permutations of a list",
      "content": "Write a function to generate all permutations of a list.",
      "code": "from itertools import permutations\ndef get_permutations(nums):\n    return list(permutations(nums))\n\n# Example\nnums = [1, 2, 3]\nprint(get_permutations(nums))  # Output: [(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]"
    },
    {
      "id": "py-code-016",
      "title": "Check if a list is sorted",
      "content": "Write a function to check if a list is sorted in ascending order.",
      "code": "def is_sorted(nums):\n    return nums == sorted(nums)\n\n# Example\nnums = [1, 2, 3, 4, 5]\nprint(is_sorted(nums))  # Output: True"
    },
    {
      "id": "py-code-017",
      "title": "Find the intersection of two lists",
      "content": "Write a function to find the intersection of two lists.",
      "code": "def intersection(nums1, nums2):\n    return list(set(nums1) & set(nums2))\n\n# Example\nnums1, nums2 = [1, 2, 3, 4], [3, 4, 5, 6]\nprint(intersection(nums1, nums2))  # Output: [3, 4]"
    },
    {
      "id": "py-code-018",
      "title": "Rotate a list by k positions",
      "content": "Write a function to rotate a list by k positions to the right.",
      "code": "def rotate_list(nums, k):\n    k = k % len(nums)\n    return nums[-k:] + nums[:-k]\n\n# Example\nnums, k = [1, 2, 3, 4, 5], 2\nprint(rotate_list(nums, k))  # Output: [4, 5, 1, 2, 3]"
    },
    {
      "id": "py-code-019",
      "title": "Find the longest word in a string",
      "content": "Write a function to find the longest word in a string.",
      "code": "def longest_word(s):\n    return max(s.split(), key=len)\n\n# Example\ns = 'hello world python programming'\nprint(longest_word(s))  # Output: 'programming'"
    },
    {
      "id": "py-code-020",
      "title": "Check if a number is a power of two",
      "content": "Write a function to check if a number is a power of two.",
      "code": "def is_power_of_two(n):\n    return n > 0 and (n & (n - 1)) == 0\n\n# Example\nn = 16\nprint(is_power_of_two(n))  # Output: True"
    },
    {
      "id": "py-code-021",
      "title": "Find the first non-repeating character in a string",
      "content": "Write a function to find the first non-repeating character in a string.",
      "code": "def first_non_repeating(s):\n    char_count = {}\n    for char in s:\n        char_count[char] = char_count.get(char, 0) + 1\n    for char in s:\n        if char_count[char] == 1:\n            return char\n    return None\n\n# Example\ns = 'leetcode'\nprint(first_non_repeating(s))  # Output: 'l'"
    },
    {
      "id": "py-code-022",
      "title": "Merge two sorted lists",
      "content": "Write a function to merge two sorted lists into a single sorted list.",
      "code": "def merge_sorted_lists(nums1, nums2):\n    return sorted(nums1 + nums2)\n\n# Example\nnums1, nums2 = [1, 3, 5], [2, 4, 6]\nprint(merge_sorted_lists(nums1, nums2))  # Output: [1, 2, 3, 4, 5, 6]"
    },
    {
      "id": "py-code-023",
      "title": "Count the frequency of elements in a list",
      "content": "Write a function to count the frequency of each element in a list.",
      "code": "from collections import Counter\ndef count_frequency(nums):\n    return dict(Counter(nums))\n\n# Example\nnums = [1, 2, 2, 3, 1, 4]\nprint(count_frequency(nums))  # Output: {1: 2, 2: 2, 3: 1, 4: 1}"
    },
    {
      "id": "py-code-024",
      "title": "Find the longest common prefix in a list of strings",
      "content": "Write a function to find the longest common prefix among a list of strings.",
      "code": "def longest_common_prefix(strs):\n    if not strs:\n        return ''\n    shortest = min(strs, key=len)\n    for i, char in enumerate(shortest):\n        for s in strs:\n            if s[i] != char:\n                return shortest[:i]\n    return shortest\n\n# Example\nstrs = ['flower', 'flow', 'flight']\nprint(longest_common_prefix(strs))  # Output: 'fl'"
    },
    {
      "id": "py-code-025",
      "title": "Check if a string contains only digits",
      "content": "Write a function to check if a string contains only digits.",
      "code": "def is_digits(s):\n    return s.isdigit()\n\n# Example\ns = '12345'\nprint(is_digits(s))  # Output: True"
    },
    {
      "id": "py-code-026",
      "title": "Find the sum of digits in a number",
      "content": "Write a function to find the sum of digits in a number.",
      "code": "def sum_of_digits(n):\n    return sum(int(digit) for digit in str(abs(n)))\n\n# Example\nn = 123\nprint(sum_of_digits(n))  # Output: 6"
    },
    {
      "id": "py-code-027",
      "title": "Generate a list of prime numbers up to n",
      "content": "Write a function to generate all prime numbers up to a given number n using the Sieve of Eratosthenes.",
      "code": "def sieve_of_eratosthenes(n):\n    sieve = [True] * (n + 1)\n    sieve[0] = sieve[1] = False\n    for i in range(2, int(n ** 0.5) + 1):\n        if sieve[i]:\n            for j in range(i * i, n + 1, i):\n                sieve[j] = False\n    return [i for i in range(n + 1) if sieve[i]]\n\n# Example\nn = 30\nprint(sieve_of_eratosthenes(n))  # Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]"
    },
    {
      "id": "py-code-028",
      "title": "Implement a stack using lists",
      "content": "Write a class to implement a stack using Python lists.",
      "code": "class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        return self.items.pop() if self.items else None\n    def peek(self):\n        return self.items[-1] if self.items else None\n\n# Example\nstack = Stack()\nstack.push(1)\nstack.push(2)\nprint(stack.pop())  # Output: 2"
    },
    {
      "id": "py-code-029",
      "title": "Implement a queue using lists",
      "content": "Write a class to implement a queue using Python lists.",
      "code": "class Queue:\n    def __init__(self):\n        self.items = []\n    def enqueue(self, item):\n        self.items.append(item)\n    def dequeue(self):\n        return self.items.pop(0) if self.items else None\n\n# Example\nqueue = Queue()\nqueue.enqueue(1)\nqueue.enqueue(2)\nprint(queue.dequeue())  # Output: 1"
    },
    {
      "id": "py-code-030",
      "title": "Reverse words in a string",
      "content": "Write a function to reverse the words in a string while keeping the word order.",
      "code": "def reverse_words(s):\n    return ' '.join(word[::-1] for word in s.split())\n\n# Example\ns = 'hello world'\nprint(reverse_words(s))  # Output: 'olleh dlrow'"
    },
    {
      "id": "py-code-031",
      "title": "Find the missing number in a list",
      "content": "Write a function to find the missing number in a list of integers from 1 to n.",
      "code": "def find_missing(nums, n):\n    expected_sum = (n * (n + 1)) // 2\n    actual_sum = sum(nums)\n    return expected_sum - actual_sum\n\n# Example\nnums, n = [1, 2, 4, 5], 5\nprint(find_missing(nums, n))  # Output: 3"
    },
    {
      "id": "py-code-032",
      "title": "Check if parentheses are balanced",
      "content": "Write a function to check if parentheses in a string are balanced.",
      "code": "def is_balanced(s):\n    stack = []\n    for char in s:\n        if char == '(':\n            stack.append(char)\n        elif char == ')':\n            if not stack:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\n# Example\ns = '((()))'\nprint(is_balanced(s))  # Output: True"
    },
    {
      "id": "py-code-033",
      "title": "Find the largest palindrome in a string",
      "content": "Write a function to find the largest palindromic substring in a string.",
      "code": "def longest_palindrome(s):\n    def expand_around_center(left, right):\n        while left >= 0 and right < len(s) and s[left] == s[right]:\n            left -= 1\n            right += 1\n        return s[left + 1:right]\n    longest = ''\n    for i in range(len(s)):\n        # Odd length\n        palindrome1 = expand_around_center(i, i)\n        if len(palindrome1) > len(longest):\n            longest = palindrome1\n        # Even length\n        palindrome2 = expand_around_center(i, i + 1)\n        if len(palindrome2) > len(longest):\n            longest = palindrome2\n    return longest\n\n# Example\ns = 'babad'\nprint(longest_palindrome(s))  # Output: 'bab'"
    },
    {
      "id": "py-code-034",
      "title": "Convert a string to an integer",
      "content": "Write a function to convert a string to an integer (similar to `atoi`).",
      "code": "def atoi(s):\n    s = s.strip()\n    if not s:\n        return 0\n    sign = -1 if s[0] == '-' else 1\n    start = 1 if s[0] in ['+', '-'] else 0\n    result = 0\n    for char in s[start:]:\n        if not char.isdigit():\n            break\n        result = result * 10 + int(char)\n    return sign * result\n\n# Example\ns = '42'\nprint(atoi(s))  # Output: 42"
    },
    {
      "id": "py-code-035",
      "title": "Find all subsets of a list",
      "content": "Write a function to find all subsets of a list.",
      "code": "def subsets(nums):\n    result = [[]]\n    for num in nums:\n        result += [subset + [num] for subset in result]\n    return result\n\n# Example\nnums = [1, 2, 3]\nprint(subsets(nums))  # Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]"
    },
    {
      "id": "py-code-036",
      "title": "Find the longest increasing subsequence",
      "content": "Write a function to find the length of the longest increasing subsequence in a list.",
      "code": "def length_of_lis(nums):\n    if not nums:\n        return 0\n    dp = [1] * len(nums)\n    for i in range(1, len(nums)):\n        for j in range(i):\n            if nums[i] > nums[j]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    return max(dp)\n\n# Example\nnums = [10, 9, 2, 5, 3, 7, 101, 18]\nprint(length_of_lis(nums))  # Output: 4"
    },
    {
      "id": "py-code-037",
      "title": "Find the maximum subarray sum",
      "content": "Write a function to find the maximum subarray sum (Kadane's algorithm).",
      "code": "def max_subarray_sum(nums):\n    max_sum = current_sum = nums[0]\n    for num in nums[1:]:\n        current_sum = max(num, current_sum + num)\n        max_sum = max(max_sum, current_sum)\n    return max_sum\n\n# Example\nnums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\nprint(max_subarray_sum(nums))  # Output: 6"
    },
    {
      "id": "py-code-038",
      "title": "Implement binary search",
      "content": "Write a function to implement binary search on a sorted list.",
      "code": "def binary_search(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\n# Example\nnums, target = [1, 2, 3, 4, 5], 3\nprint(binary_search(nums, target))  # Output: 2"
    },
    {
      "id": "py-code-039",
      "title": "Find the kth largest element in a list",
      "content": "Write a function to find the kth largest element in a list.",
      "code": "def find_kth_largest(nums, k):\n    return sorted(nums, reverse=True)[k-1]\n\n# Example\nnums, k = [3, 2, 1, 5, 6, 4], 2\nprint(find_kth_largest(nums, k))  # Output: 5"
    },
    {
      "id": "py-code-040",
      "title": "Generate a random password",
      "content": "Write a function to generate a random password of a given length.",
      "code": "import random\nimport string\ndef generate_password(length):\n    characters = string.ascii_letters + string.digits + string.punctuation\n    return ''.join(random.choice(characters) for _ in range(length))\n\n# Example\nprint(generate_password(12))  # Output: e.g., 'K#9mP$2qL&xJ'"
    },
    {
      "id": "py-code-041",
      "title": "Check if a string is a valid palindrome ignoring non-alphanumeric",
      "content": "Write a function to check if a string is a valid palindrome, ignoring non-alphanumeric characters.",
      "code": "def valid_palindrome(s):\n    s = ''.join(char.lower() for char in s if char.isalnum())\n    return s == s[::-1]\n\n# Example\ns = 'A man, a plan, a canal: Panama'\nprint(valid_palindrome(s))  # Output: True"
    },
    {
      "id": "py-code-042",
      "title": "Find the longest consecutive sequence",
      "content": "Write a function to find the length of the longest consecutive sequence in a list.",
      "code": "def longest_consecutive(nums):\n    if not nums:\n        return 0\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            current = num\n            current_streak = 1\n            while current + 1 in num_set:\n                current += 1\n                current_streak += 1\n            longest = max(longest, current_streak)\n    return longest\n\n# Example\nnums = [100, 4, 200, 1, 3, 2]\nprint(longest_consecutive(nums))  # Output: 4"
    },
    {
      "id": "py-code-043",
      "title": "Implement a function to flatten a nested list",
      "content": "Write a function to flatten a nested list into a single list.",
      "code": "def flatten_list(nested):\n    flat = []\n    for item in nested:\n        if isinstance(item, list):\n            flat.extend(flatten_list(item))\n        else:\n            flat.append(item)\n    return flat\n\n# Example\nnested = [1, [2, 3, [4, 5]], 6]\nprint(flatten_list(nested))  # Output: [1, 2, 3, 4, 5, 6]"
    },
    {
      "id": "py-code-044",
      "title": "Find the most frequent element in a list",
      "content": "Write a function to find the most frequent element in a list.",
      "code": "from collections import Counter\ndef most_frequent(nums):\n    return Counter(nums).most_common(1)[0][0]\n\n# Example\nnums = [1, 2, 2, 3, 1, 2]\nprint(most_frequent(nums))  # Output: 2"
    },
    {
      "id": "py-code-045",
      "title": "Implement a function to shuffle a list",
      "content": "Write a function to shuffle a list randomly (Fisher-Yates shuffle).",
      "code": "import random\ndef shuffle_list(nums):\n    nums = nums.copy()\n    for i in range(len(nums) - 1, 0, -1):\n        j = random.randint(0, i)\n        nums[i], nums[j] = nums[j], nums[i]\n    return nums\n\n# Example\nnums = [1, 2, 3, 4, 5]\nprint(shuffle_list(nums))  # Output: e.g., [3, 1, 5, 2, 4]"
    },
    {
      "id": "py-code-046",
      "title": "Find the first duplicate in a list",
      "content": "Write a function to find the first duplicate in a list.",
      "code": "def first_duplicate(nums):\n    seen = set()\n    for num in nums:\n        if num in seen:\n            return num\n        seen.add(num)\n    return None\n\n# Example\nnums = [1, 2, 3, 2, 4]\nprint(first_duplicate(nums))  # Output: 2"
    },
    {
      "id": "py-code-047",
      "title": "Calculate the power of a number",
      "content": "Write a function to calculate x raised to the power n.",
      "code": "def power(x, n):\n    if n == 0:\n        return 1\n    if n < 0:\n        x = 1 / x\n        n = -n\n    result = 1\n    while n:\n        if n & 1:\n            result *= x\n        x *= x\n        n >>= 1\n    return result\n\n# Example\nx, n = 2, 3\nprint(power(x, n))  # Output: 8"
    },
    {
      "id": "py-code-048",
      "title": "Find the median of a list",
      "content": "Write a function to find the median of a list of numbers.",
      "code": "def find_median(nums):\n    nums = sorted(nums)\n    n = len(nums)\n    if n % 2 == 0:\n        return (nums[n//2 - 1] + nums[n//2]) / 2\n    return nums[n//2]\n\n# Example\nnums = [1, 3, 5, 2, 4]\nprint(find_median(nums))  # Output: 3"
    },
    {
      "id": "py-code-049",
      "title": "Implement a function to reverse a linked list",
      "content": "Write a function to reverse a singly linked list.",
      "code": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_linked_list(head):\n    prev, curr = None, head\n    while curr:\n        curr.next, prev, curr = prev, curr, curr.next\n    return prev\n\n# Example\n# Helper to create and print a linked list\nhead = ListNode(1, ListNode(2, ListNode(3)))\n# After reversal: 3 -> 2 -> 1"
    },
    {
      "id": "py-code-050",
      "title": "Find the longest substring without repeating characters",
      "content": "Write a function to find the length of the longest substring without repeating characters.",
      "code": "def length_of_longest_substring(s):\n    seen = {}\n    max_length = start = 0\n    for end, char in enumerate(s):\n        if char in seen and seen[char] >= start:\n            start = seen[char] + 1\n        else:\n            max_length = max(max_length, end - start + 1)\n        seen[char] = end\n    return max_length\n\n# Example\ns = 'abcabcbb'\nprint(length_of_longest_substring(s))  # Output: 3"
    }
  ]
}