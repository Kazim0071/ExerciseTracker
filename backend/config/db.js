import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(`Unable to connect: ${err}`);
  }
};

export default ConnectDb;
