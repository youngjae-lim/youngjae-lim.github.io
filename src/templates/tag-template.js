import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { myContext } from '../../provider'

const TagTemplate = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  const value = React.useContext(myContext)

  return (
    <Layout>
      <Seo title={`tag / ${pageContext.tag}`} />
      <Posts
        posts={posts}
        title={`tag / ${pageContext.tag}`}
        count={pageContext.count}
        context={value}
      />
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query GetPostsByTag($tag: String!) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag }, published: { eq: true } } }
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
