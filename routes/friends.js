var express = require('express');
var router = express.Router();
var friendsCtrl = require('../controllers/friends');

router.get('/users/friends', friendsCtrl.showRequest);
router.post('/friends', friendsCtrl.sendRequest)

module.exports = router;