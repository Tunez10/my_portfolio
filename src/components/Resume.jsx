import React from 'react'

export default function Resume() {
  return (
    <div className='lg:mx-48 p-7 md:px-10'>
        
        <div className='flex flex-col text-center my-10'>
            <p className='font-bold text-3xl py-5 underline underline-offset-[20px] decoration-teal-600'>Resume</p>
            <p className='text-gray-500 mt-5'>Know a little about me</p>
        </div>

        <div className='md:flex gap-10'>
                {/* left section */}

                {/* Summary */}
            <div className='md:w-[50%]'>
                <div>
                    <p className='text-2xl font-bold text-gray-800 py-3'>Summary</p>
                    <div className='ml-3'>
                        <p className='text-gray-500 text-xl font-bold'>FORTUNE PETER</p>
                        <p className='py-2 italic text-'>Highly motivated and detail-oriented full stack web developer with expertise in crafting scalable, user-centric web applications passionate about staying up-to-date with industry trends and best practices. Committed to delivering high-quality solutions that exceed expectations</p>
                        <li className='mt-3'>Ikolaba, Ibadan Oyo State Nigeria</li>
                        <li className='py-3'>+2348142852472</li>
                        <li>peterekene162@gmail.com</li>
                    </div>
                </div>

                {/* Education */}
                <div className='my-5'>
                    <p className='text-2xl font-bold text-gray-800 pt-10 pb-3'>Education</p>
                    <div className='ml-3'>
                        <p className='py-2 font-bold text-gray-500'>B.Tech Insustrial Technology</p>
                        <p className='font-bold py-1'>2014 - 2019</p>
                        <p className='italic'>Federal University of Technology Minna, Niger State Minna Nigeria</p>
                    </div>
                </div>
            </div>

            {/* Right section */}
            {/* Professional Experience */}
            <div className='md:w-[50%]'>
                <p className='text-2xl font-bold text-gray-800 py-3'>Experience</p>
                <div className='ml-3'>
                    <p className='text-gray-500 text-xl font-bold'>FORTUNE PETER</p>
                    <p className='font-bold py-1'>March 2024 - Sep 2024</p>
                    <p className='italic'>Parach Institute Academy, Ibadan Nigeria.</p>
                    <li className='mt-3'>Acquired a comprehensive foundation in web development, encompassing HTML, CSS, JavaSacript and responsive design</li>
                    <li className='py-3'>Gained expertise in web technologies, including React, Node.js and Django which helps me to Work on various web development projects, honing my skills in problem solving and collaboration</li>
                    <li className=''>Picked up a ton of web skills that helps me build robust web applications.</li>
                    <li className='py-3'>Upon completing Parach computer Institute web development program, I received a certification in full stack web Development, demonstrating proficiency in web technologies and frameworks.</li>
                </div>
            </div>

        </div>
            
    
    </div>
  )
}
