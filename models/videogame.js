var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var videogameSchema = new Schema({
    title: String,
    statusOfCompletion: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Videogame', videogameSchema);