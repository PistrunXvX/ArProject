const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/"));

app.get(function(req, res) {
    res.render("index.html");
    console.log("Page load");
});

app.listen(3000);