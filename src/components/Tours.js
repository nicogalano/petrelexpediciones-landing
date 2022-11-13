import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { FiInfo } from 'react-icons/fi'
import dataTours from '../dataTours'


const Tours = () => {

  return (
    <div name='tours' className='w-full py-[10rem] px-8 bg-gray-100'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {dataTours.map(({ id, img, name, qty, duration, other, description }) => (
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-100 mx-auto bg-white rounded-2xl md:w-full'  src={img} alt="/" />
            <h2 className='text-4xl font-bold text-center py-8'>{name}</h2>
            <p className='text-center font-medium'>{description}</p>
            <div className='text-center font-medium'>
              <div className='flex py-2 mx-8 mt-8 border-b gap-4 justify-center'> 
                <span className=''><BsPeople size={30}/></span>
                <p className=''>{qty}</p>
              </div>
              <div className='flex py-2 mx-8 border-b gap-4 justify-center'> 
                <span className=''><BiTimeFive size={30}/></span>
                <p className=''>{duration}</p>
              </div>
              <div className='flex py-2 mx-8 border-b gap-4 justify-center'> 
                <span className=''><FiInfo size={30}/></span>
                <p className=''>{other}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Tours