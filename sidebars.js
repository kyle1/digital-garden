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
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    //"intro",
    {
      type: "category",
      label: ".NET",
      items: ["dotnet/async-programming"],
    },
    {
      type: "category",
      label: "Python",
      items: ["python/web-scraping"],
    },
    {
      type: "category",
      label: "Web Dev",
      items: [
        "web-dev/blogs",
        "web-dev/css",
        "web-dev/data-viz",
        {
          type: "category",
          label: "React",
          items: ["web-dev/react/guides", "web-dev/react/codebases"],
        },
        "web-dev/theming",
      ],
    },
  ],
};

module.exports = sidebars;
