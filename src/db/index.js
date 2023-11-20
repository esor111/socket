import mongoose from "mongoose";

export let dbInstance = undefined;

const connectDB = async () => {
  try {
    const uri = 'mongodb://localhost:27017/socket';
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    dbInstance = mongoose.connection;
    console.log(`\n☘️  MongoDB Connected!\n`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
