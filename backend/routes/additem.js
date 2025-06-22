import express from "express";
import Product from "../models/products.js";
import multer from "multer";
import path from "path";
import fs from "fs";
const uploadDir = path.resolve("./Uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./Uploads"));
  },
  filename: function (req, file, cb) {
    // Use timestamp + original filename to avoid collisions
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
const multiUpload = upload.fields([
  { name: "photo", maxCount: 1 },
  { name: "additionalPhotos", maxCount: 5 },
]);
const router = express.Router();

router.post("/additem", multiUpload, async (req, res) => {
  const { itemName, itemType, itemDesc } = req.body;

  if (!itemName || !itemType || !itemDesc || !req.files?.photo) {
    return res.status(400).json({ error: "Missing fields or photo" });
  }

  const photo = req.files.photo[0].filename;
  const additionalPhotos = req.files.additionalPhotos
    ? req.files.additionalPhotos.map((f) => f.filename)
    : [];
  console.log("req.files:", req.files);
  console.log("additionalPhotos:", additionalPhotos);
  try {
    const product = await Product.create({
      itemName,
      itemType,
      itemDesc,
      photo,
      additionalPhotos,
    });
    res.status(200).json(product);
  } catch (err) {
    console.log("error adding item to the list" + err);
  }
});

export default router;
