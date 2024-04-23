import React from 'react'
import { NavLink } from 'react-router-dom'

const Offering = () => {
  return (
    <div className='max-w-7xl w-full m-auto bg--400 py-8'>
        <h2 className='text-left text-2xl font-medium text-gray-700'>
        Farmland Investment Offerings

        </h2>
            <p className='flex text-gray-600 text-s'>
                FarmFundr is a farmer-owned, equity crowdfunding platform focused on specialty crop operations in the United States. We offer fractional farmland ownership opportunities to our members.
           </p>

           <div className='border rounded-md p-4 flex mb-4'>
                <div className='flex-1 bg-gray-400 h-48'>
                    <img src="" alt="" className='bg-gray-200 w-full h-full'/>
                </div>
                <div className='flex-1 bg-red-200'>


                </div>

           </div>

           <div className='border rounded-md p-4 flex flex-col md:flex-row'>
                <div className='flex-1 bg-gray-400 h-60'>
                    <img src="" alt="" className='bg-gray-200 w-full h-full'/>
                </div>
                <div className='md:w-[45%] bg-red-200'>
                 <h3>FarmFundr</h3> 
                 <p>Custom Farmland Investment</p>
                 <p>We can custom-tailor an investment for you.</p>
                 <span>$500Kor</span> <span>or More </span>

                 <NavLink to={'#'} className={'bg-green-700 text-white text-center block'}> LEARN MORE</NavLink>

                </div>

           </div>
        
    </div>
  )
}

export default Offering