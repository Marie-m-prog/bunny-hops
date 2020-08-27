require('dotenv').config({
  path: '.env',
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    title: `Bunny Hops`,
    description: `View Bunnyhops selection of crafted beer.`,
    author: `@marie-m-prog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve:`gatsby-transformer-sharp`,
    },
    {
      resolve:`gatsby-plugin-sharp`,
    },
    {
      resolve:`gatsby-plugin-postcss`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bunny-hops`,
        short_name: `bunny-hops`,
        start_url: `/`,
        background_color: `#202124`,
        theme_color: `#202124`,
        display: `minimal-ui`,
        icon: `src/images/bunny-logo.png`,
      },
    },
  ],
}
