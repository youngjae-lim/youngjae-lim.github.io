import React from 'react'
import styled from 'styled-components'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'

const ToggleViewButton = ({ context }) => {
  console.log(context)

  return (
    <Wrapper onClick={() => context.changeView()} className='toggle-view'>
      <span>View as List</span>
      {context.isSlim ? <BsToggleOn /> : <BsToggleOff />}
    </Wrapper>
  )
}

export default ToggleViewButton

const Wrapper = styled.div`
  background-color: var(--clr-green-5);
  align-items: center;
  border: 0.3px solid var(--clr-green-4);
  border-radius: var(--radius-2);
  padding: 5px;
  margin-bottom: 0.5rem;
  span {
    color: white;
    margin-left: 0.2rem;
    margin-right: 1rem;
    line-height: 2;
  }

  svg {
    font-size: 1.5rem;
  }
`
