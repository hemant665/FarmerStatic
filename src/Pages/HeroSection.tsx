import React from 'react'
import Img from '../assets/Images/Gallery6.webp'
const HeroSection = () => {
  return (
    <div className='max-h-[55rem] w-full relative flex items-center justify-center mt-3 overflow-hidden p-6 rounded-2xl'>
      <div className='relative w-full'>
        <div className='absolute w-full h-full flex flex-col items-center  z-50 font-bold text-green-600 top-80 '>
            <h1 className='text-[16rem]'>Harvest</h1>
            <h3 className='text-7xl'>Pure Orgnic Food</h3>
        </div>
        <div className='relative z-0'>
          <img src={Img} alt={Img} className='h-full w-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection