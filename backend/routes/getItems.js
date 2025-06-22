import Product from "../models/products.js";
import express from "express";

const router = express.Router();

router.get("/getitems", async (req, res) => {
  try {
    const products = await Product.find({});

    if (!products || products.length === 0) {
      console.log("No product found");
      return res.status(404).json({ error: "No product found" });
    }
    return res.status(200).json({ products });
  } catch (err) {
    console.log("Error getting products" + err);
  }
});

export default router;
