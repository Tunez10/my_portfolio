import React, { useEffect } from 'react'
import AboutImage from '../images/Profile-img.jpg'
import Resume from './Resume'
import CV from '../assets/fortune_cv.pdf'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'; 

export default function About() {

 
  return (
    <div id='about' className='scroll-mt-40 '>
   
      {/* // About me */}
      <div className=' md:p-10 text-sm p-7 lg:mx-48 mt-20 lg:flex gap-10 shadow-2xl' data-aos="fade-down" >
        {/* The left section */}
        <div className='lg:w-[50%] '>

          <div className='flex gap-5'>
            <div>
              <img className='h-[200px] bg-cover lg:h-[200px] lg:w-full rounded-xl shadow-xl bg-no-repeat' src={AboutImage} alt="" />
            </div>
            <div className='flex flex-col gap-5 mt-5'>
              <p className=' font-semibold'>Name: <span className='text-gray-500'>Fortune Peter</span></p>
              <p className='font-semibold'>Email: <span className='text-gray-500' >peterekene162@gmail.com</span></p>
              <p className='font-semibold'>Phone: <span className='text-gray-500'>08142852472</span></p>
            </div>
          </div>

          {/* Skills */}
          {/* <div className='py-1'>
            <p className=' font-bold text-xl mt-10'>SKILLS</p>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-3 mt-3'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>RAILS</p>
                <p>DJANGO</p>
              </div>
              <div className='flex flex-col gap-3 mt-3'>
                <p>100%</p>
                <p>80%</p>
                <p>70%</p>
                <p>80%</p>
                <p>60%</p>
              </div>
            </div>
          </div> */}

          <div className='flex items-center lg:justify-between gap-2 mt-10  flex-wrap'>
            <article className="p-3 border border-gray-200 rounded-lg shadow text-center hover:shadow-teal-500">
              <i className="pi pi-briefcase text-3xl text-teal-600 mb-2"></i>
              <h5 className="text-lg font-semibold mb-1">Experience</h5>
              <small className="text-gray-500">2 Years Working</small>
            </article>

            <article className='p-3 border border-gray-200 rounded-lg shadow text-center hover:shadow-teal-500'>
              <i className="pi pi-users text-3xl text-teal-600 mb-2"></i>
              <h5 className="text-lg font-semibold mb-1">clients</h5>
              <small className="text-gray-500">5+ Worldwide</small>
            </article>

            <article className='p-3 border border-gray-200 rounded-lg shadow text-center hover:shadow-teal-500'>
              <i className="pi pi-folder-open text-3xl text-teal-600 mb-2"></i>
              <h5 className="text-lg font-semibold mb-1">Projects</h5>
              <small className="text-gray-500">10+ completed</small>
            </article>

          </div>

        
        </div>

        {/* The right Section */}
        <div className=' lg:w-[50%] mt-5 lg:mt-0 flex flex-col gap-5'>
          <div>
            <p className='font-bold text-3xl underline decoration-teal-600 underline-offset-[20px]'>About me</p>
            <div className='flex flex-col gap-2 mt-10 lg:text-sm'>
              <p>I am a result-driven and highly skilled Software Developer with 2 years of experience, driven by a passion for pushing technology boundaries.</p>
              <p> I specialize in building high-performance, scalable, and user-friendly applications using React and Ruby on Rails, with additional experience in Django.</p>
              <p>I have a proven track record of collaborating with diverse teams to take software from concept to production. I thrive in fast-paced environments, adapt quickly to new technologies, and bring a creative, customer-focused mindset to every project.</p>
            </div>
          </div>

          <div className="mt-3">
            <a
              href={CV} download
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300" >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

      
      </div>

      <Resume />

     

    </div>

    
    
    

  
  
  )
}
