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
        {children}
      </li>
      <li>
        <Link to='/projects' className='page-link'>
          Projects
        </Link>
      </li>
      {/* <li> */}
      {/*   <Link to='/newsletter' className='page-link'> */}
      {/*     Newsletter */}
      {/*   </Link> */}
      {/* </li> */}
      <li>
        <Link to='/contact' className='page-link'>
          Contact
        </Link>
      </li>
      <li>
        <Link to='/about' className='page-link'>
          About
        </Link>
      </li>
      {/* <li> */}
      {/*   <Link to='/post' className='page-link'> */}
      {/*     Post */}
      {/*   </Link> */}
      {/* </li> */}
    </ul>
  )
}

export default Links