const mongoose = require('../connection.js')
const Schema = mongoose.Schema;

const GitRepos = new mongoose.Schema({
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

let gitInfo = mongoose.model('GitRepos', GitRepos)
module.exports = gitInfo