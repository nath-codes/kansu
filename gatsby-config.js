module.exports = {
  siteMetadata: {
    title: `Kansu`,
    description: `Kansu is Bristol-based freelance developer, Nathan Tredgett.`,
    siteUrl: 'https://kansu.co',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kansu`,
        short_name: `kansu`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/kansu-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
