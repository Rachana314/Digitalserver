import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;   // ✅ THIS LINE IS IMPORTANT