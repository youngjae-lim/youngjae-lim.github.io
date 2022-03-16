import React from 'react'

const Code = ({ children }) => {
  return (
    <code
      style={{
        background: 'var(--clr-code-bg)',
        color: 'var(--clr-code-font)',
        padding: '0.3rem',
        borderRadius: 'var(--radius)',
        fontSize: '90%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </code>
  )
}

export default Code
