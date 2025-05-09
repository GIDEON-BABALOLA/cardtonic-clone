import React, { useEffect } from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import NavSection from './NavSection';
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [show, setShow] = useState(false)
  const [navs, setNavs] = useState({
    "Gift Cards" : false,
    "Products" : false,
    "Explore" : false,
  })
const toggleSidebar = () => {
  console.log("how")
  setIsSidebarOpen(!isSidebarOpen);
};
useEffect(() => {
console.log(navs)
}, [navs])
const toggleNavbar = (e) => {
  setShow(true)
  console.log(e.target.innerText)
  setNavs({
    "Gift Cards" : "Gift Cards" === e.target.innerText,
    "Products" : "Products" === e.target.innerText,
    "Explore" : "Explore" === e.target.innerText
   })
console.log(e.target.innerText)
}
  return (
    <>
    {isSidebarOpen && <RemoveScrollBar />}
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <section className=' fixed w-full flex flex-row justify-between items-center md:py-[30px] md:px-[100px] px-[20px] py-[20px]
    border-b-2 border-b-[#F8F8F9]
    bg-[#FFFFFFF2] z-10 backdrop-blur-md reveal-nav'>
    <div>
      <img 
      src='https://ik.imagekit.io/rwgk2b4rf/svgexport-1.svg?updatedAt=1746608981140'></img>
    </div>
    <div className=' lg:flex flex-row justify-between items-center gap-7 hidden'>
      <span className='text-[#002444] cursor-pointer'  
      onMouseEnter={(e) => toggleNavbar(e)}>
      Gift Cards
      </span>
      <span  className='text-[#002444] cursor-pointer'
       onMouseEnter={(e) => toggleNavbar(e)}>
        Products
      </span>
      <span  className='text-[#002444] cursor-pointer' 
      onMouseEnter={(e) => toggleNavbar(e)}>
        Explore
      </span>
    </div>
    {
      !isSidebarOpen ?
    <img 
          onClick={() => toggleSidebar()}
    className=" flex lg:hidden cursor-pointer"
      src='https://ik.imagekit.io/rwgk2b4rf/svgexport-2.svg?updatedAt=1746608981115'></img>
      :
      <img 
      onClick={() => toggleSidebar()}
       className=" flex lg:hidden cursor-pointer"
      src='https://ik.imagekit.io/rwgk2b4rf/svgexport-2.svg?updatedAt=1746734919350'/>
    }
    <div className='lg:flex flex-row items-center justify-between gap-5 hidden'>
      <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-3.svg?updatedAt=1746608981980'></img>
      <button className='hover:bg-[#7580EF] bg-[#002444] text-white py-3 px-7 rounded-3xl font-bold'>Get Started</button>
    </div>
    </section>
    <NavSection navs={navs} show={show} setShow={setShow}/>
    </>
  )
}

export default Header

