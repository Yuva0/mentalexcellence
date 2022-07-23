const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    idTitle: {
      type:String,
      required:true,
      unique:true
    },
    title: {
      type:String,
      required:true,
      unique:true
    },
    coverImage: {
      type:String,
      required:true
    },
    imageCaption:{
      type:String
    },
    imageAlt: {
      type: String,
      required:true
    },
    content: {
      type:String
    },
    // can be philosophy/mindset etc
    category: {
      type:Array
    },
    // can be philosopher etc
    subcategory: {
      type:Array
    },
    coverpage: {
      type: Boolean
    },
    likes_count:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card",CardSchema,"Cards");