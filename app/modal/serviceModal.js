import mongoose from "mongoose";
import { Schema } from "mongoose";

const serviceModal = Schema({
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
export const services =
  mongoose.models.prov || mongoose.model("provider", serviceModal);
