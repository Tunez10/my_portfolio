import React from 'react'

export default function Footer() {

  return (
    <div id='footer' className='md:mt-20 mt-10 bg-teal-800 text-white text-center py-10'>
        <div>
            <i></i>
            <p>Copyright <span className='font-bold text-lg'>Tunez</span> All right reserved</p>
        </div>

        <div className='flex justify-center gap-5 my-5'>

        

          <a href="https://www.instagram.com/khenzy_official/?text=Hello, i would like to get more info" target="_blank" rel="noopener noreferrer">
            <i className='pi pi-instagram text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>

          <a href="https://wa.me/2348142852472?text=Hello, i would like to get more info" target="_blank" rel="noopener noreferrer">
            <i className='pi pi-whatsapp text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>


          <a href="https://www.linkedin.com/in/tunez/" target='_blank' rel="noopener noreferrer">
            <i className='pi pi-linkedin text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>


        </div>


        <div>
            <p>Designed by <span className='text-yellow-200'>Fortune</span></p>
        </div>
        


    </div>
  )
}
