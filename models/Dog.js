let mongoose = require('mongoose');

/* The schema describing the collection in mongo database */
let schema = new mongoose.Schema({ 
    name: String, 
    age: Number,
    weight: Number
});

/* We export the model to use it in dogs.js routes file */
module.exports = mongoose.model('Dog', schema);