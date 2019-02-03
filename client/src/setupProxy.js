const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    if (!process.env.NODE_ENV === 'production' || !process.env.NODE_ENV === 'docker-compose') {
        console.log('http-proxy');
        app.use(proxy('/api/', { target: 'http://localhost:5000' }))
    }
};