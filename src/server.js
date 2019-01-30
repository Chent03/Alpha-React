const http = require('http');
const express = require('express');
const middlewares = require('./middleware');
const routes = require('./services');

const {applyMiddleware, applyRoutes } = require('./utils');

const app = express();

applyMiddleware(middlewares, app);
applyRoutes(routes, app);

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})


