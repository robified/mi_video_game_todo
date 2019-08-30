var Videogame = require('../../models/videogame');
var Comment = require('../../models/comment');

module.exports = {
    index,
    new: newVideogamePage,
    create,
    show,
    delete: deleteVideogame,
    edit: editPage,
    update
};

function update(req, res, next) {
    Videogame.findByIdAndUpdate(req.params.id, req.body, function(err, videogame) {
        res.redirect(`/videogames/${req.params.id}`);
    });
};

function editPage(req, res, next) {
    Videogame.findById(req.params.id, function(err, videogame) {
        res.render('videogames/edit', {
            videogame,
            user: req.user
        });
    });
};

function deleteVideogame(req, res, next) {
    Videogame.findByIdAndDelete(req.params.id, function(err, videogame) {
        Comment.deleteOne( { videogame: req.params.id, user: req.user }, function(err, comments) {
            res.redirect('/videogames');
        });
    });
};


function show(req, res, next) {
    Videogame.findById(req.params.id, function(err, videogame) {
        Comment.find( { videogame: req.params.id, user: req.user }, function(err, comments) {
            res.render('videogames/show', {
                videogame,
                user: req.user,
                comments
            });
        });
    })
};

function create(req, res, next) {
    req.body.user = req.user._id;
    req.body.status = 'Not Started';
    var videogame = new Videogame(req.body);
    videogame.save(function(err) {
        res.redirect('/videogames');
    });
};

function newVideogamePage(req, res, next) {
    res.render('videogames/new', {
        user: req.user._id
    });
};

function index(req, res, next) {
    Videogame.find({ user: req.user._id }, function(err, videogames) {
        res.render('videogames/index', {
            user: req.user,
            videogames
        });
    });
};