const User = require('../models/user');


module.exports = {
    index
}

function index(req, res, next) {
User.find({}, function(err, users) {
    console.log("me: ", req.user._id, "list:", req.list )
    res.render('users', {
        users
    });
});
}