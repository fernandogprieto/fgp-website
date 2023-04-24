---
id: docusaurus-internationalization 
slug: /docusaurus-internationalization 
title: Internationalization 
---

> [Internationalization(i18n) | Docusaurus](https://docusaurus.io/docs/i18n/introduction)

# Configure your site

Modify 'docusaurus.config.js' to add the i18n support for the Spanish language.

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