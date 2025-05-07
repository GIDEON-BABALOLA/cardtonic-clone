import { FaArrowRight } from "react-icons/fa"
const VirtualDollarCard = () => {
  return (
    <>
       <section className='flex flex-col w-full gap-10 p-10 '>
    <div className=' w-full
       bg-gradient-to-b from-[#FFF1ED] to-[#FFE7DF] rounded-4xl py-10 lg:py-10 px-5 lg:px-20  flex lg:flex-row flex-col group cursor-pointer
       justify-between lg:gap-[0px] gap-[40px]' >
    <div className='flex flex-col  max-w-[400px]'>
    <span className='text-[25px] lg:text-[40px] text-[#002444] mb-4 font-semibold'>Virtual Dollar Card</span>
    <span className=' text-[17px] lg:text-[20px] text-[#1B507E] mb-10'>Shop online, pay for services, and make international purchases.</span>
    <span className='text-[#7580EF] flex flex-row  gap-3 text-[18px] lg:text-[21px] font-semibold'>Explore Cards<FaArrowRight /></span>
    </div>
    <div>
      <img src="https://ik.imagekit.io/rwgk2b4rf/image%20(2)-Photoroom.png?updatedAt=1746632569648" className='w-[400px] bg-transparent transform group-hover:scale-105 transition-transform duration-500
      rounded-br-4xl
      '/>
        </div>
        </div>
        </section>
        </>
  )
}

export default VirtualDollarCard