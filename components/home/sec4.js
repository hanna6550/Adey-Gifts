import React from 'react'
import Image from 'next/image'
import SectionTitle from '../sectionTitle';

import Img1 from "@/public/images/5book.jpg"
import Img2 from "@/public/images/glass.jpg"
import Img3 from "@/public/images/wed.jpg"
import Img4 from "@/public/images/6glass.jpg"
import Img5 from "@/public/images/2leth.jpg"
import Img6 from "@/public/images/fam.jpg"
import Img7 from "@/public/images/key2.jpg"
import Img8 from "@/public/images/family.jpg"
import Img9 from '@/public/images/grad.jpg'
import Img10 from '@/public/images/grad2.jpg'
import Img11 from '@/public/images/grad1.jpg'
import Img12 from '@/public/images/bd.jpg'
import Img13 from '@/public/images/holy1.jpg'

function Sec4() {
  return (
    <div>
    <SectionTitle  title={'Relevant Gifts'} className="mt-5" />

    <div className="md:mx-20 mx-5">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
            <div className="grid grid-cols-2 gap border border-gray-400 rounded-3xl">
                <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Graduation</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img11} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 border border-gray-400 rounded-3xl">
            <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Weddings</h1>
                    <a href='/contact' className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </a>
                </div>
                <div>
                    <Image src={Img3} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 mt-8">
            <div className="grid grid-cols-2 gap border border-gray-400 rounded-3xl">
                <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Birthdays</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img12} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 border border-gray-400 rounded-3xl">
            <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Anniversary</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img2} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-0 border border-gray-400 rounded-3xl">
            <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Family</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img8} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-0 border border-gray-400 rounded-3xl">
            <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Friend Ship</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img10} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-0 border border-gray-400 rounded-3xl">
            <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Holly Days</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img13} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-0 border border-gray-400 rounded-3xl">
            <div className="md:pl-12 pl-5 md:pt-10 pt-8">
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-8 pb-5">Special Events</h1>
                    <button className='py-2 px-3 md:text-xl text-base border border-yellow-300 text-black rounded-xl'>
                        Shop now
                    </button>
                </div>
                <div>
                    <Image src={Img7} className="rounded-r-3xl w-full md:h-52 h-40"/>
                </div>
            </div>
        </div>
        
    </div>

    </div>
  )
}

export default Sec4