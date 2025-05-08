import React from 'react'
import { useState } from 'react'
const Footer = () => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  const footerData = [
    {
      title : "Features",
      content : [
        "Buy Gift Cards",
        "Sell Gift Cards",
        "Dollar Card",
        "Just Gadgets",
        "Bill Payments"
      ]
    },
    {
      title : "Products",
      content : [
        "Airtime",
        "Data",
        "Electricity",
        "TV Subscription",
        "Apple"
      ]
    },
    {
      title : "Available Gift Cards",
      content :  [
        "Travel Gift Cards",
        "Lifestyle Gift Cards",
        "Music Gift Cards",
        "Supermarket Gift Cards",
        "Gaming Gift Cards"
      ]
    },
    {
      title : "Resources",
      content : [
        "Ghanaians",
        "Blog",
        "Rewards",
        "Gift Card Rates",
        "Developer API"
      ]
    },
    {
      title : "Company",
      content : [
        "Partners",
        "#CTGivesBack",
        "Upskill",
        "Privacy Policy",
        "Terms of Use"
      ]
    },
    {
      title : "Connect",
      content :  [
        "Get In Touch",
        "support@cardtonic.com",
        "+234 (0) 1 343 0626",
        "+234 (0) 706 050 2770"
      ]
    }
  ]
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
    <section className=' hidden lg:flex flex-row  w-full px-30 items-start gap-[25px] py-20'>
<div className='flex flex-col justify-between gap-7 w-full'>
<span className='text-[#1B507E] font-semibold'>Features</span>
<span className="text-[16px] text-[#1B507E]">Buy Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Sell Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Dollar Card</span>
<span className="text-[16px] text-[#1B507E]">Just Gadgets</span>
<span className="text-[16px] text-[#1B507E]">Bill Payments</span>
<span className="text-[16px] text-[#1B507E]">Bank Account</span>
</div>
<div className='flex flex-col justify-between gap-7 w-full'>
<span className='text-[#1B507E] font-semibold'>Products</span>
<span className="text-[16px] text-[#1B507E]">Airtime</span>
<span className="text-[16px] text-[#1B507E]">Data</span>
<span className="text-[16px] text-[#1B507E]">Electricity</span>
<span className="text-[16px] text-[#1B507E]">TV Subscription</span>
<span className="text-[16px] text-[#1B507E]">Apple</span>
<span className="text-[16px] text-[#1B507E]">Samsung</span>
<span className="text-[16px] text-[#1B507E]">Laptop</span>
<span className="text-[16px] text-[#1B507E]">Playstation</span>
<span className="text-[16px] text-[#1B507E]">Betting</span>
</div>
<div className='flex flex-col justify-between gap-7 w-full'>
<span className='text-[#1B507E] font-semibold'>Available Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Travel Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Lifestyle Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Music Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Supermarket Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Gaming Gift Cards</span>
<span className="text-[16px] text-[#1B507E]">Streaming Gift Cards</span>
</div>
<div className='flex flex-col justify-between gap-7 w-full'>
<span className='text-[#1B507E] font-semibold'>Resources</span>
<span className="text-[16px] text-[#1B507E]">Ghanaians</span>
<span className="text-[16px] text-[#1B507E]">Blog</span>
<span className="text-[16px] text-[#1B507E]">Rewards</span>
<span className="text-[16px] text-[#1B507E]">Gift Card Rates</span>
<span className="text-[16px] text-[#1B507E]">Developer API</span>
<span className="text-[16px] text-[#1B507E]">Help Center</span>
</div>
<div className='flex flex-col justify-between gap-7 w-full'>
<span className='text-[#1B507E] font-semibold'>Company</span>
<span className="text-[16px] text-[#1B507E]">Partners</span>
<span className="text-[16px] text-[#1B507E]">#CTGivesBack</span>
<span className="text-[16px] text-[#1B507E]">Upskill</span>
<span className="text-[16px] text-[#1B507E]">Privacy Policy</span>
<span className="text-[16px] text-[#1B507E]">Terms of Use</span>
</div>
<div className='flex flex-col justify-between gap-7 w-full'>
<span className='text-[#1B507E] font-semibold'>Connect</span>
<span className="text-[16px] text-[#1B507E] ">Get In Touch</span>
<span className="text-[16px] text-[#1B507E]">support@cardtonic.com</span>
<span className="text-[16px] text-[#1B507E]">+234 (0) 1 343 0626</span>
<span className="text-[16px] text-[#1B507E]">+234 (0) 706 050 2770</span>
</div>
    </section>

    <section className='lg:hidden flex flex-col w-full
 justify-between items-center bg-white'>
      {
        footerData.map((content, index) => (
          <div key={index} className='justify-between items-center  min-w-[300px] py-[50px]'>
          <button
         onClick={() => toggleAccordion(index)}
          className='flex justify-between w-full cursor-pointer'>
            <span className='text-[#1B507E] font-semibold'>{content.title}</span>
            { accordionOpen[index] ? <span className='text-3xl text-[#1B507E]'>-</span>
            : <span className='text-3xl text-[#1B507E]'>+</span> }
          </button>
          <div className={`grid overflow-hidden transition-all duration-200
            ease-in-out text-slate-600 text-sm
            ${accordionOpen[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className='overflow-hidden flex flex-col justify-between gap-[30px] mt-10'>
              {content.content.map((item, index) => (
                <span className="text-[#1B507E]" key={index}>{item}</span>
              ))}
            </div>
          </div>
            
     </div>
        ))
      }

    </section>
    <section className='flex  flex-col lg:flex-row w-full px-30 text-[#1B507E]  items-center bg-[#F8F8F9] py-[50px]  gap-[10px]'>
      <div className='w-full text-center'>
&copy; Cardtonic {new Date().getFullYear()}
      </div>
      <div className='lg:flex flex-row w-full gap-[40px] hidden '>
<span>X</span>
<span>Facebook</span>
<span>Whatsapp</span>
<span>Instagram</span>
<span>Threads</span>
<span>TikTok</span>
<span>LinkedIn</span>
<span>Telegram</span>

      </div>
      </section>
    </>
  )
}

export default Footer