//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The object must contain a name."]
  }
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Buy Food"
});

const item2 = new Item({
  name: "Make Food"
});

const item3 = new Item({
  name: "Eat Food"
});

const defaultItems = [item1, item2, item3];

app.get("/", function(req, res) {

  Item.find(function(err, items){
    if(err){
      console.log(err);
    }
    else {
      if (items.length === 0) {
        Item.insertMany(defaultItems, function(err){
          if(err){
            console.log(err);
          }
          else{
            console.log("Succesfully inserted the documents.");
          }
        });
      }
      res.render("list", {listTitle: "Today", newListItems: items});
    }
  });



});

app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const newItem = new Item({
    name: itemName
  });

  newItem.save();
  res.redirect("/");

});

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;

  Item.deleteOne({_id: checkedItemId}, function(err){
    if(err){
      console.log(err);
    }
    else {
      console.log("Succesfully removed document");
      res.redirect("/");
    }
  });
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
