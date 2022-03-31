import React from 'react'
import { Link } from 'gatsby'
import { FiHome, FiFileText, FiBox, FiMail, FiUser } from 'react-icons/fi'

const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to='/' className='page-link'>
          <FiHome />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/posts' className='page-link'>
          <FiFileText />
          <span>Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/projects' className='page-link'>
          <FiBox />
          <span>Projects</span>
        </Link>
      </li>
      <li>
        <Link to='/contact' className='page-link'>
          <FiMail />
          <span>Contact</span>
        </Link>
      </li>
      <li>
        <Link to='/about' className='page-link'>
          <FiUser />
          <span>About</span>
        </Link>
        {children}
      </li>
    </ul>
  )
}

export default Links
