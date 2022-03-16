import React from 'react'
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href='https://www.linkedin.com/in/youngjae-lim'>
          <FaLinkedin className='social-icon linkedin-icon' />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/JayYoungjae'>
          <FaTwitterSquare className='social-icon twitter-icon' />
        </a>
      </li>
      <li>
        <a href='https://github.com/youngjae-lim'>
          <FaGithubSquare className='social-icon github-icon' />
        </a>
      </li>
      <li>
        <a href='https://instagram.com/youngjayonthestreet'>
          <FaInstagramSquare className='social-icon instagram-icon' />
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
