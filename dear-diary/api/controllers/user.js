// import Validate from '../services'
const Validate = require('../services/validate');
var User = require('../models/user');

// const bcrypt = require('bcrypt');

var { MongoClient } = require('mongodb');

var mongo = new MongoClient("mongodb+srv://pateldhruvr:s!hzk*6z7k2rRtT@cluster0.olpizhz.mongodb.net/?retryWrites=true&w=majority");
var myDb = mongo.db("test")

exports.get_all_user = function(req, res) {
    // res.send("Users ----")
    User.find(function(err, user) {
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

exports.post_user = function(req, res) {
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
    myDb.collection("users").deleteMany({"email" : req.body.email});
    res.send("Deleted user with email id : " + req.body.email);
}