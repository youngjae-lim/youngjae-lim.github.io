require('dotenv').config({
  path: `.env`,
})

const remarkMath = require(`remark-math`)
const remarkSlug = require(`remark-slug`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Youngjae Jay Lim's Dev Blog/Portfolio Website",
    description:
      "This is Youngjae Jay Lim's Web Development/Data Science Portfolio Website",
    author: 'Youngjae Jay Lim',
    twitterUsername: '@JayYoungjae',
    image: {
      src: '/default-card-img.png',
      width: 1884,
      height: 933,
    },
    siteUrl: 'https://youngjae-lim.github.io/',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-images` }],
        remarkPlugins: [remarkMath, remarkSlug],
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-social-cards`,
    //   options: {
    //     query: `
    //             {
    //               allMdx {
    //                 nodes {
    //                   excerpt(pruneLength: 160)
    //                   frontmatter {
    //                     slug
    //                     title
    //                   }
    //                 }
    //               }
    //             }
    //             `,
    //     queryToPages: result =>
    //       result.data.allMdx.nodes.map(node => {
    //         const slugWithoutSlashes = node.fontmatter.slug.replace(/\//g, '')
    //         return {
    //           slug: `/${slugWithoutSlashes}`,
    //           pageContext: {
    //             title: node.frontmatter.title,
    //             description: node.excerpt,
    //           },
    //         }
    //       }),
    //     component: require.resolve('./src/components/SocialCard.js'),
    //     cardLimit: 0, // Useful for debugging.
    //   },
    // },
  ],
}
