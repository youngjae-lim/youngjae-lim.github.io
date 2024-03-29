import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Seo from '../components/Seo'
import { myContext } from '../../provider'

const ProjectsPage = ({ data }) => {
  const {
    allMdx: { allProjects: projects },
  } = data

  const value = React.useContext(myContext)

  return (
    <Layout>
      <Seo title='Projects' />
      <Projects projects={projects} title='all projects' context={value} />
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { category: { eq: "PROJECT" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      allProjects: nodes {
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
