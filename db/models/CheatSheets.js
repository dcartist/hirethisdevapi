const mongoose = require('../connection.js')
const Schema = mongoose.Schema;

const CheatSheet = new mongoose.Schema({
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
    sheetType: {
        type: String,
        enum: ['URL', 'PDF', 'IMAGE'],
        default: 'URL' 
      },
    active: {
        type: Boolean,
        default: true
    }, 
    rating: {type: Number},
    thumbsUp: {type: Number},
    thumbsDown: {type: Number},

})

let CheatSheets = mongoose.model('CheatSheet', CheatSheet)
module.exports = CheatSheets