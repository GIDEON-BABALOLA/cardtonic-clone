import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section className='flex flex-col items-center py-[30px] gap-10'>
      <div className='flex flex-row gap-2 items-center bg-[#FFFFFF] border-[#F8F8F9] border-[1.9px] border-solid p-2 pt-0 pb-0 pr-0 rounded-3xl text-[#1B507E]'>
<div className=''>Try our Gift Card Developer API</div> 
<span className='bg-[#7580EF] text-white p-3 rounded-full'> < FaArrowRight /></span>   
</div>
<div className='flex flex-col justify-center items-center mt-8 md:mt-5'>
  <span className='text-center font-semibold  px-3 md:leading-20'>
    <span className='text-[#002444] text-[35px] md:text-[64px]'>Explore virtual cards, gift cards and </span>
    <span className="text-[#7580EF] text-[35px] md:text-[64px]">digital payment solutions</span>
    </span>
    <span className=' text-center max-w-[500px] text-[20px] text-[#002444]'>
Cardtonic is the best platform to get virtual dollar cards, trade gift cards, pay bills and buy gadgets.
    </span>

</div>
<div className='items-center min-w-[350px] md:min-w-[400px]'>
  <button className='
  transition-colors duration-500
  flex justify-center items-center text-center
  px-[50px] py-[30px] md:py-[40px] w-[100%] hover:bg-[#7580EF] bg-[#002444]
  rounded-full text-white cursor-pointer  text-1xl mdtext-2xl'>
    <span className='hidden md:flex'>Get Started</span>
    <span className='md:hidden flex'> <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-7%20(1).svg'/>&nbsp; Web Sign Up</span>
    </button>
    <button className='
  transition-colors duration-500
  sm:hidden mt-3
  flex justify-center items-center text-center
  px-[50px] py-[30px] md:py-[40px] w-[100%] hover:bg-[#7580EF] bg-[#0BC7E0]
  rounded-full text-black cursor-pointer  text-1xl mdtext-2xl'>
    <span className='hidden md:flex'>Get Started</span>
    <span className='md:hidden flex'>
    <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-10.svg?updatedAt=1746608983548'/>
    <img src='https://ik.imagekit.io/rwgk2b4rf/svgexport-11.svg?updatedAt=1746608983842'/>&nbsp;
    Download the App</span>
    </button>
</div>
    </section>
  )
}

export default Hero