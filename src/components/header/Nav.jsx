import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../assets/images/logos/milk-and-milk-city-high-resolution-logo-transparent.png'

const Nav = () => {
  const activeLink = "active"
  const normalLink = ""
  const [stickyNav, setStickyNav] = useState('bg-gray-100 absolute')
  const [openMenu, setOpenMenu] = useState(false)
  const handleStickNav = () => {
    if(window.scrollY >= 120){
      setStickyNav('fixed top-0 left-0 w-full z-50 bg-white')

    }else{
      setStickyNav('bg-gray-100/50 absolute')
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleStickNav)
  }, [])
  return (
    <div className={`${stickyNav} text-center flex items-center justify-between px-6 lg:px-14 py-6  top-0 left-0 w-full z-20 `}>
      <a href="/" className='text-xl text-green-700 w-28'  > <img src={logo} alt="logo" className='w-full'/></a>
      <nav className=''>
        <ul className={`${openMenu ? "block w-full h-screen bg-green-400" : "hidden" } absolute   lg:relative right-0 top-0 lg:flex lg:flex-wrap font-bold text-gray-700 pt-20 lg:pt-0`}>
          <li className='px-8 py-3'><NavLink to="/investment">INVESTMENT</NavLink> </li>
          {/* <li className='px-8  hover:bg-green-100 py-3'><NavLink>Products</NavLink></li>  */}
          {/* <li className='px-8  hover:bg-green-100 py-3'><NavLink to="/resources">RESOURCES</NavLink></li> */}
          <li className='px-8  py-3'><NavLink to="/contact" className={({isActive}) => (isActive ? activeLink : normalLink)}>CONTACT</NavLink></li>
          <li className='px-8  py-3'><NavLink to="/about_us" className={({isActive}) => (isActive ? activeLink : normalLink)}>ABOUT US</NavLink></li>
          <li className='px-8  py-3'><NavLink to="/compliance_regulation" className={({isActive}) => (isActive ? activeLink : normalLink)}>COMPLIANCE AND REGULATIONS</NavLink></li>
          <li className='px-8  py-3'><NavLink to={'/dashboard/portfolio'} className={({isActive}) => (isActive ? activeLink : normalLink)}>ACCESS INVESTMENT</NavLink></li>
          <li className='px-8  py-3'><NavLink to="/auth/login">LOGIN</NavLink></li>
         <span className='text-3xl lg:hidden block absolute top-10 right-5' onClick={()=> setOpenMenu((prev)=> !prev)}><GiHamburgerMenu /></span>


        </ul>
        <span className='text-3xl lg:hidden block' onClick={()=> setOpenMenu((prev)=> !prev)}><GiHamburgerMenu /></span>
      </nav>
      
    </div>
  )
}

export default Nav