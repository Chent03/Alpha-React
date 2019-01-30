const axios = require('axios');
const keys = require('../../../config/keys');

const getMovie = async(title) => {
    const omdblink = 'http://www.omdbapi.com/'
    const key = keys.omdbAPI;
    try {
        let res = await axios.get(omdblink, {
            params: {
                apikey: key,
                t: title
            }
        })
        return res.data;
    } catch(er) {
        console.log(er);
    }
}


module.exports = {
    getMovie
}