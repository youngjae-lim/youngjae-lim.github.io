import React from 'react'
import Layout from '../components/Layout'
import TableOfContents from '../components/TableOfContents'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectTemplate = ({ data }) => {
  const {
    image,
    title,
    category,
    date,
    embeddedImages,
    videoSourceURL,
    videoTitle,
  } = data.mdx.frontmatter

  const { body, tableOfContents } = data.mdx

  const isThereTableOfContent = Object.keys(tableOfContents).length !== 0
  const post = false

  return (
    <Layout>
      <Wrapper toc={isThereTableOfContent}>
        {/* Table of Contents */}
        {isThereTableOfContent && (
          <TableOfContents items={tableOfContents.items} />
        )}
        {/* Post Info */}
        <article>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className='main-img'
          />
          <div className='post-info'>
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className='underline'></div>
          </div>
          <MDXRenderer
            embeddedImages={embeddedImages}
            videoSourceURL={videoSourceURL}
            videoTitle={videoTitle}
          >
            {body}
          </MDXRenderer>
        </article>
        {/* Banner on the right side */}
        <article>
          <Banner post={post} />
        </article>
      </Wrapper>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query GetSingleProjectBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        author
        category
        slug
        date(formatString: "MMMM Do, YYYY")
        readTime
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        videoSourceURL
        videoTitle
      }
    }
  }
`

const Wrapper = styled.section`
  width: 90vw;
  max-width: ${props => (props.toc ? '1600px' : '1100px')};
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-white);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: ${props =>
        props.toc ? '400px 1fr 200px' : '1fr 200px'};
      column-gap: 4rem;
    }
  }
`
