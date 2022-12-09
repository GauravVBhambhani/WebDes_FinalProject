var mongoose = require('mongoose');
// var DiaryDocuments = require('./diaryDocument');

module.exports = mongoose.model('Diary', {
    diaryDocuments: {type: Map},
    diaryResult: {type: String},
    diaryName: {String},
});