let mongoose = require('mongoose');

let schema = new mongoose.Schema({ 
    name: String, 
    age: Number,
    weight: Number
});

module.exports = mongoose.model('Cat', schema);