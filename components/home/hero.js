import React from 'react'
import Image from 'next/image'

function Section1() {
  return (
  <div
    className='md:mx-16 mx-5 bg-cover bg-center md:w-auto w-80 h-auto md:rounded-2xl rounded-sm'
      style={{
        backgroundImage: `url("/images/bg.png")`, 
      }}>
       <div className='md:pl-12 pl-5 md:pb-20 pb-8 md:pt-16 pt-6'>
       <h1 className="md:text-8xl text-5xl text-white font-extralight md:pt-0 pt-7">Welcome to </h1>
       <h1 className="md:text-8xl text-5xl text-yellow-400 font-semibold mb-2">Adey Gifts</h1>
       <h1 className='h-1 md:w-14 w-8 bg-white  md:mt-6 mt-2 md:mb-10 mb-4'></h1>
       <h3 className="text-gray-300 font-light md:text-xl text-base md:mt-10 mt-6">Discover a delightful array of unique and handcrafted <br/> gifts perfect for any occasion. A boutique <br/> collection of quirky and charming gifts that add a touch of magic <br/> to every celebration.</h3>
    </div>
    </div>
  )
}

export default Section1