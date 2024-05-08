import React from 'react'
import { NavLink } from 'react-router-dom'
import photo from '../../assets/images/pictures/handsake.jpg'
const Offering = () => {
  return (
    <div className='max-w-7xl w-full m-auto bg--400 py-8 bg-white my-3 rounded-md px-4 md:px-10'>
        <h2 className='text-left text-2xl font-medium text-gray-700'>
        Farmland Investment Offerings

        </h2>
            <p className='flex text-gray-500 text-sm'>
                FarmFundr is a farmer-owned, equity crowdfunding platform focused on specialty crop operations in the United States. We offer fractional farmland ownership opportunities to our members.
           </p>

           
           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-gray-700'>FarmFundr</h3> 
                <p className='text-gray-500'>Custom Farmland Investment</p>
                <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$500K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-green-700 text-sm py-3 rounded my-5 text-white text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-gray-700'>FarmFundr</h3> 
                <p className='text-gray-500'>Custom Farmland Investment</p>
                <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$500K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-green-700 text-sm py-3 rounded my-5 text-white text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-gray-700'>FarmFundr</h3> 
                <p className='text-gray-500'>Custom Farmland Investment</p>
                <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$500K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-green-700 text-sm py-3 rounded my-5 text-white text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           <div className='my-2 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-gray-700'>FarmFundr</h3> 
                <p className='text-gray-500'>Custom Farmland Investment</p>
                <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$500K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-green-700 text-sm py-3 rounded my-5 text-white text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>
        
    </div>
  )
}

export default Offering