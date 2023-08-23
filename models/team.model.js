var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
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
    }
});

var user = new mongoose.model('User', schema);
module.exports = user;
