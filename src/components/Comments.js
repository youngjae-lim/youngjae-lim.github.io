import React, { useEffect } from 'react'
import styled from 'styled-components'

const COMMENTS_ID = 'comments-container'

const Comments = () => {
  useEffect(() => {
    if (!process.env.GATSBY_COMMENTS_REPO) return

    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', process.env.GATSBY_COMMENTS_REPO)
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'icy-dark')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    // This function will get called when the component unmounts
    // To make sure we don't end up with multiple instances of the comments component
    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [])

  return (
    <Wrapper>
      <h4>Comments</h4>
      <div id={COMMENTS_ID} />
    </Wrapper>
  )
}

export default Comments

const Wrapper = styled.div`
  h4 {
    margin-bottom: 1rem;
  }
  div {
    background-color: var(--clr-green-5);
    border-radius: var(--radius-2);
    border: 0.3px solid var(--clr-green-4);
  }

  /* .utterances { */
  /*   margin: -16px 0; */
  /*   padding: 0 -4px; */
  /* } */
`
