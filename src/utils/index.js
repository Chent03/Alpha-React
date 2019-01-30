const applyMiddleware = (middleware, router) => {
    for(let m of middleware) {
        m(router);
    }
}

const applyRoutes = (routes, router) => {
    for(let route of routes) {
        route(router);
    }
};

module.exports = {
    applyMiddleware,
    applyRoutes
}