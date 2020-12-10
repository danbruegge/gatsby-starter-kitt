const siteMetadata = require("./site-metadata");

const isDev = Boolean(process.env.NODE_ENV);

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "__generated__/gatsby-types.ts",
        emitSchema: {
          "__generated__/gatsby-schema.graphql": true,
          "__generated__/gatsby-schema.json": true,
        },
        emitPluginDocuments: {
          "__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    "gatsby-plugin-eslint",
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
        icon: "static/favicon.ico",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/*"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages/",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.tsx"),
        },
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
