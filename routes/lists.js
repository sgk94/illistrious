var express = require('express');
var router = express.Router();
var listsCtrl = require('../controllers/lists');

router.get('/users/profile', listsCtrl.showList);
router.get('/profile/:id', listsCtrl.editList)
router.post('/profile', listsCtrl.createList);
router.delete('/profile/:id', listsCtrl.deleteList);
router.put('/profile/:id', listsCtrl.updateList); 

module.exports = router;