import React from 'react'
import Video from '../components/Video'
import Hero from '../components/Hero'
import GiftCards from '../components/GiftCards'
import VirtualDollarCard from '../components/VirtualDollarCard'
import GadgetsAndBills from '../components/GadgetsAndBills'
import Testimonials from '../components/Testimonials'
import { TrustedBy } from '../components/TrustedBy'
import GetTheApp from '../components/GetTheApp'
const Home = () => {
  return (
    <>
    <Hero />
    <Video/>
    <section className='flex pl-[40px] items-center pt-[100px] sm:pt-[150px] pb-[20px]'>
      <span className="text-[#d1e0e4] text-[30px] sm:text-[64px] font-semibold">Gift Cards</span>
    </section>
    <GiftCards />
    <section className='flex pl-[40px] items-center pt-[100px] sm:pt-[150px] pb-[20px]'>
      <span className="text-[#d1e0e4] text-[30px] sm:text-[64px] font-semibold">Products</span>
    </section>
    <VirtualDollarCard />
    <GadgetsAndBills />
    <section className='flex pl-[40px] items-center pt-[100px] sm:pt-[150px] pb-[20px] max-w-[10px]'>
      <span className="text-[#d1e0e4] text-[30px] sm:text-[64px] font-semibold">Testimonials & News</span>
    </section>
    <Testimonials />
    <TrustedBy />
    <GetTheApp />
    </>
  )
}

export default Home