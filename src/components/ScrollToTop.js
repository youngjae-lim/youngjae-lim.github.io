import React, { useState, useEffect } from 'react'
import { AiOutlineVerticalAlignTop } from 'react-icons/ai'
import styled from 'styled-components'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Button onClick={scrollToTop} isVisible={isVisible}>
      <AiOutlineVerticalAlignTop />
    </Button>
  )
}

export default ScrollToTop

const Button = styled.div`
  position: fixed;
  padding: 10px;
  width: 70px;
  left: 75vw;
  bottom: 20px;
  height: 70px;
  border: 0.3rem solid var(--clr-scroll-to-top-border);
  border-radius: 50%;
  font-size: 4rem;
  z-index: 1;
  cursor: pointer;
  color: yellow;
  background-color: var(--clr-scroll-to-top-bg);
  text-align: center;
  justify-content: center;
  align-items: center;
  display: ${props => (props.isVisible ? 'flex' : 'none')};

  @media (min-width: 500px) {
    left: 85vw;
  }
  @media (min-width: 768px) {
    left: 87vw;
  }
  @media (min-width: 992px) {
    left: 90vw;
  }
`
