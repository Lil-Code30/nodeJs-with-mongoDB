import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Error when trying to connect to MongoDB : ", err);
    process.exit();
  }
};
