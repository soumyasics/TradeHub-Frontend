const mongoose = require("mongoose");

const sSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  category: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  itemPhoto: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  point: {
    type: Number,
    default: 0,
  },
  isModApproved: {
    type: Boolean,
    default: false,
  }
});
module.exports = mongoose.model("items", sSchema);
