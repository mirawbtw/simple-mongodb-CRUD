const Cat = require('../models/Cat');

module.exports = server => {
    
    /**
     * Handle GET requests on cats
     * Return a list of all the cats to the client
     */
    server.get('/cats', (req, res, next) => {
        Cat.find((err, cats) => {
            res.send(cats);
            next();
        });
    });
    
    
    /**
     * Handle GET requests on specific cat
     * Return a description of the cat to the client
     */
    server.get('/cats/:id', (req, res, next) => {
        Cat.findOne({ _id:req.params.id }, (err, cat) => {
            res.send(cat);
            next();
        });
    });
    
    /**
     * Handle POST requests on cats
     * Create a new cat in database
     */
    server.post('/cats', (req, res, next) => {
        let cat = new Cat({
            weight: req.body.weight,
            name: req.body.name,
            age: req.body.age
        });
        for (let prop in req.body)
            cat[prop] = req.body[prop];
        cat.save().then(cat => {
            res.send(cat);
            next();
        });
    });
    
    /**
     * Handle PUT requests on specific cat
     * Update an existing cat in database
     */
    server.put('/cats/:id', (req, res, next) => {
        Cat.findOne({ _id:req.params.id }, (err, cat) => {
            for (let prop in req.body)
                cat[prop] = req.body[prop];
            cat.save().then(cat => {
                res.send(cat);
                next();
            });
        });
    });
    
    /**
     * Handle DELETE requests on specific cat
     * Delete an existing cat in database
     */
    server.del('/cats/:id', (req, res, next) => {
        Cat.remove({ _id: req.params.id }, err => {
            res.send({ok: 'ok'});
            next();
        });
    });
    
}