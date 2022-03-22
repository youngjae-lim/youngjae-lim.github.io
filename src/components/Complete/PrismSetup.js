import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'
import styled from 'styled-components'
import { FaRegCopy } from 'react-icons/fa'
import rangeParser from 'parse-numeric-range'

const areLinesToHighlight = raw => {
  const lineNumbers = rangeParser(raw)
  if (lineNumbers) {
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const copyToClipboard = str => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log('Copying to clipboard was successful!')
      },
      function (err) {
        console.error('Could not copy text: ', err)
      }
    )
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData('Text', str)
  }
}

const PrismWrapper = props => {
  const [isCopied, setIsCopied] = React.useState(false)
  const className = props.children.props.className
  const code = props.children.props.children.trim()
  console.log(className)
  const language = className?.split('-')[1].split(':')[0]
  const fileName = className?.split(':')[1]
  console.log(fileName)

  const highlights = areLinesToHighlight(props.children.props.highlights || '')
  console.log(highlights)

  return className ? (
    <Highlight /* Fenced code block with language specification */
      {...defaultProps}
      code={code}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        console.log(style)
        return (
          <Container>
            <Pre className={className} style={style}>
              <div className='filename-tab'>
                <span>{fileName}</span>
                <button
                  className='copy-button'
                  onClick={() => {
                    copyToClipboard(code)
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 1000)
                  }}
                >
                  {isCopied ? '🎉 Copied!' : <FaRegCopy />}
                </button>
              </div>
              {/* <div className='code-tab'>{language}</div> */}
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    display: 'table-row',
                    background: highlights(i)
                      ? 'hsla(120, 100%, 75%, 0.2)'
                      : 'transparent',
                  }}
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
      code={code}
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
  /* border-top-left-radius: var(--radius); */
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
  .filename-tab {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0%;
    right: 0;
    color: yellow;
    font-size: 1rem;
    font-weight: 700;
    transform: translateY(-100%);
    padding: 0.07rem 0.85rem 0;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: hsl(236, 0%, 25%);
  }
  .copy-button {
    margin: 4px 0;
    padding: 4px 12px;
    background: hsl(236, 20%, 22%);
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    color: #e2e8f0;
    font-size: 14px;
    line-height: 1;
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
