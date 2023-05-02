/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
 /*const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually*/

  const sidebars = {
  projects: [
    'projects/welcome',
    {
      label: 'My Cloud Journey Project - Docusaurus Website',
      type: 'category',
      link: {
        type: 'doc',
        id: 'projects/docusaurus/docusaurus-intro'
      },
      items: [
        'projects/docusaurus/docusaurus-configuration',
        'projects/docusaurus/docusaurus-search',
        'projects/docusaurus/docusaurus-internationalization',
        'projects/docusaurus/docusaurus-swizzling',
      ],
    },
  ],
}

module.exports = sidebars;
