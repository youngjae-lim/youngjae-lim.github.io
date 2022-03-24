import React from 'react'
import styled from 'styled-components'
import Tags from '../Tags'
import Title from './Title'

const BannerTags = () => {
  return (
    <Wrapper>
      <Title title='Tags' />
      <Tags />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* .tag { */
  /*   font-size: 1rem; */
  /*   color: var(--clr-white); */
  /*   text-transform: capitalize; */
  /*   display: block; */
  /*   padding-left: 1rem; */
  /*   letter-spacing: var(--spacing); */
  /*   transition: var(--transition); */
  /*   border-radius: var(--radius); */
  /* } */
  /* .tag:hover { */
  /*   background: var(--category-hover); */
  /*   color: var(--clr-link-hover); */
  /* } */
`
export default BannerTags
