const mongoose = require("mongoose");

const HeartSchema = new mongoose.Schema(
  {
    idTitle: {
      type:String,
      required:true,
      unique:true
    },
    counter: {
      type:Int32Array
    },
    name: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Heart",HeartSchema,"Hearts");