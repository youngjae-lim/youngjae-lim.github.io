import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import TagsList from '../TagsList'
import styled from 'styled-components'

const Card = ({ frontmatter, excerpt }) => {
  const { title, slug, date, tags, image, readTime } = frontmatter

  return (
    <Wrapper>
      <GatsbyImage image={getImage(image)} alt={title} className='img' />
      <div className='info'>
        <h3>{title}</h3>
        <div className='underline' />
        <p>{excerpt}</p>
        {tags?.length > 0 && <TagsList tags={tags} isPost={false} />}
        <Link to={`/posts/${slug}`} className='link'>
          Continue Reading...
        </Link>
        <footer>
          <span className='date'>📆 &nbsp; {date}</span>
          <span>{readTime} min</span>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  /* border: 1px solid white; */
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-green-1);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: black;
  }
  h3 {
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: initial;
    margin-top: 0;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-white);
    line-height: 1.8;
  }
  .link {
    display: flex;
    margin-top: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--continue-reading);
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-link-hover);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-grey-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Card
