import React from 'react'
import styled from 'styled-components'

const Code = ({ children }) => {
  return <Pre>{children}</Pre>
}

export default Code

const Pre = styled.code`
  background: var(--clr-green-3);
  color: var(--clr-code-font);
  padding: 0.1rem 0.2rem;
  border-radius: var(--radius);
  font-size: 90%;
  overflow-x: auto;
  white-space: break-spaces;
  overflow-wrap: break-word;
  text-transform: none;
  font-family: var(--fira-mono-font);
`
