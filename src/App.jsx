import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './page/LandingPage'
import AOS from "aos"
import 'aos/dist/aos.css'



function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      delay: 500, 
      easing: "ease-out-cubic"

      

    });
  }, []);

  return (
  
    <>
    <LandingPage/>
      
    </>
  )
}

export default App
