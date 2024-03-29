import React from 'react'
import styled from 'styled-components'
import About from './About'
import Recent from './Recent'
// import BannerCategories from './BannerCategories'
import BannerTags from './BannerTags'

const Banner = ({ isPost }) => {
  return (
    <Wrapper isPost={isPost}>
      <About />
      <Recent />
      {/* <BannerCategories /> */}
      <BannerTags />
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.aside`
  display: grid;
  margin-top: ${props =>
    props.isPost
      ? '2.5rem'
      : '0rem'}; /* TODO: make margin-top dynamic. 2.5rem is needed for post-template  */
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
