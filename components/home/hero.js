import React from 'react'
import Image from 'next/image'

function Section1() {
  return (
  <div
    className='md:mx-16 mx-5 md:mt-8 bg-cover bg-center w-auto md:h-fit h-72 md:rounded-2xl rounded-sm'
      style={{
        backgroundImage: `url("/images/bg.png")`, 
      }}>
       <div className='md:pl-12 pl-5 md:pb-20 pb-8 md:pt-12 pt-'>
       <h1 className="md:text-7xl text-5xl text-white font-extralight md:pt-0 pt-7">Welcome to </h1>
       <h1 className="md:text-7xl text-5xl text-yellow-400 font-semibold mb-2">Adey Gifts</h1>
       <h1 className='h-1 md:w-14 w-8 bg-white  md:mt-6 mt-2 md:mb-10 mb-4'></h1>
       <h3 className="text-gray-300 font-light md:text-2xl text-base md:mt-10 mt-4 md:pr-96 pr-6">Discover a delightful array of unique and handcrafted gifts perfect for any occasions. A boutique collection of <br/> quirky and charming gifts that add a touch of magic to every celebration.</h3>
    </div>
    </div>
  )
}

export default Section1