import React from 'react'
import Image from 'next/image'
import Img1 from "@/public/images/5book.jpg"
import Img2 from "@/public/images/glass.jpg"
import Img3 from "@/public/images/wed.jpg"
import Img4 from "@/public/images/6glass.jpg"
import Img5 from "@/public/images/2leth.jpg"
import Img6 from "@/public/images/fam.jpg"
import Img7 from "@/public/images/key2.jpg"
import Img8 from "@/public/images/family.jpg"

const OurProduct = [
  {
    id: 1,
    imageSrc: Img1,
    Title:'NoteBook',
  },
  {
    id: 2,
    imageSrc: Img2,
    Title:'Photo Phrames',
  },
  {
    id: 3,
    imageSrc: Img3,
    Title:'Lether...',
  },
  {
    id: 6,
    imageSrc: Img3,
    Title:'NoteBook',
  },
  {
    id: 4,
    imageSrc: Img1,
    Title:'Photo Phrames',
  },
  {
    id: 5,
    imageSrc: Img3,
    Title:'Lether...',
  },
];

function Sec2() {
  return (
    <div>
    <div className="md:mt-16 mt-9 md:mb-14 mb-7">
    <h1 className="text-center md:font-bold font-medium md:text-5xl text-2xl">Our Products</h1>
    <h1 className='h-1 md:w-14 w-10 bg-yellow-300 md:mt-4 mt-2 mx-auto my-auto'></h1>
    </div>


    <div className="md:mx-20 mx-2 md:mt-5 mt-3 md:mb-10 mb-5">
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-3">
      {/* {OurProduct.map((items) => (
        <div 
        key={items.id}
        >
        <div className="rounded">
        <Image alt='adey photo ' src={items.imageSrc} className='h-full w-fit' />
        <h1 className="text-center">{items.Title}</h1>
        </div> */}

        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img1} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Note Book</h1>
        </div>
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img3} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Leather Print</h1>
        </div>
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img2} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Glass Print</h1>
        </div> 
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img6} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Couch Pillow</h1>
        </div>
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img4} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Glass Print</h1>
        </div>
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img5} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Leather Print</h1>
        </div>
        <div className="border border-gray-400 rounded-3xl">
        <Image alt='adey photo' src={Img7} className='md:h-96 h-52 w-full rounded-t-3xl' />
        <h1 className="text-center font-medium md:text-2xl text-xl md:py-3 py-2">Key Chain</h1>
        </div>
        {/* </div> */}
      {/* ))} */}
      </div>

      <div className="md:mt-10 mt-6 md:mb-16 mb-10 flex justify-center">
        <button className='md:px-8 px-6 md:py-3 py-2 md:text-2xl text-xl font-semibold border-yellow-300 border text-center text-black rounded-xl'>
              See More
        </button>
      </div>

      </div>
    </div>
  )
}

export default Sec2