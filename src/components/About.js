import React from 'react'
import aboutImage from '../assets/img-01.jpeg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 px-4 md:h-scren'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={aboutImage} alt="/" />
        <div className='flex flex-col justify-center mx-4'>
          <p className='text-[#28abb9] border-gray-500 font-bold'>Nosotros</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>El mar nuestro hogar</h1>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut at minima excepturi ratione recusandae ut, officiis amet ad accusamus explicabo harum optio laudantium similique, blanditiis voluptatum sit. Expedita, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>       
        
      </div>
    </div>
  )
}

export default About