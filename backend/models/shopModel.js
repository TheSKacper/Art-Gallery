const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img:{
    type:String,
    required:true
  },
  owner: {
    type: String,
    required: true,
  },
  veryfi: {
    type: Boolean,
    default: false,
  },
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = { Shop };
