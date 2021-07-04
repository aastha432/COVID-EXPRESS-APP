const { Order, ProductCart } = require("../models/order");

exports.getOrderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({  
          error: "No such order found in DB",
        });
      }
      req.order = order;
      next();
    });
};

exports.getCartProductsById = (req, res, next, id) => {
  ProductCart.findById(id).exec((err, cartproduct) => {
    if (err || !cartproduct) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = cartproduct;
    next();
  });
    console.log("Entered the getCartProductsById func")
}

exports.getAllCartProducts = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

  ProductCart.find()
    .select("-name")
    .sort([[sortBy, "ascending"]])
    .limit(limit)
    .exec((err, cartproducts) => {
      if (err) {
        return res.status(400).json({
          error: "No product found",
        });
      }
      res.json(cartproducts);
    });
};

exports.addtoCart = (req, res) => {
  const cartproduct = new ProductCart(req.body);
  cartproduct.save((err, cartproduct) => {
    if(err){
      return res.status(400).json({
        error: "Failed to save product in cart",
      });
    }
    res.json(cartproduct);
  });
}

exports.deletefromCart = (req, res) => {
  //TODO:
  const cartproduct = req.productcart;
  console.log(`the value of req.productcart = ${req.productcart}`)
  cartproduct.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to delete the product from cart",
      });
    }
    res.json({
      message: "Deleted the product successfully from cart",
      deletedProduct,
    });
  });
}

exports.createOrder = (req, res) => { 
  req.body.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save order in DB",
      });
    }
    res.json(order);
  });
};

exports.getAllOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found in DB",
        });
      }
      res.json(orders);
    });
};

exports.getOrderStatus = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};

exports.updateStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: "Cannot update order status",
        });
      }
      res.json(order);
    }
  );
};
