import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import Seo from '../components/Seo'
import { myContext } from '../../provider'

const PostsPage = ({ data }) => {
  const {
    allMdx: { allPosts: posts, totalCount: count },
  } = data

  const value = React.useContext(myContext)

  return (
    <Layout>
      <Seo title='Posts' />
      <Posts posts={posts} title='blog posts' count={count} context={value} />
    </Layout>
  )
}

export default PostsPage

export const query = graphql`
  {
    allMdx(
      filter: {
        frontmatter: { category: { ne: "PROJECT" }, published: { eq: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      allPosts: nodes {
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
      totalCount
    }
  }
`
