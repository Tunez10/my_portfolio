import React, { useState } from 'react'
import {useTypewriter, Cursor } from 'react-simple-typewriter'


export default function Hero() {



const [text] = useTypewriter({
  words:['web developer', 'freelancer'],
  loop:{}
})    
  return (
    <div id='hero'>
        <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 w-full">
          <p className="md:text-6xl font-bold text-white text-3xl">I am Fortune Peter</p>
          <p className="font-bold text-teal-600 md:text-6xl text-3xl">{text} <Cursor cursorColor='teal-600' /></p>
        </div>
    </div>
  )
}
