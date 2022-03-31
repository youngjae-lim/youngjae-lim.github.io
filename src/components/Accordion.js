import React from 'react'
import styled from 'styled-components'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { myContext } from '../../provider'

const Accordion = ({ title, children }) => {
  const { isOpen, toggleTags } = React.useContext(myContext)

  return (
    <Wrapper>
      <div className='accordion-title' onClick={() => toggleTags()}>
        <div>{title}</div>
        <div>{isOpen ? <FaMinusCircle /> : <FaPlusCircle />}</div>
      </div>
      {isOpen && <div className='accordion-content'>{children}</div>}
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
