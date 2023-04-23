---
id: docusaurus-configuration
slug: /docusaurus-configuration
title: Configuration file
authors: fernandogprieto
---
> [docusaurus.config.js | Docusaurus](https://docusaurus.io/docs/api/docusaurus-config)

## docusaurus.config.js

You can customize various aspects of your site, such as the logo, site name, author name, announcement bar at the top, navigation bar, and footer at the bottom. This configuration file allows you to tailor your website to your unique requirements and preferences, offering extensive personalization options.

```javascript title='docusaurus.config.js'
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
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/it.png',
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
    ]
  },
}, 

module.exports = config
```
 You can ensure that your site reflects your branding, provides essential information to users, and presents a polished appearance.

> [Sidebar | Docusaurus](https://docusaurus.io/docs/sidebar)

## sidebar.js
In this section of the website, you'll find a configurable sidebar designed for organizing various documentation resources, such as technical articles from the blog, and recommended tools. Each item displayed in the sidebar corresponds to a Markdown file, which can be easily managed as they are all stored in the `doc` directory.

## About me
To modify this section, go to the `src/pages/about/index.js` file. The SVG images featured on the site come from [Svg Repo](https://www.svgrepo.com/), and they are organized in the `static/img/` and `static/svg/` directories for images and SVG files, respectively. I created my distinctive avatar using Lensa, an innovative tool offered by Prisma AI. Visit [Lensa](https://prisma-ai.com/lensa) to explore Lensa's capabilities and craft your own personalized avatars or improve existing images.

```js
<div className="svg_row" >
              <a href="mailto:prieto.fernandog@gmail.com" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Email icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/email.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/email-light.svg',
                  }}
                />
              </a>
              <a href="https://open.spotify.com/user/3132r43u32abukk6v3gwbbm64vx4?si=a0b6dbdbab8b4688&nd=1" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Spotify icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/spotify.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/spotify-light.svg',
                  }}
                />
              </a>
              <a href="https://discord.gg/zAZC37Mfxp" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Discord icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord-light.svg',
                  }}
                />
              </a>
              <a href="https://twitter.com/fernandogprieto" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="Twitter icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/twitter.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/twitter-light.svg',
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/fernando-prieto-carabobo/" target="_blank" rel="noopener noreferrer">
                <ThemedImage
                  alt="LinkedIn icon"
                  sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/linkedin.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/linkedin-light.svg',
                  }}
                />
```
## Others configs (under construction)
