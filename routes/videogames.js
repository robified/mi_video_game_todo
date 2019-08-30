var express = require('express');
var router = express.Router();
var videogamesCtrl = require('../controllers/videogames/videogames');
var commentsRouter = require('./comments');

router.use('/', commentsRouter);

router.get('/', videogamesCtrl.index);
router.get('/new', videogamesCtrl.new);
router.get('/:id', videogamesCtrl.show);
router.get('/:id/edit', videogamesCtrl.edit);

router.post('/', videogamesCtrl.create);
router.put('/:id', videogamesCtrl.update);
router.delete('/:id', videogamesCtrl.delete);

module.exports = router;