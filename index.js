//requiring all the important modules
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Items = require('./models/item.js');
const Cart = require('./models/cart.js');
const User = require('./models/user.js');
const cartSum = require("./utilities/cart.js");
const {  isNull } = require('util');


//connecting to our mongodb server and creating a db "ekart"
main().catch(err => console.log(err));
async function main() {
          await mongoose.connect('mongodb://127.0.0.1:27017/ekart');
};


//setting our views , that is frontend page to ejs
app.set("view engine", "ejs");

//setting our path of ejs views folder
app.set("views", path.join(__dirname, "views"));

//parsing the incoming data 
app.use(express.urlencoded({ extended: true }));

//for creating patch/put/delete requests
app.use(methodOverride('_method'));

//seeting path to serve static files( css / js)
app.use(express.static(path.join(__dirname, "./public")));




//User login page
app.get("/login", async (req, res) => {
          res.render("./general/user.ejs", { error: null , success: null, user: null });
})


//posting user information
app.post("/", async (req, res) => {
          newUser = new User(req.body.login);
          let existingUser = await User.findOne({ userName: newUser.userName });
          console.log(existingUser);
          if (existingUser) {
                    //let userDatabase = await User.findOne({ userName: newUser.userName });
                    //console.log(existingUser.password);
                    if (existingUser.password == newUser.password) {
                              res.render('./general/user.ejs', { success: "Login Succesfull, Enjoy Shopping.", error: null, user: isNull });
                      
                    }
                    else {
                              res.render('./general/user.ejs', { error: "Password error for the existing User.", success:null, user: null });
                    }
          }
          else {
                    await newUser.save();
                    res.render('./general/user.ejs', { success: "Account Successfully Created.", error: null, user: null  });
                    //res.redirect("/");
          }
});




//Displaying all items route
app.get("/", async (req, res) => {
          const allItems = await Items.find({});
          const user = await User.find({});
          // console.log(allItems);
          res.render("./layout/index.ejs", { allItems: allItems });
});



//Showing particular item on search
app.get("/items/:itemname", async (req, res) => {
          console.log(req.params);
          let { itemname } = req.params;
          const actualitem = await Items.find({ itemName: itemname });
          const item = actualitem[0];
          res.render("./layout/show.ejs", { item });
});


//Showing items of a particular category route
app.get("/items/category/:q", async (req, res) => {
          let { q } = req.params;
          let allItems = await Items.find({ category: q });
          if (allItems)
                    res.render("./layout/category.ejs", { allItems });
          else
                    throw new Error("Path not found");
});


let allItems = [];

//posting our cart items to cart page
app.patch("/cart/:id", async (req, res) => {
          let { id } = req.params;
          let newItem = await Items.findById(id);
          let existingItem = await Cart.findOne({ itemName: newItem.itemName });
          if (existingItem) {
                    await Cart.findByIdAndUpdate(existingItem._id, {
                              price: (existingItem.price + newItem.price),
                              quantity: existingItem.quantity + 1,
                    });
          }
          else {
                    newItem = new Cart({
                              itemName: newItem.itemName,
                              brand: newItem.brand,
                              price: newItem.price,
                              description: newItem.description,
                              image: newItem.image,
                              quantity: newItem.quantity,
                              originalPrice: newItem.price,
                    });
                    await newItem.save();
          }
          res.redirect("/cart");
});



//patch request to remove items
app.patch("/cart/:operation/:id", async (req, res) => {
          let { id, operation } = req.params;
          let searchedItem = await Cart.findById(id);
          let itemname = searchedItem.itemName;
          let originalItem = await Items.findOne({ itemName: itemname });
        
          if (operation === "minus") {
            await Cart.findByIdAndUpdate(id, {
              price: searchedItem.price - originalItem.price,
              quantity: searchedItem.quantity - 1,
            });
          } else if (operation === "add") {
            await Cart.findByIdAndUpdate(id, {
              price: originalItem.price + searchedItem.price,
              quantity: searchedItem.quantity + 1,
            });
          }
          res.redirect("/cart");
});
        


//new route(become a seller)
app.get("/new", (req, res) => {
          res.render("./layout/new.ejs", { user: null });
});



//post request to add data for new item to /
app.post("/new", async (req, res) => {
          newItem = new Items(req.body.allItems);
          await newItem.save();
          res.redirect("/");
});




//delete items from cart route
app.delete("/cart/:id", async (req, res) => {
          let { id } = req.params;
          let item = await Cart.findByIdAndDelete(id);
          res.redirect("/cart");
});





//creating mycart route
app.get("/cart", async (req, res) => {
          let allItems = await Cart.find({});
          if (allItems.length === 0) {
                    res.render("./general/nothing.ejs" , {user: null});
          }
          else {
                    const cartSummary = cartSum(allItems);
                    const totalSum = cartSummary.originalPrice;
                    const discountPrice = cartSummary.discountPrice;
                    const finalPrice = cartSummary.finalPrice;
                    Object.assign(allItems[allItems.length - 1], { totalSum, discountPrice, finalPrice });
                    res.render("./layout/mycart.ejs", { allItems , user: null } ,);
          }
});



//checkout page for successful payment
app.get("/checkout", async (req, res) => {
          let allItems = await Cart.find({});
          let lastItem = allItems.length - 1;
          allItems[lastItem].finalPrice = cartSum(allItems).finalPrice;
          res.render('./layout/success.ejs', { allItems  , user: null});
});




//request to all routes other than above ones
app.all("*", (req, res, err) => {
          res.send("Error 404 Not Found!");
});



//Creating our server on localhost:3000
app.listen(3000, () => {
          console.log(`App is listening on 3000`);
});