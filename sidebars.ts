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
      items: ["dotnet/async-programming", "dotnet/general"],
    },
    {
      type: "category",
      label: "JavaScript",
      items: ["javascript/packaging"],
    },
    {
      type: "category",
      label: "Python",
      items: ["python/http-clients", "python/web-scraping"],
    },
    "ruby",
    {
      type: "category",
      label: "Web Dev",
      items: [
        "web-dev/blogs",
        "web-dev/css",
        "web-dev/data-viz",
        "web-dev/general",
        {
          type: "category",
          label: "React",
          items: ["web-dev/react/guides", "web-dev/react/codebases"],
        },
        "web-dev/theming",
        {
          type: "category",
          label: "UI",
          items: [
            "web-dev/ui/design-systems",
            {
              type: "category",
              label: "Elements",
              items: ["web-dev/ui/elements/buttons"],
            },
            "web-dev/ui/navigation",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
