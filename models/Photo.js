const mongoose = require("mongoose");
const Schema = mongoose.Schema
const PhotoSchema = new Schema ({
    title: {
        type: String,
        unique:true
    },
    description: {
        type: String,
        unique:true
    },
    image: {
        type: String
    }
})

const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo