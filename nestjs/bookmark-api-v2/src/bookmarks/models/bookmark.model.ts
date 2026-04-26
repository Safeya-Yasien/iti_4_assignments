import { Schema } from 'mongoose';

export interface IBookmark {
  title: string;
  description?: string;
}

export const BookmarkSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);
