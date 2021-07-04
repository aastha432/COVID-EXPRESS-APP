const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");
const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
  addtoCart,
  deletefromCart,
  getCartProductsById,
  getAllCartProducts,
} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);
router.param("cartproductId", getCartProductsById);


//routes actual

//add products to cart first for order creation
router.post(
  "/cart/:userId",
  isSignedIn,
  isAuthenticated,
  addtoCart
);

//get all products from cart
router.get(
  "/cart/:userId/products",
  isSignedIn,
  isAuthenticated,
  getAllCartProducts
)

//delete products from cart
router.delete(
  "/cart/:userId/:cartproductId",
  isSignedIn,
  isAuthenticated,
  deletefromCart
);

//create order
router.post(
  "/order/create/:userId", 
  isSignedIn,
  isAuthenticated,
  //pushOrderInPurchaseList,
  //updateStock,
  createOrder
);
//read
router.get(
  "/order/all/:userId",
  isSignedIn, 
  isAuthenticated,
  isAdmin,
  getAllOrders
);

//status of order 
router.get(
  "/order/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getOrderStatus
);
router.put(
  "/order/:orderId/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateStatus
);

module.exports = router;
