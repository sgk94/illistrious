const User = require('../models/user');
const List = require('../models/list');
const Friend = require('../models/friend');

module.exports = {
    showRequest,
    sendRequest,
    acceptRequest,
    declineRequest
}
function declineRequest(req, res) {
    Friend.findById(req.params.id).populate('requester').exec(function (err, request) {
        Friend.findByIdAndDelete(request._id, function (err) {
            request.save(function (err) {
                res.redirect('/users/friends')
            });
        });
    });
}

function acceptRequest(req, res) {
    User.findById(req.user._id, function (err, user) {
        Friend.findById(req.params.id).populate('requester').exec(function (err, request) {
            var newFriend = request.requester
            user.friends.push(newFriend);
            newFriend.friends.push(req.user);
            newFriend.save(function (err) {
                Friend.findByIdAndDelete(request._id, function (err) {
                    user.save(function (err) {
                        res.redirect('/users/friends')
                    })
                });
            });
        });
    });
}

function showRequest(req, res) {
    User.find(req.user, function (err, me) {
        Friend.find({ recipient: req.user }).populate('requester').exec(function (err, requests) {
            res.render('users/friends', {
                requests,
                me
            });
        });
    });
}


function sendRequest(req, res, next) {
    var friend = new Friend;
    friend.requester = req.user.id;
    friend.recipient = req.body.recipient;
    friend.status = 1;
    friend.save(function (err) {
        res.redirect('users/friends')
    });
}
