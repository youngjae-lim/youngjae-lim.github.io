import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const YouMightAlsoLike = ({ posts, tag }) => {
  return (
    <Wrapper>
      <p>
        You might also like posts tagged with{' '}
        <Link to={`/tags/${tag}`}>#{tag}</Link>:
      </p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default YouMightAlsoLike

const Wrapper = styled.div`
  background-color: var(--clr-green-5);
  margin-top: 1rem;
  padding: 1rem 1rem 0 1rem;
  border: 0.3px solid var(--clr-green-4);
  border-radius: var(--radius-2);

  p {
    font-weight: bold;
  }

  a {
    text-decoration: underline;
  }
`
