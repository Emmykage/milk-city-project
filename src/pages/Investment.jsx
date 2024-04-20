import React from 'react'
import areaview from '../assets/images/pictures/5e7148a3b866678e23e414ce_FarmFundr1.png'
import areaview2 from '../assets/images/pictures/5f88a8b2dc0a24adead6ccf4_Jackpot Pistachio Farm _ 2D.png'
import areaview3 from '../assets/images/pictures/61804fcfcdcc6d188413010c_6139093c99ec545814197d8c_Denver Walnuts _ Aerial _ With River.png'

const Investment = () => {
  return (
    <div>
      <section className='py-8'>
        <div className='max-w-7xl m-auto flex flex-col  sm:flex-row justify-between items-center px-4 lg:px-0'>
        <div className='w-[300px] '>
          <img src={areaview} alt="" className='w-full h-40'/>
          <div>
            <h4 className='text-lg font-semibold'>Jackpot Pistachio Farm</h4>
            <p className='text-sm'>California</p>
            <p className='text-base font-medium text-gray-600'>Minimum Investment: $10,000</p>
            <p className='text-base font-medium text-gray-600'>Total Estimated Return - 66.7%</p>
          </div>
        </div>
        <div className='w-[300px] '>
          <img src={areaview2} alt="" className='w-full h-40'/>
          <div>
            <h4 className='text-lg font-semibold'>Jackpot Pistachio Farm</h4>
            <p className='text-sm'>California</p>
            <p className='text-base font-medium text-gray-600'>Minimum Investment: $10,000</p>
            <p className='text-base font-medium text-gray-600'>Total Estimated Return - 66.7%</p>
          </div>
        </div>
        <div className='w-[300px] '>
          <img src={areaview3} alt="" className='w-full h-40'/>
          <div>
            <h4 className='text-lg font-semibold'>Jackpot Pistachio Farm</h4>
            <p className='text-sm'>California</p>
            <p className='text-base font-medium text-gray-600'>Minimum Investment: $10,000</p>
            <p className='text-base font-medium text-gray-600'>Total Estimated Return - 66.7%</p>
          </div>
        </div>
      </div>
      <div className='my-10'>
        <h3 className='text-xl font-semibold my-3'>Interested in exploring farmland investment opportunities?</h3>
        <p className='text-sm'>
          Follow the button below to create a Free FarmFundr account.
          You will also be updated as new opportunities become available. At FarmFundr, we pride ourselves on offering only the highest quality investments that we'd invest in ourselves. Be sure to join to be the first to know when these carefully sourced opportunities become available.</p>
        <a to="/auth/login" className='bg-gray-700 text-white text-sm py-2 px-3 block max-w-max m-auto my-6'>LOGIN OR SIGN UP FOR FULL INVESTMENT DETAILS</a>
      </div>
      </section>
        
        
    </div>
  )
}

export default Investment