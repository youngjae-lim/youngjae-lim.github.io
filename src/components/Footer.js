import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div>
          <span id='copyright-symbol'>©</span> {new Date().getFullYear()}{' '}
          Youngjae Jay Lim. All Rights Reserved, Built with{' '}
          <a href='https://www.gatsbyjs.com' target='_blank' rel='noreferrer'>
            Gatsby
          </a>
        </div>{' '}
        <SocialLinks styleClass='footer-icons' />
      </div>
    </footer>
  )
}

export default Footer
