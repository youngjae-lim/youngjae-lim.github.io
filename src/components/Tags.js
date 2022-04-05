import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Tags = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___tags, order: ASC }
      ) {
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
      <Link to={`/tags`} className='tag'>
        All
      </Link>
      {tags.map((tag, index) => {
        return (
          <Link key={index} to={`/tags/${tag.fieldValue}`} className='tag'>
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
    background: var(--clr-tags-bg);
    color: var(--clr-code-font);
    padding: 0.1rem 0.2rem;
    border-radius: var(--radius);
    font-size: 80%;
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
    background: var(--clr-tags-selected);
    color: var(--clr-tags-selected-font);
  }

  .tag:hover {
    background: var(--clr-green-1);
    color: black;
  }
`
