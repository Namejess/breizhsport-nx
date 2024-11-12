import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  inStock: { type: Boolean, default: true },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
