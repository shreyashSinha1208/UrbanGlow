//Initialsing our database and adding our data.


const mongoose = require("mongoose");
const initData = require("./data.js");
const Item = require("../models/item.js");
const Cart = require("../models/cart.js");
const User = require("../models/user.js");

//creating a separate database for e-commerce server
const MONGO_URL = "mongodb://127.0.0.1:27017/ekart";


//connecting to MongoDB server
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}


//Inserting the data into the Collection Items from the data.js
const initDB = async () => {
  await Item.deleteMany({});
  await Cart.deleteMany({});
  await User.deleteMany({});
  await Item.insertMany(initData.data);
  console.log("data was initialized");
}

//calling above function during program execution
initDB();