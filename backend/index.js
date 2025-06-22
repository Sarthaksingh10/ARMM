import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 5000;
import path from "path";

import additem from "./routes/additem.js";
import getitems from "./routes/getItems.js";

import mongoDbConnect from "./DB.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const startServer = async () => {
  await mongoDbConnect();
  app.use("/uploads", express.static(path.resolve("./Uploads")));
  app.use("/api", additem);
  app.use("/api", getitems);

  app.listen(port, () => {
    console.log(` Server running on http://localhost:${port}`);
  });
};

startServer();
