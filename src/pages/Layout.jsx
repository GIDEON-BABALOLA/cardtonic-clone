import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ChatBot from '../components/ChatBot'
const Layout = () => {
  return (
    <>
    <Header /> 
    <Outlet  />
    <ChatBot />
<Footer />
    </>
  )
}

export default Layout