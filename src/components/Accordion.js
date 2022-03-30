import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Wrapper>
      <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <FaMinusCircle /> : <FaPlusCircle />}</div>
      </div>
      {isActive && <div className='accordion-content'>{children}</div>}
    </Wrapper>
  )
}

export default Accordion

const Wrapper = styled.div`
  .accordion-title {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 900;
    color: white;
    flex-direction: row;
    cursor: pointer;
    background-color: var(--clr-green-3);
  }

  .accordion-title:hover {
    background-color: var(--clr-green-2);
    color: var(--clr-green-5);
    transition: var(--transition);
  }

  .accordion-title,
  .accordion-content {
    padding: 1rem;
  }

  .accordion-content {
    background-color: var(--clr-green-4);
  }
`
