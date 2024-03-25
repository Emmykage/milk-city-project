import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [stickyNav, setStickyNav] = useState('bg-white')
  const [openMenu, setOpenMenu] = useState(false)
  const handleStickNav = () => {
    if(window.scrollY >= 120){
      setStickyNav('fixed top-0 left-0 w-full z-50 bg-gray-100/50')

    }else{
      setStickyNav('bg-white')
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleStickNav)
  }, [])
  return (
    <div className={`${stickyNav} text-center flex items-center justify-between px-6 lg:px-14 py-10 `}>
      <a href="/" className='text-xl text-green-700'> MilkCity</a>
      <nav>
        <ul className={`${openMenu ? "block w-full h-screen bg-green-400" : "hidden" } absolute   lg:relative right-0 top-0 lg:flex lg:flex-wrap font-bold text-gray-700 `}>
          <li className='px-8'><NavLink>FARM</NavLink> </li>
          <li className='px-8'><NavLink>INVESTMENT</NavLink> </li>
         <li className='px-8'><NavLink>BLOG</NavLink></li> 
         <li className='px-8'><NavLink to="/">RESOURCES</NavLink></li>
         <li className='px-8 '><NavLink href="">CONTACT</NavLink></li>
         <li className='px-8'><NavLink to={'/'}>ACCESS INVESTMENT</NavLink></li>
         <li className='px-8'><NavLink href="">LOGIN</NavLink></li>

        </ul>
        <span className='text-3xl lg:hidden block' onClick={()=> setOpenMenu((prev)=> !prev)}><GiHamburgerMenu /></span>
      </nav>
      
    </div>
  )
}

export default Nav