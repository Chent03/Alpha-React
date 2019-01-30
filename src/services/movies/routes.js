const { getMovieByTitle } = require('./MovieController');

module.exports = (app) => {
    app.get('/movie', async ({ query }, res) => {
        try {
            const result = await getMovieByTitle(query.t);
            console.log(result);
            res.status(200).send(result);
        } catch(er) {
            console.log(er);
        }
    })
}