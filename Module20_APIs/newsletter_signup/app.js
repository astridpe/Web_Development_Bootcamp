const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/'));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
