import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo_ylim.svg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'

const Navbar = ({ toggle, context }) => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-center'>
          {/* <div className='nav-header'> */}
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='mdx logo' />
          </Link>
          <button className='toggle-btn' onClick={toggle}>
            <FaBars />
          </button>
          {/* </div> */}
          <Links styleClass='nav-links' />
          <SocialLinks styleClass='nav-icons' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
