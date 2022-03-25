import React from 'react'
import Layout from '../components/Layout'
import TableOfContents from '../components/TableOfContents'
import Seo from '../components/Seo'
import TagsList from '../components/TagsList'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectTemplate = ({ data }) => {
  const {
    image,
    title,
    tags,
    date,
    embeddedImages,
    videoSourceURL,
    videoTitle,
  } = data.mdx.frontmatter

  const { body, tableOfContents, excerpt } = data.mdx

  const isThereTableOfContent = Object.keys(tableOfContents).length !== 0
  const post = false

  return (
    <Layout>
      <Seo title={title} description={excerpt} image={image} />
      <Wrapper toc={isThereTableOfContent}>
        {/* Table of Contents */}
        {isThereTableOfContent && (
          <TableOfContents items={tableOfContents.items} />
        )}
        {/* Post Info */}
        <article className='mdx-page'>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className='main-img'
          />
          <div className='post-info'>
            <h2>{title}</h2>
            {tags?.length > 0 ? <TagsList tags={tags} /> : ''}
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
        tags
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
      excerpt(pruneLength: 160)
    }
  }
`

const Wrapper = styled.section`
  display: grid;
  width: 90vw;
  max-width: ${props => (props.toc ? '1600px' : '1100px')};
  margin: 4rem auto 4rem;

  /* article { */
  /*   margin: 4rem auto; */
  /* } */

  .post-info {
    margin: 2rem 0 3rem 0;
    text-align: center;
    span {
      background: var(--clr-green-1);
      color: black;
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h1 {
      margin: 1.25rem 0;
      font-weight: 900;
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
      display: grid;
      width: 92vw;
    }
    .main-img {
      width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: ${props =>
        props.toc ? '380px 1fr 200px' : '1fr 300px'};
      column-gap: 4rem;
      justify-content: space-around;
    }
  }
`
// const Wrapper = styled.section`
//   width: 90vw;
//   max-width: ${props => (props.toc ? '1600px' : '1100px')};
//   margin: 4rem auto 4rem;
//
//   .post-info {
//     margin: 2rem 0 4rem 0;
//     text-align: center;
//     span {
//       background: var(--clr-green-1);
//       color: black;
//       border-radius: var(--radius);
//       padding: 0.25rem 0.5rem;
//       text-transform: uppercase;
//       letter-spacing: var(--spacing);
//     }
//     h2 {
//       margin: 1.25rem 0;
//       font-weight: 400;
//     }
//     p {
//       color: var(--clr-white);
//     }
//     .underline {
//       width: 5rem;
//       height: 1px;
//       background: var(--clr-grey-9);
//       margin: 0 auto;
//       margin-bottom: 1rem;
//     }
//   }
//   @media (min-width: 992px) {
//     & {
//       width: 92vw;
//     }
//     .main-img {
//       width: 75%;
//       display: block;
//       margin: 0 auto;
//     }
//   }
//   @media (min-width: 1170px) {
//     & {
//       display: grid;
//       grid-template-columns: ${props =>
//         props.toc ? '400px 1fr 200px' : '1fr 200px'};
//       column-gap: 4rem;
//     }
//   }
// `
