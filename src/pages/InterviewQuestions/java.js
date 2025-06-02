export const javaquestions = {
  "theory": [
    {
      "id": "java-th-101",
      "title": "What is the significance of the `main` method in Java?",
      "content": "The `main` method is the entry point of a Java program. It must be `public static void` and take a `String[]` argument. The JVM calls this method to start execution."
    },
    {
      "id": "java-th-102",
      "title": "What is the difference between `public`, `private`, and `protected` access modifiers?",
      "content": "`public` members are accessible everywhere, `private` members are accessible only within the class, and `protected` members are accessible within the package and in subclasses outside the package."
    },
    {
      "id": "java-th-103",
      "title": "What is the purpose of the `static` block in Java?",
      "content": "A `static` block is used to initialize static variables or perform one-time setup for a class. It runs once when the class is loaded into memory."
    },
    {
      "id": "java-th-104",
      "title": "What is the `instanceof` operator in Java?",
      "content": "The `instanceof` operator checks if an object is an instance of a specific class or interface, returning `true` or `false`."
    },
    {
      "id": "java-th-105",
      "title": "What is the difference between `final`, `finally`, and `finalize`?",
      "content": "`final` prevents modification or inheritance, `finally` defines a block that executes after a `try-catch`, and `finalize` is a method called by the garbage collector before an object is destroyed."
    },
    {
      "id": "java-th-106",
      "title": "What is a constructor in Java?",
      "content": "A constructor is a special method in a class that is called when an object is created. It has the same name as the class and no return type."
    },
    {
      "id": "java-th-107",
      "title": "What is constructor overloading in Java?",
      "content": "Constructor overloading allows a class to have multiple constructors with different parameter lists, enabling different ways to initialize an object."
    },
    {
      "id": "java-th-108",
      "title": "What is the `this()` constructor call in Java?",
      "content": "`this()` is used to call another constructor in the same class, often used for constructor chaining to avoid code duplication."
    },
    {
      "id": "java-th-109",
      "title": "What is the `super()` constructor call in Java?",
      "content": "`super()` is used to call the parent class's constructor from a subclass, ensuring proper initialization of the parent class."
    },
    {
      "id": "java-th-110",
      "title": "What is the `abstract` keyword in Java?",
      "content": "The `abstract` keyword is used to declare a class or method as abstract. Abstract classes cannot be instantiated, and abstract methods must be implemented by subclasses."
    },
    {
      "id": "java-th-111",
      "title": "What is the `interface` keyword in Java?",
      "content": "The `interface` keyword defines a contract of methods that implementing classes must provide. Interfaces can include abstract methods, default methods, and static methods (since Java 8)."
    },
    {
      "id": "java-th-112",
      "title": "What is the difference between `List` and `Set` in Java?",
      "content": "`List` allows duplicates and maintains insertion order (e.g., `ArrayList`), while `Set` does not allow duplicates and may or may not maintain order (e.g., `HashSet`)."
    },
    {
      "id": "java-th-113",
      "title": "What is the `Map` interface in Java?",
      "content": "The `Map` interface represents a key-value mapping, where each key is unique. Common implementations include `HashMap`, `TreeMap`, and `LinkedHashMap`."
    },
    {
      "id": "java-th-114",
      "title": "What is the difference between `HashMap` and `ConcurrentHashMap`?",
      "content": "`HashMap` is not thread-safe, while `ConcurrentHashMap` is thread-safe, designed for concurrent access by multiple threads with better performance than synchronized maps."
    },
    {
      "id": "java-th-115",
      "title": "What is the `Iterator` interface in Java?",
      "content": "The `Iterator` interface provides methods (`hasNext()`, `next()`, `remove()`) to iterate over a collection, allowing safe traversal and modification."
    },
    {
      "id": "java-th-116",
      "title": "What is the `ListIterator` interface in Java?",
      "content": "The `ListIterator` interface extends `Iterator` and allows bidirectional traversal of a list, with additional methods like `hasPrevious()` and `previous()`."
    },
    {
      "id": "java-th-117",
      "title": "What is the `Comparable` interface used for?",
      "content": "The `Comparable` interface defines the `compareTo` method, enabling natural ordering of objects for sorting (e.g., in `Arrays.sort` or `Collections.sort`)."
    },
    {
      "id": "java-th-118",
      "title": "What is the `Comparator` interface used for?",
      "content": "The `Comparator` interface defines the `compare` method, allowing custom sorting of objects without modifying their class, often used with `Collections.sort`."
    },
    {
      "id": "java-th-119",
      "title": "What is the `hashCode()` method in Java?",
      "content": "The `hashCode()` method returns an integer hash code for an object, used by hash-based collections like `HashMap` and `HashSet` for efficient storage and retrieval."
    },
    {
      "id": "java-th-120",
      "title": "What is the contract between `equals()` and `hashCode()`?",
      "content": "If two objects are equal according to `equals()`, they must have the same `hashCode()`. However, objects with the same `hashCode()` are not necessarily equal."
    },
    {
      "id": "java-th-121",
      "title": "What is the `transient` keyword used for?",
      "content": "The `transient` keyword prevents a variable from being serialized, meaning its value will not be saved during object serialization."
    },
    {
      "id": "java-th-122",
      "title": "What is the `volatile` keyword used for?",
      "content": "The `volatile` keyword ensures that a variable's value is always read from and written to the main memory, preventing thread-local caching in multi-threaded environments."
    },
    {
      "id": "java-th-123",
      "title": "What is the `synchronized` keyword in Java?",
      "content": "The `synchronized` keyword ensures that only one thread can access a method or block at a time, preventing race conditions in multi-threaded programs."
    },
    {
      "id": "java-th-124",
      "title": "What is a thread pool in Java?",
      "content": "A thread pool is a collection of pre-initialized threads managed by an `ExecutorService`, used to execute tasks efficiently without creating new threads repeatedly."
    },
    {
      "id": "java-th-125",
      "title": "What is the `ExecutorService` in Java?",
      "content": "The `ExecutorService` is a framework for managing asynchronous tasks, providing methods to submit tasks, manage thread pools, and handle task completion."
    },
    {
      "id": "java-th-126",
      "title": "What is the difference between `Runnable` and `Callable`?",
      "content": "`Runnable` defines a task with no return value (`run()` method), while `Callable` defines a task that returns a value (`call()` method) and can throw checked exceptions."
    },
    {
      "id": "java-th-127",
      "title": "What is the `Future` interface in Java?",
      "content": "The `Future` interface represents the result of an asynchronous computation, providing methods to check if the task is complete, retrieve the result, or cancel the task."
    },
    {
      "id": "java-th-128",
      "title": "What is a `ReentrantLock` in Java?",
      "content": "A `ReentrantLock` is a synchronization mechanism that allows a thread to reacquire the same lock, providing more flexibility than `synchronized` blocks."
    },
    {
      "id": "java-th-129",
      "title": "What is the `ThreadLocal` class in Java?",
      "content": "The `ThreadLocal` class provides thread-local variables, where each thread has its own independent copy of the variable, avoiding shared state issues."
    },
    {
      "id": "java-th-130",
      "title": "What is the `Atomic` package in Java?",
      "content": "The `java.util.concurrent.atomic` package provides classes like `AtomicInteger` and `AtomicReference` for lock-free, thread-safe operations on single variables."
    },
    {
      "id": "java-th-131",
      "title": "What is the `BlockingQueue` interface in Java?",
      "content": "The `BlockingQueue` interface provides a thread-safe queue where producers and consumers can block until space or elements are available, used in concurrent programming."
    },
    {
      "id": "java-th-132",
      "title": "What is the `CopyOnWriteArrayList` in Java?",
      "content": "`CopyOnWriteArrayList` is a thread-safe variant of `ArrayList` where all modifications create a new copy, suitable for scenarios with frequent reads and rare writes."
    },
    {
      "id": "java-th-133",
      "title": "What are Java's access levels for nested classes?",
      "content": "Nested classes can be `public`, `protected`, `private`, or package-private, controlling their accessibility from outside the enclosing class."
    },
    {
      "id": "java-th-134",
      "title": "What is a static nested class in Java?",
      "content": "A static nested class is a nested class declared with the `static` keyword, associated with its enclosing class rather than an instance, and can be instantiated independently."
    },
    {
      "id": "java-th-135",
      "title": "What is an inner class in Java?",
      "content": "An inner class is a non-static nested class, tied to an instance of its enclosing class, and can access its enclosing class's instance members."
    },
    {
      "id": "java-th-136",
      "title": "What is an anonymous class in Java?",
      "content": "An anonymous class is a local class without a name, often used to override methods of a class or interface inline, typically for event listeners."
    },
    {
      "id": "java-th-137",
      "title": "What is a local class in Java?",
      "content": "A local class is a class defined inside a method or block, with scope limited to that block, often used for temporary functionality."
    },
    {
      "id": "java-th-138",
      "title": "What are Java's functional interfaces?",
      "content": "Functional interfaces have exactly one abstract method (e.g., `Runnable`, `Consumer`, `Predicate`) and can be used with lambda expressions or method references."
    },
    {
      "id": "java-th-139",
      "title": "What is the `Consumer` interface in Java?",
      "content": "The `Consumer` interface represents an operation that accepts a single input and returns no result, often used in the Stream API (e.g., `forEach`)."
    },
    {
      "id": "java-th-140",
      "title": "What is the `Predicate` interface in Java?",
      "content": "The `Predicate` interface represents a boolean-valued function of one argument, often used for filtering in the Stream API (e.g., `filter`)."
    },
    {
      "id": "java-th-141",
      "title": "What is the `Supplier` interface in Java?",
      "content": "The `Supplier` interface represents a function that returns a result without taking any arguments, often used to generate values (e.g., `Stream.generate`)."
    },
    {
      "id": "java-th-142",
      "title": "What is the `Function` interface in Java?",
      "content": "The `Function` interface represents a function that takes one argument and returns a result, often used in the Stream API (e.g., `map`)."
    },
    {
      "id": "java-th-143",
      "title": "What is method reference in Java?",
      "content": "Method references (e.g., `Class::method`) provide a shorthand for lambda expressions by referring to methods directly, improving readability."
    },
    {
      "id": "java-th-144",
      "title": "What is the `default` keyword in interfaces?",
      "content": "The `default` keyword allows interfaces to define method implementations (since Java 8), enabling backward compatibility when adding new methods."
    },
    {
      "id": "java-th-145",
      "title": "What is the `static` method in interfaces?",
      "content": "Static methods in interfaces (since Java 8) are utility methods that belong to the interface itself and can be called without an instance."
    },
    {
      "id": "java-th-146",
      "title": "What are Java's primitive data types?",
      "content": "Java's primitive types are `byte`, `short`, `int`, `long`, `float`, `double`, `char`, and `boolean`, which are not objects and have fixed sizes."
    },
    {
      "id": "java-th-147",
      "title": "What is the difference between `float` and `double`?",
      "content": "`float` is a 32-bit floating-point type, while `double` is a 64-bit floating-point type, offering higher precision but using more memory."
    },
    {
      "id": "java-th-148",
      "title": "What is the `strictfp` keyword in Java?",
      "content": "The `strictfp` keyword ensures that floating-point calculations follow strict IEEE 754 standards, guaranteeing consistent results across platforms."
    },
    {
      "id": "java-th-149",
      "title": "What is the `assert` statement in Java?",
      "content": "The `assert` statement is used for debugging, allowing you to test assumptions (e.g., `assert condition : message;`). It throws an `AssertionError` if the condition is false."
    },
    {
      "id": "java-th-150",
      "title": "What is the `switch` expression in Java?",
      "content": "Introduced in Java 12, the `switch` expression allows `switch` to return a value using `yield` or arrow syntax (`->`), simplifying code compared to traditional `switch` statements."
    }
  ],
  "coding": [
    {
      "id": "java-code-101",
      "title": "Swap two numbers without a temporary variable",
      "content": "Write a method to swap two numbers without using a temporary variable.",
      "code": "public class Solution {\n    public int[] swapNumbers(int a, int b) {\n        a = a ^ b;\n        b = a ^ b;\n        a = a ^ b;\n        return new int[]{a, b};\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int a = 5, b = 10;\n        int[] result = sol.swapNumbers(a, b);\n        System.out.println(\"a = \" + result[0] + \", b = \" + result[1]); // Output: a = 10, b = 5\n    }\n}"
    },
    {
      "id": "java-code-102",
      "title": "Check if a number is even or odd",
      "content": "Write a method to check if a number is even or odd.",
      "code": "public class Solution {\n    public String checkEvenOdd(int n) {\n        return (n % 2 == 0) ? \"Even\" : \"Odd\";\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 7;\n        System.out.println(sol.checkEvenOdd(n)); // Output: Odd\n    }\n}"
    },
    {
      "id": "java-code-103",
      "title": "Find the LCM of two numbers",
      "content": "Write a method to find the Least Common Multiple (LCM) of two numbers.",
      "code": "public class Solution {\n    public int gcd(int a, int b) {\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return a;\n    }\n\n    public int lcm(int a, int b) {\n        return (a * b) / gcd(a, b);\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int a = 12, b = 15;\n        System.out.println(sol.lcm(a, b)); // Output: 60\n    }\n}"
    },
    {
      "id": "java-code-104",
      "title": "Convert a decimal number to binary",
      "content": "Write a method to convert a decimal number to its binary representation.",
      "code": "public class Solution {\n    public String decimalToBinary(int n) {\n        if (n == 0) return \"0\";\n        StringBuilder binary = new StringBuilder();\n        while (n > 0) {\n            binary.insert(0, n % 2);\n            n /= 2;\n        }\n        return binary.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 10;\n        System.out.println(sol.decimalToBinary(n)); // Output: 1010\n    }\n}"
    },
    {
      "id": "java-code-105",
      "title": "Check if a string contains only unique characters",
      "content": "Write a method to check if a string contains only unique characters.",
      "code": "public class Solution {\n    public boolean hasUniqueCharacters(String s) {\n        if (s.length() > 128) return false; // Assuming ASCII\n        boolean[] charSet = new boolean[128];\n        for (char c : s.toCharArray()) {\n            if (charSet[c]) return false;\n            charSet[c] = true;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"abcdef\";\n        System.out.println(sol.hasUniqueCharacters(s)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-106",
      "title": "Find the smallest element in an array",
      "content": "Write a method to find the smallest element in an array.",
      "code": "public class Solution {\n    public int findSmallest(int[] nums) {\n        int min = nums[0];\n        for (int num : nums) {\n            min = Math.min(min, num);\n        }\n        return min;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {3, 1, 4, 1, 5, 9, 2};\n        System.out.println(sol.findSmallest(nums)); // Output: 1\n    }\n}"
    },
    {
      "id": "java-code-107",
      "title": "Sort an array using bubble sort",
      "content": "Write a method to sort an array using the bubble sort algorithm.",
      "code": "public class Solution {\n    public void bubbleSort(int[] nums) {\n        int n = nums.length;\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (nums[j] > nums[j + 1]) {\n                    int temp = nums[j];\n                    nums[j] = nums[j + 1];\n                    nums[j + 1] = temp;\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {64, 34, 25, 12, 22, 11, 90};\n        sol.bubbleSort(nums);\n        System.out.println(Arrays.toString(nums)); // Output: [11, 12, 22, 25, 34, 64, 90]\n    }\n}"
    },
    {
      "id": "java-code-108",
      "title": "Count the number of words in a string",
      "content": "Write a method to count the number of words in a string.",
      "code": "public class Solution {\n    public int countWords(String s) {\n        s = s.trim();\n        if (s.isEmpty()) return 0;\n        return s.split(\"\\\\s+\").length;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"Hello world  Java  programming\";\n        System.out.println(sol.countWords(s)); // Output: 4\n    }\n}"
    },
    {
      "id": "java-code-109",
      "title": "Find the third largest number in an array",
      "content": "Write a method to find the third largest number in an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public Integer findThirdLargest(int[] nums) {\n        if (nums.length < 3) return null;\n        List<Integer> unique = Arrays.stream(nums).distinct().boxed().sorted(Comparator.reverseOrder()).collect(Collectors.toList());\n        return unique.size() >= 3 ? unique.get(2) : null;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {3, 1, 4, 1, 5, 9, 2};\n        System.out.println(sol.findThirdLargest(nums)); // Output: 4\n    }\n}"
    },
    {
      "id": "java-code-110",
      "title": "Check if a string is a subsequence of another string",
      "content": "Write a method to check if a string is a subsequence of another string.",
      "code": "public class Solution {\n    public boolean isSubsequence(String s, String t) {\n        int i = 0, j = 0;\n        while (i < s.length() && j < t.length()) {\n            if (s.charAt(i) == t.charAt(j)) i++;\n            j++;\n        }\n        return i == s.length();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"abc\", t = \"ahbgdc\";\n        System.out.println(sol.isSubsequence(s, t)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-111",
      "title": "Rotate an array to the left by k positions",
      "content": "Write a method to rotate an array to the left by k positions.",
      "code": "public class Solution {\n    public void rotateLeft(int[] nums, int k) {\n        k = k % nums.length;\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n        reverse(nums, 0, nums.length - 1);\n    }\n\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start++] = nums[end];\n            nums[end--] = temp;\n        }\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3, 4, 5};\n        sol.rotateLeft(nums, 2);\n        System.out.println(Arrays.toString(nums)); // Output: [3, 4, 5, 1, 2]\n    }\n}"
    },
    {
      "id": "java-code-112",
      "title": "Find the average of numbers in an array",
      "content": "Write a method to calculate the average of numbers in an array.",
      "code": "public class Solution {\n    public double findAverage(int[] nums) {\n        double sum = 0;\n        for (int num : nums) sum += num;\n        return sum / nums.length;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3, 4, 5};\n        System.out.println(sol.findAverage(nums)); // Output: 3.0\n    }\n}"
    },
    {
      "id": "java-code-113",
      "title": "Replace all spaces in a string with underscores",
      "content": "Write a method to replace all spaces in a string with underscores.",
      "code": "public class Solution {\n    public String replaceSpaces(String s) {\n        return s.replaceAll(\" \", \"_\");\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello world java\";\n        System.out.println(sol.replaceSpaces(s)); // Output: hello_world_java\n    }\n}"
    },
    {
      "id": "java-code-114",
      "title": "Find the power of a number",
      "content": "Write a method to calculate x raised to the power n.",
      "code": "public class Solution {\n    public double myPow(double x, int n) {\n        long N = n; // Handle overflow for Integer.MIN_VALUE\n        if (N < 0) {\n            x = 1 / x;\n            N = -N;\n        }\n        double result = 1;\n        while (N > 0) {\n            if ((N & 1) == 1) result *= x;\n            x *= x;\n            N >>= 1;\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        double x = 2.0;\n        int n = 3;\n        System.out.println(sol.myPow(x, n)); // Output: 8.0\n    }\n}"
    },
    {
      "id": "java-code-115",
      "title": "Generate all combinations of a string",
      "content": "Write a method to generate all possible combinations of characters in a string.",
      "code": "import java.util.*;\npublic class Solution {\n    public List<String> getCombinations(String s) {\n        List<String> result = new ArrayList<>();\n        for (int i = 0; i < (1 << s.length()); i++) {\n            StringBuilder combination = new StringBuilder();\n            for (int j = 0; j < s.length(); j++) {\n                if ((i & (1 << j)) != 0) {\n                    combination.append(s.charAt(j));\n                }\n            }\n            result.add(combination.toString());\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"abc\";\n        System.out.println(sol.getCombinations(s)); // Output: [\"\", \"a\", \"b\", \"ab\", \"c\", \"ac\", \"bc\", \"abc\"]\n    }\n}"
    },
    {
      "id": "java-code-116",
      "title": "Check if an array contains a specific element",
      "content": "Write a method to check if an array contains a specific element.",
      "code": "public class Solution {\n    public boolean containsElement(int[] nums, int target) {\n        for (int num : nums) {\n            if (num == target) return true;\n        }\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3, 4, 5};\n        int target = 3;\n        System.out.println(sol.containsElement(nums, target)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-117",
      "title": "Find the union of two arrays",
      "content": "Write a method to find the union of two arrays.",
      "code": "import java.util.*;\npublic class Solution {\n    public int[] unionArrays(int[] nums1, int[] nums2) {\n        Set<Integer> set = new HashSet<>();\n        for (int num : nums1) set.add(num);\n        for (int num : nums2) set.add(num);\n        return set.stream().mapToInt(Integer::intValue).toArray();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums1 = {1, 2, 3}, nums2 = {3, 4, 5};\n        System.out.println(Arrays.toString(sol.unionArrays(nums1, nums2))); // Output: [1, 2, 3, 4, 5]\n    }\n}"
    },
    {
      "id": "java-code-118",
      "title": "Rotate a string by k positions",
      "content": "Write a method to rotate a string by k positions to the right.",
      "code": "public class Solution {\n    public String rotateString(String s, int k) {\n        k = k % s.length();\n        return s.substring(s.length() - k) + s.substring(0, s.length() - k);\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello\";\n        int k = 2;\n        System.out.println(sol.rotateString(s, k)); // Output: lohel\n    }\n}"
    },
    {
      "id": "java-code-119",
      "title": "Find the shortest word in a string",
      "content": "Write a method to find the shortest word in a string.",
      "code": "public class Solution {\n    public String shortestWord(String s) {\n        String[] words = s.split(\"\\\\s+\");\n        String shortest = words[0];\n        for (String word : words) {\n            if (word.length() < shortest.length()) shortest = word;\n        }\n        return shortest;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello world python programming\";\n        System.out.println(sol.shortestWord(s)); // Output: world\n    }\n}"
    },
    {
      "id": "java-code-120",
      "title": "Check if a number is a perfect square",
      "content": "Write a method to check if a number is a perfect square.",
      "code": "public class Solution {\n    public boolean isPerfectSquare(int n) {\n        long sqrt = (long) Math.sqrt(n);\n        return sqrt * sqrt == n;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 16;\n        System.out.println(sol.isPerfectSquare(n)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-121",
      "title": "Find the last non-repeating character in a string",
      "content": "Write a method to find the last non-repeating character in a string.",
      "code": "import java.util.*;\npublic class Solution {\n    public Character lastNonRepeating(String s) {\n        Map<Character, Integer> charCount = new LinkedHashMap<>();\n        for (char c : s.toCharArray()) {\n            charCount.put(c, charCount.getOrDefault(c, 0) + 1);\n        }\n        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {\n            if (entry.getValue() == 1) {\n                return entry.getKey();\n            }\n        }\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"leetcode\";\n        System.out.println(sol.lastNonRepeating(s)); // Output: l\n    }\n}"
    },
    {
      "id": "java-code-122",
      "title": "Merge two sorted arrays",
      "content": "Write a method to merge two sorted arrays into a single sorted array.",
      "code": "public class Solution {\n    public int[] mergeSortedArrays(int[] nums1, int[] nums2) {\n        int[] merged = new int[nums1.length + nums2.length];\n        int i = 0, j = 0, k = 0;\n        while (i < nums1.length && j < nums2.length) {\n            if (nums1[i] <= nums2[j]) merged[k++] = nums1[i++];\n            else merged[k++] = nums2[j++];\n        }\n        while (i < nums1.length) merged[k++] = nums1[i++];\n        while (j < nums2.length) merged[k++] = nums2[j++];\n        return merged;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums1 = {1, 3, 5}, nums2 = {2, 4, 6};\n        System.out.println(Arrays.toString(sol.mergeSortedArrays(nums1, nums2))); // Output: [1, 2, 3, 4, 5, 6]\n    }\n}"
    },
    {
      "id": "java-code-123",
      "title": "Count the frequency of characters in a string",
      "content": "Write a method to count the frequency of each character in a string.",
      "code": "import java.util.*;\npublic class Solution {\n    public Map<Character, Integer> countCharFrequency(String s) {\n        Map<Character, Integer> freq = new HashMap<>();\n        for (char c : s.toCharArray()) {\n            freq.put(c, freq.getOrDefault(c, 0) + 1);\n        }\n        return freq;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello\";\n        System.out.println(sol.countCharFrequency(s)); // Output: {h=1, e=1, l=2, o=1}\n    }\n}"
    },
    {
      "id": "java-code-124",
      "title": "Find the longest common suffix in a list of strings",
      "content": "Write a method to find the longest common suffix among a list of strings.",
      "code": "public class Solution {\n    public String longestCommonSuffix(String[] strs) {\n        if (strs == null || strs.length == 0) return \"\";\n        String shortest = strs[0];\n        for (String s : strs) {\n            if (s.length() < shortest.length()) shortest = s;\n        }\n        for (int i = 0; i < shortest.length(); i++) {\n            char c = shortest.charAt(shortest.length() - 1 - i);\n            for (String s : strs) {\n                if (s.charAt(s.length() - 1 - i) != c) {\n                    return shortest.substring(shortest.length() - i);\n                }\n            }\n        }\n        return shortest;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String[] strs = {\"abcdef\", \"cdef\", \"ef\"};\n        System.out.println(sol.longestCommonSuffix(strs)); // Output: ef\n    }\n}"
    },
    {
      "id": "java-code-125",
      "title": "Check if a string contains only letters",
      "content": "Write a method to check if a string contains only letters.",
      "code": "public class Solution {\n    public boolean isLetters(String s) {\n        return s.matches(\"[a-zA-Z]+\");\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"HelloWorld\";\n        System.out.println(sol.isLetters(s)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-126",
      "title": "Find the product of digits in a number",
      "content": "Write a method to find the product of digits in a number.",
      "code": "public class Solution {\n    public int productOfDigits(int n) {\n        int product = 1;\n        while (n > 0) {\n            product *= (n % 10);\n            n /= 10;\n        }\n        return product;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 123;\n        System.out.println(sol.productOfDigits(n)); // Output: 6\n    }\n}"
    },
    {
      "id": "java-code-127",
      "title": "Generate all Fibonacci numbers up to n",
      "content": "Write a method to generate all Fibonacci numbers up to a given number n.",
      "code": "import java.util.*;\npublic class Solution {\n    public List<Integer> fibonacciUpToN(int n) {\n        List<Integer> fib = new ArrayList<>();\n        fib.add(0);\n        if (n >= 1) fib.add(1);\n        int a = 0, b = 1;\n        while (true) {\n            int c = a + b;\n            if (c > n) break;\n            fib.add(c);\n            a = b;\n            b = c;\n        }\n        return fib;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 10;\n        System.out.println(sol.fibonacciUpToN(n)); // Output: [0, 1, 1, 2, 3, 5, 8]\n    }\n}"
    },
    {
      "id": "java-code-128",
      "title": "Implement a deque using arrays",
      "content": "Write a class to implement a deque (double-ended queue) using arrays.",
      "code": "public class Deque {\n    private int[] arr;\n    private int front, rear, size, capacity;\n\n    public Deque(int capacity) {\n        this.arr = new int[capacity];\n        this.capacity = capacity;\n        this.front = 0;\n        this.rear = -1;\n        this.size = 0;\n    }\n\n    public void addFront(int item) {\n        if (isFull()) return;\n        front = (front - 1 + capacity) % capacity;\n        arr[front] = item;\n        size++;\n    }\n\n    public void addRear(int item) {\n        if (isFull()) return;\n        rear = (rear + 1) % capacity;\n        arr[rear] = item;\n        size++;\n    }\n\n    public Integer removeFront() {\n        if (isEmpty()) return null;\n        int item = arr[front];\n        front = (front + 1) % capacity;\n        size--;\n        return item;\n    }\n\n    public Integer removeRear() {\n        if (isEmpty()) return null;\n        int item = arr[rear];\n        rear = (rear - 1 + capacity) % capacity;\n        size--;\n        return item;\n    }\n\n    public boolean isEmpty() {\n        return size == 0;\n    }\n\n    public boolean isFull() {\n        return size == capacity;\n    }\n\n    public static void main(String[] args) {\n        Deque deque = new Deque(5);\n        deque.addRear(1);\n        deque.addRear(2);\n        deque.addFront(0);\n        System.out.println(deque.removeFront()); // Output: 0\n        System.out.println(deque.removeRear()); // Output: 2\n    }\n}"
    },
    {
      "id": "java-code-129",
      "title": "Implement a priority queue",
      "content": "Write a class to implement a min priority queue using a binary heap.",
      "code": "public class PriorityQueue {\n    private List<Integer> heap;\n\n    public PriorityQueue() {\n        heap = new ArrayList<>();\n        heap.add(null); // 1-based indexing\n    }\n\n    public void add(int val) {\n        heap.add(val);\n        int i = heap.size() - 1;\n        while (i > 1 && heap.get(i) < heap.get(i / 2)) {\n            Collections.swap(heap, i, i / 2);\n            i /= 2;\n        }\n    }\n\n    public Integer poll() {\n        if (heap.size() <= 1) return null;\n        if (heap.size() == 2) return heap.remove(1);\n        int min = heap.get(1);\n        heap.set(1, heap.remove(heap.size() - 1));\n        int i = 1;\n        while (i * 2 < heap.size()) {\n            int minChild = i * 2;\n            if (i * 2 + 1 < heap.size() && heap.get(i * 2 + 1) < heap.get(i * 2)) {\n                minChild = i * 2 + 1;\n            }\n            if (heap.get(i) <= heap.get(minChild)) break;\n            Collections.swap(heap, i, minChild);\n            i = minChild;\n        }\n        return min;\n    }\n\n    public static void main(String[] args) {\n        PriorityQueue pq = new PriorityQueue();\n        pq.add(5);\n        pq.add(3);\n        pq.add(7);\n        System.out.println(pq.poll()); // Output: 3\n        System.out.println(pq.poll()); // Output: 5\n    }\n}"
    },
    {
      "id": "java-code-130",
      "title": "Reverse the order of words in a string",
      "content": "Write a method to reverse the order of words in a string.",
      "code": "public class Solution {\n    public String reverseWordOrder(String s) {\n        String[] words = s.trim().split(\"\\\\s+\");\n        StringBuilder result = new StringBuilder();\n        for (int i = words.length - 1; i >= 0; i--) {\n            result.append(words[i]);\n            if (i > 0) result.append(\" \");\n        }\n        return result.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello world java\";\n        System.out.println(sol.reverseWordOrder(s)); // Output: java world hello\n    }\n}"
    },
    {
      "id": "java-code-131",
      "title": "Find the first missing positive integer",
      "content": "Write a method to find the first missing positive integer in an array.",
      "code": "public class Solution {\n    public int firstMissingPositive(int[] nums) {\n        int n = nums.length;\n        for (int i = 0; i < n; i++) {\n            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {\n                int temp = nums[nums[i] - 1];\n                nums[nums[i] - 1] = nums[i];\n                nums[i] = temp;\n            }\n        }\n        for (int i = 0; i < n; i++) {\n            if (nums[i] != i + 1) return i + 1;\n        }\n        return n + 1;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {3, 4, -1, 1};\n        System.out.println(sol.firstMissingPositive(nums)); // Output: 2\n    }\n}"
    },
    {
      "id": "java-code-132",
      "title": "Check if brackets are balanced",
      "content": "Write a method to check if brackets in a string are balanced (including (), {}, []).",
      "code": "import java.util.*;\npublic class Solution {\n    public boolean isBalancedBrackets(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(' || c == '{' || c == '[') {\n                stack.push(c);\n            } else if (c == ')' || c == '}' || c == ']') {\n                if (stack.isEmpty()) return false;\n                char top = stack.pop();\n                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"{[()()]}\";\n        System.out.println(sol.isBalancedBrackets(s)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-133",
      "title": "Find the shortest palindromic substring",
      "content": "Write a method to find the shortest palindromic substring in a string.",
      "code": "public class Solution {\n    public String shortestPalindrome(String s) {\n        if (s.length() <= 1) return s;\n        for (int i = 1; i < s.length(); i++) {\n            String sub = s.substring(0, i);\n            if (isPalindrome(sub)) return sub;\n        }\n        return s;\n    }\n\n    private boolean isPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        while (left < right) {\n            if (s.charAt(left++) != s.charAt(right--)) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"abcdcb\";\n        System.out.println(sol.shortestPalindrome(s)); // Output: bcb\n    }\n}"
    },
    {
      "id": "java-code-134",
      "title": "Convert a Roman numeral to an integer",
      "content": "Write a method to convert a Roman numeral string to an integer.",
      "code": "import java.util.*;\npublic class Solution {\n    public int romanToInt(String s) {\n        Map<Character, Integer> map = new HashMap<>();\n        map.put('I', 1);\n        map.put('V', 5);\n        map.put('X', 10);\n        map.put('L', 50);\n        map.put('C', 100);\n        map.put('D', 500);\n        map.put('M', 1000);\n        int result = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (i < s.length() - 1 && map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {\n                result -= map.get(s.charAt(i));\n            } else {\n                result += map.get(s.charAt(i));\n            }\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"MCMXCIV\";\n        System.out.println(sol.romanToInt(s)); // Output: 1994\n    }\n}"
    },
    {
      "id": "java-code-135",
      "title": "Find all subsets of an array",
      "content": "Write a method to find all subsets of an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        result.add(new ArrayList<>());\n        for (int num : nums) {\n            List<List<Integer>> newSubsets = new ArrayList<>();\n            for (List<Integer> subset : result) {\n                List<Integer> newSubset = new ArrayList<>(subset);\n                newSubset.add(num);\n                newSubsets.add(newSubset);\n            }\n            result.addAll(newSubsets);\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2};\n        System.out.println(sol.subsets(nums)); // Output: [[], [1], [2], [1, 2]]\n    }\n}"
    },
    {
      "id": "java-code-136",
      "title": "Find the length of the longest decreasing subsequence",
      "content": "Write a method to find the length of the longest decreasing subsequence in an array.",
      "code": "public class Solution {\n    public int lengthOfLDS(int[] nums) {\n        if (nums.length == 0) return 0;\n        int[] dp = new int[nums.length];\n        Arrays.fill(dp, 1);\n        for (int i = 1; i < nums.length; i++) {\n            for (int j = 0; j < i; j++) {\n                if (nums[i] < nums[j]) {\n                    dp[i] = Math.max(dp[i], dp[j] + 1);\n                }\n            }\n        }\n        return Arrays.stream(dp).max().getAsInt();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};\n        System.out.println(sol.lengthOfLDS(nums)); // Output: 3\n    }\n}"
    },
    {
      "id": "java-code-137",
      "title": "Find the minimum subarray sum",
      "content": "Write a method to find the minimum subarray sum using Kadane's algorithm variant.",
      "code": "public class Solution {\n    public int minSubarraySum(int[] nums) {\n        int minSum = nums[0], currentSum = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currentSum = Math.min(nums[i], currentSum + nums[i]);\n            minSum = Math.min(minSum, currentSum);\n        }\n        return minSum;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {2, -3, 1, -5, 4, -1, 2};\n        System.out.println(sol.minSubarraySum(nums)); // Output: -7\n    }\n}"
    },
    {
      "id": "java-code-138",
      "title": "Implement linear search",
      "content": "Write a method to implement linear search on an array.",
      "code": "public class Solution {\n    public int linearSearch(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) return i;\n        }\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {5, 2, 8, 1, 9};\n        int target = 8;\n        System.out.println(sol.linearSearch(nums, target)); // Output: 2\n    }\n}"
    },
    {
      "id": "java-code-139",
      "title": "Find the kth smallest element in an array",
      "content": "Write a method to find the kth smallest element in an array.",
      "code": "public class Solution {\n    public int findKthSmallest(int[] nums, int k) {\n        Arrays.sort(nums);\n        return nums[k - 1];\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {7, 10, 4, 3, 20, 15};\n        int k = 3;\n        System.out.println(sol.findKthSmallest(nums, k)); // Output: 7\n    }\n}"
    },
    {
      "id": "java-code-140",
      "title": "Generate a random string of given length",
      "content": "Write a method to generate a random string of a given length.",
      "code": "import java.util.*;\npublic class Solution {\n    public String generateRandomString(int length) {\n        String chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n        Random random = new Random();\n        StringBuilder sb = new StringBuilder(length);\n        for (int i = 0; i < length; i++) {\n            sb.append(chars.charAt(random.nextInt(chars.length())));\n        }\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.generateRandomString(8)); // Output: e.g., Kj9mP2qL\n    }\n}"
    },
    {
      "id": "java-code-141",
      "title": "Check if a string is a valid palindrome with case sensitivity",
      "content": "Write a method to check if a string is a valid palindrome, considering case sensitivity.",
      "code": "public class Solution {\n    public boolean isValidPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        while (left < right) {\n            if (s.charAt(left++) != s.charAt(right--)) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"RaCeCaR\";\n        System.out.println(sol.isValidPalindrome(s)); // Output: false\n    }\n}"
    },
    {
      "id": "java-code-142",
      "title": "Find the shortest consecutive sequence length",
      "content": "Write a method to find the length of the shortest consecutive sequence in an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public int shortestConsecutive(int[] nums) {\n        if (nums.length == 0) return 0;\n        Set<Integer> set = new HashSet<>();\n        for (int num : nums) set.add(num);\n        int shortest = nums.length;\n        for (int num : set) {\n            if (!set.contains(num - 1)) {\n                int current = num;\n                int currentStreak = 1;\n                while (set.contains(current + 1)) {\n                    current++;\n                    currentStreak++;\n                }\n                shortest = Math.min(shortest, currentStreak);\n            }\n        }\n        return shortest;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {100, 4, 200, 1, 3, 2};\n        System.out.println(sol.shortestConsecutive(nums)); // Output: 1\n    }\n}"
    },
    {
      "id": "java-code-143",
      "title": "Implement a function to reverse a nested array",
      "content": "Write a method to reverse a nested array (array of arrays).",
      "code": "public class Solution {\n    public int[][] reverseNestedArray(int[][] nested) {\n        int[][] result = new int[nested.length][];\n        for (int i = 0; i < nested.length; i++) {\n            result[i] = new int[nested[nested.length - 1 - i].length];\n            for (int j = 0; j < nested[nested.length - 1 - i].length; j++) {\n                result[i][j] = nested[nested.length - 1 - i][j];\n            }\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[][] nested = {{1, 2}, {3, 4}, {5, 6}};\n        int[][] result = sol.reverseNestedArray(nested);\n        System.out.println(Arrays.deepToString(result)); // Output: [[5, 6], [3, 4], [1, 2]]\n    }\n}"
    },
    {
      "id": "java-code-144",
      "title": "Find the least frequent element in an array",
      "content": "Write a method to find the least frequent element in an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public Integer leastFrequent(int[] nums) {\n        Map<Integer, Integer> freq = new HashMap<>();\n        for (int num : nums) freq.put(num, freq.getOrDefault(num, 0) + 1);\n        int minFreq = Integer.MAX_VALUE;\n        Integer result = null;\n        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {\n            if (entry.getValue() < minFreq) {\n                minFreq = entry.getValue();\n                result = entry.getKey();\n            }\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 2, 3, 3, 3};\n        System.out.println(sol.leastFrequent(nums)); // Output: 1\n    }\n}"
    },
    {
      "id": "java-code-145",
      "title": "Implement a function to sort a stack",
      "content": "Write a method to sort a stack in ascending order using another stack.",
      "code": "import java.util.*;\npublic class Solution {\n    public Stack<Integer> sortStack(Stack<Integer> stack) {\n        Stack<Integer> tempStack = new Stack<>();\n        while (!stack.isEmpty()) {\n            int temp = stack.pop();\n            while (!tempStack.isEmpty() && tempStack.peek() > temp) {\n                stack.push(tempStack.pop());\n            }\n            tempStack.push(temp);\n        }\n        return tempStack;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        Stack<Integer> stack = new Stack<>();\n        stack.push(3);\n        stack.push(1);\n        stack.push(4);\n        stack.push(2);\n        Stack<Integer> sorted = sol.sortStack(stack);\n        System.out.println(sorted); // Output: [1, 2, 3, 4]\n    }\n}"
    },
    {
      "id": "java-code-146",
      "title": "Find the last duplicate in an array",
      "content": "Write a method to find the last duplicate element in an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public Integer lastDuplicate(int[] nums) {\n        Set<Integer> seen = new HashSet<>();\n        Integer lastDup = null;\n        for (int i = nums.length - 1; i >= 0; i--) {\n            if (seen.contains(nums[i])) {\n                lastDup = nums[i];\n                break;\n            }\n            seen.add(nums[i]);\n        }\n        return lastDup;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3, 2, 4};\n        System.out.println(sol.lastDuplicate(nums)); // Output: 2\n    }\n}"
    },
    {
      "id": "java-code-147",
      "title": "Calculate the square root of a number",
      "content": "Write a method to calculate the square root of a number using Newton's method.",
      "code": "public class Solution {\n    public double sqrt(double n) {\n        if (n < 0) return Double.NaN;\n        if (n == 0) return 0;\n        double x = n;\n        double y = 1;\n        double epsilon = 0.0000001;\n        while (x - y > epsilon) {\n            x = (x + y) / 2;\n            y = n / x;\n        }\n        return x;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        double n = 16;\n        System.out.println(sol.sqrt(n)); // Output: 4.0\n    }\n}"
    },
    {
      "id": "java-code-148",
      "title": "Find the mode of an array",
      "content": "Write a method to find the mode (most frequent element) of an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public Integer findMode(int[] nums) {\n        Map<Integer, Integer> freq = new HashMap<>();\n        int maxFreq = 0;\n        Integer mode = null;\n        for (int num : nums) {\n            freq.put(num, freq.getOrDefault(num, 0) + 1);\n            if (freq.get(num) > maxFreq) {\n                maxFreq = freq.get(num);\n                mode = num;\n            }\n        }\n        return mode;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 2, 3, 3, 3};\n        System.out.println(sol.findMode(nums)); // Output: 3\n    }\n}"
    },
    {
      "id": "java-code-149",
      "title": "Implement a function to detect a cycle in a linked list",
      "content": "Write a method to detect a cycle in a linked list using Floyd's Tortoise and Hare algorithm.",
      "code": "public class Solution {\n    class ListNode {\n        int val;\n        ListNode next;\n        ListNode(int val) { this.val = val; }\n    }\n\n    public boolean hasCycle(ListNode head) {\n        if (head == null || head.next == null) return false;\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        ListNode head = sol.new ListNode(1);\n        head.next = sol.new ListNode(2);\n        head.next.next = sol.new ListNode(3);\n        head.next.next.next = head.next; // Creates a cycle\n        System.out.println(sol.hasCycle(head)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-150",
      "title": "Find the longest substring with k distinct characters",
      "content": "Write a method to find the length of the longest substring with at most k distinct characters.",
      "code": "import java.util.*;\npublic class Solution {\n    public int lengthOfLongestSubstringKDistinct(String s, int k) {\n        if (k == 0) return 0;\n        Map<Character, Integer> map = new HashMap<>();\n        int maxLength = 0, start = 0;\n        for (int end = 0; end < s.length(); end++) {\n            map.put(s.charAt(end), map.getOrDefault(s.charAt(end), 0) + 1);\n            while (map.size() > k) {\n                char c = s.charAt(start);\n                map.put(c, map.get(c) - 1);\n                if (map.get(c) == 0) map.remove(c);\n                start++;\n            }\n            maxLength = Math.max(maxLength, end - start + 1);\n        }\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"eceba\";\n        int k = 2;\n        System.out.println(sol.lengthOfLongestSubstringKDistinct(s, k)); // Output: 3\n    }\n}"
    },
    {
      "id": "java-th-001",
      "title": "What is Java?",
      "content": "Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It is platform-independent due to the Java Virtual Machine (JVM) and follows the 'write once, run anywhere' principle."
    },
    {
      "id": "java-th-002",
      "title": "What is the JVM?",
      "content": "The Java Virtual Machine (JVM) is a virtual machine that executes Java bytecode, providing platform independence by translating bytecode into machine code for the host system."
    },
    {
      "id": "java-th-003",
      "title": "What is the difference between JDK, JRE, and JVM?",
      "content": "JDK (Java Development Kit) includes tools for developing Java applications (e.g., compiler). JRE (Java Runtime Environment) includes the JVM and libraries to run Java applications. JVM (Java Virtual Machine) executes Java bytecode."
    },
    {
      "id": "java-th-004",
      "title": "What are Java's access modifiers?",
      "content": "Java has four access modifiers: `public` (accessible everywhere), `protected` (accessible within the package and subclasses), `default` (package-private, accessible within the package), and `private` (accessible only within the class)."
    },
    {
      "id": "java-th-005",
      "title": "What is the difference between `==` and `equals()` in Java?",
      "content": "`==` compares object references (memory addresses), while `equals()` compares object content. For strings, `equals()` checks for content equality, while `==` checks if two references point to the same object."
    },
    {
      "id": "java-th-006",
      "title": "What is the difference between a class and an object?",
      "content": "A class is a blueprint for creating objects, defining properties and behaviors. An object is an instance of a class, created using the `new` keyword."
    },
    {
      "id": "java-th-007",
      "title": "What is method overloading in Java?",
      "content": "Method overloading allows multiple methods with the same name but different parameters (number, type, or order) in the same class."
    },
    {
      "id": "java-th-008",
      "title": "What is method overriding in Java?",
      "content": "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class, using the same method signature."
    },
    {
      "id": "java-th-009",
      "title": "What is the `final` keyword in Java?",
      "content": "The `final` keyword can be used to make a class non-inheritable, a method non-overridable, or a variable constant (unchangeable)."
    },
    {
      "id": "java-th-010",
      "title": "What is the `static` keyword in Java?",
      "content": "The `static` keyword indicates that a member (variable or method) belongs to the class rather than instances, allowing access without creating an object."
    },
    {
      "id": "java-th-011",
      "title": "What is an interface in Java?",
      "content": "An interface is a fully abstract class that defines methods without implementations. Classes implement interfaces using the `implements` keyword."
    },
    {
      "id": "java-th-012",
      "title": "What is the difference between an abstract class and an interface?",
      "content": "An abstract class can have both abstract and concrete methods, while an interface (prior to Java 8) can only have abstract methods. A class can implement multiple interfaces but can only extend one abstract class."
    },
    {
      "id": "java-th-013",
      "title": "What is the `this` keyword in Java?",
      "content": "The `this` keyword refers to the current instance of the class and is used to distinguish instance variables from local variables or to call another constructor."
    },
    {
      "id": "java-th-014",
      "title": "What is the `super` keyword in Java?",
      "content": "The `super` keyword is used to refer to the immediate parent class's instance, methods, or constructors, often used in inheritance."
    },
    {
      "id": "java-th-015",
      "title": "What are Java's exception handling keywords?",
      "content": "Java uses `try`, `catch`, `finally`, `throw`, and `throws` for exception handling to manage errors during program execution."
    },
    {
      "id": "java-th-016",
      "title": "What is the difference between checked and unchecked exceptions?",
      "content": "Checked exceptions are checked at compile-time (e.g., `IOException`), while unchecked exceptions are checked at runtime (e.g., `NullPointerException`)."
    },
    {
      "id": "java-th-017",
      "title": "What is the difference between `throw` and `throws`?",
      "content": "`throw` is used to explicitly throw an exception, while `throws` is used in a method signature to declare the exceptions that the method might throw."
    },
    {
      "id": "java-th-018",
      "title": "What is the Java Collections Framework?",
      "content": "The Java Collections Framework provides a set of classes and interfaces (e.g., `List`, `Set`, `Map`) for storing and manipulating groups of objects."
    },
    {
      "id": "java-th-019",
      "title": "What is the difference between `ArrayList` and `LinkedList`?",
      "content": "`ArrayList` uses a dynamic array for storage (fast for random access), while `LinkedList` uses a doubly-linked list (fast for insertions/deletions)."
    },
    {
      "id": "java-th-020",
      "title": "What is the difference between `HashSet` and `TreeSet`?",
      "content": "`HashSet` stores elements in a hash table (unordered, faster), while `TreeSet` stores elements in a red-black tree (ordered, slower)."
    },
    {
      "id": "java-th-021",
      "title": "What is the difference between `HashMap` and `TreeMap`?",
      "content": "`HashMap` stores key-value pairs in a hash table (unordered), while `TreeMap` stores them in a red-black tree (sorted by keys)."
    },
    {
      "id": "java-th-022",
      "title": "What are generics in Java?",
      "content": "Generics allow types to be parameterized, enabling type-safe collections and methods, e.g., `List<String>` ensures the list only contains strings."
    },
    {
      "id": "java-th-023",
      "title": "What is autoboxing and unboxing in Java?",
      "content": "Autoboxing is the automatic conversion of primitive types to their wrapper classes (e.g., `int` to `Integer`), and unboxing is the reverse process."
    },
    {
      "id": "java-th-024",
      "title": "What is the `StringBuilder` class in Java?",
      "content": "`StringBuilder` is a mutable class for string manipulation, more efficient than `String` for concatenation because it avoids creating multiple objects."
    },
    {
      "id": "java-th-025",
      "title": "What is the difference between `String`, `StringBuilder`, and `StringBuffer`?",
      "content": "`String` is immutable, `StringBuilder` is mutable and not thread-safe, and `StringBuffer` is mutable and thread-safe (slower due to synchronization)."
    },
    {
      "id": "java-th-026",
      "title": "What is the `transient` keyword in Java?",
      "content": "The `transient` keyword prevents a variable from being serialized during object serialization."
    },
    {
      "id": "java-th-027",
      "title": "What is the `volatile` keyword in Java?",
      "content": "The `volatile` keyword ensures that a variable's value is always read from and written to the main memory, preventing thread caching issues."
    },
    {
      "id": "java-th-028",
      "title": "What is multithreading in Java?",
      "content": "Multithreading allows concurrent execution of multiple threads within a program, achieved by extending the `Thread` class or implementing the `Runnable` interface."
    },
    {
      "id": "java-th-029",
      "title": "What is the difference between a thread and a process?",
      "content": "A process is an independent program with its own memory space, while a thread is a lightweight unit of execution within a process, sharing the same memory space."
    },
    {
      "id": "java-th-030",
      "title": "What is synchronization in Java?",
      "content": "Synchronization ensures that only one thread can access a shared resource at a time, using the `synchronized` keyword or locks to prevent race conditions."
    },
    {
      "id": "java-th-031",
      "title": "What is the `wait()` and `notify()` method in Java?",
      "content": "`wait()` causes a thread to wait until another thread calls `notify()` or `notifyAll()` on the same object, used for inter-thread communication."
    },
    {
      "id": "java-th-032",
      "title": "What is a deadlock in Java?",
      "content": "A deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a resource."
    },
    {
      "id": "java-th-033",
      "title": "What is the `Comparable` interface in Java?",
      "content": "The `Comparable` interface defines the `compareTo` method, allowing objects to be compared for sorting (e.g., in `Collections.sort`)."
    },
    {
      "id": "java-th-034",
      "title": "What is the `Comparator` interface in Java?",
      "content": "The `Comparator` interface defines the `compare` method, providing a way to sort objects in a custom order without modifying their class."
    },
    {
      "id": "java-th-035",
      "title": "What are Java annotations?",
      "content": "Annotations provide metadata about code, such as `@Override`, `@Deprecated`, or custom annotations, processed at compile-time or runtime."
    },
    {
      "id": "java-th-036",
      "title": "What is the `Object` class in Java?",
      "content": "The `Object` class is the root of the Java class hierarchy; all classes inherit from it, providing methods like `toString()`, `equals()`, and `hashCode()`."
    },
    {
      "id": "java-th-037",
      "title": "What is the `Cloneable` interface in Java?",
      "content": "The `Cloneable` interface indicates that an object can be cloned using the `clone()` method, often used for creating copies of objects."
    },
    {
      "id": "java-th-038",
      "title": "What is the `Serializable` interface in Java?",
      "content": "The `Serializable` interface allows an object to be converted into a byte stream for persistence or transmission, used with `ObjectOutputStream`."
    },
    {
      "id": "java-th-039",
      "title": "What are Java's input/output streams?",
      "content": "Java provides `InputStream` and `OutputStream` for byte streams, and `Reader` and `Writer` for character streams, used for reading and writing data."
    },
    {
      "id": "java-th-040",
      "title": "What is the `File` class in Java?",
      "content": "The `File` class represents a file or directory path in the file system, providing methods like `createNewFile()`, `delete()`, and `listFiles()`."
    },
    {
      "id": "java-th-041",
      "title": "What is the `Random` class in Java?",
      "content": "The `Random` class provides methods for generating random numbers, such as `nextInt()`, `nextDouble()`, and `nextBoolean()`."
    },
    {
      "id": "java-th-042",
      "title": "What is the `Math` class in Java?",
      "content": "The `Math` class provides static methods for mathematical operations, such as `Math.abs()`, `Math.sqrt()`, `Math.pow()`, and `Math.random()`."
    },
    {
      "id": "java-th-043",
      "title": "What are Java's wrapper classes?",
      "content": "Wrapper classes (e.g., `Integer`, `Double`, `Boolean`) provide object representations of primitive types, enabling their use in collections and generics."
    },
    {
      "id": "java-th-044",
      "title": "What is the `enum` keyword in Java?",
      "content": "The `enum` keyword defines a fixed set of constants, such as days of the week, providing type-safe enumeration."
    },
    {
      "id": "java-th-045",
      "title": "What is the `var` keyword in Java?",
      "content": "Introduced in Java 10, the `var` keyword allows local variable type inference, e.g., `var list = new ArrayList<String>();` infers the type as `ArrayList<String>`."
    },
    {
      "id": "java-th-046",
      "title": "What are Java's lambda expressions?",
      "content": "Introduced in Java 8, lambda expressions provide a concise way to represent functional interfaces, e.g., `(x, y) -> x + y` for adding two numbers."
    },
    {
      "id": "java-th-047",
      "title": "What is the Stream API in Java?",
      "content": "Introduced in Java 8, the Stream API allows functional-style operations on collections, such as `filter`, `map`, and `reduce`, for processing data."
    },
    {
      "id": "java-th-048",
      "title": "What is the `Optional` class in Java?",
      "content": "Introduced in Java 8, the `Optional` class helps avoid `NullPointerException` by representing a value that may or may not be present."
    },
    {
      "id": "java-th-049",
      "title": "What are Java's default methods in interfaces?",
      "content": "Introduced in Java 8, default methods allow interfaces to have method implementations, enabling backward compatibility when adding new methods."
    },
    {
      "id": "java-th-050",
      "title": "What is the `record` keyword in Java?",
      "content": "Introduced in Java 14, the `record` keyword defines immutable data classes with minimal boilerplate, automatically providing constructors, getters, and `toString()`."
    }
  ],
  "coding": [
    {
      "id": "java-code-001",
      "title": "Reverse a string",
      "content": "Write a method to reverse a given string.",
      "code": "public class Solution {\n    public String reverseString(String s) {\n        return new StringBuilder(s).reverse().toString();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello\";\n        System.out.println(sol.reverseString(s)); // Output: \"olleh\"\n    }\n}"
    },
    {
      "id": "java-code-002",
      "title": "Check if a string is a palindrome",
      "content": "Write a method to check if a string is a palindrome.",
      "code": "public class Solution {\n    public boolean isPalindrome(String s) {\n        s = s.toLowerCase().replaceAll(\"[^a-z0-9]\", \"\");\n        int left = 0, right = s.length() - 1;\n        while (left < right) {\n            if (s.charAt(left++) != s.charAt(right--)) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"racecar\";\n        System.out.println(sol.isPalindrome(s)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-003",
      "title": "Find the factorial of a number",
      "content": "Write a method to calculate the factorial of a non-negative integer.",
      "code": "public class Solution {\n    public long factorial(int n) {\n        if (n == 0 || n == 1) return 1;\n        return n * factorial(n - 1);\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 5;\n        System.out.println(sol.factorial(n)); // Output: 120\n    }\n}"
    },
    {
      "id": "java-code-004",
      "title": "Fibonacci sequence",
      "content": "Write a method to generate the first n numbers in the Fibonacci sequence.",
      "code": "public class Solution {\n    public int[] fibonacci(int n) {\n        int[] fib = new int[n];\n        if (n >= 1) fib[0] = 0;\n        if (n >= 2) fib[1] = 1;\n        for (int i = 2; i < n; i++) {\n            fib[i] = fib[i-1] + fib[i-2];\n        }\n        return fib;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] result = sol.fibonacci(7);\n        System.out.println(Arrays.toString(result)); // Output: [0, 1, 1, 2, 3, 5, 8]\n    }\n}"
    },
    {
      "id": "java-code-005",
      "title": "Check if a number is prime",
      "content": "Write a method to check if a number is prime.",
      "code": "public class Solution {\n    public boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i <= Math.sqrt(n); i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 17;\n        System.out.println(sol.isPrime(n)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-006",
      "title": "Find the largest element in an array",
      "content": "Write a method to find the largest element in an array.",
      "code": "public class Solution {\n    public int findLargest(int[] nums) {\n        int max = nums[0];\n        for (int num : nums) {\n            max = Math.max(max, num);\n        }\n        return max;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {3, 1, 4, 1, 5, 9, 2};\n        System.out.println(sol.findLargest(nums)); // Output: 9\n    }\n}"
    },
    {
      "id": "java-code-007",
      "title": "Remove duplicates from an array",
      "content": "Write a method to remove duplicates from an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public int[] removeDuplicates(int[] nums) {\n        return Arrays.stream(nums).distinct().toArray();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 2, 3, 1, 4};\n        System.out.println(Arrays.toString(sol.removeDuplicates(nums))); // Output: [1, 2, 3, 4]\n    }\n}"
    },
    {
      "id": "java-code-008",
      "title": "Count vowels in a string",
      "content": "Write a method to count the number of vowels in a string.",
      "code": "public class Solution {\n    public int countVowels(String s) {\n        int count = 0;\n        for (char c : s.toLowerCase().toCharArray()) {\n            if (\"aeiou\".indexOf(c) != -1) count++;\n        }\n        return count;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello world\";\n        System.out.println(sol.countVowels(s)); // Output: 3\n    }\n}"
    },
    {
      "id": "java-code-009",
      "title": "Find the second largest number in an array",
      "content": "Write a method to find the second largest number in an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public Integer findSecondLargest(int[] nums) {\n        if (nums.length < 2) return null;\n        List<Integer> unique = Arrays.stream(nums).distinct().boxed().sorted(Comparator.reverseOrder()).collect(Collectors.toList());\n        return unique.size() >= 2 ? unique.get(1) : null;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {3, 1, 4, 1, 5, 9, 2};\n        System.out.println(sol.findSecondLargest(nums)); // Output: 5\n    }\n}"
    },
    {
      "id": "java-code-010",
      "title": "Check if two strings are anagrams",
      "content": "Write a method to check if two strings are anagrams of each other.",
      "code": "public class Solution {\n    public boolean areAnagrams(String s1, String s2) {\n        if (s1.length() != s2.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s1.length(); i++) {\n            count[s1.charAt(i) - 'a']++;\n            count[s2.charAt(i) - 'a']--;\n        }\n        for (int c : count) if (c != 0) return false;\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s1 = \"listen\", s2 = \"silent\";\n        System.out.println(sol.areAnagrams(s1, s2)); // Output: true\n    }\n}"
    },
    {
      "id": "java-code-011",
      "title": "Reverse an array in-place",
      "content": "Write a method to reverse an array in-place.",
      "code": "public class Solution {\n    public void reverseArray(int[] nums) {\n        int left = 0, right = nums.length - 1;\n        while (left < right) {\n            int temp = nums[left];\n            nums[left++] = nums[right];\n            nums[right--] = temp;\n        }\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3, 4, 5};\n        sol.reverseArray(nums);\n        System.out.println(Arrays.toString(nums)); // Output: [5, 4, 3, 2, 1]\n    }\n}"
    },
    {
      "id": "java-code-012",
      "title": "Find the sum of all elements in an array",
      "content": "Write a method to calculate the sum of all elements in an array.",
      "code": "public class Solution {\n    public int sumArray(int[] nums) {\n        int sum = 0;\n        for (int num : nums) sum += num;\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3, 4, 5};\n        System.out.println(sol.sumArray(nums)); // Output: 15\n    }\n}"
    },
    {
      "id": "java-code-013",
      "title": "Capitalize the first letter of each word in a string",
      "content": "Write a method to capitalize the first letter of each word in a string.",
      "code": "public class Solution {\n    public String capitalizeWords(String s) {\n        String[] words = s.split(\"\\\\s+\");\n        StringBuilder result = new StringBuilder();\n        for (String word : words) {\n            if (word.length() > 0) {\n                result.append(Character.toUpperCase(word.charAt(0)))\n                      .append(word.substring(1).toLowerCase())\n                      .append(\" \");\n            }\n        }\n        return result.toString().trim();\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String s = \"hello world\";\n        System.out.println(sol.capitalizeWords(s)); // Output: \"Hello World\"\n    }\n}"
    },
    {
      "id": "java-code-014",
      "title": "Find the GCD of two numbers",
      "content": "Write a method to find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.",
      "code": "public class Solution {\n    public int gcd(int a, int b) {\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return a;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int a = 48, b = 18;\n        System.out.println(sol.gcd(a, b)); // Output: 6\n    }\n}"
    },
    {
      "id": "java-code-015",
      "title": "Generate all permutations of an array",
      "content": "Write a method to generate all permutations of an array.",
      "code": "import java.util.*;\npublic class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(nums, new ArrayList<>(), result);\n        return result;\n    }\n\n    private void backtrack(int[] nums, List<Integer> temp, List<List<Integer>> result) {\n        if (temp.size() == nums.length) {\n            result.add(new ArrayList<>(temp));\n            return;\n        }\n        for (int num : nums) {\n            if (!temp.contains(num)) {\n                temp.add(num);\n                backtrack(nums, temp, result);\n                temp.remove(temp.size() - 1);\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1, 2, 3};\n        System.out.println(sol.permute(nums)); // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\n    }\n}"
    },
    
  ]
}





