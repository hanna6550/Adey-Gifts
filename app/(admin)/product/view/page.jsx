'use client';
import React, { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  selectAllProducts,
  selectLoading,
  deleteProduct,
} from '@/store/productSlice';

const ViewProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getAllProducts());
    });
  };

  if (loading) {
    return (
      <div className=' h-screen bg-white flex justify-center items-center'>
        <Bars
          height='40'
          width='40'
          color='#FF7F00'
          ariaLabel='bars-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className='bg-white flex justify-center items-center py-10'>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {products.map((item) => (
          <div
            key={item._id}
            className='h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow'
          >
            <Image
              className='w-[400px] h-[250px] rounded-t-lg'
              src={item.image}
              width={500}
              height={500}
              alt='the image'
            />
            <div className='p-5'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                {item.name}
              </h5>
              <div className='h-24 overflow-hidden'>
                <p className='text-sm mb-3 font-normal text-gray-700 overflow-hidden overflow-ellipsis'>
                  {item.category}
                </p>
                <p>{item.price}</p>
              </div>

              <div className='flex justify-between gap-10 mt-4'>
                <Link href={`/product/edit/${item._id}`} className=''>
                  <FaEdit
                    size={25}
                    className='text-gray-500 hover:text-gray-700'
                  />
                </Link>
                <MdDelete
                  size={25}
                  onClick={() => handleDelete(item._id)}
                  className='text-gray-500 hover:text-gray-700 cursor-pointer'
                />
                {/* <button
                  onClick={() => handleDelete(item._id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProduct;
