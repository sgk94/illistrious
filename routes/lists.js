var express = require('express');
var router = express.Router();
var listsCtrl = require('../controllers/lists');

router.get('/users/profile', listsCtrl.showList);
router.post('/profile', listsCtrl.createList);
router.delete('/profile/:id', listsCtrl.deleteList);

module.exports = router;