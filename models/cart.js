const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
          itemName: String,
          brand: String,
          price: Number,
          description: String,
          image: String,
          quantity: Number,
          originalPrice: Number,
});

const Cart = mongoose.model("Cart", itemSchema);

module.exports = Cart;