if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'docker-compose') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
