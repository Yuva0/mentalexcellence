const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));


app.use("/api/posts", postRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});