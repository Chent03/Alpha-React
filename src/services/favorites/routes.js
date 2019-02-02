const { 
    post_favorite,
    get_favorites,
    update_favorite,
    delete_favorite
} = require('./FavoritesController');


module.exports = app => {
    app.post('/api/favorites', async (req, res) => {
        let data = req.body;
        let payload = await post_favorite(data);
        respondWithPayload(res, payload);

    })

    app.get('/api/favorites', async(req, res) => {
        let payload = await get_favorites();
        respondWithPayload(res, payload);

    })

    app.patch('/api/favorites/:movie_id', async(req, res) => {
        let payload = await update_favorite(req.params.movie_id, req.body)
        respondWithPayload(res, payload);

    })

    app.delete('/api/favorites/:movie_id', async(req, res) => {
        let payload = await delete_favorite(req.params.movie_id);
        respondWithPayload(res, payload);
    })
}

const respondWithPayload = (res, payload) => {
    if(payload.success === false) {
        res.status(422).send(payload);
    } else {
        res.status(200).send(payload);
    }
};