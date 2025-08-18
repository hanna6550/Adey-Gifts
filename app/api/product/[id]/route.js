import connectMongoDB from '@/utils/db';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, image, category, price } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(
    id,
    {
      image: image,
      name: name,
      category: category,
      // review: review,
      // instock: instock,
      price: price,
    },
    { new: true }
  );
  return NextResponse.json({ message: 'Product updated' }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Product deleted' }, { status: 200 });
}
