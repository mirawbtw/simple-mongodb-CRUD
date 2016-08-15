let restify = require('restify');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cats');

let server = restify.createServer();

server.use(restify.bodyParser({ mapParams: true }));

require('./routes/index')(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});