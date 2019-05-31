const User = require('../models/user');
const Friend = require('../models/friend');


module.exports = {
    index
}

function index(req, res, next) {
User.find({}, function(err, users) {
    Friend.find({}, function(err, friends) {
        // console.log("me: ", req.user._id, "list:", req.list )
        res.render('users', {
            users,
            friends
    })
    });
});
}