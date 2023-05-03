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
    component: ComponentCreator('/blog', '066'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a2e'),
    exact: true
  },
  {
    path: '/blog/Looking back on 2022',
    component: ComponentCreator('/blog/Looking back on 2022', '628'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '055'),
    exact: true
  },
  {
    path: '/blog/tags/diary',
    component: ComponentCreator('/blog/tags/diary', '4a3'),
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
    component: ComponentCreator('/docs', '07a'),
    routes: [
      {
        path: '/docs/Problem Solving/about',
        component: ComponentCreator('/docs/Problem Solving/about', '115'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/BOJ/농구 경기',
        component: ComponentCreator('/docs/Problem Solving/BOJ/농구 경기', '843'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/BOJ/알파벳 갯수',
        component: ComponentCreator('/docs/Problem Solving/BOJ/알파벳 갯수', 'ae3'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/BOJ/일곱 난쟁이',
        component: ComponentCreator('/docs/Problem Solving/BOJ/일곱 난쟁이', '27a'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/BOJ/트럭 주차',
        component: ComponentCreator('/docs/Problem Solving/BOJ/트럭 주차', 'a53'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/BOJ/팰린드롬인지 확인하기',
        component: ComponentCreator('/docs/Problem Solving/BOJ/팰린드롬인지 확인하기', 'f91'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Array Partition',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Array Partition', '4e5'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Balanced Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Balanced Binary Tree', '979'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock', '1bd'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Design Circular Queue',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Design Circular Queue', '231'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Diameter of Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Diameter of Binary Tree', '913'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Implement Queue using Stacks',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Implement Queue using Stacks', '440'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Implement Stack using Queues',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Implement Stack using Queues', '154'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Implement Trie',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Implement Trie', 'fc4'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Invert Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Invert Binary Tree', '8be'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Kth Largest Element in an Array',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Kth Largest Element in an Array', '3b1'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Longest Univalue Path',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Longest Univalue Path', 'aad'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Maximum Depth of Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Maximum Depth of Binary Tree', 'f4d'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Merge Two Binary Trees',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Merge Two Binary Trees', '947'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Minimum Height Trees',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Minimum Height Trees', '4a5'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Most Common Word',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Most Common Word', 'f56'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Palindrome Pairs',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Palindrome Pairs', 'e3c'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Product of Array Except Self',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Product of Array Except Self', 'b05'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Reorder Data in Log Files',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Reorder Data in Log Files', 'd54'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Reverse String',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Reverse String', '881'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Serialize and Deserialize Binary Tree',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Serialize and Deserialize Binary Tree', 'd8b'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Valid Palindrome',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Valid Palindrome', 'a5e'),
        exact: true,
        sidebar: "problemSolving"
      },
      {
        path: '/docs/Snippets/about',
        component: ComponentCreator('/docs/Snippets/about', '257'),
        exact: true,
        sidebar: "snippets"
      },
      {
        path: '/docs/Snippets/Web Front-end/Initialization',
        component: ComponentCreator('/docs/Snippets/Web Front-end/Initialization', 'be2'),
        exact: true,
        sidebar: "snippets"
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
