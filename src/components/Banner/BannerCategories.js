import React from 'react'
import styled from 'styled-components'
import Categories from '../Categories'
import Title from './Title'

const BannerCategories = () => {
  return (
    <Wrapper>
      <Title title='Categories' />
      <Categories />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: var(--clr-white);
    text-transform: capitalize;
    display: block;
    padding-left: 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--category-hover);
    color: var(--clr-link-hover);
  }

  ul {
    margin-left: 0;
  }
`
export default BannerCategories
