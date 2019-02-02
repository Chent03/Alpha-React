const mongoose = require('mongoose');
const Favorites = mongoose.model('favorites');
const { validateOjbect } = require('../../validators/validate');

exports.post_favorite = async(movie) => {
    let val = validateOjbect(movie, 'Title', 'Year', 'Plot', 'Poster', 'rating', 'review');
    if(val.length) {
        return {success: false, message: val}
    }
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

exports.get_favorites = async() => {
    try {
        let movies = await Favorites.find();
        return movies;
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Failed to load list'}
    }
}

exports.update_favorite = async(id, movie) => {
    let val = validateOjbect(movie, 'rating', 'review')
    if(val.length){
        return {success: false, message: val}
    }
    try {
        return await Favorites.findByIdAndUpdate(id, movie)
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Failed to update'}
    }
}

exports.delete_favorite = async(id) => {
    try {
        let res = await Favorites.findByIdAndDelete(id);
       if(res) {
            return res;
       } else {
            return {success: false, message: 'Failed to delete'}
       }
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Failed to delete'}
    }
}

exports.find_favorite = async(title) => {
    try {
        return await Favorites.findOne({title: title})
    } catch(er) {
        console.log(er);
        return {success: false, message: 'Can not find movie'}
    }
}