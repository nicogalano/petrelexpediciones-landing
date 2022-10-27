import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:h-scren'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Nosotros</p>
        </div>
        <p className='text-xl mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut at minima excepturi ratione recusandae ut, officiis amet ad accusamus explicabo harum optio laudantium similique, blanditiis voluptatum sit. Expedita, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut at minima excepturi ratione recusandae ut, officiis amet ad accusamus explicabo harum optio laudantium similique, blanditiis voluptatum sit. Expedita, error.
        </p>
      </div>
    </div>
  )
}

export default About