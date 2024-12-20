import React from 'react'
import logo from '../assets/ArkaLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='h-40' src={logo} alt='logo'></img>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/arka-saha-9007961b4/' target='_blank'>
               <FaLinkedin />
            </a>
            <a href='https://github.com/Arka-saha10' target='_blank'>
               <FaGithub />
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar