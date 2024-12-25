import React from 'react'
import Image from 'next/image'
import SectionTitle from '../sectionTitle';

import Img1 from "@/public/images/5book.jpg"
import Img2 from "@/public/images/glass.jpg"
import Img5 from "@/public/images/wed.jpg"
import Img4 from "@/public/images/6glass.jpg"
import Img3 from "@/public/images/2leth.jpg"
import Img6 from "@/public/images/fam.jpg"
import Img7 from "@/public/images/key2.jpg"
import Img8 from "@/public/images/family.jpg"
import Img9 from "@/public/images/bracelat.jpg"
import Img10 from "@/public/images/canndle.jpg"
import Img11 from "@/public/images/puzz.jpg"
import Img12 from "@/public/images/wallet.jpg"

const OurProduct = [
  {
    id: 1,
    imageSrc: Img1,
    title:'NoteBook',
  },
  {
    id: 2,
    imageSrc: Img2,
    title:'Glass Frames',
  },
  {
    id: 3,
    imageSrc: Img3,
    title:'Leather Frames',
  },
  // {
  //   id: 4,
  //   imageSrc: Img4,
  //   title:'Glass Frames',
  // },
  // {
  //   id: 5,
  //   imageSrc: Img5,
  //   title:'Leather Frames',
  // },
  {
    id: 6,
    imageSrc: Img6,
    title:'Couch Pillows ',
  },
  {
    id: 7,
    imageSrc: Img7,
    title:'Custom Key Chain',
  },
  {
    id: 8,
    imageSrc: Img9,
    title:'Bracelet',
  },
  {
    id: 9,
    imageSrc: Img8,
    title:'Glass Photo Frames',
  },
  {
    id: 10,
    imageSrc: Img10,
    title:'Photo Printed Candles',
  },
  {
    id: 11,
    imageSrc: Img11,
    title:'Photo Printed Puzzles',
  },
  {
    id: 12,
    imageSrc: Img12,
    title:'Men/Women Wallets',
  },
];

function Sec2() {
  return (
    <div>
      <SectionTitle  title={'Our Products'} className="mt-5" />

    <div className="md:mx-20 mx-1 md:mt-5 mt-3 md:mb-10 mb-5">
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-3">

      {OurProduct.map((products) => (
          <div key={products.id}>
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={products.imageSrc} className='md:h-80 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-semibold md:text-2xl text-xl md:py-5 py-2">{products.title}</h1>
        </div>
        </div>
      ))}

      </div>

      <div className="md:mt-10 mt-6 md:mb-16 mb-10 flex justify-center">
        <a href='/products' className='md:px-8 px-6 md:py-3 py-2 md:text-2xl text-xl font-semibold border-yellow-300 border text-center text-black rounded-xl'>
              See More
        </a>
      </div>

      </div>
    </div>
  )
}

export default Sec2