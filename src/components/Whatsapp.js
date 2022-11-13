import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'

const Whatsapp = () => {
  return (
    <div className='flex top-[85%] right-[5%] fixed bg-[#25d366] text-center rounded-full'>
        <a
        href="https://wa.me/56982311455"
        className="flex justify-between items-center w-full text-white m-6"
        target="_blank"
        rel="noopener noreferrer"
        >
            <BsWhatsapp size={40}/>
        </a>
    </div> 
  )
}

export default Whatsapp