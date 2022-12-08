// import Validate from '../services'
var Diary = require('../models/diary');

var { MongoClient } = require('mongodb');

var mongo = new MongoClient("mongodb+srv://pateldhruvr:s!hzk*6z7k2rRtT@cluster0.olpizhz.mongodb.net/?retryWrites=true&w=majority");
var myDb = mongo.db("test")

exports.get_all_diary = function(req, res) {
    Diary.find(function(err, diary) {
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);
        // console.log('Users', user);
        res.json(diary);
        return null;
    });
}

exports.post_diary = function(req, res) {
    // console.log(req.body);
    var rec = new Diary(req.body);

    rec.save(function (err, n) {
        if (err) {
            res.send("Some error occured!");
        } else {
            res.send("Created diary - " + n);
        }
    }
    )
}
