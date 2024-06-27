import React from 'react'
import DashedLines from '../components/dashedLines/DashedLines'

const ABOUT_US = () => {
  return (
    <div className=' '>
      <section className='bg-green-900 h-72 m-auto'>      
          <div className='max-w-7xl m-auto flex flex-col md:flex-row justify-center px-10'>
            <div className='flex-1'>
              <h2 className='text-white text-6xl my-7'> FARMER <br/> OWNED.</h2>
              <p className='leading-6 text-sm text-white'>As a fourth-generation farmer, real estate investor and expert in farm management, our CEO, Brandon, takes extreme pride and care when it comes to selecting offerings for our investor
              </p>
        
            </div>
            <div className='flex-1'>

            </div>

          </div>
      </section>

      {/* <section>
      <div className='flex flex-col items-start md:flex-row justify-center max-w-7xl m-auto gap-6 px-8 pt-8'>
        <div className=' text-center bg-red-0 max-w-xl w-full flex-1'>
         
         
          <div className='m-auto'>
          <img src="#" alt="about mmpc" className='h-80 w-full bg-gray-200' />


          </div>
        </div>

        <div className='flex-1'>
          <p className='py-6 text-justify text-sm text-gray-600 mt-0'>
          
          Meat and Milk City Cooperative is a subsidiary of Ag-Grow City Ltd, dedicated animal 
husbandry cooperative organization based in Nigeria. Our cooperative is formed by a group 
of passionate farmers committed to improving the livestock industry in the region. We strive 
to support our members through collaborative efforts, shared resources, and collective 
knowledge, ensuring sustainable and profitable animal farming practices. Our cooperative 
focuses on various areas of animal husbandry, including dairy farming, goat farming, sheep 
farming, pig farming, and feed production. By working together, we aim to enhance the 
livelihoods of our members and contribute to the overall development of Nigeria's 
agricultural sector.


          </p>
        </div>
      </div>

      </section> */}

     

      <section>
        <div className='flex flex-col md:flex-row px-3 justify-between max-w-5xl m-auto gap-3 my-3'>
          <div className='flex-1 bg-gray-200'></div>
          <div className='flex-1'>
            <h3 className='text-xl'> About Us:</h3>
            <p className='text-justify text-sm text-gray-600 font-semibold'>
             
Meat and Milk City Cooperative is a subsidiary of Ag-Grow City Ltd, dedicated animal husbandry cooperative organization based in Nigeria. Our cooperative is formed by a group of passionate farmers committed to improving the livestock industry in the region. We strive to support our members through collaborative efforts, shared resources, and collective knowledge, ensuring sustainable and profitable animal farming practices. Our cooperative focuses on various areas of animal husbandry, including dairy farming, goat farming, sheep farming, pig farming, and feed production. By working together, we aim to enhance the livelihoods of our members and contribute to the overall development of Nigeria's agricultural sector.

           </p>
           
          </div>
        </div>
      </section>
      
      <section className='py-7'>
        <div className='max-w-4xl m-auto'>
          <h3 className='text-lg text-gray-700 font-semibold'> Vision:</h3>
          <p className='text-sm text-gray-600 font-medium px-8 leading-8'>
          To be the leading cooperative organization in Nigeria, renowned for excellence in animal 
husbandry, and recognized for our contributions to sustainable agriculture, food security, and 
economic empowerment of our members.</p>
       <h3 className='text-lg text-gray-700 font-semibold mt-8'>Mission:</h3>
        <p className='text-sm text-gray-600 font-medium px-8 leading-8'>
        Our mission is to provide comprehensive support to our members by promoting best practices 
in animal husbandry, facilitating access to high-quality resources, and fostering a 
collaborative environment. We aim to enhance productivity, ensure the welfare of our 
animals, and improve the profitability of our members through innovative and sustainable 
farming practices
        </p>
 
        </div>
      </section>
      <section className='bg-green-900 py-14 my-6'>
        <p className='max-w-4xl m-auto text-white italic px-4'>
        "I saw a need to offer people the opportunity to
invest in farmland without putting up huge amounts of capital."
        </p>
        <span className='italic text-white text-sm'>Brandon Silveira</span>
      </section>

      <section className='text-left max-w-7xl m-auto'>


<div className='flex md:flex-row flex-col'>

        <div className='max-w-5xl flex-1 text-justify'>


        <h3 className='text-2xl text-center'>
        Core Values


        </h3>
        <ul className='list-decimal list-inside px-3'>
          <li  className='my-3'>
            <strong> Collaboration: </strong>
We believe in the power of working together. By sharing resources, 
knowledge, and expertise, we can achieve greater success and mutual benefits for all 
our members.

          </li>
          <li className='my-2'>
            <strong>  Sustainability: </strong>
         We are committed to sustainable farming practices that protect the 
environment, ensure animal welfare, and contribute to the long-term viability of our 
agricultural sector.
          </li>
          <li className='my-2'>
            <strong>
            
           Innovation:</strong> We embrace innovation and encourage our members to adopt new 
technologies and practices that can enhance productivity and efficiency in animal 
husbandry.
          </li>
          <li className='my-2'>
            <strong>
            Integrity:  
            </strong>
            
 We conduct our operations with the highest level of integrity, transparency, 
and accountability, ensuring trust and reliability in all our dealings.
          </li>
          <li className='my-2'>
            <strong> Empowerment:</strong>
          We aim to empower our members by providing them with the 
necessary tools, knowledge, and opportunities to improve their livelihoods and 
achieve economic independence

          </li>
        </ul>
        </div>
        <div className='flex-1'>sd</div>

        </div>



      </section>

      <section>
        <div className='max-w-4xl m-auto px-4'>


        <h3 className='text-2xl font-semibold my-4'>OUR TEAM</h3>
        <DashedLines/>
        <div className='flex gap-10 my-4 '> 
          <div className='w-40 h-40'>
            <img src="" alt="" className='w-full h-full' />
          </div>
          <div className='flex-1 text-left'>
            <h3 className='font-semibold text-lg mb-3'>Chuba Menanya</h3>
            <p className='text-xs text-gray-600'>Team Lead</p>
            <p className='my-4 text-sm font-medium text-gray-600'>As someone who has been raised in an agricultural community and farming family, Hilary is passionate about the industry. She is thrilled to play a role in helping farmers find a solution to a problem that has challenged them for years, finding funding and introducing investors to this exciting asset.</p>
          </div>
        </div>
        <div className='flex gap-10 my-4'> 
          <div className='w-40 h-40'>
            <img src="" alt="" className='w-full h-full' />
          </div>
          <div className='flex-1 text-left'>
            <h3 className='font-semibold text-lg mb-3'>Prof. Victor O Adara</h3>
            <p className='text-xs text-gray-600'>Chief Consultant</p>
            <p className='my-4 text-sm font-medium text-gray-600'>As someone who has been raised in an agricultural community and farming family, Hilary is passionate about the industry. She is thrilled to play a role in helping farmers find a solution to a problem that has challenged them for years, finding funding and introducing investors to this exciting asset.</p>
          </div>
        </div>
        <div className='flex gap-10 my-3'> 
          <div className='w-40 h-40'>
            <img src="" alt="" className='w-full h-full' />
          </div>
          <div className='flex-1 text-left'>
            <h3 className='font-semibold text-lg mb-3'>Morris Menanya</h3>
            <p className='text-xs text-gray-600'>ICT Coordinator</p>
            <p className='my-4 text-sm font-medium text-gray-600'>As someone who has been raised in an agricultural community and farming family, Hilary is passionate about the industry. She is thrilled to play a role in helping farmers find a solution to a problem that has challenged them for years, finding funding and introducing investors to this exciting asset.</p>
          </div>
        </div>
        </div> 
      </section>

      
    </div>
  )
}

export default ABOUT_US