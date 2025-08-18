import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,
  newProductAdded: null,
  getProductByIdStatus: '',
  selectedProduct: null,
  productEdited: null,
};

export const addProduct = createAsyncThunk(
  'product/add',
  async (productData, thunkAPI) => {
    try {
      const res = await axios.post('/api/product', productData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getAllProducts = createAsyncThunk(
  'product/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/product');
      return res.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const getProductById = createAsyncThunk(
  'product/getProductById',
  async (productId, thunkAPI) => {
    try {
      console.log(productId);
      const response = await axios.get(`/api/product/${productId}`);
      // console.log(response.data.product);
      return response.data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const updateProduct = createAsyncThunk(
  'posts/updateProduct',
  async ({ productId, productData }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/product/${productId}`, productData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'posts/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      await axios.delete(`/api/product/${productId}`);
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue( 
        error.response.data.errors || error.message || error.toString()
      );
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.newProductAdded = null;
      state.productEdited = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.newProductAdded = 'pending';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
        state.newProductAdded = 'success';
      })
      .addCase(addProduct.rejected, (state) => {
        state.loading = false;
        state.newProductAdded = 'failed';
      })
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.getProductByIdStatus = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.getProductByIdStatus = 'success';
        state.products = [action.payload];
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.getProductByIdStatus = 'failed';
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.productEdited = 'pending';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
        state.productEdited = 'success';
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.productEdited = 'failed';
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((product) => product._id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;

// Selectors
export const selectAllProducts = (state) => state.product.products;
export const selectLoading = (state) => state.product.loading;
export const selectProductById = (state) => state.product.products[0];
export const selectNewProductAdded = (state) => state.product.newProductAdded;
export const selectProductEdited = (state) => state.product.productEdited;
