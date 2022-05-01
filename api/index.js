const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const postRoute = require("./routes/posts");
const multer = require("multer");

const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));


app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.png");
  }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("coverImage"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/posts", postRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});