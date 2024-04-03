import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useLocation } from 'react-router-dom'
import Banner from '../components/header/Banner'

const MainLayout = ({children}) => {
const location = useLocation()  
const isHomeActive = location.pathname === '/'
return (
    <div className=''>
      {isHomeActive ? <Header/> : <Banner/>}
     
      
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout