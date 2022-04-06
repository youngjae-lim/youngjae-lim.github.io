import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import { myContext } from '../../provider'

const CategoryTemplate = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  const value = React.useContext(myContext)

  return (
    <Layout>
      <Posts
        posts={posts}
        title={`category / ${pageContext.category}`}
        count={pageContext.count}
        context={value}
      />
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query GetPostsByCategory($category: String!) {
    allMdx(
      filter: {
        frontmatter: { category: { eq: $category }, published: { eq: true } }
      }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          slug
          author
          date(formatString: "MMMM Do, YYYY")
          category
          tags
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
