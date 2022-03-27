import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share'

const size = 32
const round = true

const SocialShareButtons = ({ url, title, description }) => (
  <Wrapper>
    <FacebookShareButton url={url} quote={description}>
      <FacebookIcon size={size} round={round} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} title={title} summary={description}>
      <LinkedinIcon size={size} round={round} />
    </LinkedinShareButton>

    <TwitterShareButton url={url} title={description}>
      <TwitterIcon size={size} round={round} />
    </TwitterShareButton>

    <EmailShareButton url={url} title={description}>
      <EmailIcon size={size} round={round} />
    </EmailShareButton>
  </Wrapper>
)

export default SocialShareButtons

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  transition: all 0.2s ease-out;
  gap: 0.5rem;
`
