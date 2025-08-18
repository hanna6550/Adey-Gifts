import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // review: {
  //   type: String,
  //   require: true,
  // },
  // instock: {
  //   type: String,
  //   require:true,
  // },
   category: {
    type: String,
    required:true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
