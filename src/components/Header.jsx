import React from 'react'

const Header = () => {
  return (
    <>
    <section className='w-full flex flex-row justify-between items-center md:py-[30px] md:px-[100px] px-[20px] py-[20px]
    border-b-2 border-b-[#F8F8F9]
    bg-[#FFFFFFF2]'>
    <div>
      <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-1.svg?updatedAt=1746608981140'></img>
    </div>
    <div className=' lg:flex flex-row justify-between items-center gap-7 hidden'>
      <span className='text-[#002444] cursor-pointer'>
      Gift Cards
      </span>
      <span  className='text-[#002444]cursor-pointer'>
        Products
      </span>
      <span  className='text-[#002444] cursor-pointer'>
        Explore
      </span>
    </div>
    <img  className=" flex lg:hidden"
      src='https://ik.imagekit.io/rwgk2b4rf/svgexport-2.svg?updatedAt=1746608981115'></img>
    <div className='lg:flex flex-row items-center justify-between gap-5 hidden'>
      <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-3.svg?updatedAt=1746608981980'></img>
      <button className='hover:bg-[#7580EF] bg-[#002444] text-white py-3 px-7 rounded-3xl font-bold'>Get Started</button>
    </div>
    </section>
    </>
  )
}

export default Header