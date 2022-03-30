import React, { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Math,
  Code,
  Blockquote,
  PrismSetup,
  ExternalLink,
  Marker,
} from './src/components/Complete'
export const myContext = React.createContext()

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
  div: Math.MathBlock,
  span: Math.MathInline,
  a: ExternalLink,
  mark: Marker,
}

const Provider = props => {
  const [isSlim, setIsSlim] = useState(false)

  return (
    <myContext.Provider
      value={{
        isSlim,
        changeView: () => setIsSlim(!isSlim),
      }}
    >
      <MDXProvider components={components}>{props.children}</MDXProvider>
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
