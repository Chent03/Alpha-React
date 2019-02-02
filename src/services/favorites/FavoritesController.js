const mongoose = require('mongoose');
const Favorites = mongoose.model('favorites');

exports.post_favorite = async(movie) => {
    const { Title, Year, Plot, Poster, rating, review} = movie;
    try {
        let findone = await Favorites.findOne({title: Title})
        if(findone) {
            return {success: false, message: 'Already exist'}
        } else {
            const movie = new Favorites({
                searchKey: Title.toLowerCase(),
                title: Title, 
                plot: Plot,
                year: Year,
                poster: Poster,
                rating, 
                review
            })

            await movie.save();
            return movie;
        }
       
    } catch(err) {
        console.log(err);
        return {success: false, message: 'Saving Error'}
    }
}

exports.get_favorites = async(movie) => {
    try {
        let movies = await Favorites.find();
        return movies;
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Failed to load list'}
    }
}

exports.update_favorite = async(id, movie) => {
    try {
        return await Favorites.findByIdAndUpdate(id, movie)
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Failed to update'}
    }
}

exports.delete_favorite = async(id) => {
    try {
        return await Favorites.findByIdAndDelete(id);
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Failed to delete'}
    }
}

exports.find_favorite = async(title) => {
    try {
        return await Favorites.findOne({searchKey: title})
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Can not find movie'}
    }
}