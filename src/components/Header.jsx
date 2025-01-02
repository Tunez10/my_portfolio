import React, { useEffect, useState } from 'react'


export default function Header() {


  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };


  

  return (
    <div>
      {/* hero image */}
      <div>
        

      {/* header for big screen */}
      <div className='md:flex justify-between align-middle items-center lg:px-48 md:px-10 h-[12vh] fixed left-0 right-0  bg-black hidden z-10 '>
        <h2 className="font-bold text-3xl text-teal-600 hover:cursor-pointer"><a href="/">Tunez</a></h2>
        <ul className=" hidden md:flex gap-5 text-white ">

          <a href="/">
            <li className="hover:cursor-pointer hover:border px-3 py-2 rounded-lg border-teal-600 ">Home</li>
          </a>
          
          <a href="#about">
            <li className="hover:cursor-pointer hover:border px-3 py-2 rounded-lg border-teal-600">About </li>
          </a>
          

          <a href="#services">
            <li className="hover:cursor-pointer hover:border px-3 py-2 rounded-lg border-teal-600">Services</li>
          </a>

          <a href="#portfolio">
            <li className="hover:cursor-pointer hover:border px-3 py-2 rounded-lg border-teal-600">Portfolio </li>
          </a>

          <a href="#contact">
            <li className="hover:cursor-pointer hover:border px-3 py-2 rounded-lg border-teal-600">Contact</li>
          </a>

        </ul>
        
      </div>

       
      <div className=' lg:hidden  fixed flex z-10 justify-between w-[100%] p-5  bg-black '>

        <div className=' '>
          <h2 className="font-bold text-3xl text-teal-600 hover:cursor-pointer"><a href="/">Tunez</a></h2>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden text-white flex justify-center">
            <button onClick={toggleMenu}>
            {isOpen ? (
              <i className='pi pi-times text-2xl'></i>
            ) : 
            (
              <i className='pi pi-bars text-2xl'></i>
              
            )}
            </button>
        </div>
      
      </div>
      
      {/* Header for small screen */}
      <div className='mt-20 fixed w-[100%] px-5 z-10 '>
        {isOpen && (
        <div className='text-white border border-teal-600 rounded-lg'>
          <ul className="flex flex-col gap-2 p-3 h-[50vh] bg-black ">
            <li className="hover:cursor-pointer px-3 py-2 ">
              <a href="/">Home</a>
            </li>
            <li className="hover:cursor-pointer px-3 py-2 ">
              <a href="#about">About</a>
            </li>
            <li className="hover:cursor-pointer px-3 py-2 ">
              <a href="#services">Services</a>
            </li>
            <li className="hover:cursor-pointer px-3 py-2 ">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:cursor-pointer px-3 py-2 ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        )}
      </div>

        


        
      </div>

    </div>
  

  
  )
}
