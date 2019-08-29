var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments/comments');


router.post('/:gameid/comments', commentsCtrl.create);

module.exports = router;