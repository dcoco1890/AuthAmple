const bcrypt = require("bcrypt");
const saltRounds = 10;
var db = require("../models");

module.exports = function(app) {

    app.post("/user/create", (req, res) => {
        // validation
        let pass = req.body.pass;
        let name = req.body.name;
        let email = req.body.email;

        if (pass && name && email) {
            bcrypt.hash(req.body.pass, saltRounds, function(err, hash) {
                if (err) throw err;

                db.User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }).then(data => {
                    if (data) res.render("home");
                });
            });
        }


    })
}