import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bîn-hiân ê 演算法練習",
  tagline: "LeetCode 刷題筆記",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  url: "https://iansoan.pages.dev",
  baseUrl: "/",

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
          blogTitle: 'Bîn-hiân ê 演算法練習',
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
        title: "Bîn-hiân ê 演算法練習",
        items: [
          {
            href: "https://portaly.cc/siansiansu",
            label: "作品集",
            position: "left",
          },
          {
            href: "https://portaly.cc/siansiansu/support",
            label: "贊助支持",
            position: "left",
          },
          {
            type: "search",
            position: "right",
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
      algolia: {
        container: '#docsearch',
        appId: 'GBJAF15HLX',
        apiKey: '58ce02e5ed689de64dcf99dfea57f03b',
        indexName: 'Algorithm Website',
      },
    }),
};

export default config;
