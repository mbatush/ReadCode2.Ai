import React, { useState } from "react";

const languages = ["Java", "Python", "JavaScript", "C++"];

const problemsByDifficulty = {
  beginner: [
    "Sum of Two Numbers",
    "Factorial of a Number (Recursion)",
    "Reverse a String",
    "Find Maximum in an Array",
    "Fibonacci Sequence",
  ],
  easy: [
    "Two Sum",
    "Palindrome Number",
    "Roman to Integer",
    "Valid Parentheses",
    "Merge Two Sorted Lists",
    "Climbing Stairs",
    "Search Insert Position",
    "Maximum Subarray",
    "Plus One",
    "Sqrt(x)",
    "Best Time to Buy and Sell Stock",
    "Symmetric Tree",
    "Path Sum",
    "Single Number",
    "Linked List Cycle",
    "Remove Duplicates from Sorted Array",
    "Implement strStr()",
    "Divide Two Integers",
    "Valid Palindrome",
    "Merge Sorted Array",
    "Convert Sorted Array to BST",
    "Pascal's Triangle II",
    "Contains Duplicate",
    "Min Stack",
    "Reverse Linked List",
    "Intersection of Two Linked Lists",
  ],
  medium: [
    "Add Two Numbers",
    "Longest Substring Without Repeating Characters",
    "String to Integer (atoi)",
    "Container With Most Water",
    "Longest Common Prefix",
    "3Sum",
    "Letter Combinations of a Phone Number",
    "Generate Parentheses",
    "Search in Rotated Sorted Array",
    "Valid Sudoku",
    "Word Break",
    "Jump Game",
    "Merge Intervals",
    "Spiral Matrix II",
    "Unique Paths",
    "Sort Colors",
    "Decode Ways",
    "Binary Tree Level Order Traversal",
    "Binary Tree Zigzag Level Order Traversal",
    "Construct Binary Tree from Preorder and Inorder Traversal",
    "Populating Next Right Pointers in Each Node",
    "Clone Graph",
    "Word Ladder",
    "Remove Nth Node From End of List",
    "Next Permutation",
    "Combination Sum",
    "Trapping Rain Water",
    "Permutations",
    "Rotate Image",
    "Group Anagrams",
    "Pow(x, n)",
    "Spiral Matrix",
    "Jump Game",
    "Search a 2D Matrix",
    "Minimum Path Sum",
    "Sort List",
    "Reverse Linked List II",
    "Restore IP Addresses",
    "Binary Tree Inorder Traversal",
    "Same Tree",
    "Binary Tree Right Side View",
    "Number of Islands",
    "Course Schedule",
    "Kth Largest Element in an Array",
    "Word Search",
    "Count Primes",
    "Product of Array Except Self",
    "Validate Binary Search Tree",
    "Flatten Binary Tree to Linked List",
    "Minimum Size Subarray Sum",
    "Word Break",
    "Largest Number",
    "Evaluate Reverse Polish Notation",
    "Reverse Words in a String",
    "Maximum Product Subarray",
    "Find Minimum in Rotated Sorted Array",
    "Bitwise AND of Numbers Range",
  ],
  hard: [
    "Median of Two Sorted Arrays",
    "Regular Expression Matching",
    "Merge k Sorted Lists",
    "Reverse Nodes in k-Group",
    "Sudoku Solver",
    "Wildcard Matching",
    "Jump Game II",
    "N-Queens",
    "Largest Rectangle in Histogram",
    "Maximal Rectangle",
    "Interleaving String",
    "Word Ladder II",
    "Binary Tree Maximum Path Sum",
    "Best Time to Buy and Sell Stock III",
    "Longest Consecutive Sequence",
    "Word Break II",
    "Valid Number",
    "Text Justification",
    "Edit Distance",
    "Minimum Window Substring",
    "Alien Dictionary",
    "Integer to English Words",
    "Basic Calculator",
    "Sliding Window Maximum",
    "Serialize and Deserialize Binary Tree",
    "Palindrome Pairs",
    "House Robber III",
    "Russian Doll Envelopes",
    "Burst Balloons",
    "Design Twitter",
    "Expression Add Operators",
    "Count of Range Sum",
    "Rearrange String k Distance Apart",
    "Peeking Iterator",
    "Find Median from Data Stream",
    "Binary Tree Longest Consecutive Sequence",
    "Count of Smaller Numbers After Self",
  ],
};

const ProblemSelector = ({ onProblemSelect }) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [language, setLanguage] = useState("Java");

  const handleGetProblem = () => {
    const problems = problemsByDifficulty[difficulty];
    if (!problems || problems.length === 0) return;

    const randomProblem = problems[Math.floor(Math.random() * problems.length)];
    console.log(
      "🎯 Selected Problem:",
      randomProblem,
      "📝 Language:",
      language
    );
    onProblemSelect(randomProblem, language);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
      {/* 🏆 Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Get a Coding Problem
      </h2>

      {/* 🔽 Difficulty Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Choose Difficulty
        </label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
        >
          <option value="beginner">Beginner</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* 💻 Language Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Choose Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* 🚀 Get Problem Button */}
      <button
        onClick={handleGetProblem}
        className="w-full px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
      >
        🔍 Get Problem
      </button>
    </div>
  );
};

export default ProblemSelector;
