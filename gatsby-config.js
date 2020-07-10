module.exports = {
  siteMetadata: {
    title: `SVSKHD-Tech Inside`,
    description: `know better which tech will suit you better.`,
    author: `Hithesh svsk`,
    twitterUsername:"@hitesh_svsk",
    image:"/src/images/SVSKHD_.png",
    keywords:"Tech blog , Online tech shopping, Technology, TechInside",
    url:"https://svskhd.net"
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
      apiURL: `https://strapi-trial-1.herokuapp.com`,
      queryLimit: 10000, // Default to 100
      contentTypes: [`blogs`],
    },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136319590-1",
        head: true,
        anonymize:true,
        respectDNT:true,
        pageTransitionDelay:0,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
      }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SV.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
