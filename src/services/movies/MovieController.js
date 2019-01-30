const { getMovie } = require('./providers/OmdbProvider');

const getMovieByTitle = async(title) => {
    return await getMovie(title);
}

module.exports = {
    getMovieByTitle
}