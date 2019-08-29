var express = require('express');
var router = express.Router();
var videogamesCtrl = require('../controllers/videogames/videogames');

router.get('/', videogamesCtrl.index);
router.get('/new', videogamesCtrl.new);
router.get('/:id', videogamesCtrl.show);
router.get('/:id/edit', videogamesCtrl.edit);


router.post('/', videogamesCtrl.create);
router.delete('/:id', videogamesCtrl.delete);


router.put('/:id');

module.exports = router;