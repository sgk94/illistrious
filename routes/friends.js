var express = require('express');
var router = express.Router();
var friendsCtrl = require('../controllers/friends');


router.get('/users/friends', friendsCtrl.showRequest);
router.post('/friends/:id', friendsCtrl.acceptRequest);
router.post('/friends', friendsCtrl.sendRequest);
router.delete('/friends/:id', friendsCtrl.declineRequest);

module.exports = router;