import React from 'react'
import Image from 'next/image'
import Img1 from '@/public/images/key.jpg'
import Img2 from '@/public/images/wed.jpg'
import Img3 from '@/public/images/6glass.jpg'
import Img4 from '@/public/images/3wood.jpg'
import Img5 from '@/public/images/fam.jpg'
import Img6 from '@/public/images/4glass.jpg'
function Sec3() {
  return (
    <div>
        <div className="md:mx-10 mx-5 bg-black rounded-2xl md:py-7 py-4"> 
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-6 md:pl-16 pl-6">
          <div className="md:col-span-1 text-yellow-300">
            <h1 className="md:text-5xl text-3xl md:font-bold font-semibold">Unusual Gifts</h1>
            <h3 className="md:text-xl text-lg md:py-5 py-3">Our unique gifts collection</h3>
            <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-white rounded-xl'>
            Shop now
            </button>
          </div>

          <div className="md:col-span-2 ">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-4 md:pl-0 pl-8">
           <div><Image alt='adey photo ' src={Img4} className='md:h-40 h-36 md:w-60 w-52 rounded-2xl' /></div>
           <div><Image alt='adey photo ' src={Img2} className='md:h-40 h-36 md:w-60 w-52 rounded-2xl' /></div>
           <div><Image alt='adey photo ' src={Img3} className='md:h-40 h-36 md:w-60 w-52gi rounded-2xl' /></div>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sec3