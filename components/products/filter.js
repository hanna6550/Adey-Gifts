'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaFilter } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllProducts,
  selectAllProducts,
  selectLoading,
} from '@/store/productSlice';
import { Bars } from 'react-loader-spinner';

function Filter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);

  // 🔥 Extract unique categories from products
  const categories = [...new Set(products.map(item => item.category))];

  // 🔥 Filtering logic
  const filteredProducts =
    selectedFilters.length > 0
      ? products.filter((item) => selectedFilters.includes(item.category))
      : products;

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(selectedFilters.filter((el) => el !== selectedCategory));
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  if (loading) {
    return (
      <div className='h-screen bg-white flex justify-center items-center'>
        <Bars height='40' width='40' color='#FF7F00' visible={true} />
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-9 grid-cols-1 md:gap-0 gap-4 mt-5 md:mx-10 mx-2'>
      {/* Sidebar */}
      <div className='col-span-2 md:mr-10 mr-2 grid grid-cols-7 gap-0'>
        <div className='col-span-6'>
          <div className='flex justify-start gap-6'>
            <h1 className='pt-2'><FaFilter size={28} /></h1>
            <h1 className='text-3xl font-bold text-gray-400'>Filters</h1>
          </div>
          <hr className='h-1 w-full md:my-4 my-2 bg-gray-500' />

          <div>
            <div className='flex items-center justify-between cursor-pointer' onClick={toggleDropdown}>
              <h1 className='text-3xl font-extrabold md:mb-5 mb-2'>Category</h1>
              {isOpen ? <RiArrowDropDownLine size={45} /> : <RiArrowDropUpLine size={45} />}
            </div>

            {isOpen && (
              <div className="grid grid-cols-2 md:grid-cols-1 md:gap-0 gap-3">
                {categories.map((category, idx) => (
                  <div
                    key={`filters-${idx}`}
                    onClick={() => handleFilterButtonClick(category)}
                    className="flex items-center md:my-2 my-1 space-x-2 cursor-pointer text-gray-600 md:text-xl text-base font-bold"
                  >
                    {selectedFilters.includes(category) ? (
                      <MdCheckBox className="text-yellow-400 mr-2" size={24} />
                    ) : (
                      <MdCheckBoxOutlineBlank className="mr-2" size={24} />
                    )}
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="ml-10 h-20 md:h-full w-1 bg-yellow-300"></div>
      </div>

      {/* Products */}
      <div className='col-span-7'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
          {filteredProducts.map((item) => (
            <div key={item._id}>
              <div className='bg-gray-200 rounded-2xl'>
                <Image src={item.image} width={100} height={10} className='w-full md:h-56 h-52 rounded-t-2xl' />
                <div className='py-3 pl-2'>
                  <h1 className='font-bold md:text-2xl text-lg'>{item.name}</h1>
                  <div className='font-sans italic'>
                    5.0 (10 Reviews)
                    <span className='flex justify-end pr-1 text-green-500 font-black'>In Stock</span>
                  </div>
                  <h3 className='font-semibold font-sans md:text-2xl text-xl'>{item.price}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filter;