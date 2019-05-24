const User = require('../models/user');

module.exports = {
    createList
}

function createList(req, res, next) {
    User.findById(req.params.id, function(err, list) {
        user.lists.push(req.body);
        user.save(function(err) {
            res.redirect('/users');
        });
    });
}
