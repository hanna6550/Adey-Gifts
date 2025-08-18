'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
  getProductById,
  selectProductById,
  selectProductEdited,
  selectLoading,
  updateProduct,
  reset,
} from '@/store/productSlice';
import { Bars } from 'react-loader-spinner';

const editProduct = ({ params }) => {
  const { productId } = params;
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(productId);
  const product = useSelector(selectProductById);
  console.log(product);
  const loading = useSelector(selectLoading);
  const productEdited = useSelector(selectProductEdited);
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    // const [review, setReview] = useState('');
    // const [instock, setInstock] = useState('');
    const [price, setPrice] = useState('');

  useEffect(() => {
    if (product) {
      setImage(product.image || '');
      setName(product.name || '');
      setCategory(product.category || '');
      // setReview(product.review || '');
      // setInstock(product.instock || '');
      setPrice(product.price || '');
    }
  }, [product]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // const handleReviewChange = (e) => {
  //   setContent(e.target.value);
  // };
  // const handleInstockChange = (e) => {
  //   setAuthor(e.target.value);
  // };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProductData = {
      productId: productId,
      productData: {
        name: name,
        category: category,
        // review: review,
        image: image,
        // instock: instock,
        price: price,
      },
    };

    dispatch(updateProduct(updatedProductData));
    setImage('');
    setName('');
    setCategory('');
    // setReview('');
    // setInstock('');
    setPrice('');
    router.push('/product/view');
  };
  const id = useRef(null);


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
    <div className=' flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Edit Product</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
             <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Product name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Category'
              className='block text-orange-500 font-bold mb-2'
            >
              Category
            </label>
            <input
              id='category'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Category'
              value={category}
              onChange={handleCategoryChange}
              rows={8}
              required
            />
          </div>
          
          <div className='mb-4'>
            <label
              htmlFor='price'
              className='block text-orange-500 font-bold mb-2'
            >
              Price
            </label>
            <input
              id='content'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter content'
              value={price}
              onChange={handlePriceChange}
              rows={8}
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block text-orange-500 font-bold mb-2'
            >
              Image URL
            </label>
            <FileBase64
              type='file'
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
              className='w-full p-2 rounded-md'
            />
          </div>
          <div>
            <img src={image} alt='' className='w-full p-2 rounded-md' />
          </div>
          <div className=''>
            <button
              type='submit'
              className='mt-6 bg-black hover:bg-orange-500 hover:text-black text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 tracking-wider'
              disabled={productEdited === 'pending'}
            >
              {productEdited === 'pending' ? 'Editing...' : 'Done'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default editProduct;
