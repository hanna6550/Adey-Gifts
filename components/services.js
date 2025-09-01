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
        'Combine style and sentiment with our custom leather prints. Your photo is carefully printed onto high-quality leather, creating a sophisticated and durable keepsake. Ideal for home décor or as a premium gift, this unique item exudes class and personal charm.',
    },
    {
      id: 2,
      imageSrc: Image1,
      heading: 'Glass Prints',
      description:
        'Transform your favorite photo into a piece of timeless art with our custom glass prints. Vibrant, high-definition printing on crystal-clear glass brings your memories to life in stunning detail. Sleek and elegant, these glass prints are perfect for decorating any space or gifting on special occasions',
    },
    {
      id: 3,
      imageSrc: Image1,
      heading: 'NoteBooks',
      description:
        'Turn your cherished memories into a daily source of inspiration with our custom photo print notebooks. Perfect for jotting down thoughts, plans, or creative ideas, these notebooks feature a durable cover showcasing your favorite photo in stunning clarity. Ideal as a gift for students, writers, or professionals, it’s a functional yet deeply personal keepsake.',
      },
    {
      id: 4,
      imageSrc: Image1,
      heading: 'Puzzles',
      description:
        'Piece together your memories with our custom photo puzzles. Perfect for family fun or gifting, these puzzles transform your favorite photo into a unique, interactive keepsake. Available in various sizes, it’s a delightful way to relive your special moments',
    },
    {
      id: 5,
      imageSrc: Image1,
      heading: 'Pillows',
      description:
        'Add a cozy touch to your memories with our custom photo pillows. Soft, durable, and printed with your favorite image, these personalized pillows make thoughtful gifts and stylish home accents. Perfect for snuggling up with moments that matter.',
    },
    {
      id: 6,
      imageSrc: Image1,
      heading: 'Key Chains',
      description:
        'Carry your favorite memories everywhere with our custom photo keychains. Compact and stylish, these personalized keychains feature your chosen image printed on a durable surface. Perfect for daily use or as a thoughtful gift that keeps loved ones close.',
    },
    {
      id: 7,
      imageSrc: Image1,
      heading: 'Men/Women Wallets',
      description:
        'Make every day personal with our custom photo wallets. Crafted from premium materials, these wallets showcase your favorite image, blending functionality with a heartfelt touch. A practical and unique gift for loved ones that’s as stylish as it is meaningful',
    },
    {
      id: 7,
      imageSrc: Image1,
      heading: 'Bracelate',
      description:
        'Keep your loved ones close with our custom photo bracelets. Featuring a beautifully engraved charm with your favorite image, this personalized accessory is both elegant and meaningful. Perfect as a gift for any occasion or a treasured piece for yourself.',
    },
  ];
  

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
        <div className='flex justify-center md:gap-8 md:mx-20 ' >
          <div>
            <video height={500} width={400} controls   poster="/video/video_thumbnail.jpg" className=" rounded-lg shadow-md">
                <source src="/video/video_testimonial1.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <video height={500} width={400} controls preload="none" className="rounded-lg shadow-md">
                <source src="/video/video_testimonial2.mp4" type="video/mp4" />
            </video>
          </div>
  
</div>



       
        
    </div>
    
    </div>
  )
}

export default Services