//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
const path = require('path');
const router = express.Router();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home.ejs");
  // const urlg="https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiYXl1c2gyMDAyIiwiYSI6ImNsMWdmNGdhbzBxcXIzbHFrNGFoZWdmbWcifQ.5uwqHKcpl1P0YzkklgLqmw";
  // https.get(urlg,function(response){
  //   console.log(response.statusCode);

  //   response.on("data", function(data){
  //     const need= JSON.parse(data);
  //     const gcode= need.features[0].geometry.coordinates;
  //     console.log(gcode);
  //   });
  // });
});
app.get("/Shimla.ejs", function(req, res){
  res.render("Shimla.ejs");
});
app.get("/paris.ejs", function(req, res){
  res.render("paris.ejs");
});
app.get("/goa.ejs", function(req, res){
  res.render("goa.ejs");
});
app.get("/myguide.ejs", function(req, res){
  res.render("myguide.ejs");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});