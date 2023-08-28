const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Minha Landing Page',
  tagline: 'Projeto criado com Docusaurus',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  organizationName: 'Dev Oliveira', // Usually your GitHub org/user name.
  projectName: 'Landing Page', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

      presets: [
      [
        '@docusaurus/preset-classic',
        {
          // ...
          routes: [
            // ...
            {
              path: '/zoan',
              component: '@site/src/pages/zoan',
            },
            {
              path: '/logia',
              component: '@site/src/pages/logia',
            },
            {
              path: '/paramecia',
              component: '@site/src/pages/paramecia',
            },
          ],
        },
      ],
    ],
  
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Minha Landing Page',
        items: [
          { to: 'docs/introduction', label: 'Docs', position: 'left' },
          { to: 'blog', label: 'Blog', position: 'left' },
          { to: 'luffy', label: 'Luffy', position: 'right' },
          { to: 'zoro', label: 'Zoro', position: 'right' },
          { to: 'nami', label: 'Nami', position: 'right' },
        ],
        items: [
          {
            to: '/luffy',
            label: 'Monkey d. Luffy',
            position: 'right',
          },

          {
          to: '/zoro', 
          label: 'Roronoa Zoro', 
          position: 'right'},

          {
            to: '/nami',
            label: 'Nami',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
                   
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Desenvolvido por Kissione Oliveira.`,
      },
      
    }),
});
