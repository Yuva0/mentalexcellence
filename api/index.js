const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const qotdRoute = require("./routes/qotd");
const cardRoute = require("./routes/cards");
const articleRoute = require("./routes/articles");
const storyRoute = require("./routes/stories");
// const cors = require("cors");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

// app.use(cors());


app.use("/api/posts", postRoute);
app.use("/api/qotd", qotdRoute);
app.use("/api/cards", cardRoute);
app.use("/api/articles", articleRoute);
app.use("/api/stories", storyRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});