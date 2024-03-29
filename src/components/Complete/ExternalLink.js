import React from 'react'
import styled from 'styled-components'
import { CgInternal } from 'react-icons/cg'

const ExternalLink = props => {
  if (
    props.href.includes('https://youngjae-lim.github.io/') ||
    props.href[0] === '/'
  ) {
    return (
      <a {...props} href={props.href} className='internal-link'>
        <CgInternal />
        {props.children}
      </a>
    )
  } else if (props.href[0] === '#') {
    return (
      <Wrapper {...props} href={props.href}>
        {props.children}
      </Wrapper>
    )
  }

  return (
    <a
      {...props}
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-link'
      style={{
        color: 'var(--clr-external-link)',
      }}
    >
      {props.children}
    </a>
  )
}

export default ExternalLink

const Wrapper = styled.a`
  margin-left: 4px;
  visibility: hidden;

  @media screen and (max-width: 500px) {
    display: none;
  }
`
