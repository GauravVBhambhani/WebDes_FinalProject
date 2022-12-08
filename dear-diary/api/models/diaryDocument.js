const {Schema, model} = require('mongoose')

const diaryDocument = new Schema({
    _id: String,
    data: Object,
})

module.exports = model("DiaryDocument", diaryDocument)