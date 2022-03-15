const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemName = new Schema({
  _id: { type: Number },
  Name: {
    type: String,
  },
});

module.exports = Items = mongoose.model("items", ItemName);
