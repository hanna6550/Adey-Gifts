'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/store/productSlice';
import { toast, ToastContainer } from 'react-toastify';
import { selectNewProductAdded, reset } from '@/store/productSlice';
import FileBase64 from 'react-file-base64';

const AddProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory]= useState('');
  // const [review, setReview] = useState('');
  // const [instock, setInstock] = useState('');
  const [price, setPrice] = useState('');
  const newProductAdded = useSelector((state) => selectNewProductAdded(state));
  const id = useRef(null);
//   const handleImageChange = (e) => {
//     setImage(e.target.value);
//   };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // const handleReviewChange = (e) => {
  //   setReview(e.target.value);
  // };
  // const handleInstockChange = (e) => {
  //   setInstock(e.target.value);
  // };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      image,
      name,
      category,
      // review,
      // instock,
      price,
    };

    dispatch(addProduct(cardData));
    // console.log(cardData);
    // router.push('/product/view');
  };
  useEffect(() => {
    if (newProductAdded === 'pending') {
      id.current = toast.loading('Adding product...'); // Display loading toast
    } else {
      // Dismiss loading toast if it's already shown
      if (id.current !== null) {
        toast.dismiss(id.current);
      }
    }

    if (newProductAdded === 'success') {
      toast.update(id.current, {
        render: 'Product added successfully',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
      setImage('');
      setName('');
      setCategory('');
      // setReview('');
      // setInstock('');
      setPrice('');
    }
    if (newProductAdded === 'failed') {
      toast.update(id.current, {
        render: 'Failed to add Product',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
  }, [newProductAdded]);
  return (
    <div className='flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Add Product</h1>
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
              htmlFor='category'
              className='block text-orange-500 font-bold mb-2'
            >
              Category
            </label>
            <input
              id='review'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter review'
              value={category}
              onChange={handleCategoryChange}
              rows={8}
              required
            />
          </div>
          {/* <div className='mb-4'>
            <label
              htmlFor='Review'
              className='block text-orange-500 font-bold mb-2'
            >
              Review
            </label>
            <input
              id='review'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter review'
              value={review}
              onChange={handleReviewChange}
              rows={8}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='instock'
              className='block text-orange-500 font-bold mb-2'
            >
              Instock
            </label>
            <input
              id='instock'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Author'
              value={instock}
              onChange={handleInstockChange}
              rows={8}
              required
            />
          </div> */}
          <div className='mb-4'>
            <label
              htmlFor='price'
              className='block text-orange-500 font-bold mb-2'
            >
              Price
            </label>
            <input
              id='price'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Price'
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
              disabled={newProductAdded === 'pending'}
            >
              {newProductAdded === 'pending' ? 'Posting...' : 'POST'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;