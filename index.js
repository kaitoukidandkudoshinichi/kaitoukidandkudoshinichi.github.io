var express = require("express");
var app= express();
var request = require("request");
var cheerio = require("cheerio");
app.use(express.static("dist"));
app.set("views","public");
app.set("view enigine","ejs");
app.listen(3000, () => console.log("Server Started"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});