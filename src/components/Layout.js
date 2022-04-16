import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ReadingBar from '../components/ReadingBar'

const Layout = ({ children }) => {
  const isPost = children[0]?.props?.pathname !== undefined ? true : false

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      {isPost && <ReadingBar />}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default Layout
