const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
          itemName: {
                    type: String,
                    required: true,
          },
          brand: {
                    type: String,
                    required: true,
          },
          price: {
                    type: Number,
                    required: true,
          },
          category: String,
          description: {
                    type: String,
                    required: true,
          },
          image: String,
          reviewStar: {
                    type: String,
                    default: "4.7",
          },
          quantity: {
                    type: Number,
                    default: 1,
          },
});

const Item = mongoose.model("Item" , itemSchema);

module.exports = Item;

