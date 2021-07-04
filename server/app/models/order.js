const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const {getAllCartProducts} = require("../controllers/order")

const productCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: {
    type: String,
    ref: "Product",
  },
  count: Number, 
  price: {
    type: Number,
    ref: "Product",
  }
});

const ProductCart = mongoose.model("ProductCart", productCartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [productCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    status: {
      type: String,
      default: "Recieved",
      enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true } 
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, ProductCart };
