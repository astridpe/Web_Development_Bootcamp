
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let tasks = [];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){

  let today = new Date();
  let currentDay = today.getDay();
  options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItems: tasks});
});

app.post("/", function(req, res){
  newTask = req.body.task;

  tasks.push(newTask);

  res.redirect("/");

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
