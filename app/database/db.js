import mongoose from "mongoose";
import { MONGO_URL } from "../config";

export const connectDatabase = () => {
  try {
    mongoose.connect(MONGO_URL, {
      dbName: "erequirement",
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connect database");
    console.log(error);
  }
};
