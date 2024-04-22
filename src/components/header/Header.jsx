import React from 'react'
import Nav from './Nav'
// import LivestockBg from '../../assets/images/backgrounds/livestock.jpg'
import HomeBg from '../../assets/images/backgrounds/pexels-pixabay-162240.jpg'
import Button from '../buttons/Button'


// import HeaderBg from '../../assets/images/backgrounds/ranch-bg.jpg'
const Header = () => {
  return (
    <div>
        <Nav/>
        <header className='h-screen bg-black/40 relative'>
          <img src={HomeBg} alt="header" className='w-full h-full object-center'  />
          <div className='absolute w-full top-0 left-0 h-full bg-black/40 flex justify-center items-center'>

            <div className='bg-gray-100/50 max-w-4xl text-center items-center' >
              <p className='text-4xl font-medium text-white p-5'>

              HIGH PROFIT POTENTIAL FARMLAND INVESTMENTS MANAGED BY EXPERT AMERICAN FARMERS
              </p>
              <div className='inline-block'>
              <Button link={"/access_investment"} >Click to Explore Available Investments</Button>
              </div>
            </div>

          </div>
             
        </header>
    </div>
  )
}

export default Header