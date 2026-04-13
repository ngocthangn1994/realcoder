import { Schema, model } from 'mongoose';

const searchFilterSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  name: String,
  roleTitles: [String],
  altTitles: [String],
  locations: [String],
  keywords: [String],
  notes: String,
  isPrimary: { type: Boolean, default: false },
  archived: { type: Boolean, default: false }
}, { timestamps: true });

export const SearchFilter = model('SearchFilter', searchFilterSchema);
