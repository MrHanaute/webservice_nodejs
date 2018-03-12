var app = require('./server.js');

var routes = require('./routes.js');

var validator = require('validator');

app = routes(app);