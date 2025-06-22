/*  eslint-env node  */

import mongoose from "mongoose";

const url =
  "mongodb+srv://Armm:armm1234@cluster0.arjq0df.mongodb.net/armmItem?retryWrites=true&w=majority&appName=Cluster0";
const mongoDbConnect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");
  } catch (err) {
    console.log(" Error connecting to MongoDB:", err.message);
  }
};

export default mongoDbConnect;
