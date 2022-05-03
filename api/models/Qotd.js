const mongoose = require("mongoose");

const QotdSchema = new mongoose.Schema(
  {
    quote: {
      type:String,
      required:true,
      unique:true
    },
    author: {
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Qotd",QotdSchema,"Qotd");