require('dotenv').config();
const express = require("express");
// const https = require("https");
const bodyParser = require("body-parser");
const { randomInt } = require("crypto");
const ejs = require("ejs");
const _ = require("lodash");
const controller = require('./controllers/myControllers');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", (req, res) => {
    res.render("index"); 
});

app.route("/")
.post(controller.post);  

    app.listen(3000, function () {
        console.log("App runnng on 3000")})

