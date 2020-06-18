const mongoose = require('../connection.js')
const Schema = mongoose.Schema;

const Jobs = new mongoose.Schema({
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
    rating: {type: Number},
    thumbsUp: {type: Number},
    thumbsDown: {type: Number},

})

let jobInfo = mongoose.model('Jobs', Jobs)
module.exports = jobInfo