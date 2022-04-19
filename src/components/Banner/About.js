import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title='about me' />
      <StaticImage
        src='../../assets/profile.jpg'
        layout='fixed'
        width={130}
        height={130}
        className='img'
        alt='profile'
      />
      <p>
        I am a full stack web developer/data analyst from NYC who is seeking
        remote/freelancing/full-time opportunities. I am passionate about
        collecting, processing, exploring, and publishing data and building
        anything involving modern web technology. When I am not at my computer,
        I am a photographer as well.
      </p>
      <SocialLinks styleClass='banner-icons' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-white);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
