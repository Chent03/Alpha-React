const bodyParser = require('body-parser');

const handleBodyParser = (router) => {
    router.use(bodyParser.json());
}

module.exports = {
    handleBodyParser
}