import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://qasimameerdk:qasim@cluster0.aezdobe.mongodb.net/trackingApp?retryWrites=true&w=majority",
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
