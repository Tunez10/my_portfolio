import React, { useEffect } from 'react'
import { services } from './ServiceData'
import AOS from "aos"


export default function Services() {

    useEffect(() => {
      AOS.init(
      //   {
      //   duration:1000,
      //   delay: 500, 
      //   easing: "ease-out-cubic"     
      // }
    );
    }, []);

  return (
    <div id='services' className=' mt-10 lg:mx-48 scroll-mt-10 mx-5'data-aos="fade-down" >
      <div>
          <p className='font-bold text-center text-4xl underline underline-offset-[20px] decoration-teal-600' >Services</p>
          <p className='mt-10 text-center'>What type of website would you want to consider</p>
      </div>

      <div className='flex flex-col lg:gap-20 gap-10 mt-10'>
        {services.map((item)=> (
          <div className=' lg:flex gap-5 mt-'>
            <div className=''>
              <img className='w-full md:h-[50vh] bg-no-repeat rounded-xl' src={item.image} alt="" />
            </div>

            <div className='lg:w-[80%]'>
              <p className='font-bold text-2xl pt-5 lg:pt-0'>{item.heading}</p>
              <p className='py-3'>{item.text}</p>
              <p className=''>{item.text2}</p>
              {/* <p className='py-3'>{item.text3}</p> */}
              
            </div>

          </div>

        ))}
      </div>
     
    </div>
  )
}
