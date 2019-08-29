var Videogame = require('../../models/videogame');
var User = require('../../models/user');

module.exports = {
    index,
    new: newVideogamePage,
    create,
    show,
    delete: deleteVideogame,
    edit
};

function edit(req, res, next) {
    Videogame.findById(req.params.id, function(err, videogame) {
        res.render('videogames/show', {
            videogame,
            user: req.user
        });
    });
};

function deleteVideogame(req, res, next) {
    console.log(req.user.videogames[req.params.id]);
        user.videogames[req.params.id].remove();
        user.save(function(err) {
            res.redirect('/videogames');
        });
};

function show(req, res, next) {
    Videogame.findById(req.params.id, function(err, videogame) {
        res.render('videogames/show', {
            videogame,
            user: req.user
        });
    });
    // console.log(user.videogames);
};

function create(req, res, next) {
    // console.log(req.user, req.body);
    /* *
     TODO : get the user from mongo
     then put the new Videogame into the user
     either use poplulate or you can push it into the videogames array
     you always need to save the user when you are done 
    */ 
    req.body.user = req.user._id;
    req.body.status = 'Not Started';
    var videogame = new Videogame(req.body);
    videogame.save(function(err) {
        res.redirect('/videogames');
    });
};

function newVideogamePage(req, res, next) {
    let userId = req.user._id
    res.render('videogames/new', {
        user: userId
    });
};

function index(req, res, next) {
    let userId = req.user._id
    Videogame.find({ user: userId }, function(err, videogames) {
        // console.log(user, videogame);
        res.render('videogames/index', {
            user: req.user,
            videogames
        });
    });
};