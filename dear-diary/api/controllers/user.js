var express = require("express");
var bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignmenteight');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (_callback) {
    console.log("connection succeeded");
})
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


exports.get_all_user = function (req, res) {
    // res.send("Users ----")
    User.find(function (err, user) {
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);
        // console.log('Users', user);
        res.json(user);
        return null;
    });
}

// exports.get_user = function (req, res) {
//     User.find(function(err, user) {
//         // if there is an error retrieving, send the error.
//         // nothing after res.send(err) will execute
//         if (err)
//             res.send(err);
//         // console.log('Users', user);
//         res.json(user);
//         return null;
//     });
// }

exports.post_user = function (req, res) {
    // console.log(req.body);
    var rec = new User(req.body);
    var email = rec.email;
    var name = rec.name;
    var password = rec.password;

    if (Validate.validateEmail(email)) {
        if (Validate.validateName(name)) {
            var passwordValidationRes = Validate.validatePassword(password);
            if (passwordValidationRes === "True") {

                rec.save(function (err, n) {
                    if (err) {
                        res.send("Some error occured!");
                    } else {
                        res.send("Created user - " + n.email);
                    }
                })
            }
            else {
                res.send(passwordValidationRes)
            }
        } else {
            res.send("Please enter correct name")
        }
    } else {
        res.send("Please enter correct email")
    }
}

exports.delete_diary = function (req, res) {
    myDb.collection("users").deleteMany({ "email": req.body.email });
    res.send("Deleted user with email id : " + req.body.email);
}