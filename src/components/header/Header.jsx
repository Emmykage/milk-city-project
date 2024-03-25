import React from 'react'
import Nav from './Nav'
import HeaderBg from '../../assets/images/backgrounds/ranch-bg.jpg'
const Header = () => {
  return (
    <div>
        <Nav/>
        <header className='h-screen bg-black/40'>
          <img src={HeaderBg} alt="header" className='w-full h-full'  />
             
        </header>
    </div>
  )
}

export default Header