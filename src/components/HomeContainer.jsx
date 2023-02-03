import React from 'react';
import delevery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import i1 from '../img/i1.png'
function HomeContainer() {
  return (
    <section className='grid grid-cols-1  md:grid-cols-2 gap-2 w-full  ' id='home'>
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6 '>
      <div className='flex items-center gap-2 justify-center bg-orange-100  px-4 py-1 rounded-full'>
      <p className='text-base text-orange-500 font-semibold drop-shadow-xl' >
        Bike Delevery 
      </p>
      <div className='w-8 h-8 rounded-full overflow-hidden'>
        <img className='w-full h-full object-contain bg-white' src={delevery} alt="delevery" />
      </div>
      </div>
      <p className='text-[2rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor'> 
        The Fastest Delivery in <span className='text-orange-500 text-[3rem]'>Your City </span>
      </p>
      <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem quas quasi neque excepturi hic sed beatae id sequi! Inventore, voluptatem fugiat! Esse debitis sunt repellat atque nihil dolorum beatae.
      </p>
      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full p-4 px-4py-2 rounded-lg hover:shadow-lg  transition-all ease-in-out duration-100 '>Order Now</button>
    </div>
    <div className='py-2 flex-1  flex items-center relative'>
            <img src={HeroBg} alt="hero bg" className='ml-auto w-full h-420 lg:w-auto lg:h-650'/>
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 '>
              <div className=' w-190 bg-cardOverlay backdrop:blur-md rounded-md p-4 flex flex-col items-center justify-center'>
                <img src={i1} alt='ice cream' className='w-40 -mt-20'></img>  
                <p className='text-base font-semibold text-textColor mt-4 '>Ice Cream </p>
                <p className='text-sm font-semibold  text-lighttextGray my-4'>
                  Choclate & vanilla 
                </p>
                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-sm  text-green-600'>$</span>5.25
                </p>
              </div>
            </div>
    </div>
  </section>
  );
}
export default HomeContainer;