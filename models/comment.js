var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var videogameCommentsSchema = new Schema({
    comment: String,
    videogame: {
        type: Schema.Types.ObjectId,
        ref: 'Videogame'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('VideogameComments', videogameCommentsSchema);