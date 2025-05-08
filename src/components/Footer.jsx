import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='flex flex-row  w-full px-30 items-start gap-[25px] py-20'>
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