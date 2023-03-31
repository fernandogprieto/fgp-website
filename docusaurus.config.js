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
            'https://gitlab.com/fernandogprieto/website',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://gitlab.com/fernandogprieto/website',
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
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tutorial',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://gitlab.com/fernandogprieto/website',
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
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Tutorial',
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
                href: 'https://gitlab.com/fernandogprieto/website',
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
                href: 'https://gitlab.com/fernandogprieto/website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fernando Prieto Website. Built with Docusaurus.`,
      },
    },
};
