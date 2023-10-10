import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI! + process.env.DB_NAME);
  } catch (error) {
    throw new Error("Connection failed!");
  }
}

export default dbConnect;
