const Cat = require('../models/Cat');

module.exports = server => {
    
    server.get('/cats/:name', (req, res, next) => {
        Cat.findOne({name: req.params.name}, (err, cat) => {
            console.log(cat);
            console.log(err);
            res.send(cat);
            next();
        });
    });
    
    server.get('/cats/:name/age', (req, res, next) => {
        Cat.findOne({name: req.params.name}, "age", (err, cat) => {
            res.send(cat);
            next();
        });
    });
    
    server.get('/cats/:name/weight', (req, res, next) => {
        Cat.findOne({name: req.params.name}, "weight", (err, cat) => {
            res.send(cat);
            next();
        });
    });
    
    server.put('/cats/:name/age', (req, res, next) => {
        Cat.findOne({name: req.params.name}, (err, cat) => {
            cat.age = req.body.age;
            cat.save().then(cat => {
                res.send(cat);
                next();
            })
        });
    });
    
    server.put('/cats/:name/weight', (req, res, next) => {
        Cat.findOne({name: req.params.name}, (err, cat) => {
            cat.weight = req.body.weight;
            cat.save().then(cat => {
                res.send(cat);
                next();
            })
        });
    });
    
    // server.delete('/cats/:name', (req, res, next) =>)
    
}