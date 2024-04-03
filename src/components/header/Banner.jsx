import React from 'react'
import Nav from './Nav'
import HeaderBg from '../../assets/images/backgrounds/ranch-bg.jpg'
import { useLocation } from 'react-router-dom'
const Banner = () => {
    const location = useLocation()
    const route = location.pathname

    let header 

    switch (route) {
        case 'investment':
            header = HeaderBg
            break;
        case "compliance_regulation":
            header = HeaderBg
            break;
        case 'resources':

            header  = HeaderBg
            break
    
        default:
            break;
    }
  return (
    <div>
        <Nav/>
        <header className='h-screen bg-black/40'>
          <img src={header} alt="header" className='w-full h-1/2'  />
             
        </header>
    </div>
  )
}

export default Banner