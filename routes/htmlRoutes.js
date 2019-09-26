const bcrypt = require("bcrypt");
const saltRounds = 10;
var db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // res.contentType("html");
        res.render("index");
    })


};