import React from 'react'

const ExternalLink = props => {
  if (
    props.href.includes('https://youngjae-lim.github.io/') ||
    props.href[0] === '/'
  ) {
    return (
      <a {...props} href={props.href}>
        {props.children}
      </a>
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
