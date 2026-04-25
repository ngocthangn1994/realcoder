import { Schema, model, type Document } from 'mongoose';

export interface LinkDocument extends Document {
  title: string;
  slug: string;
  destinationUrl: string;
  description?: string;
  tags: string[];
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}

const linkSchema = new Schema<LinkDocument>(
  {
    title: {
      type: String,
      trim: true,
      default: ''
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
      trim: true,
      default: ''
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
  {
    timestamps: true
  }
);

linkSchema.index({ slug: 1 }, { unique: true });

export const Link = model<LinkDocument>('Link', linkSchema);
