import React from 'react'
import Layout from '../components/Layout'
import TableOfContents from '../components/TableOfContents'
import Seo from '../components/Seo'
import TagsList from '../components/TagsList'
import SocialShareButtons from '../components/SocialShareButtons'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectTemplate = ({ data }) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const pathName = typeof window !== 'undefined' ? window.location.pathname : ''

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

  const description = title ? title : excerpt

  const isThereTableOfContent = Object.keys(tableOfContents).length !== 0

  return (
    <Layout>
      <Seo
        title={title}
        description={excerpt}
        image={image.childImageSharp.resize}
        pathname={pathName}
      />
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
            {tags?.length > 0 && <TagsList tags={tags} isPost={true} />}
            <p>{date}</p>
            <div className='underline'></div>
            <div className='social-buttons-top'>
              <SocialShareButtons url={url} description={description} />
            </div>
          </div>
          <MDXRenderer
            embeddedImages={embeddedImages}
            videoSourceURL={videoSourceURL}
            videoTitle={videoTitle}
          >
            {body}
          </MDXRenderer>
          <div className='social-buttons'>
            <span>If you found this article informative, please share: </span>
            <SocialShareButtons url={url} description={description} />
          </div>
        </article>
        {/* Banner on the right side */}
        <article>
          <Banner isPost={true} />
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
            resize(width: 1200) {
              src
              width
              height
            }
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

  .social-buttons-top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .social-buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
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
  @media (min-width: 1560px) {
    & {
      display: grid;
      grid-template-columns: ${props =>
        props.toc ? '380px 1fr 200px' : '1fr 300px'};
      column-gap: 4rem;
      justify-content: space-around;
    }
  }
`
