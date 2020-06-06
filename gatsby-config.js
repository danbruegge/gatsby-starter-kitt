const siteMetadata = require("./site-metadata");

const isDev = !!process.env.NODE_ENV;

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: "#0c0e0d",
        theme_color: "#59a27a",
        display: "standalone",
        icon: "static/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/*"],
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: isDev,
      },
    },
    {
      resolve: "@danbruegge/gatsby-plugin-stylelint",
      options: {
        files: ["**/*.{js,jsx,ts,tsx}"],
      },
    },
  ],
};