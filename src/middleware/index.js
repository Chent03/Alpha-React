const commonMiddleware = require('./common');

module.exports = [
    commonMiddleware.handleBodyParser,
]