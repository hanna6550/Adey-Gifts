import connectMongoDB from '@/utils/db';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const {  image, name, category, price } = await request.json();
    await connectMongoDB();
    await Product.create({ image, name, category, price});
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Topic Creation failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { message: 'failed to get products' },
      { status: 500 }
    );
  }
}
