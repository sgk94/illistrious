const User = require('../models/user');
const List = require('../models/list');
const Friend = require('../models/friend');

module.exports = {
    showRequest,
    sendRequest
}

function showRequest (req, res, next) {
User.findById(req.user._id, function(err, user) {
 Friend.find({}, function(err, requests) {
     console.log("TOMATO: ", requests);
     res.render('users/friends', {
         requests,
         user
     });
 });
});
}

function sendRequest(req, res, next) {
    var friend = new Friend(req.body);
    friend.requester = req.user.id;
    friend.recipient = req.body.recipient;
    friend.status = 1;
    friend.save(function(err) {
        res.redirect('users/friends')
    });
}
