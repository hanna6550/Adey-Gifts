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
  image: {
    type: String,
    require: true,
  },
  review: {
    type: String,
    require: true,
  },
  instock: {
    type: String,
    require:true,
  },
  price: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
