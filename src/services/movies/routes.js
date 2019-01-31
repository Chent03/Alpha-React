const { getMovieByTitle } = require('./MovieController');

module.exports = (app) => {
    app.get('/api/movie', async ({ query }, res) => {
        try {
            const result = await getMovieByTitle(query.t);
            res.status(200).send(result);
        } catch(er) {
            console.log(er);
        }
    })
}