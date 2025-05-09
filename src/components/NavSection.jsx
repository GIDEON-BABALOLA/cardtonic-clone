import React from 'react'
import { useEffect, useState } from 'react';
const NavSection = ({ navs, show, setShow }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
      // Update the mouse position when the mouse moves
      console.log(event.clientX);
      
      setMousePosition({
          x: event.clientX,  // Mouse X position
          y: event.clientY   // Mouse Y position
      });
  };

  useEffect(() => {
      // Add event listener when the component mounts
      window.addEventListener('mousemove', handleMouseMove);

      // Clean up event listener when the component unmounts
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);
    const sidebarData = [
        {
          title : "Gift Cards",
          content :[
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Sell%20Gift%20Cards.svg?updatedAt=1746608979298",
              "title": "Sell Gift Cards",
              "description": "Exchange unused gift cards in Nigeria at amazing rates."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Travel%20Gift%20Cards.svg?updatedAt=1746608986861",
              "title": "Travel Gift Cards",
              "description": "Explore the world or create unique experiences at home."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Supermarket%20Gift%20Cards.svg?updatedAt=1746608980691",
              "title": "Supermarket Gift Cards",
              "description": "Buy anything from online supermarkets and stores."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Buy%20Gift%20Cards.svg?updatedAt=1746608972601",
              "title": "Buy Gift Cards",
              "description": "Buy from 14,000+ local and international gift cards."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Lifestyle%20Gift%20Cards.svg?updatedAt=1746608979312",
              "title": "Lifestyle Gift Cards",
              "description": "Purchase items from brands around the world."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Gaming%20Gift%20Cards.svg?updatedAt=1746608973210",
              "title": "Gaming Gift Cards",
              "description": "Access every possible game for your console."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Gift%20Card%20Rates.svg?updatedAt=1746608973187",
              "title": "Gift Card Rates",
              "description": "Discover the best rates for selling your gift card."
            },
            {
               "image" : "https://ik.imagekit.io/rwgk2b4rf/Music%20Gift%20Cards.svg?updatedAt=1746608979328",
              "title": "Music Gift Cards",
              "description": "Prepaid codes for any digital music platforms."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Streaming%20Gift%20Cards.svg?updatedAt=1746608979308",
              "title": "Streaming Gift Cards",
              "description": "Access subscriptions for your favorite streaming services."
            }
          ]
          
        },
        {
          title : "Products",
          content : 
            [
                {
                 "image" : "https://ik.imagekit.io/rwgk2b4rf/Just%20Gadgets.svg?updatedAt=1746608979280",
                  "title": "Just Gadgets",
                  "description": "Buy affordable gadgets from the comfort of your favourite app."
                },
                {
                  "image" : "https://ik.imagekit.io/rwgk2b4rf/Virtual%20Dollar%20Card.svg?updatedAt=1746608987836",
                  "title": "Virtual Dollar Card",
                  "description": "Shop online, pay for services, or make international purchases."
                },
                {
                  "image" : "https://ik.imagekit.io/rwgk2b4rf/Bill%20Payment.svg?updatedAt=1746608973230",
                  "title": "Bill Payment",
                  "description": "Organise and pay all your bills easily and seamlessly."
                },
                {
                  "image" : "https://ik.imagekit.io/rwgk2b4rf/Virtual%20Bank%20Account.svg?updatedAt=1746608987551",
                  "title": "Virtual Bank Account",
                  "description": "Open a Naira virtual bank account for easy topups."
                }
              
              
          ]
        },
        {
          title : "Explore",
          content : [
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Developer%20API.svg?updatedAt=1746608972836",
              "title": "Developer API",
              "description": "Integrate gift card services into your platform."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Blog.svg?updatedAt=1746608972816",
              "title": "Blog",
              "description": "Get the latest news, articles, and updates from Cardtonic."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Become%20A%20Partner.svg?updatedAt=1746608972863",
              "title": "Become A Partner",
              "description": "Launch a gifting program for your customers."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Become%20A%20Partner.svg?updatedAt=1746608972863",
              "title": "Upskill",
              "description": "MacBooks giveaway contest for tech enthusiasts."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/_CTGivesBack.svg?updatedAt=1746608972609",
              "title": "#CTGivesBack",
              "description": "Learn about our community give-back initiatives."
            },
            {
              "image" : "https://ik.imagekit.io/rwgk2b4rf/Get%20In%20Touch.svg?updatedAt=1746608973149",
              "title": "Get In Touch",
              "description": "Reach out to us or follow us on social media."
            }
          ]
          
        },
      ]
const activeIndex = Object.keys(navs).findIndex(key => navs[key] === true);
const isActive = activeIndex !== -1;  // To check if any nav is active
const handleMouseEnter = () => {
setShow(true)
}
const handleMouseLeave = () => {
    setShow(false)
}
  return (
    <section className={`
        
        absolute left-40 top-23 bg-[#FFFFFF] border-[2px] border-solid border-[#F8F8F9]
    p-[24px]  hidden ${show ? "lg:flex" : "lg:hidden"} items-center justify-center z-[10] rounded-3xl
    ${Object.keys(navs).findIndex(key => navs[key] === true) == 1  ? "left-80" :
         Object.keys(navs).findIndex(key => navs[key] === true) == 2 ? "left-80" : "left-40"} gap-4
    cursor-pointer`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className={`grid ${Object.keys(navs).findIndex(key => navs[key] === true) == 1  ? "grid-cols-2" :
         Object.keys(navs).findIndex(key => navs[key] === true) == 2 ? "grid-cols-2" : "grid-cols-3"} gap-4
         ${Object.keys(navs).findIndex(key => navs[key] === true) == -1 && "hidden"}
         `}>
     {isActive && activeIndex !== -1 && sidebarData[Object.keys(navs).findIndex(key => navs[key] === true)].content.map((item, index) => (
        <div key={index} className='hover:bg-[#F8F8F9] py-1 px-2 rounded-[10px]'>
               
                <div key={index} className='flex flex-row max-w-[300px] items-center justify-between gap-[20px] py-[20px]'>
                <img src={item.image}/>
                <div className='flex flex-col'>
                    <span className='text-[#002444] font-semibold text-[15px]'>{item.title}</span>
                    <span className=' text-[#1B507E] text-[15px] font-light'>{item.description}</span>
                </div>
            </div>
   
            </div>

              ))}

</div>
    </section>
  )
}

export default NavSection