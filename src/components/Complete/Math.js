import React from 'react'
import Tex from '@matejmazur/react-katex'

const MathInline = props => {
  if (props.className.includes('math-inline')) {
    return <Tex math={props.children} />
  }
  return <span {...props} />
}

const MathBlock = props => {
  if (props.className.includes('math-display')) {
    return <Tex block math={props.children} />
  }
  return <div {...props} />
}

export { MathInline, MathBlock }
