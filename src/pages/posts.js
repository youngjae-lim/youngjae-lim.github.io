import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

const PostsPage = ({ data }) => {
  const {
    allMdx: { allPosts: posts, totalCount: count },
  } = data

  console.log(posts, count)
  return (
    <Layout>
      <Posts posts={posts} title='all posts' count={count} />
    </Layout>
  )
}

export default PostsPage

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { category: { ne: "PROJECT" } } }
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
