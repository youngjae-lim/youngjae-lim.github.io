import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to='/' className='page-link'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/posts' className='page-link'>
          Posts
        </Link>
      </li>
      <li>
        <Link to='/projects' className='page-link'>
          Projects
        </Link>
      </li>
      <li>
        <Link to='/contact' className='page-link'>
          Contact
        </Link>
      </li>
      <li>
        <Link to='/about' className='page-link'>
          About
        </Link>
        {children}
      </li>
    </ul>
  )
}

export default Links
