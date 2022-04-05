import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import { myContext } from '../../provider'

const IndexPage = ({ data }) => {
  const {
    allMdx: { lastestThreePosts: posts },
  } = data

  const value = React.useContext(myContext)

  return (
    <Layout>
      <Seo title='Home' />
      <Posts posts={posts} title='recently published' context={value} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(
      filter: {
        frontmatter: { category: { ne: "PROJECT" }, published: { eq: true } }
      }
      limit: 5
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
          tags
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
