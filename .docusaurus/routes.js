import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'eb6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ba3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '016'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '741'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '03c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5b5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4a9'),
    exact: true
  },
  {
    path: '/blog/2022 회고',
    component: ComponentCreator('/blog/2022 회고', '5ec'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a2e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '055'),
    exact: true
  },
  {
    path: '/blog/tags/diary',
    component: ComponentCreator('/blog/tags/diary', '35e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '961'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '0b3'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', '90f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7fd'),
    routes: [
      {
        path: '/docs/Problem Solving/about',
        component: ComponentCreator('/docs/Problem Solving/about', 'b4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/BOJ/농구 경기',
        component: ComponentCreator('/docs/Problem Solving/BOJ/농구 경기', '2a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/BOJ/알파벳 갯수',
        component: ComponentCreator('/docs/Problem Solving/BOJ/알파벳 갯수', '243'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/BOJ/일곱 난쟁이',
        component: ComponentCreator('/docs/Problem Solving/BOJ/일곱 난쟁이', 'd89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/BOJ/트럭 주차',
        component: ComponentCreator('/docs/Problem Solving/BOJ/트럭 주차', '731'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/BOJ/팰린드롬인지 확인하기',
        component: ComponentCreator('/docs/Problem Solving/BOJ/팰린드롬인지 확인하기', 'ab8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Array Partition',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Array Partition', 'cc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Balanced Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Balanced Binary Tree', '9c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock', '627'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Design Circular Queue',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Design Circular Queue', 'c4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Diameter of Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Diameter of Binary Tree', 'df2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Implement Queue using Stacks',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Implement Queue using Stacks', '5cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Implement Stack using Queues',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Implement Stack using Queues', 'de6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Implement Trie',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Implement Trie', '2a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Invert Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Invert Binary Tree', '852'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Kth Largest Element in an Array',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Kth Largest Element in an Array', '298'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Longest Univalue Path',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Longest Univalue Path', 'db7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Maximum Depth of Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Maximum Depth of Binary Tree', 'af4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Merge Two Binary Trees',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Merge Two Binary Trees', '685'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Minimum Height Trees',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Minimum Height Trees', '489'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Most Common Word',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Most Common Word', '524'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Palindrome Pairs',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Palindrome Pairs', '9d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Product of Array Except Self',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Product of Array Except Self', '1cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Reorder Data in Log Files',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Reorder Data in Log Files', '3d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Reverse String',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Reverse String', '11a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Serialize and Deserialize Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Serialize and Deserialize Binary Tree', '56a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Valid Palindrome',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Valid Palindrome', '179'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/snippets',
    component: ComponentCreator('/snippets', '8d1'),
    routes: [
      {
        path: '/snippets/about',
        component: ComponentCreator('/snippets/about', 'f04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/snippets/TypeScript/Initialization',
        component: ComponentCreator('/snippets/TypeScript/Initialization', '865'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f9c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
