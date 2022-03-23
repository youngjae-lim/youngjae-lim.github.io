import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'
import { FaRegCopy, FaTerminal } from 'react-icons/fa'
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
  const className = props.children.props.className // example: language-python
  const code = props.children.props.children.trim()
  const language = className?.split('-')[1]
  const fileName = props.children.props.file || ''

  const highlights = areLinesToHighlight(props.children.props.highlights || '')

  console.log(className)
  console.log(props)

  return className ? (
    <Highlight /* Fenced code block with language specification */
      {...defaultProps}
      code={code}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <Pre className={className} style={style}>
              <div className='filename-tab'>
                <span>{language !== 'bash' ? fileName : 'Terminal'}</span>
                <button
                  className='copy-button'
                  onClick={() => {
                    copyToClipboard(code)
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 2000)
                  }}
                >
                  {isCopied ? '🎉 Copied!' : <FaRegCopy />}
                </button>
              </div>
              {/* <div className='code-tab'>{language}</div> */}
              {tokens.map((line, i) => (
                <div
                  style={{
                    display: 'block',
                    background: highlights(i)
                      ? 'rgba(70, 149, 74, 0.25)'
                      : 'transparent',
                  }}
                >
                  <div
                    {...getLineProps({ line, key: i })}
                    style={{
                      display: 'table-row',
                    }}
                  >
                    {language !== 'bash' ? (
                      <span className='line-no'>{i + 1}</span>
                    ) : (
                      <span className='terminal'>
                        <FaTerminal />
                      </span>
                    )}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              ))}
            </Pre>
          </Container>
        )
      }}
    </Highlight>
  ) : (
    <Highlight /* Fenced code block with no language specification */
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
  padding: 0.5rem 0rem 0.5rem 0rem;
  /* border-radius: var(--radius); */
  /* border-top-left-radius: var(--radius); */
  /* border-top-right-radius: var(--radius); */
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  margin: 3rem 0 1rem 0;
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
    flex-wrap: wrap;
    top: 0;
    left: 0%;
    right: 0;
    color: yellow;
    font-size: 0.7rem;
    font-weight: 700;
    transform: translateY(-100%);
    padding: 0.07rem 0.85rem 0;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: hsl(200, 20%, 25%);
  }
  .copy-button {
    margin: 4px 0;
    padding: 4px 8px;
    background: hsl(150, 10%, 30%);
    border: 0.1px solid rgba(255, 255, 255, 0.3);
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
  /* https://github.com/FormidableLabs/prism-react-renderer/issues/45#issuecomment-522590016 */
  .line-no {
    display: inline-block;
    width: 2em;
    text-align: right;
    vertical-align: bottom;
    margin-right: 0.5rem;
    /* padding-right: 1em; */
    user-select: none;
    opacity: 0.5;
  }
  .terminal {
    margin-left: 0.4rem;
    margin-right: 0.6rem;
    color: hsl(224, 51%, 49%);
  }
`
const Container = styled.article`
  position: relative;
  /* margin-bottom: 2rem; */
`

export default PrismWrapper
