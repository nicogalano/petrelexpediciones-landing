import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-scren bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contáctanos</p>
          <p className='py-6'>Envíe el siguiente formulario para ponerse en contacto con nosotros</p>
        </div>

        <div className='flex justify-center items-center'>
          <form 
            action="https://getform.io/f/607d9a45-eccb-4820-b20c-36695ca40b4f" 
            method="POST" 
            className='flex flex-col w-full md:w-1/2'
          >
            <input 
              type="text" 
              name="name" 
              placeholder='Ingresa tu nombre' 
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input 
              type="text" 
              name="email" 
              placeholder='Ingresa tu correo' 
              className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' 
            />
            <textarea 
              name="message" 
              placeholder="Ingresa tu mesaje" 
              id="" 
              rows="10"
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button className='my-4 text-white bg-gradient-to-b from-[#00df9a] to-[#11994e] px-6 py-3 y-8 mx-auto flex item-center rounded-md hover:sclae-110 duration-300'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact