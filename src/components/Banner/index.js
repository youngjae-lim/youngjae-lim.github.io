import React from 'react'
import styled from 'styled-components'
import About from './About'
import Recent from './Recent'
import BannerCategories from './BannerCategories'

const Banner = ({ post }) => {
  console.log('post? ', post)
  return (
    <Wrapper post={post}>
      <About />
      <Recent />
      <BannerCategories />
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.aside`
  display: grid;
  margin-top: ${props =>
    props.post
      ? '0rem'
      : '2.5rem'}; /* TODO: make margin-top dynamic. 2.5rem is needed for post-template  */
  grid-template-columns: 300px;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 250px);
      column-gap: 3rem;
    }
  }
`
