import React from 'react'
import Image from 'next/image'
import Image1 from '@/public/images/circleImg.png'
import SectionTitle from './sectionTitle';
import { ImGift } from "react-icons/im";

function Services() {

  const ServicesData = [
    {
      id: 1,
      imageSrc: Image1,
      heading: 'Leather Frames',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
    {
      id: 2,
      imageSrc: Image1,
      heading: 'Glass Prints',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
    {
      id: 3,
      imageSrc: Image1,
      heading: 'Key Chains',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
    {
      id: 4,
      imageSrc: Image1,
      heading: 'Puzzles',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
    {
      id: 5,
      imageSrc: Image1,
      heading: 'Pillows',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
    {
      id: 6,
      imageSrc: Image1,
      heading: 'NoteBooks',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
    {
      id: 7,
      imageSrc: Image1,
      heading: 'Men/Women Wallets',
      description:
        'Lorem ipsum dolor sit amet, connsectetor odipiscinng elit. Accumsoan at fringiling imperdiet vehicular tincidut mauris malesuada.',
    },
  ];

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
    <div >
      <div className='md:mx-10 mx-5 md:mt-8 bg-cover bg-center w-auto md:h-96 h-72 md:rounded-2xl rounded-sm'
      style={{
        backgroundImage: `url("/images/bg_service.png")`, 
      }}>
       <div className='md:pl-12 pl-5 md:pb-20 pb-8 md:pt-12 pt-6'>
       <h1 className="md:text-7xl text-5xl text-yellow-400 md:pt- pt-4">Services</h1>
       <h1 className='h-1 md:w-14 w-8 bg-white  md:mt-6 mt-2 md:mb-10 mb-4'></h1>
       <h3 className="md:text-2xl text-base text-gray-300 font-light md:mt-10 mt-6 md:pr-96 pr-6">Discover a delightful array of unique and handcrafted gifts perfect for <br/> any occasion. A boutique collection of quirky and charming gifts that add a touch of magic <br/> to every celebration.</h3>
       </div>
    </div>

    <div className='md:mx-20 mx-8 md:my-10 my-8'>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-5'>
        {ServicesData.map((services) => (
          <div key={services.id}>
          <div className='bg-yellow-200 text-center md:px-14 px-6 md:pb-8 pb-4 md:pt-5 pt-2 rounded-2xl'>
            <div className='w-32 h-32 bg-white mx-auto my-auto rounded-full'>
              <ImGift className='text-red-500 mx-auto pt-8 text-8xl' />
              {/* <Image src={services.imageSrc} alt='services' className='mx-auto my-auto pt-7' /> */}
            </div>
            <h2 className='md:text-2xl text-xl font-semibold md:py-3 py-2'>{services.heading}</h2>
            <p className='text-gray-600'>{services.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
    
    <div>
      <SectionTitle  title={'Testimonials'} className="mt-5" />
       
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
    
    </div>
  )
}

export default Services