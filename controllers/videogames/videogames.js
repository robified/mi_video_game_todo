var User = require('../../models/user');

module.exports = {
    index,
    new: newVideogames,
    create
};

function create(req, res, next) {
    console.log(req.user, req.body);
    /* *
     TODO : get the user from mongo
     then put the new Videogame into the user
     either use poplulate or you can push it into the videogames array
     you always need to save the user when you are done 
    */ 
    req.body.status = 'Not Started';
    User.findById(req.user, function(err, user) {
        user.videogames.push(req.body);
        user.save(function(err) {
            res.redirect('/videogames');
        });
    });
};

function newVideogames(req, res, next) {
    res.render('videogames/new', {
        user: req.user
    });
};

function index(req, res, next) {
    User.findById(req.user, function(err, user) {
        res.render('videogames/index', {
            user: req.user
        })
    console.log(user.videogames);
    });
};