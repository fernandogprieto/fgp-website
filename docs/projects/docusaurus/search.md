---
id: docusaurus-search
slug: /docusaurus-search
---

> [Search | Docusaurus](https://docusaurus.io/docs/search) 


# Algolia
There are a few options you can use to add search to your website. In this project I choose Run Your Own by DocSearch.

> [Run your own | Docsearch](https://docsearch.algolia.com/docs/run-your-own)

- First you need to create an [Algolia account](https://www.algolia.com/)
- Then create an index in indices:
[comment]: image 
- Get the Application ID and API Key in API Keys:
- Put your API-ID and API-LEY Search only in you `docusaurus.config.js`:
```js
themeConfig: `
    algolia: {
      appId: "xxxxxxxxxxx",
      apiKey: "xxxxxxxxxxx",
      indexName: "fgp-website",
    },
}
```

