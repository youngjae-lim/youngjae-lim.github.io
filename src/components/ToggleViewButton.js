import React from 'react'
import styled from 'styled-components'
import { BsToggleOff, BsToggleOn, BsCardList } from 'react-icons/bs'
import { myContext } from '../../provider'

const ToggleViewButton = () => {
  const value = React.useContext(myContext)

  return (
    <Wrapper>
      <span>
        <BsCardList />
      </span>
      <span>View as List</span>
      <span onClick={() => value.changeView()}>
        {value.isSlim ? <BsToggleOn /> : <BsToggleOff />}
      </span>
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
    margin-right: 0.5rem;
    line-height: 2;
  }

  svg {
    font-size: 1.5rem;
  }
`
