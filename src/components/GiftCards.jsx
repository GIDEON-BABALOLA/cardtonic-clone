import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const GiftCards = () => {
    const data = [
        {
            title : "Sell Gift Cards",
            description : "Instantly convert the gift cards you don’t need to cash.",
            action : "Explore Sell",
            image : "https://ik.imagekit.io/rwgk2b4rf/image-Photoroom.png?updatedAt=1746628635777"
        },
        {
            title : "Buy Gift Cards",
            description : "Easily buy from our catalogue of 14,000+ local and international gift cards.",
            action : "Explore buy",
            image : "https://ik.imagekit.io/rwgk2b4rf/image%20(1)-Photoroom.png?updatedAt=1746628469227"

        },
    ]
  return (
    <>
    <section className='flex flex-col justify-between items-center gap-10 p-10 '>
   {data.map((content, index) => (
    <div key={index} className=' 
    bg-[#ebfdff] w-full rounded-2xl lg:p-20 p-10 pr-0 flex lg:flex-row flex-col group cursor-pointer gap-[50px] lg:gap-[0px]' >
<div className='flex flex-col'>
<span className='text-[25px] lg:text-[40px] text-[#002444] mb-4 font-semibold'>{content.title}</span>
<span className=' text-[17px] lg:text-[20px] text-[#1B507E] mb-10'>{content.description}</span>
<span className='text-[#7580EF] flex flex-row  gap-3 text-[21px] font-semibold'>{content.action} <FaArrowRight /></span>
</div>
<div>
  <img src={content.image} className='w-full bg-transparent transform group-hover:scale-105 transition-transform duration-500'/>
    </div>
    </div>
   ))}
       </section>
    </>
  
  )
}

export default GiftCards