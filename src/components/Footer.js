import React, {useState} from 'react'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import links from '../dataLinks'
import { Link } from "react-scroll";



const Footer = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const socialLinks = [
    {
      id:1,
      child: (
        <>
          <BsInstagram size={30}/>
        </>
      ),
      href: 'https://www.instagram.com/petrel_expediciones'
    },
    {
      id:2,
      child: (
        <>
          <BsWhatsapp size={30}/>
        </>
      ),
      href: 'https://wa.me/56982311455'
    }
  ]

  return (
    <div name='footer' className='text-center bg-gray-900'>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex justify-center gap-6 ">
            {socialLinks.map(({ id, child, href }) => (
              <a 
                href={href} 
                className='flex flex-wrap justify-center gap-6 w-full text-white cursor-pointer '
              >
                {child}
              </a>
            ))}
          </div>

          <div className="rounded-3xl border-4 border-gray-900 p-6 dark:border-gray-700">
            <ul className='flex flex-wrap justify-center gap-6 text-sm font-bold'>
              {links.map(({ id, link, name }) => (
              <li key={id} >
                  <Link 
                    onClick={handleNav} 
                    to={link} 
                    smooth 
                    duration={500}
                    className="transition  text-white hover:text-white/75 cursor-pointer"
                  >
                    {name}
                  </Link>
              </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto max-w-lg text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, natus
            tempore illo laborum nam, modi quam sequi amet quo quasi impedit iure
            eum similique pariatur alias exercitationem, porro perspiciatis esse.
            Corporis odit consequatur sint sequi.

            <span className="mt-4 block"> &copy; 2022 Galano </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer