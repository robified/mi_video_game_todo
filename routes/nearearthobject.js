var express = require('express');
var router = express.Router();
var nearearthobjectCtrl = require('../controllers/nearearthobject/nearearthobject');

router.get('/', nearearthobjectCtrl.index);

module.exports = router;