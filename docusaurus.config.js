import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Algorithms",
  tagline: "LeetCode 刷題筆記",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  url: "https://algorithms.siansiansu.com",
  baseUrl: "/",
  organizationName: "siansiansu",
  projectName: "algorithms",

  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'Algorithms',
          blogDescription: 'LeetCode 刷題筆記',
          postsPerPage: 9,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有題目',
          routeBasePath: '/',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          ignorePatterns: ['/search/**'],
        },
      }),
    ],
  ],

  themeConfig: ({
      metadata: [
        {
          name: "keywords",
          content: "LeetCode, algorithms, 演算法, 刷題, 程式設計"
        },
        {
          name: "description",
          content: "LeetCode 刷題筆記與解題思路"
        },
      ],
      navbar: {
        title: "Algorithms",
        items: [
          {
            href: "https://blog.siansiansu.com",
            label: "Blog",
            position: "left",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © 2024 Soo bîn-hiân`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['cpp', 'java', 'python'],
      },
    }),
};

export default config;
