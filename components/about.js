import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo2.png'

function About() {
  return (
    <div>
      <div className='md:mx-20 mx-5 bg-cover bg-center md:w-auto w-80 md:h-96 h-72 md:rounded-2xl rounded-sm'
      style={{
        backgroundImage: `url("/images/about1.png")`, 
      }}>
       <div className='md:pl-12 pl-5 md:pb-32 pb-8 md:pt-12 pt-6'>
       <h1 className="md:text-7xl text-5xl text-yellow-400 md:pt- pt-4">Our Offerings</h1>
       <h1 className='h-1 md:w-14 w-8 bg-white  md:mt-6 mt-2 md:mb-10 mb-4'></h1>
       <h3 className="md:text-2xl text-base text-gray-300 font-light md:mt-10 mt-6">Discover a delightful array of unique and handcrafted gifts perfect for <br/> any occasion. A boutique collection of quirky and charming gifts that add a touch of magic <br/> to every celebration.</h3>
       </div>
      </div>

      <div className="w-full bg-black bottom-0 md:py-12 py-6 md:mt-12 mt-8">
        <Image alt='adey logo ' src={logo} className='md:w-32 w-28 md:h-40 h-32 mx-auto'/> 
      </div>

    <div className='bg-cover bg-center md:w-auto w-full h-96'
      style={{
        backgroundImage: `url("/images/about2.png")`, 
      }}>
        <h3 className='flex justify-center items-center md:text-2xl pt-40 px-32 text-base font-extralight text-gray-300'>After witnessing countless businesses struggle with licensing, payments, website content, and keeping up with changing laws, we knew there had to be a better way. We envisioned a company dedicated to guiding gaming operators towards seamless success, no matter how confusing the system might be.</h3>
    </div>

    <div className="w-full bg-yellow-400 bottom-0 md:py-12 py-6">
      <Image alt='adey logo ' src={logo} className='md:w-32 w-28 md:h-40 h-32 mx-auto'/> 
      <h1></h1>
    </div>

    </div>
  )
}

export default About