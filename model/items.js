const mongoose = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: false,
    default: 0
  },
  seller: {
    type: String,
    required: false
  },
  manufacturer: {
    type: String,
    required: true
  }
};

const options = {
  autoCreate: true
};

const itemsSchema = new mongoose.Schema(schema, options);

module.exports = mongoose.model("items", itemsSchema);
