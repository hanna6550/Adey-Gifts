import React from 'react'
import Image from 'next/image'
import Img1 from "@/public/images/notebook.png"
import Img2 from "@/public/images/glass.png"
import Img3 from "@/public/images/wedding.png"

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
        <div className="mx-20 mt-12 mb-14">
    <h1 className="text-center font-bold text-3xl">Our Products</h1>
    <h1 className='h-1 md:w-14 w-10 bg-yellow-300 md:mt-4 mt-2 mx-auto my-auto'></h1>
    </div>


    <div className="mx-20 mt-5 mb-10">
      <div className="grid grid-cols-3 gap-5 ">
      {OurProduct.map((items) => (
        <div 
        key={items.id}
        >
        <div className="rounded">
        <Image alt='adey photo ' src={items.imageSrc} className='h-full w-fit' />
        <h1 className="text-center">{items.Title}</h1>
        </div>
        {/* <div className="border border-gray-900 rounded-3xl">
        <Image alt='adey photo' src={Img2} className='h-80 w-60' />
        <h1 className="text-center">NoteBook</h1>
        </div>
        <div className="border border-gray-900 rounded-3xl">
        <Image alt='adey photo' src={Img1} className='h-80 w-60' />
        <h1 className="text-center">NoteBook</h1>
        </div> */}
        </div>
      ))}
      </div>

      <div className="mt-10 mb-16 mx-auto">
        <button className='px-8 py-2 text-xl font-semibold border-yellow-300 border text-center text-black '>
              See More
        </button>
      </div>

      </div>
    </div>
  )
}

export default Sec2