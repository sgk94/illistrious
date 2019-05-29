const User = require('../models/user');
const List = require('../models/list');

module.exports = {
    showFriends
}

function showFriends(req, res, next) {
User.find({}, function(err, users) {
    res.render('users/friends', {
        users
    });
});
}

