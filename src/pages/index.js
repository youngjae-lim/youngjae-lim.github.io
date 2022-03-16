import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const {
    allMdx: { lastestThreePosts: posts },
  } = data

  return (
    <Layout>
      <Posts posts={posts} title='recently published' />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { category: { ne: "PROJECT" } } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      lastestThreePosts: nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          author
          category
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`
