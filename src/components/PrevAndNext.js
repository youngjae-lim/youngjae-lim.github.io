import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const PrevAndNext = ({ prev, next }) => {
  const prevTitle = prev?.frontmatter.title || ''
  const prevSlug = prev?.frontmatter.slug || ''

  const nextTitle = next?.frontmatter.title || ''
  const nextSlug = next?.frontmatter.slug || ''

  return (
    <Wrapper>
      {next ? (
        <InnerWrapper>
          <div>
            <FaAngleLeft />
            Next
          </div>
          <Link to={`/posts/${nextSlug}`} rel='next'>
            {nextTitle}
          </Link>
        </InnerWrapper>
      ) : (
        <div></div>
      )}
      {prev ? (
        <InnerWrapper>
          <div>
            Previous
            <FaAngleRight />
          </div>
          <Link to={`/posts/${prevSlug}`} rel='prev'>
            {prevTitle}
          </Link>
        </InnerWrapper>
      ) : (
        <div></div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  div:last-child {
    text-align: right;
    margin-left: 8px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    div:last-child {
      margin-left: 0;
      margin-top: 8px;
    }
  }
`

const InnerWrapper = styled.div`
  background-color: var(--clr-green-5);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  border: 0.3px solid var(--clr-green-4);
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`

export default PrevAndNext
