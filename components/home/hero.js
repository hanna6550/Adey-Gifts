import React from 'react'
import Image from 'next/image'

function Section1() {
  return (
  <div
    className='md:mx-16 mx-5 bg-cover bg-center md:w-auto w-80 h-auto md:rounded-2xl rounded-sm'
      style={{
        backgroundImage: `url("/images/bg.png")`, 
      }}>
       <div className='md:pl-12 pl-5 md:pb-20 pb-8 md:pt-12 pt-6'>
       <h1 className="md:text-8xl text-5xl text-white font-extralight">Welcome to </h1>
       <h1 className="md:text-8xl text-5xl text-yellow-400 font-semibold">Adey Gifts</h1>
       <h1 className='h-1 md:w-12 w-6 bg-white  md:mt-6 mt-2 md:mb-10 mb-4'></h1>
       <h3 className="text-gray-300 ">Discover a delightful array of unique and handcrafted <br/> gifts perfect for any occasion. A boutique <br/> collection of quirky and charming gifts that add a touch of magic <br/> to every celebration.</h3>
    </div>
    </div>
  )
}

export default Section1