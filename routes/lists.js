var express = require('express');
var router = express.Router();
var listsCtrl = require('../controllers/lists');

router.get('/users', listsCtrl.createList);


module.exports = router;