import React, { useEffect } from 'react'
import AboutImage from '../images/Profile-img.jpg'
import Resume from './Resume'

export default function About() {

 
  return (
    <div id='about' className='scroll-mt-40 '>
   
      {/* // About me */}
      <div className=' md:p-10  p-7 lg:mx-48 mt-20 lg:flex gap-10 shadow-2xl' data-aos="fade-down" >
        {/* The left section */}
        <div className='lg:w-[50%] '>

          <div className='md:flex gap-5'>
            <div>
              <img className='h-[300px] lg:h-[200px] w-full rounded-xl shadow-xl bg-no-repeat' src={AboutImage} alt="" />
            </div>
            <div className='flex flex-col gap-5 mt-5'>
              <p className=' font-semibold'>Name: <span className='text-gray-500'>Fortune Peter</span></p>
              <p className='font-semibold'>Email: <span className='text-gray-500' >peterekene162@gmail.com</span></p>
              <p className='font-semibold'>Phone: <span className='text-gray-500'>08142852472</span></p>
            </div>
          </div>

          {/* Skills */}
          <div className='py-1'>
            <p className=' font-bold text-xl mt-10'>SKILLS</p>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-3 mt-3'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>DJANGO</p>
              </div>
              <div className='flex flex-col gap-3 mt-3'>
                <p>100%</p>
                <p>80%</p>
                <p>70%</p>
                <p>70%</p>
              </div>
            </div>
          </div>
        </div>

        {/* The right Section */}
        <div className='flex flex-col gap-10 lg:w-[50%] mt-5 lg:mt-0'>
          <p className='font-bold text-3xl underline decoration-teal-600 underline-offset-[20px]'>About me</p>
          <p>I am a Full Stack Web Developer with JavaScript, Python and their frameworks – React, Django. Developed few websites from scratch, Very hardworking and smart. Working with a sense of creative thinking in delivering tasks..</p>
          <p>I am proficient in managing tasks and adhering to deadlines while working a flexible schedule. Motivated, adaptable and responsible person seeking to work in any organization which will utilize the skills developed through past working experience. </p>
          <p>I am seeking opportunity to leverage front-end and back-end skills while increasing customer engagement. I have a disciplined, customer-focus approach to work, and the drive to see things through completion.</p>
        </div>
      </div>

      <Resume />

     

    </div>

    
    
    

  
  
  )
}
