import React from 'react'
import styled from 'styled-components'

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div className='line'></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;
  h4 {
    color: var(--clr-white);
    text-transform: uppercase;
    font-weight: 500;
    background: var(--);
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
  .line {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1.5px;
    /* transform: translateY(-50%); */
    background: var(--clr-white);
    z-index: -1;
  }
`
export default Title
