const axios = require('axios');
const keys = require('../../../config/keys');
const { find_favorite } = require('../../favorites/FavoritesController');

const getMovie = async(title) => {
    const omdblink = 'http://www.omdbapi.com/'
    const key = keys.omdbAPI;
    try {
        let movie = await find_favorite(title);
        console.log(movie);
        if(movie) {
            return movie
        } else {
            let res = await axios.get(omdblink, {
                params: {
                    apikey: key,
                    t: title
                }
            })
            return res.data;
        }
    } catch(er) {
        console.log(er);
    }
}


module.exports = {
    getMovie
}