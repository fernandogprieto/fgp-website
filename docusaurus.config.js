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
            href: 'https://gitlab.com/fernandogprieto/fgp-website',
            position: 'right',
            className: 'navbar-icon navbar-icon-gitlab',
            'aria-label': 'Gitlab Repository',
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="24" stroke="currentColor" fill="currentColor" stroke-width="0"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"/></svg>',
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
              {
                label: 'Discord',
                href: 'https://discord.gg/zAZC37Mfxp',
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
