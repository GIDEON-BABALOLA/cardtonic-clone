import React, { useEffect, useRef } from 'react'

const Testimonials = () => {
  const cards = useRef()
  const logos = useRef()

    const testimonials = [
        {
          "testimony": "I recommended it to my brothers and friends, and they also love it.",
          "store_type": "Play Store",
          "person_name": "Nurudeen Abdulrasak",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(6).jpeg?updatedAt=1746650018849"
        },
        {
          "testimony": "Yooo, this is the best card trading platform in Africa. No cap! Fast, trusted and reliable.",
          "store_type": "Trustpilot",
          "person_name": "Derrick J",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(7).jpeg?updatedAt=1746650018809"
        },
        {
          "testimony": "I’ve been using Cardtonic for over two years now, and it’s fast and reliable.",
          "store_type": "App Store",
          "person_name": "Oyedemi Olamide",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(2).jpeg?updatedAt=1746650018722"
        },
        {
          "testimony": "Fr the best virtual dollar card in Nigeria. The app is easy to navigate, and it works for Twitter verification.",
          "store_type": "Play Store",
          "person_name": "Kunle Afolabi",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(5).jpeg?updatedAt=1746650018354"
        },
        {
          "testimony": "I love how straightforward the process is. Funding my virtual dollar card takes less than a minute. It’s made my life so much easier.",
          "store_type": "App Store",
          "person_name": "Joy M.",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image.jpeg?updatedAt=1746650018327"
        },
        {
          "testimony": "Cardtonic is fast, reliable, and doesn't delay transactions.",
          "store_type": "X",
          "person_name": "@dodonmaso",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(6).jpeg?updatedAt=1746650018849"
        },
        {
          "testimony": "I love the way their customer service responded to me.",
          "store_type": "App Store",
          "person_name": "Covenant Matthew",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(7).jpeg?updatedAt=1746650018809"
        },
        {
          "testimony": "The withdrawal was quicker than I expected. Keep it up guys.",
          "store_type": "Play Store",
          "person_name": "Ifeanyi Joseph",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(2).jpeg?updatedAt=1746650018722"
        },
        {
          "testimony": "I was able to buy a Sephora gift card within a minute. Quite impressive.",
          "store_type": "App Store",
          "person_name": "Babalola Muiz",
          "image" : "https://ik.imagekit.io/rwgk2b4rf/cardtonic-avatars/image%20(5).jpeg?updatedAt=1746650018354"
        }
      ]
  return (
<>
<div className='w-full overflow-hidden ' ref={logos}>
    <div className=' flex flex-row lg:flex-row gap-[20px] animate-marquee' ref={cards}>
{testimonials.map((content, index) => (
    <div key={index} className='bg-[#F8F8F9] min-w-[500px] flex flex-col gap-[40px] p-[40px] rounded-[24px]'>
<img src="https://ik.imagekit.io/rwgk2b4rf/svgexport-14.svg?updatedAt=1746608985069" className='w-[40px]'/>
<span className='text-[#1B507E] text-[27px]'>{content.testimony}</span>
<div className='flex flex-row  justify-between items-center  text-[#1B507E]'>
<div className='flex flex-col justify-between text-[#1B507E]'>
    <span className='font-semibold text-2xl'>{content.person_name}</span>
    <span>{content.store_type}</span>
</div>
<div>
    <img src={content.image} className='rounded-full w-[50px]'  />
</div>
</div>
    </div>
))}
  </div>
    
</div>
</>
  )
}

export default Testimonials