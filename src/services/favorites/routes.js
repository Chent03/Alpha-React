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
        console.log(payload);
        if(!payload.success) {
            res.status(422).send(payload)
        } else {
            res.status(200).send(payload);
        }
    })

    app.get('/api/favorites', async(req, res) => {
        let payload = await get_favorites();
        if(!payload.success) {
            res.status(422).send(payload);
        }
        res.status(200).send(payload);
    })

    app.put('/api/favorites/:movie_id', async(req, res) => {
        const {id, movie} = req.body;
        let payload = await update_favorite(id, movie)
        if(!payload.success) {
            res.status(422).send(payload);
        }
        res.status(200).send(payload);
    })

    app.delete('/api/favorites/:movie_id', async(req, res) => {
        let payload = await delete_favorite(req.params.movie_id);
        if(!payload.sucess) {
            res.status(422).send(payload);
        }
        res.status(200).send(payload);
    })
}