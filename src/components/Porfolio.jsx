import React from 'react'
import listrace from '../images/listrace.jpg'
import myBlog from '../images/My Blog.jpg'
import Ashion from '../images/Ashion.jpg'
import hotr from '../images/hotr.jpg'
import Netflix from '../images/Netflix.jpg'
import gym from '../images/Gym.jpg'
import loginpage from '../images/Loginpage.jpg'
import calculator from '../images/calculator.jpg'
import photolio from '../images/photolio.jpg'

export default function Porfolio() {
  return (
    <div id='portfolio' className='md:mt-24 lg:mx-48 scroll-mt-10 mx-5' data-aos="fade-down" >
        <div>
          <p className='font-bold text-center text-4xl underline underline-offset-[20px] decoration-teal-600  '>Porfolio</p>
          <p className='mt-10 text-center'>Below are some of the projects that we have made</p>
        </div>

        <div className='md:mt-20 mt-10 lg:flex gap-10' >
            <img className='lg:w-[30%] shadow-lg' src={listrace} alt="" />
            <img className='lg:w-[30%] shadow-lg my-10' src={myBlog} alt="" />
            <img className='lg:w-[30%] shadow-lg' src={gym} alt="" />
        </div>

        <div className='mt-10 lg:flex gap-10'>
            <img className='lg:w-[30%] shadow-lg' src={Ashion} alt="" />
            <img className='lg:w-[30%] shadow-lg my-10' src={hotr} alt="" />
            <img className='lg:w-[30%] shadow-lg' src={Netflix} alt="" />
        </div>

        <div className='mt-10 lg:flex gap-10'>
            <img className='lg:w-[30%] shadow-lg' src={calculator} alt="" />
            <img className='lg:w-[30%] shadow-lg my-10' src={photolio} alt="" />
            <img className='lg:w-[30%] shadow-lg' src={loginpage} alt="" />
        </div>
    </div>
  )
}
