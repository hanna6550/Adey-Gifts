import React from 'react'
import Image from 'next/image'
import { FaFilter } from "react-icons/fa6";

import {RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
{/* <RiArrowDropUpLine />
<RiArrowDropDownLine /> */}

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

const productsData = [
  {
    id: 1,
    imageSrc: Img1,
    title:'NoteBook',
    price:'700'
  },
  {
    id: 2,
    imageSrc: Img2,
    title:'Glass Frames',
    price:'700'
  },
  {
    id: 3,
    imageSrc: Img3,
    title:'Leather Frames',
    price:'700'
  },
  {
    id: 4,
    imageSrc: Img4,
    title:'Glass Frames',
    price:'700'
  },
  {
    id: 5,
    imageSrc: Img5,
    title:'Leather Frames',
    price:'700'
  },
  {
    id: 6,
    imageSrc: Img6,
    title:'Couch Pillows ',
    price:'700'
  },
  {
    id: 7,
    imageSrc: Img7,
    title:'Custom Key Chain',
    price:'700'
  },
  {
    id: 8,
    imageSrc: Img8,
    title:'Glass Photo Frames',
    price:'700'
  },
  {
    id: 9,
    imageSrc: Img9,
    title:'Bracelet',
    price:'700'
  },
  {
    id: 10,
    imageSrc: Img10,
    title:'Photo Printed Candles',
    price:'700'
  },
  {
    id: 11,
    imageSrc: Img11,
    title:'Photo Printed Puzzles',
    price:'700'
  },
  {
    id: 12,
    imageSrc: Img12,
    title:'Men/Women Wallets',
    price:'700'
  },
];

function Products() {
  return (
    <div>
      <div className='bg-black md:mx-20 mx-5'>
        <form class="md:px-40 px-5 md:py-10 py-5">   
            <div class="flex">
            <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
            <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg></button>
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                </li>
                </ul>
            </div>
            <div class="relative w-full">
                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>
        </form>

      </div>



    <div className='grid md:grid-cols-6 grid-cols-1 md:gap-0 gap-4 mt-5 md:mx-10 mx-2'>
      <div className='col-span-2 md:mr-10 mr-2 grid grid-cols-7 gap-0'>
        <div className='col-span-6'>
          <h1 className='font-semibold text-4xl text-gray-500'><FaFilter /> <span>Filters</span></h1>
          <hr className='h-2 w-full md:my-5 my-2' />
          <h1 className='font- text-xl'>Category  <span className=' text-xl md:pr-5 pr-2'>^</span> </h1>
        </div>
        <div className="ml-10 h-20 md:h-full w-1 bg-yellow-300 mx-"></div>
      </div>
      
      <div className='col-span-4 '>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-3 '>
        {productsData.map((products) => (
          <div key={products.id} >
          <div className='bg-gray-200 rounded-2xl'>
            <Image src={products.imageSrc} className='w-full md:h-56 h-52 rounded-t-2xl'/>
            <div className='py-3 pl-2'>
              <h1 className='font-semibold md:text-xl text-lg'>{products.title}</h1>
                <div className='font-sans italic'>5.0 (10 Reviewss) <span className='flex justify-end pr-1 text-green-500 font-black'>In Stock</span></div>
              <h3 className='font-semibold font-sans md:text-2xl text-xl'>{products.price}</h3>
            </div>
          </div>
          </div>
          ))}
          </div>
        </div>

    </div>


    </div>
  )
}

export default Products