module.exports= {
  title: 'Fernando G. Prieto -- Website',
  tagline: 'Passionately investigate, learn, and create',
  favicon: 'img/favicon.ico',
  url: 'https://fernandogprieto.com',
  baseUrl: '/',
  organizationName: 'fernandogprieto', 
  projectName: 'fgp-website', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'en'},
      es: {label: 'es'},
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://gitlab.com/fernandogprieto/fgp-website',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://gitlab.com/fernandogprieto/fgp-website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  {
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fernando G. Prieto',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
           to:'projects/',
           label: 'Projects',
           position: 'right'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          {
           to: 'about/',
           label: 'About',
           position: 'right',
         },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          },
          {
            to: 'contact/',
            label: 'Contact',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://gitlab.com/fernandogprieto/fgp-website',
            label: 'Gitlab',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkCodeTheme: require('prism-react-renderer/themes/dracula'),
      },
      algolia: {
        appId:'24X5RPXC2W',
        apiKey: 'c1ebac2e4c8c6cd3742be4b3b79d77d2',
        indexName: 'fgp_website',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/fernandogprieto/fgp-website',
              },
              {              
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/fernando-prieto-carabobo/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fernandogprieto',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                to: '/blog',
              },
              {
                label: 'Status',
                href: 'https://gitlab.com/fernandogprieto/fgp-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fernando Prieto Website. Built with Docusaurus.`,
      },
    },
};
