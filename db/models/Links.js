const mongoose = require('../connection.js')
const Schema = mongoose.Schema;

const Links = new mongoose.Schema({
    name: {
        type: String,
        default: String,
        trim: true
    },
    categories: [],
    description: {
        type: String,
        default: String,
        trim: true
    },
    url: {
        type: String,
        default: String,
        trim: true
    },
    active: {
        type: Boolean,
        default: true
    }, 
    thumbsUp: {type: Number},
    thumbsDown: {type: Number},

})

let Link = mongoose.model('Links', Links)
module.exports = Link