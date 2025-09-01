import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo2.png'
import SectionTitle from "@/components/sectionTitle"

function About() {

  const testimonials = [
      {
        id: 1,
        heading: 'Efficient Collaborating',
        content: 'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling.',
        name: 'W/Amanuel',
        role: 'CEO $ Manager at Adey-GiftCompany'
      },
      {
        id: 2,
        heading: 'Intutive Design',
        content: 'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit.',
        name: 'W/Amanuel',
        role: 'CEO $ Manager at Adey-GiftCompany'
      },
      {
        id: 3,
        heading: 'Mindblowing Services',
        content: 'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit.',
        name: 'Hanna ',
        role: 'Customer of Adey-Gift'
      },
    ]

  return (
    <div>
      <div className='md:mx-20 mx-5 md:mt-8 bg-cover bg-center w-auto w- md:h-96 h-72 md:rounded-2xl rounded-sm'
      style={{
        backgroundImage: `url("/images/about1.png")`, 
      }}>
       <div className='md:pl-12 pl-5 md:pb-20 pb-8 md:pt-12 pt-6'>
       <h1 className="md:text-7xl text-5xl text-yellow-400 md:pt- pt-4">Our Offerings</h1>
       <h1 className='h-1 md:w-14 w-8 bg-white  md:mt-6 mt-2 md:mb-10 mb-4'></h1>
       <h3 className="md:text-2xl text-base text-gray-200 font-light md:mt-10 mt-6 md:pr-96 pr-6">We believe every gift should tell a story—a story of love, care, and thoughtfulness. That’s why we’re always ready to help you create gifts that are as meaningful as the relationships they celebrate.<br/> From personalized keepsakes to timeless treasures, our custom photo gifts are designed to make your beloveds feel truly special. Because every moment deserves to be cherished, and every gift should come from the heart.</h3>
       </div>
      </div>
 
      <div className=''>

        <div className="w-full bg-black bottom-0 md:py-16 py-6 md:mt-12 mt-8">
          <Image alt='adey logo ' src={logo} className='md:w-32 w-28 md:h-40 h-32 mx-auto'/> 
        </div>

        <div className='bg-cover bg-center md:w-auto w-full md:h-96 h-72'
          style={{
            backgroundImage: `url("/images/about2.png")`, 
          }}>
            <h3 className='flex justify-center items-center md:text-2xl md:pt-36 pt-16 md:px-32 px-4 text-2xl font-semibold text-gray-300'>"We believe every gift should hold a deeper meaning—a reflection of love, care, and cherished memories. That’s why we are dedicated to crafting personalized gifts that speak from the heart. Whether it’s a timeless keepsake or a thoughtful token, our creations are designed to make your beloveds feel truly special. Because every moment deserves to be celebrated with a gift that matters."</h3>
        </div>

        <div className="w-full bg-yellow-400 bottom-0 md:py-16 py-6">
          <Image alt='adey logo ' src={logo} className='md:w-32 w-28 md:h-40 h-32 mx-auto'/> 
          <h1></h1>
        </div>

    </div>

    <SectionTitle  title={'Our Teams'} className="mt-5" />

    <div className='md:mx-40 mx-5 grid md:grid-cols-3 md:gap-8 gap-2'>
        {testimonials.map((tesitmonial) => (
          <div key={tesitmonial.id}>
            <div className='md:p-5 text-center'>
              <h1 className='font-bold text-xl'>{tesitmonial.heading}</h1>
              <h3 className='font-thin'>{tesitmonial.content}</h3>
              {/* <br/> */}
              <div className='md:pt-6 pt-3'>
                <h1 className='font-black'>{tesitmonial.name}</h1>
                <h2 className=''>{tesitmonial.role}</h2>
              </div>
            </div>
        </div>
        ))}
      </div>

    </div>
  )
}

export default About