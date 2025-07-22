import React from 'react'
import HeroSection from './Pages/HeroSection'
import ProductSection from './Pages/ProductSection'
import About from './Pages/About'
import Service from './Pages/Service'
import OrganicFood from './Pages/OrganicFood'
import Gallery from './Pages/Gallery'

const App = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <ProductSection />
      <About />
      <div className='bg-[#EDF2EB]'>

      <Service/>
      </div>
      <OrganicFood />
      <Gallery/>
    </div>
  )
}

export default App