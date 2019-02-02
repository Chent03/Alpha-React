const { getMovieByTitle } = require('./MovieController');
const {validateOjbect} = require('../../validators/validate')

module.exports = (app) => {
    app.get('/api/movie', async ({ query }, res) => {
        let val = validateOjbect(query, 't')
        if(val.length) {
            res.status(200).send({success: false, message: val})
        } else {
            try {
                const result = await getMovieByTitle(query.t);
                res.status(200).send(result);
            } catch(er) {
                console.log(er);
            }
        }
        
    })
}