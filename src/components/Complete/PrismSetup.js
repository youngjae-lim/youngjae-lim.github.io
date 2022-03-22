import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'
import styled from 'styled-components'

const PrismWrapper = props => {
  const className = props.children.props.className
  const language = className?.split('-')[1]

  return className ? (
    <Highlight /* Fenced code block with language specification */
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <Pre className={className} style={style}>
              <div className='code-tab'>{language}</div>
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{ display: 'table-row' }}
                >
                  <span className='line-no'>{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          </Container>
        )
      }}
    </Highlight>
  ) : (
    <Highlight /* Fenced code block with language specification */
      {...defaultProps}
      code={props.children.props.children.trim()}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <Pre
              className={className}
              style={{
                backgroundColor: 'var(--clr-code-bg)',
                paddingLeft: '1rem',
                margin: '1rem 0',
                fontFamily: `var(--fira-mono-font)`,
              }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span
                      {...getTokenProps({ token, key })}
                      style={{ color: 'var(--clr-code-font)' }}
                    />
                  ))}
                </div>
              ))}
            </Pre>
          </Container>
        )
      }}
    </Highlight>
  )
}
// Styling Only
const Pre = styled.pre`
  background: var(--clr-codeschool-dark-1);
  padding: 1rem 1.5rem 1rem 0.3rem;
  /* border-radius: var(--radius); */
  border-top-left-radius: var(--radius);
  /* border-top-right-radius: var(--radius); */
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  margin: 2.5rem 0;
  font-size: 0.9rem;
  /* font-family: Operator Mono, Menlo, Monaco, 'Courier New', monospace; */
  overflow-x: auto;
  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 0;
    right: 0%;
    color: yellow;
    font-size: 1rem;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.07rem 0.85rem 0;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: rgb(39, 40, 34);
  }
  .line-no {
    display: table-cell;
    text-align: right;
    padding-right: 1em;
    user-select: none;
    opacity: 0.5;
  }
`
const Container = styled.article`
  position: relative;
`

export default PrismWrapper
