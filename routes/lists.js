var express = require('express');
var router = express.Router();
var listsCtrl = require('../controllers/lists');

router.post('/users/profile', listsCtrl.createList);
router.get('/users/profile', listsCtrl.show);
// router.delete('/users/profile/:id', listsCtrl.deleteList);


module.exports = router;