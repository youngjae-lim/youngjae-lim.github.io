import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import TagsList from '../TagsList'
import styled from 'styled-components'

const Card = ({ frontmatter }) => {
  const { title, slug, date, tags, image, readTime, category } = frontmatter

  return (
    <Wrapper>
      <GatsbyImage image={getImage(image)} alt={title} className='img' />
      <Link
        to={category === 'PROJECT' ? `/projects/${slug}` : `/posts/${slug}`}
      >
        <div className='info'>
          <h4>{title}</h4>
          <div className='underline' />
          {tags?.length > 0 && <TagsList tags={tags} isPost={false} />}
          <Link
            to={category === 'PROJECT' ? `/projects/${slug}` : `/posts/${slug}`}
            className='link'
          >
            Continue Reading...
          </Link>
          <footer>
            <span className='date'>📆 &nbsp; {date}</span>
            <span>{readTime} min</span>
          </footer>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--clr-green-4);
  border-radius: var(--radius-2);
  margin-bottom: 1rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  :hover {
    transform: scale(1.01);
  }
  .info {
    padding: 0.5rem;
    text-align: center;
  }
  .img {
    margin-bottom: 0rem;
    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
    /* height: 17rem; */
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 16 / 9;
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
  h4 {
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
    /* margin-top: 2rem; */
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
  @media (min-width: 992px) {
    & {
      display: grid;
      /* grid-template-columns: 30rem 1fr; */
      grid-template-columns: 23rem 1fr;
      column-gap: 0.5rem;
      .info {
        margin-top: 0.3rem;
        text-align: left;
      }
      .img {
        height: 100%;
        /* width: 100%; */
        aspect-ratio: 3 / 2;
        object-fit: cover;
        /* object-position: center; */
        /* max-height: 213.33px; */
        border-top-left-radius: var(--radius-2);
        border-bottom-left-radius: var(--radius-2);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Card
