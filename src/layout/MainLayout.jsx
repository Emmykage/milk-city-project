import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const MainLayout = ({children}) => {
  console.log(children)
  return (
    <div className=''>
     
      <Header/>
      <main>
      {children}
      hefef
      <Footer/>

      </main>
   
    </div>
  )
}

export default MainLayout