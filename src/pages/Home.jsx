import React from 'react'
import Earth from '../assets/images/icons/planet-earth.png'
import Button from '../components/buttons/Button'

const Home = () => {
  return (
    <div className='text-xs'>

      <section className='px-2 py-20 farmBg'>
        <h2 className='text-center text-3xl'>HOW IT WORKS</h2>
        <div>
          <p className='px-3 lg:px-48 font-semibold text-base text-gray-900 leading-6'>MilkCity is a farmer-owned, equity crowdfunding platform focused on specialty crop operations in the United States. We offer fractional farmland ownership opportunities to our members.</p>
          <div className='px-3 sm:px-10 max-w-6xl m-auto grid sm:grid-cols-2 lg:grid-cols-4 pt-8 pb-20 mt-10 gap-[3%] lg:px-5'>
            <div className='bg-gray-50 relative py-10 px-5 rounded'> 
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-950 text-white text-xl'> 1</span>
              <h3 className='text-lg'>Sign Up</h3>
              <p className='text-sm text-gray-500 font-medium'>Sign up for a complimentary FarmFundr Account to gain full access to high profit farmland investment opportunities in our easy-to-use portal.</p>
            </div>
            <div className='bg-gray-50 relative py-10 px-5 rounded'>
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-950 text-white text-xl'> 2</span>
              <h3 className='text-lg'>Invest</h3>
              <p className='text-sm text-gray-500 font-medium'>Determine what best fits your investment portfolio and invest. All opportunities have been carefully selected and offer high return possibilities.</p>
            </div>
            <div className='bg-gray-50 relative py-10 px-5 rounded'>
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-950 text-white text-xl'> 3</span>
              <h3 className='text-lg'>Monitor</h3>
              <p className='text-sm text-gray-500 font-medium'>Congratulations, you’re a farmer! FarmFundr manages all aspects of the farmland, from planting to harvesting to selling while you simply monitor your farm’s progress online.</p>
            </div>
            <div className='bg-gray-50 relative py-10 px-5 rounded'>
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-950 text-white text-xl'> 4</span>
              <h3 className='text-lg'>Collect</h3>
              <p className='text-sm text-gray-500 font-medium'>
              Profits from crop sales are distributed to investors after crops are harvested and sold each year. At the end of the holding period, they will receive their share from the sale of the the land</p>
            </div>

          </div>
        </div>
        <div></div>
      </section>
      <section className='py-20 bg-gray-100'>
        <h2 className='text-xl'>WHY INVEST IN MILKCITY</h2>

        <p className='text-base text-gray-900 my-8'>Explore the many reasons that we believe Nigeria farmland is an Attractive investment </p>
        <div className=' flex items-center justify-center gap-8'>
        <span className='border border-black flex w-20 h-20 rounded-full justify-center items-center'>1</span>
        <span className='border border-black flex w-20 h-20  rounded-full justify-center items-center'>2</span>
        <span className='border border-black flex w-20 h-20 rounded-full justify-center items-center'>3</span>
    
        </div>
        <div className='max-w-4xl m-auto grid lg:grid-cols-2 gap-[3%] px-3 py-8'>
          <div className='lg:px-10 px-3 flex gap-0'>
            <span className=' flex items-center justify-center bg-slate-600 h-16 w-16  rounded-full' ><img src={Earth} width={40} height={60} alt="earth globe" /></span>
            <div className='flex-1'>
              <h4 className='text-lg mb-4'>DEMAND FOR FOOD</h4>
              <p className='text-gray-600 text-sm px-3 leading-6'>By 2050 the world population will grow to over 10 billion people. An additional 3 billion people will enter the middle class causing food demand to sky rocket.</p>
            </div>
          </div>
          <div className='lg:px-10 px-3 flex gap-3'>
            <span className='flex items-center justify-center bg-slate-600 h-16 w-16 rounded-full' ><img src={Earth} width={40} height={60} alt="earth globe" /></span>
            <div className='flex-1'>
              <h4 className='text-lg mb-4'>MORE STABILITY THAN THE STOCK MARKET</h4>
              <p className='text-gray-600 text-sm px-3 leading-6'>Since farmland is uncorrelated with most other major asset classes, it has proven to perform well during challenging economic conditions.</p>
            </div>
          </div>
          <div className='lg:px-10 px-3 flex gap-3'>
            <span className='flex items-center justify-center bg-slate-600 h-16 w-16 rounded-full' ><img src={Earth} width={40} height={60} alt="earth globe" /></span>
            <div className='flex-1'>
              <h4 className='text-lg mb-4'>THEY'RE NOT MAKING ANY MORE LAND</h4>
              <p className='text-gray-600 text-sm px-3 leading-6'>The U.S. alone loses almost 500,000 acres of farmland a year. That’s a loss of nearly 15,000,000 acres of farmland by 2050.</p>
            </div>
          </div>
          <div className='lg:px-10 px-3 flex gap-3'>
            <span className='flex items-center justify-center bg-slate-600 h-16 w-16 rounded-full' ><img src={Earth} width={40} height={60} alt="earth globe" /></span>
            <div className='flex-1'>
              <h4 className='text-lg mb-4'>LONG TERM INVESTMENT STRATEGY</h4>
              <p className='text-gray-600 text-sm px-3 leading-6'>Farmland is an attractive, long-term investment that has the potential to provide  relative resiliency to challenging economic conditions.</p>
            </div>
          </div>
          <div className='lg:px-10 px-3 flex gap-3'>
            <span className='flex items-center justify-center bg-slate-600 h-16 w-16 rounded-full' ><img src={Earth} width={40} height={60} alt="earth globe" /></span>
            <div className='flex-1'>
              <h4 className='text-lg mb-4'>HEDGE AGAINST INFLATION</h4>
              <p className='text-gray-600 text-sm px-3 leading-6'>Over time, farmland has proven to have a positive correlation with inflation. More so than bonds, the stock market, and even gold. On average, no investment offers a hedge against inflation like farmland.</p>
            </div>
          </div>
          <div className='lg:px-10 px-3 flex gap-3'>
            <span className='flex items-center justify-center bg-slate-600 h-16 w-16 rounded-full' ><img src={Earth} width={40} height={60} alt="earth globe" /></span>
            <div className='flex-1 '>
              <h4 className='text-lg mb-0'>AN INDUSTRY THAT MATTERS</h4>
              <p className='text-gray-600 text-sm px-0 leading-6'>Ownership in a farm operation allows investors to learn about the many aspects that go into a real working farm and the hard work that goes into feeding the world.</p>
            </div>
          </div>
          
          
        </div>
      </section>
      <section>
        <div className='flex py-16 px-6 gap-5 max-w-6xl m-auto flex-col sm:flex-row'>
        <div className='flex-1'>
          <h1 className='text-2xl mb-5'>MAKE MONEY TWO WAYS</h1>
            <p className='leading-6'>
              At FarmFundr, we do things a little differently so that our investors can realize as much profit from their farm
              operation as possible. As part owner in the farmland, you will receive annual returns from the crop sales, in addition to the appreciation from ownership of the land.
            </p>
            <div className='flex justify-center'>
              <Button className="m-auto" link={'#'}>Start Exploring Opportunities</Button>

            </div>
        </div>
        <div className='flex-1 flex gap-3 flex-col sm:flex-row'>
          <div className='flex-1 px-4 border py-10 w-full'>
            <h4 className='text-xl'>Milk Profit</h4>
            <p className='leading-6'>Receive profits when crops are harvested and sold, in most cases, annually</p>
          </div>
          <div className='flex-1 px-4 border py-10 w-full'>
            <h4 className='text-xl'> OWN THE LAND </h4>
            <p className='leading-6'>
            At the end of the investment's holding period , investors will realize profits from the appreciation of the land.
            </p>
          </div>
        </div>

        </div>
      </section>
      <section>
        <h2 className='text-2xl'>WHAT MAKES FARMFUNDR DIFFERENT</h2>
        <div className='px-10 sm:px-10 max-w-6xl m-auto grid sm:grid-cols-3 pt-8 pb-20 mt-10 gap-[3%] lg:px-5'>
            <div className='bg-green-800 relative py-10 px-5 rounded text-white'> 
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-600 text-white text-xl'> 1</span>
              <h3 className='text-lg'>Farmer Owned</h3>
              <p className='text-sm text-white font-medium'>Founded by a fourth generation farmer with over 21 years of successful farming, FarmFundr’s managers have a proven track record in purchasing, developing and managing the right properties to maximize return on investment.</p>
            </div>
            <div className='bg-gray-50 relative py-10 px-5 rounded border'>
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-600 text-white text-xl'> 2</span>
              <h3 className='text-lg'>Asset Class Experts</h3>
              <p className='text-sm text-gray-500 font-medium'>FarmFundr's management is often consulted by other investment portals and companies for investment structure advice. Our experience in successful farmland investing along with farmland management is an asset to our valued investors.</p>
            </div>
            <div className='bg-gray-900 relative py-10 px-5 rounded'>
              <span className='absolute -top-10 left-1/2 -translate-x-1/2 m-auto flex h-20 w-20 justify-center items-center rounded-full bg-green-600 text-white text-xl'> 3</span>
              <h3 className='text-lg text-white'>Diversity</h3>
              <p className='text-sm text-white font-medium'>Traditionally, it would take millions of dollars to invest in a variety of farms and crops. This can now be accomplished for as little as $10,000 per investment with FarmFundr's easy-to-use investment portal.</p>
            </div>
            

          </div>

      </section>
    
    <p className='font-mesium'></p></div>
  )
}

export default Home