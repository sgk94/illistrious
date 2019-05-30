var express = require('express');
var router = express.Router();
var communityCtrl = require ('../controllers/community')

router.get('/users/community', communityCtrl.showUsers);

module.exports = router;