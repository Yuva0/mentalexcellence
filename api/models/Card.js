const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    key: {
      type:String,
      required:true,
      unique:true
    },
    name: {
      type:String,
      unique:true
    },
    coverImage: {
      type:String,
      required:true,
      unique:true
    },
    imageAlt: {
      type: String,
      required:true
    },
    // can be philosopher/mindset etc
    category: {
      type:String
    },
    // can be new/old
    status:{
        type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card",CardSchema,"Cards");