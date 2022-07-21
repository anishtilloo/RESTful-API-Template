const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get("/", function (request, response) {
  response.send("HELLO GET");
});
app.post("/", function (request, response) {
  response.send("HEllO POST");
});

//TODO

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
