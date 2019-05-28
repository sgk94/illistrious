var express = require('express');
var router = express.Router();
var linksCtrl = require('../controllers/links');

// router.get('/users/profile/:id', linksCtrl.newLink);
router.post('/profile/:id/links', linksCtrl.createLink);

module.exports = router;