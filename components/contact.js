import React from 'react'
import Image from 'next/image'
import img1 from "@/public/images/contact.png"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className='md:mx-10 mx-5'>
      <Image src={img1} className='md:h-96 h-72'/>

      <div className='md:mx-20 mx- md:my-12 my-8 '>
        <h1 className='md:text-3xl text-2xl font-bold text-center md:mb-10 mb-8'>Lets Respond Your Queries</h1>
        <form>
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10'>
            <div className='md:mx-10'> 
            <div>
              <h1 className='pb-2'>FIRST NAME</h1>
              <input className='w-full px-4 py-3 border bg-transparent border-gray-300 text-white focus:outline-none'
                type='name'
                // placeholder='First Name'
                name='name' 
              />
            </div>
            <div className='my-4'>
              <h1 className='pb-2'>LAST NAME</h1>
              <input className='w-full px-4 py-3 border bg-transparent border-gray-300 text-white focus:outline-none'
                type='name'
                // placeholder='Last Name'
                name='name' 
              />
            </div>
            <div>
              <h1 className='pb-2'>E-MAIL</h1>
              <input className='w-full px-4 py-3 border bg-transparent border-gray-300 text-white focus:outline-none'
                type='email'
                // placeholder='Email'
                name='Email' 
              />
            </div>

            </div>
            <div className='md:mx-10'>
              <textarea className='w-full md:h-full h-60 pl-3 pt-3 border bg-transparent border-gray-300 text-white focus:outline-none'
              placeholder='LEAVE A MESSAGE FOR US.'
              />
            </div>

          </div>
          <div className='flex justify-end'>
            <button className='bg-yellow-300 px-8 py-3 rounded-xl mt-5 mr-14'>SEND</button>
          </div>
        </form>

        <div className='grid grid-cols-2 md:gap gap-6 md:mt-10 mt-6 md:mx-20 mx-1'>
          <div className=''>
            <h1 className='md:ml-10 md:text-xl text-base font-semibold md:pb-6 pb-4'>COME VISIT US </h1>
            <div className=''>
              <h1 className=''>ADDIS ABABA, ETHIOPIA</h1>
              <div className='flex justify-center h-1 md:w-14 w-8 bg-gray-400 md:my-5 my-3'></div>
              <h1>(+251) 919208784</h1>
              <h1>(+251) 955327885</h1>
            </div>
          </div>
          <div className='md:ml-20'> 
           <h1 className='md:ml-10  md:text-xl text-base font-semibold md:pb-6 pb-4'>FOLLOW OUR SOCIALS </h1>
           <div className="flex md:gap-5 gap-3 md:pl-16">
            <a href="https://www.facebook.com"> <FaFacebookF size={20} /> </a>
            <a href="https://t.me/adeygifts"> <FaTelegram size={20} /> </a>
            <a href="https://www.instagram.com/adey.gifts/"> <FaInstagram size={20}/> </a>
            <a href="https://www.tiktok.com/@amanuelz7"> <FaTiktok size={20} /> </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact