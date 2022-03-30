import React from 'react'
import styled from 'styled-components'

const Marker = props => {
  return <Mark>{props.children}</Mark>
}

export default Marker

const Mark = styled.mark`
  margin: 0 -0.4em;
  padding: 0.1em 0.4em 0em;
  border-radius: 0.8em 0.3em;
  background: transparent;
  background-image: linear-gradient(
    to right,
    rgba(255, 225, 0, 0.1),
    rgba(255, 225, 0, 0.7) 4%,
    rgba(255, 225, 0, 0.3)
  );
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`
