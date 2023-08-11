import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '2ea'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '559'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '822'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '23e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '96d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f09'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '01e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'f45'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '411'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '401'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ef3'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'def'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ac6'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '518'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c6f'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '5a4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '891'),
    routes: [
      {
        path: '/docs/category/intelligence-artificielle',
        component: ComponentCreator('/docs/category/intelligence-artificielle', '889'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/mobilité',
        component: ComponentCreator('/docs/category/mobilité', 'd4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/optimisation-du-si',
        component: ComponentCreator('/docs/category/optimisation-du-si', 'a62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-ia/ia-droit',
        component: ComponentCreator('/docs/theme-ia/ia-droit', '337'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-ia/ia-ethique',
        component: ComponentCreator('/docs/theme-ia/ia-ethique', 'fad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-ia/ia-marketing',
        component: ComponentCreator('/docs/theme-ia/ia-marketing', '29b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-ia/ia-securite',
        component: ComponentCreator('/docs/theme-ia/ia-securite', '2dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-mobilite/byod',
        component: ComponentCreator('/docs/theme-mobilite/byod', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-mobilite/generations',
        component: ComponentCreator('/docs/theme-mobilite/generations', 'a17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-mobilite/outils-mobilite',
        component: ComponentCreator('/docs/theme-mobilite/outils-mobilite', 'daa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-mobilite/teletravail',
        component: ComponentCreator('/docs/theme-mobilite/teletravail', '37f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/theme-optimisation-si/veille-et-strategie',
        component: ComponentCreator('/docs/theme-optimisation-si/veille-et-strategie', '1ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'de8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
