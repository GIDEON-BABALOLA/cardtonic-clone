import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const GadgetsAndBills = () => {
    const data = [
        {
            title : "Just Gadgets",
            description : "Shop authentic and affordable gadgets in just a few clicks.",
            action : "Explore gadgets",
            image : "https://ik.imagekit.io/rwgk2b4rf/image%20(3)-Photoroom.png?updatedAt=1746634639814"
        },
        {
            title : "Bill Payments",
            description : "Organise and pay all your bills easily and seamlessly.",
            action : "Explore bills",
            image : "https://ik.imagekit.io/rwgk2b4rf/image%20(4)-Photoroom.png?updatedAt=1746634605372"
        }
    ]
  return (
   <>
      <section className='flex flex-col lg:flex-row justify-between items-center gap-10 sm:p-10 p-5 '>
{
    data.map((content, index) => (
        <div key={index} 
        
        className={`${index === 0 ? 'bg-gradient-to-b from-[#012D54] to-[#002444]' : 'bg-gradient-to-b from-[#EDE7FC] to-[#E6DDFD]'}
        rounded-4xl md:pb-0 md:py-15 md:px-15 lg:p-20 lg:pb-0  px-5 py-10 pb-0 flex flex-col justify-between gap-3.5
        `}>
<span className={` ${index === 0 ? "text-white" : "text-[#002444]"} text-4xl font-semibold`}>
{content.title}
</span>
<span  className={` ${index === 0 ? "text-[#D1E0E4]" : "text-[#1B507E]"} text-[20px] mt-5 `}>
{content.description}
</span>
<span className={` ${index === 0 ? "text-[#00CEDE]" : "text-[#7580EF]"} flex flex-row font-semibold mt-10 text-2xl`} >
{content.action}<FaArrowRight/>
</span>
<img src={content.image}/>
        </div>
    ))
}
      </section>
   </>
  )
}

export default GadgetsAndBills