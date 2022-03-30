import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { myContext } from '../../provider'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <myContext.Consumer>
      {context => (
        <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </>
      )}
    </myContext.Consumer>
  )
}

export default Layout
