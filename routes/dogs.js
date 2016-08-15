const Dog = require('../models/Dog');

module.exports = server => {
    
    /**
     * Handle GET requests on dogs
     * Return a list of all the dogs to the client
     */
    server.get('/dogs', (req, res, next) => {
        Dog.find((err, dogs) => {
            res.send(dogs);
            next();
        });
    });
    
    
    /**
     * Handle GET requests on specific dog
     * Return a description of the dog to the client
     */
    server.get('/dogs/:id', (req, res, next) => {
        Dog.findOne({ _id:req.params.id }, (err, dog) => {
            res.send(dog);
            next();
        });
    });
    
    /**
     * Handle POST requests on dogs
     * Create a new dog in database
     */
    server.post('/dogs', (req, res, next) => {
        let dog = new Dog({
            weight: req.body.weight,
            name: req.body.name,
            age: req.body.age
        });
        for (let prop in req.body)
            dog[prop] = req.body[prop];
        dog.save().then(dog => {
            res.send(dog);
            next();
        });
    });
    
    /**
     * Handle PUT requests on specific dog
     * Update an existing dog in database
     */
    server.put('/dogs/:id', (req, res, next) => {
        Dog.findOne({ _id:req.params.id }, (err, dog) => {
            for (let prop in req.body)
                dog[prop] = req.body[prop];
            dog.save().then(dog => {
                res.send(dog);
                next();
            });
        });
    });
    
    /**
     * Handle DELETE requests on specific dog
     * Delete an existing dog in database
     */
    server.del('/dogs/:id', (req, res, next) => {
        Dog.remove({ _id: req.params.id }, err => {
            res.send(200);
            next();
        });
    });
    
}