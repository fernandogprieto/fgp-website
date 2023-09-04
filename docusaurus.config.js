const announcementBarContent = `<a href="/docs/docusuarus-intro" target="_blank">My Cloud Journey Project - Docusaurus Website</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fernando G. Prieto | IT Specialist and Cloud Computing Training',
  titleDelimiter: '-',
  tagline: "IT Specialist specializing in professional development and technological trends. Currently pursuing Cloud Engineering certifications with a focus on cloud-native, open-source, and AI technologies.",
  favicon: 'img/favicon.ico',
  url: 'https://fernandogprieto.com',
  baseUrl: '/',
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

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
      image: 'img/socialmediacard.png',
      announcementBar: {
        id: 'announcementBar',
        content: announcementBarContent,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'My Cloud Journey',
        },
        {
          name: 'keywords',
          content: 'blog, projects, python, multi-cloud, kubernetes',
        },
        {
          name: 'keywords',
          content: 'Open source enthusiast, Cloud native, IT Advisor, Infraestructure as a code',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Fernando G. Prieto',
        logo: {
          alt: 'Logo',
          src: 'svg/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
           to:'projects/',
           label: 'Projects',
           position: 'right'
          },
          {
            position: 'right',
            label: 'Docs',
            items: [
              {
              label: 'Projects',
              to: 'docs/projects',
              },
              {
              label: 'Multi-Cloud',
              to: 'docs/multi-cloud/'
              },
            ],
          },
          {
            to: 'resources/',
            label: 'Resources',
            position: 'right',
          },
          {
            to: 'blog/',
            label: 'Blog',
            position: 'right',
          },
          {
           to: 'about/',
           label: 'About',
           position: 'right',
         },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fernandogprieto/fgp-website',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'Github Repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Tags',
                to: 'blog/tags/',
              },
              {
                label:'Projects',
                to:'projects/'
              },
              {
                label: 'Docs',
                to: 'docs/projects',
              },
              {
                label: 'Multi-cloud',
                to: 'docs/multi-cloud',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Email me',
                href: 'mailto:prieto.fernandog@gmail.com',
                type: 'link',
              },
              {
                label: 'Blog',
                to: 'blog/',
              },
              {
                label: 'Github',
                href: 'https://github.com/fernandogprieto/fgp-website',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/fernando-prieto-carabobo/',
              },
              {
                label: 'Twitter - X',
                href: 'https://twitter.com/fernandogprieto',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/n6Xwz5XtRS',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Resources',
                to: 'resources/',
              },
              {
                label: 'Status',
                href: 'https://status.fernandogprieto.com',
              },
              {
              html: `<a href="https://docusaurus.io/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwithdocusaurus.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fernando Prieto Website. Built with Docusaurus.`,
      },
      algolia: {
        appId:'24X5RPXC2W',
        apiKey: '5b4935545231c4855105b3255c4ec7a0',
        indexName: 'fgp_website',
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkCodeTheme: require('prism-react-renderer/themes/dracula')
      },
    },

  presets: [
      [
        '@docusaurus/preset-classic',
        ({
          docs: {
              path: 'docs',
              sidebarPath: 'sidebars.js',
            },
          blog: {
            showReadingTime: true,
            editUrl:
              'https://gitlab.com/fernandogprieto/fgp-website/-/tree/main/blog',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          gtag: {
            trackingID: 'G-KEB70ZG5C5',
            anonymizeIP: true,
          },
          googleTagManager: {
            containerId: 'GT-MJM9PBM',
          },
        }),
      ],
    ],
    plugins: [
      "docusaurus-plugin-sass",
      [
        "@docusaurus/plugin-ideal-image",
        {
        disableInDev: false,
        },
      ],
    ],
    scripts: [
      {
        src: '/src/vercel-analytics.js',
        async: true,
        defer: true,
      },
    ],
};

module.exports = config
