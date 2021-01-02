module.exports = {
  siteMetadata: {
    title: "Richard D Kirkley",
    siteUrl: "https://richarddkirkley.ca",
    description: "Photography and artwork by Richard D Kirkley",
    author: "Richard D Kirkley",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photos",
        path: `photos`,
      },
    },
  ],
};
