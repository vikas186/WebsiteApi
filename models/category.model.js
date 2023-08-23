
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },

});

var category = new mongoose.model('Category', schema);

module.exports = category;