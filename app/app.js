var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var server = require("http").createServer(app);

// Initialize middleware
require('./app_config/middleware').initialize(app);

// Fix this
GLOBAL.app = app;
GLOBAL.httpServer = server;

// Initialize module router
require('./module-router/module-router').initialize();

// Initialize global routes
require('./app_config/routes.js').initialize(app);

server.listen(port);
