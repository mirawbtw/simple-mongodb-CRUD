/**
 * Import all routes. In each route, we import the associated model
 */
module.exports = server => {
    require('./cats.js')(server);
    require('./dogs.js')(server);
}