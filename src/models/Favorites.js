const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoritesSchema = new Schema({
    searchKey: String,
    title: String,
    plot: String,
    year: String,
    poster: String,
    rating: Number,
    review: String
})

mongoose.model('favorites', favoritesSchema);