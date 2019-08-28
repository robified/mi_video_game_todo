var express = require('express');
var router = express.Router();
var videogamesCtrl = require('../controllers/videogames/videogames');

router.get('/', videogamesCtrl.index);
router.get('/new', videogamesCtrl.new);

router.post('/', videogamesCtrl.create);

module.exports = router;