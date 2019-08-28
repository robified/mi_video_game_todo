var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var videocommentsSchema = new Schema({
    comment: String
}, {
    timestamps: true
});


var videogameSchema = new Schema({
    title: String,
    statusOfCompletion: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed']
    },
    comments: [videocommentsSchema]

  }, {
    timestamps: true
  });


var userSchema = new Schema({
    name: String,
    googleId: String,
    photo: String,
    videogames: [videogameSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);