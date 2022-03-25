import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagsList = ({ tags }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => {
        return (
          <Link key={index} to={`/tags/${tag}`} className='tag'>
            {tag}
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default TagsList

const Wrapper = styled.div`
  /* overflow-wrap: break-word; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .tag {
    background: var(--clr-tags-bg);
    color: var(--clr-code-font);
    padding: 0.1rem 0.2rem;
    border-radius: var(--radius);
    font-size: 90%;
    /* overflow-x: auto; */
    /* white-space: break-spaces; */
    /* overflow-wrap: break-word; */
    text-transform: none;
    font-family: var(--fira-mono-font);
    margin-top: 2px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-weight: bold;
    transition: var(--transition);
  }

  a[aria-current='page'] {
    background: var(--clr-tags-selected);
    color: var(--clr-primary-10);
  }

  .tag:hover {
    background: var(--clr-green-1);
    color: black;
  }
`
