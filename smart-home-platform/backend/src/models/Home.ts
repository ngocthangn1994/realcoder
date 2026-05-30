import { Document, Schema, Types, model } from 'mongoose';

export interface IHome extends Document {
  name: string;
  address?: string;
  ownerId: Types.ObjectId;
}

const homeSchema = new Schema<IHome>(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

export const Home = model<IHome>('Home', homeSchema);
