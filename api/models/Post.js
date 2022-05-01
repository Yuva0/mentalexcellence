const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type:String,
      required:true,
      unique:true
    },
    idTitle: {
      type:String,
      required:true,
      unique:true
    },
    description: {
      type: String,
      required:true
    },
    content: {
      type:String,
      required:true
    },
    coverImage:{
      type:String,
      required:true
    },
    imageCaption:{
      type:String
    },
    imageAlt:{
      type:String
    },
    author:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:false
    },
    type:{ //can be article/review
      type:String,
      required:false
    },
    isDetailed:{
      type:Boolean,
      required:true
    },
    duration:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post",PostSchema,"Posts");