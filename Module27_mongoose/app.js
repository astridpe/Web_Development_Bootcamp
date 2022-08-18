
//Connecting to our moongose-server:
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

//Creating data in our new database:

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The object must have a name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Apples are Yummy!"
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 47,
  favoriteFruit: apple
});

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "Kind of sour."
});
const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Energy rises."
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("Successfully inserted the fruits to the fruitsDB");
//   }
// });

// Read data from the database:
Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }
  else {
    mongoose.connection.close()

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// // Update data from the database:
// Fruit.updateOne({_id: "62fe314afe7e0b923b56d001"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully updated the document.");
//   }
// })
//
// // Delete data from the database:
// Fruit.deleteOne({name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully deleted one row from the document.");
//   }
// });
//

// Person.deleteMany({name: "Amy"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully deleted the document.");
//   }
// });
