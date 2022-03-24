import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Posts from '../components/Posts'
import Banner from '../components/Banner'

const TagsPage = ({ data }) => {
  const {
    allMdx: { allPosts: posts, totalCount: count },
  } = data

  return (
    <Layout>
      <Seo title='All posts' />
      <section className='posts'>
        <article>
          <Posts posts={posts} title='All posts' count={count} />
        </article>
        {/* banner column on the right side */}
        <article>
          <Banner post={true} />
        </article>
      </section>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
