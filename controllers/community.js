const User = require('../models/user');
const List = require('../models/list');
const Friend = require('../models/friend');

module.exports = {
    showUsers
}

function showUsers(req, res, next) {
User.find({}, function(err, users) {
    Friend.find({recipient: req.user }, function(err, friends) {
        res.render('users/community', {
            users,
            friends
        });
    });
});
}


