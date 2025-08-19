'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
  getProductById,
  selectProductById,
  selectLoading,
  updateProduct,
} from '@/store/productSlice';
import { Bars } from 'react-loader-spinner';

const EditProduct = ({ params }) => {
  const { productId } = params;
  const dispatch = useDispatch();
  const router = useRouter();

  const product = useSelector(selectProductById);
  const loading = useSelector(selectLoading);

  // Local state
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  // Fetch product on mount
  useEffect(() => {
    if (productId) {
      dispatch(getProductById(productId));
    }
  }, [dispatch, productId]);

  // Populate form when product is loaded
  useEffect(() => {
    if (product) {
      setImage(product.image || '');
      setName(product.name || '');
      setCategory(product.category || '');
      setPrice(product.price || '');
    }
  }, [product]);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProductData = {
      productId: product._id, // ✅ Use DB _id, not just params
      productData: {
        name,
        category,
        image,
        price,
      },
    };

    try {
      const resultAction = await dispatch(updateProduct(updatedProductData));

      if (updateProduct.fulfilled.match(resultAction)) {
        toast.success('Product updated successfully!');
        router.push('/product/view');
      } else {
        toast.error('Failed to update product');
      }
    } catch (err) {
      toast.error('Error updating product');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-white flex justify-center items-center">
        <Bars
          height="40"
          width="40"
          color="#FF7F00"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-start pl-10 items-center bg-white py-5">
      <div className="max-w-md px-4 py-8 bg-white">
        <h1 className="text-black font-bold text-2xl mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-orange-500 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-orange-500 font-bold mb-2">
              Category
            </label>
            <input
              id="category"
              className="appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-orange-500 font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-orange-500 font-bold mb-2">
              Image
            </label>
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
              className="w-full p-2 rounded-md"
            />
          </div>
          {image && (
            <div>
              <img src={image} alt="Preview" className="w-full p-2 rounded-md" />
            </div>
          )}

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="mt-6 bg-black hover:bg-orange-500 hover:text-black text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 tracking-wider"
            >
              Done
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
