import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Tags = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const {
    allMdx: { group: tags },
  } = data

  return (
    <Wrapper>
      {tags.map((tag, index) => {
        return (
          <Link to={`/tags/${tag.fieldValue}`} className='tag'>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default Tags

const Wrapper = styled.div`
  .tag {
    background: var(--clr-green-3);
    color: var(--clr-code-font);
    padding: 0.1rem 0.2rem;
    border-radius: var(--radius);
    font-size: 90%;
    overflow-x: auto;
    /* white-space: break-spaces; */
    /* overflow-wrap: break-word; */
    text-transform: none;
    font-family: var(--fira-mono-font);
    margin-right: 5px;
    font-weight: bold;
    transition: var(--transition);
  }

  a[aria-current='page'] {
    background: hsl(26, 32%, 48%);
    color: var(--clr-primary-10);
  }

  .tag:hover {
    background: var(--clr-green-1);
    color: black;
  }
`
