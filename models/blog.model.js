var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    image: {
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

var blog = new mongoose.model('Blog', schema);

module.exports = blog