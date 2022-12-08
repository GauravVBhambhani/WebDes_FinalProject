var mongoose = require('mongoose');
var DiaryDocument = require('./diaryDocument');

module.exports = mongoose.model('User', {
    firstName: {type : String, default: ''},
    lastName: {type : String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    diary: {type: DiaryDocument},
    diaryResult: {type: String},
    diaryName: {type: String},
});