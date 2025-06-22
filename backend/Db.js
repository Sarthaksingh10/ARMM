import mongoose from "mongoose";

const url =
  "mongodb+srv://Armm:armm1234@cluster0.arjq0df.mongodb.net/armmItem?retryWrites=true&w=majority&appName=Cluster0";

const mongoDbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to  monodb ");
  } catch (err) {
    console.log("error connecting to mongoose " + err);
  }
};

export default mongoDbConnect;
