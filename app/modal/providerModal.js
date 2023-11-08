import mongoose from "mongoose";
import { Schema } from "mongoose";

const providerModal = Schema({
  name: String,
  title: String,
  img: String,
  alt: String,
  description: String,
  price: Number,
  offer: Number,
  rating: Number,
  review: String,
});
//modal
export const provider =
  mongoose.models.provider || mongoose.model("provider", providerModal);
