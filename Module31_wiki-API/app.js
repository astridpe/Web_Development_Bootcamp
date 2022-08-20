const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

const article1 = new Article({
  title:  "API",
  content : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
});

const article2 = new Article({
  title: "Bootstrap",
  content: "his is a framework developed by Twitter that contains pre-made front-end templates for web design"
});

const article3 = new Article({
  title: "DOM",
  content: "The Document Object Model is like an API for interacting with our HTML"
});

const defaultArticles = [article1, article2, article3];

app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticles){
    if(!err){
      if (foundArticles.length === 0){
        Article.insertMany(defaultArticles, function(err){
          if(!err){
            res.send("Succesfully inserted the documents.");
          }
          else {
            res.send(err);
          }
        });
      }
      else {
        res.send(foundArticles);
      }
    }
  });
})

.post(function(req, res){
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err){
    if(!err){
      res.send("Succesfully saved the articles.")
    }
    else {
      res.send(err)
    }
  });
})

.delete(function(req, res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("Succesfully deleted all articles.")
    }
    else {
      res.send(err)
    }
  });
});

app.route("/articles/:articleTitle")

.get(function(req, res){
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if(!err){
      res.send(foundArticle);
    }
    else{
      res.send("No articles with that name was found.");
    }
  });
})

.put(function(req, res){
  Article.replaceOne(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
    if(!err){
      res.send("Succesfully updated the article.")
    }
    else {
      res.send(err);
    }
  });
})

.patch(function(req, res){
  Article.updateOne(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err){
    if(!err){
      res.send("Succesfully updated the article.");
    }
    else {
      res.send(err);
    }
  });
})

.delete(function(req, res){
  Article.deleteOne({title: req.params.articleTitle}, function(err){
    if(!err){
      res.send("Succesfully deleted the article.");
    }
    else {
      res.send(err);
    }
  })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
