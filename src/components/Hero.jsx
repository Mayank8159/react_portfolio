import React from 'react'
import HeroImage from '../assets/hero1.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 w-screen  px-5' id='home'>
        <img src={HeroImage} alt="" className='mx-auto mb-8 mt-10 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r  from-green-400 via-blue-500 to-purple-600'>Mayank Sharma</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive app & web.
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 text-white  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Contact with Me</button>
            <button className='bg-gradient-to-r from-pink-500  to-yellow-500 text-white  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Resume</button>
        </div>
    </div>
  )
}

export default Hero