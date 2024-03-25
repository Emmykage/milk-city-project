import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../pages/Home'

const MainLayout = ({children}) => {
  console.log(children)
  return (
    <div className=''>
     
      <Header/>
      <main>
      {children}

      </main>
   
    </div>
  )
}

export default MainLayout