var Comment = require('../../models/comment');

module.exports = {
    create
};

function create(req, res, next) {
    req.body.user = req.user._id;
    req.body.videogame = req.params.gameid;
    var comment = new Comment(req.body);
    comment.save(function(err) {
        if(err) {
            res.redirect(`/videogames/${req.params.gameid}`)
        } else {
        res.redirect(`/videogames/${req.params.gameid}`);
        };
    });
};