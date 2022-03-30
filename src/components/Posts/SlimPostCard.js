import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SlimPostCard = ({ frontmatter }) => {
  const { title, slug, date } = frontmatter

  return (
    <Wrapper>
      <Link to={`/posts/${slug}`} className='info'>
        <div>
          <h4>{title}</h4>
          <footer>
            <span className='date'>📆 &nbsp; {date}</span>
          </footer>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 0.5rem;

  .info {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: left;
    border-radius: var(--radius-2);
    transition: var(--transition);
    display: flex;
    text-transform: uppercase;
    border: 1px solid var(--clr-green-4);
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .info:hover {
    background-color: var(--clr-green-5);
    transform: scale(1.01);
  }

  h4 {
    margin-top: 0.5rem;
  }

  footer {
    margin-top: 0rem;
    padding-top: 0rem;
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
`

export default SlimPostCard
