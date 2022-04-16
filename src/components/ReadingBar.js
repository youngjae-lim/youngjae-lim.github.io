import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ReadingBar = () => {
  //Width State
  const [width, setWidth] = useState(0)
  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    // store percentage in state
    setWidth(percent)
  }

  //useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  })

  return <Bar style={{ width: width + '%' }}></Bar>
}

export default ReadingBar

const Bar = styled.div`
  position: fixed;
  z-index: 500;
  height: 6px;
  border-radius: 0px 2px 0px 0px;
  background: linear-gradient(
    90deg,
    rgba(179, 179, 0, 1) 0%,
    rgba(132, 115, 177, 1) 100%,
    rgba(3, 9, 112, 1) 100%
  );
`
