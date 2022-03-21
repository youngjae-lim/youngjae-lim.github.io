import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Math,
  Code,
  Blockquote,
  PrismSetup,
  ExternalLink,
} from './src/components/Complete'

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
  div: Math.MathBlock,
  span: Math.MathInline,
  a: ExternalLink,
}

export const wrapMDX = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)