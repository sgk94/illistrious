var express = require('express');
var router = express.Router();
var linksCtrl = require('../controllers/links');

router.post('/lists/:id/links', linksCtrl.createLink);
router.delete('/links/:id', linksCtrl.deleteLink);

module.exports = router;