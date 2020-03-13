//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

function ocu(x, msg) {
  var n = 0;
  for (var i = 0; i < msg.length; i++) {
    if (msg[i] == x) n++;
  }
  return n;
}


app.get("/", function(req, res) {

  res.render("index");

});

app.get("/modern", function(req, res) {

  res.render("modern");
});

app.get("/classic", function(req, res) {

  res.render("classic");

});

app.get("/freqanal", function(req, res) {

  res.render("freqanal");
});


app.listen(3000, function() {
  console.log("server up");
});
