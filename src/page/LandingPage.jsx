import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Porfolio from '../components/Porfolio'
// import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function LandingPage() {
  return (
    <div >
      <Header />
      <Hero />
      <About /> 
      <Services />
      <Porfolio /> 
      {/* <Contact /> */}
      <Footer />
    </div>
    
  )
}
