import React from 'react'
import { MdPeople } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { TbArrowsRandom } from 'react-icons/tb'
import tour_01 from '../assets/img-09.jpeg'
import tour_02 from '../assets/img-06.jpeg'
import tour_03 from '../assets/img-04.jpeg'


const Tours = () => {

  // dejar todas las imagenes de la mismas dimensiones para que las targetas se vean iguales
  const links = [
  {
    id:1,
    img:tour_01,
    name:'Tour 01',
    qty: 12,
    duration: '1',
    other: 'other stuff'
  },
  {
    id:2,
    img:tour_02,
    name:'Tour 02',
    qty: 8,
    duration: '2,5',
    other: 'other stuff'
  }
  ,
  {
    id:3,
    img:tour_03,
    name:'Tour 03',
    qty: 12,
    duration: '2',
    other: 'other stuff'
  }
]
  return (
    <div name='tours' className='w-full py-[10rem] px-8 bg-gray-100'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {links.map(({ id, img, name, qty, duration, other }) => (
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-100 mx-auto bg-white rounded-2xl md:w-full'  src={img} alt="/" />
            <h2 className='text-4xl font-bold text-center py-8'>{name}</h2>
            <p className='text-center font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sint aliquid pariatur totam ea tempore? Saepe unde necessitatibus, dolor obcaecati exercitationem beatae, iste, totam culpa facere suscipit et autem corrupti!</p>
            <div className='text-center font-medium'>
              <div className='flex py-2 mx-8 mt-8 border-b gap-4 justify-center'> 
                <span className=''><MdPeople size={30}/></span>
                <p className=''>{qty} personas</p>
              </div>
              <div className='flex py-2 mx-8 border-b gap-4 justify-center'> 
                <span className=''><BiTimeFive size={30}/></span>
                <p className=''>{duration} horas</p>
              </div>
              <div className='flex py-2 mx-8 border-b gap-4 justify-center'> 
                <span className=''><TbArrowsRandom size={30}/></span>
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