import React from 'react'

export default function Footer() {

  return (
    <div className='md:mt-20 mt-10 bg-teal-600 text-white text-center py-10'>
        <div>
            <i></i>
            <p>Copyright <span className='font-bold text-lg'>Tunez</span> All right reserved</p>
        </div>

        <div className='flex justify-center gap-5 my-5'>

          <a href="#">
            <i className='pi pi-facebook text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>

          <a href="https://www.instagram.com/khenzy_official/?text=Hello!" target="_blank" rel="noopener noreferrer">
            <i className='pi pi-instagram text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>

          <a href="https://wa.me/2348142852472?text=Hello!" target="_blank" rel="noopener noreferrer">
            <i className='pi pi-whatsapp text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>

          <a href="#">
            <i className='pi pi-twitter text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>

          <a href="#">
            <i className='pi pi-linkedin text-xl rounded-full border border-gray-300 p-3 text-gray-300 hover:border-white hover:text-white hover:cursor-pointer'></i>
          </a>


        </div>


        <div>
            <p>Designed by <span className='text-yellow-200'>Fortune</span></p>
        </div>
        


    </div>
  )
}
