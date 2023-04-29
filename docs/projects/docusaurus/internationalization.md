---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internationalization - i18n
---

> [Internationalization(`18n) | Docusaurus](https://docusaurus.io/docs/i18n/introduction)

## Configure your site

Modify the`docusaurus.config.js` file to incorporate i18n support for the Spanish language, based on your preference.

```js title='docusaurus.config.js'
module.exports = {
   i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'en'},
      es: {label: 'es'},
    }
  },
};
```
## Theme Config 

Add a navigation bar item of the `localeDropdown` type, allowing users to choose their preferred language:

```js title='docusaurus.config.js'
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
  },
};
```

Docusaurus, on its platform, includes an automatic translation feature that can be assessed through the following example:
```
npm run start -- --locale es
```

This tool provides preset translations for generic theme labels, such as "Next" and "Previous" in relation to pagination. You can explore the [default translations](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales) through the provided link.

## Translate
The docusaurus `write-translation` command will statically analyze all React code files used in your site, extract calls to these APIs, and aggregate them in the code.json file

```bash
npm run write-translations -- --locale es
```

```
yourwebsite/i18n
     └── es
         ├── code.json                        
         ├── docusaurus-plugin-content-blog
         │   └── options.json
         ├── docusaurus-plugin-content-docs
         │   └── current.json
         └── docusaurus-theme-classic
             ├── footer.json
             └── navbar.json
```

To make modifications to the Docusaurus-theme-classic, you need to focus on the footer and navbar sections within the message area.

### Markdown files 

You can translate docs, blog and pages only whit this command`

```
cp -r docs/** i18n/es/docusaurus-plugin-content-docs/current
cp -r blog/** i18n/es/docusaurus-plugin-content-blog
cp -r src/pages/** i18n/es/docusaurus-plugin-content-pages
```

When editing your docs, blog, and pages files in Docusaurus, it is important to only modify the title, as the same ID and slug configuration is shared across these files.

```md title='docs/projects/docusaurus/internationalization.md'
---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internationalization - i18n 
---
```
```md title='i18n/es/docusaurus-plugin-content-docs/current/projects/docusaurus/internationalization.md'
---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internacionalización - i18n // -- Edit
---
```