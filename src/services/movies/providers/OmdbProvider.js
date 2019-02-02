const axios = require('axios');
const keys = require('../../../config/keys');
const { find_favorite } = require('../../favorites/FavoritesController');

const getMovie = async(title) => {
    const omdblink = 'http://www.omdbapi.com/'
    const key = keys.omdbAPI;
    title = title.toLowerCase();
    try {
        let res = await axios.get(omdblink, {
            params: {
                apikey: key,
                t: title
            }
        })
        let movie = await find_favorite(res.data.Title);
        if(movie) {
            const { title, year, _id, plot, poster, rating, review} = movie;
            return {
                Title: title,
                Year: year,
                ID: _id,
                Plot: plot,
                Poster: poster,
                rating,
                review,
                Response: 'True'
            }
        } else {
            return res.data;
        }
    } catch(er) {
        console.log(er);
    }
}


module.exports = {
    getMovie
}