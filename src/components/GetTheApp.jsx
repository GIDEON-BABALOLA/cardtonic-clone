import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const GetTheApp = () => {
  return (
   <section className='w-full flex flex-col lg:flex-row   items-stretch'>
<div className='w-full lg:max-w-[50%]'>
<img className='w-full'
src='https://ik.imagekit.io/rwgk2b4rf/holder.jpeg?updatedAt=1746608974109'/>
</div>
<div className='w-full lg:max-w-[50%] flex flex-col items-center gap-[50px] bg-[#f8f8f9] py-10 '>
    <div className='flex flex-col text-left lg:text-center px-5 lg:px-0 items-start lg:items-center justify-center gap-[20px]'>
<span className='text-[30px] lg:text-[40px] text-[#002444] font-semibold'>Download The App</span>
<span className='text-[#1B507E] text-[17px] lg:text-[20px] max-w-[380px] text-left'>Experience the best of Cardtonic on your phone or tablet. Available for iOS and Android operating systems.</span>
</div>
<div className='flex flex-col justify-between gap-[15px] lg:gap-[10px]'>
    <button className='bg-[#252525] flex flex-row text-white py-8 px-20 lg:py-10 lg:px-30 rounded-full
    justify-between  items-center cursor-pointer'><FaApple className='text-white' size={30}/>
    <span className='text-[20px] font-medium'>Get on iPhone</span></button>
    <button className='bg-[#086C30] flex flex-row text-white py-8 px-20 lg:py-10 lg:px-30 rounded-full
    justify-between gap-[10px] items-center cursor-pointer'><FaGooglePlay className="text-white" size={30}/>
    <span className='text-[20px] font-medium'>Get on Android</span></button>
</div>
</div>
   </section>
  )
}

export default GetTheApp