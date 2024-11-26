import mongoose from "mongoose";

export default async function dbConnect() {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connection Success");
    return true;
  } catch (error) {
    console.log("Connection Failed", error);
  }
}
