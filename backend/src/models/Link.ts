import { Schema, model, type Document } from 'mongoose';

export interface ILink extends Document {
  title: string;
  slug: string;
  destinationUrl: string;
  description?: string;
  tags: string[];
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}

const linkSchema = new Schema<ILink>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    destinationUrl: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    tags: {
      type: [String],
      default: []
    },
    clicks: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export const Link = model<ILink>('Link', linkSchema);
