import React from 'react'
import DashedLines from '../components/dashedLines/DashedLines'

const ABOUT_US = () => {
  return (
    <div className=' '>
      <section className='bg-green-900 h-72 m-auto'>      
          <div className='max-w-7xl m-auto flex justify-center px-10'>
            <div className='flex-1'>
              <h2 className='text-white text-6xl my-7'> FARMER <br/> OWNED.</h2>
              <p className='leading-6 text-sm text-white'>As a fourth-generation farmer, real estate investor and expert in farm management, our CEO, Brandon, takes extreme pride and care when it comes to selecting offerings for our investor
              </p>
        
            </div>
            <div className='flex-1'>

            </div>

          </div>
      </section>

      <section>
      <div className='flex justify-center max-w-7xl m-auto gap-6 px-8'>
        <div className=' text-center bg-red-0 max-w-xl w-full'>
          <h3 className='text-4xl my-10 px-6 leading-10 font-semibold'>MEET OUR CEO,<br/> CHUBA MENANYA</h3>
          <div className='m-auto'>
          <img src="#" alt="ceo" className='h-80 w-full bg-gray-200' />


          </div>
        </div>

        <div className='flex-1'>
          <p className='py-6 text-justify text-sm text-gray-600 mt-14'>
          Chuba graduated from California Polytechnic University San Luis Obispo with an agricultural degree. After graduating, Brandon started his career in the agricultural industry, and has experience managing and farming a large variety of crops.

          <br/>
          <br/>

Chuba has bought and sold millions in real estate and currently manages over $100 million in assets. His farm management company was recognizing in 2012 for achieving over 900% growth, and was listed on the “INC. Magazine” list of fastest growing companies at number 701. It was the only agricultural company on the list.
<br/>

<br/>
Chuba specialty is in farm management, land acquisition and a variety of farm and land financing and strategies. His passion is to help bridge the gap between the agricultural industry and the consumer.
<br/>
<br/>
FarmFundr investors can rest assured they are gaining access to deals selected by a professional that has a demonstrated history of thriving in the farming industry.
          </p>
        </div>
      </div>

      </section>

      <section className='bg-green-900 py-14 my-6'>
        <p className='max-w-4xl m-auto text-white italic '>
        "I saw a need to offer people the opportunity to
invest in farmland without putting up huge amounts of capital."
        </p>
        <span className='italic text-white text-sm'>Brandon Silveira</span>
      </section>

      <section>
        <div className='max-w-4xl m-auto'>


        <h3 className='text-2xl font-semibold my-4'>OUR TEAM</h3>
        <DashedLines/>
        <div className='flex gap-10 my-4'> 
          <div className='w-40 h-40'>
            <img src="" alt="" className='w-full h-full' />
          </div>
          <div className='flex-1 text-left'>
            <h3 className='font-semibold text-lg mb-3'>Chuba Menanya</h3>
            <p className='text-xs text-gray-600'>Chief Executive Officer</p>
            <p className='my-4 text-sm font-medium text-gray-600'>As someone who has been raised in an agricultural community and farming family, Hilary is passionate about the industry. She is thrilled to play a role in helping farmers find a solution to a problem that has challenged them for years, finding funding and introducing investors to this exciting asset.</p>
          </div>
        </div>
        <div className='flex gap-10 my-4'> 
          <div className='w-40 h-40'>
            <img src="" alt="" className='w-full h-full' />
          </div>
          <div className='flex-1 text-left'>
            <h3 className='font-semibold text-lg mb-3'>Morrison Chukwuemeka</h3>
            <p className='text-xs text-gray-600'>Chief Executive Officer</p>
            <p className='my-4 text-sm font-medium text-gray-600'>As someone who has been raised in an agricultural community and farming family, Hilary is passionate about the industry. She is thrilled to play a role in helping farmers find a solution to a problem that has challenged them for years, finding funding and introducing investors to this exciting asset.</p>
          </div>
        </div>
        <div className='flex gap-10 my-3'> 
          <div className='w-40 h-40'>
            <img src="" alt="" className='w-full h-full' />
          </div>
          <div className='flex-1 text-left'>
            <h3 className='font-semibold text-lg mb-3'>Sarah Ibrahim</h3>
            <p className='text-xs text-gray-600'>Chief Executive Officer</p>
            <p className='my-4 text-sm font-medium text-gray-600'>As someone who has been raised in an agricultural community and farming family, Hilary is passionate about the industry. She is thrilled to play a role in helping farmers find a solution to a problem that has challenged them for years, finding funding and introducing investors to this exciting asset.</p>
          </div>
        </div>
        </div> 
      </section>

     

      
    </div>
  )
}

export default ABOUT_US