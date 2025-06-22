import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
    itemDesc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    additionalPhotos: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
const productDB = mongoose.connection.useDb("armmItem");
const Product = productDB.model("itemlists", productSchema);

export default Product;
