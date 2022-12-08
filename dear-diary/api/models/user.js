var mongoose = require('mongoose');
var Diary = require('./diary');

module.exports = mongoose.model('User', {
    firstName: {type : String, default: ''},
    lastName: {type : String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    diary: {type: Object},
    diaryResult: {type: String},
    diaryName: {type: String},
});