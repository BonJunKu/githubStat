import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ko/__docusaurus/debug',
    component: ComponentCreator('/ko/__docusaurus/debug', '26a'),
    exact: true
  },
  {
    path: '/ko/__docusaurus/debug/config',
    component: ComponentCreator('/ko/__docusaurus/debug/config', 'a6b'),
    exact: true
  },
  {
    path: '/ko/__docusaurus/debug/content',
    component: ComponentCreator('/ko/__docusaurus/debug/content', 'b2b'),
    exact: true
  },
  {
    path: '/ko/__docusaurus/debug/globalData',
    component: ComponentCreator('/ko/__docusaurus/debug/globalData', '7bb'),
    exact: true
  },
  {
    path: '/ko/__docusaurus/debug/metadata',
    component: ComponentCreator('/ko/__docusaurus/debug/metadata', 'd26'),
    exact: true
  },
  {
    path: '/ko/__docusaurus/debug/registry',
    component: ComponentCreator('/ko/__docusaurus/debug/registry', 'b92'),
    exact: true
  },
  {
    path: '/ko/__docusaurus/debug/routes',
    component: ComponentCreator('/ko/__docusaurus/debug/routes', 'd85'),
    exact: true
  },
  {
    path: '/ko/blog',
    component: ComponentCreator('/ko/blog', '252'),
    exact: true
  },
  {
    path: '/ko/blog/2022 회고',
    component: ComponentCreator('/ko/blog/2022 회고', 'd26'),
    exact: true
  },
  {
    path: '/ko/blog/archive',
    component: ComponentCreator('/ko/blog/archive', '581'),
    exact: true
  },
  {
    path: '/ko/blog/tags',
    component: ComponentCreator('/ko/blog/tags', '4e8'),
    exact: true
  },
  {
    path: '/ko/blog/tags/diary',
    component: ComponentCreator('/ko/blog/tags/diary', 'cff'),
    exact: true
  },
  {
    path: '/ko/markdown-page',
    component: ComponentCreator('/ko/markdown-page', '331'),
    exact: true
  },
  {
    path: '/ko/my-markdown-page',
    component: ComponentCreator('/ko/my-markdown-page', '449'),
    exact: true
  },
  {
    path: '/ko/my-react-page',
    component: ComponentCreator('/ko/my-react-page', '540'),
    exact: true
  },
  {
    path: '/ko/docs',
    component: ComponentCreator('/ko/docs', '000'),
    routes: [
      {
        path: '/ko/docs/Problem Solving/about',
        component: ComponentCreator('/ko/docs/Problem Solving/about', '134'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ko/docs/Problem Solving/LeetCode/Array Partition',
        component: ComponentCreator('/ko/docs/Problem Solving/LeetCode/Array Partition', '188'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ko/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock',
        component: ComponentCreator('/ko/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock', '0fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ko/docs/Problem Solving/LeetCode/Product of Array Except Self',
        component: ComponentCreator('/ko/docs/Problem Solving/LeetCode/Product of Array Except Self', 'ef4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ko/docs/Problem Solving/LeetCode/Valid Palindrome',
        component: ComponentCreator('/ko/docs/Problem Solving/LeetCode/Valid Palindrome', '3fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ko/',
    component: ComponentCreator('/ko/', '613'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
