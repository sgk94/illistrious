const User = require('../models/user');
const List = require('../models/list');
const Friend = require('../models/friend');

module.exports = {
    showList,
    createList,
    deleteList,
    editList,
    updateList
}

function updateList (req, res, next) {
    List.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, list) {
        list.save(function(err) {
            res.redirect('/users/profile')
        });
    });
}

function editList(req, res, next) {
    User.find(req.user, function (err, me) {
        Friend.find({recipient: req.user }, function (err, friends) {
            List.findById(req.params.id, function (err, list) {
                res.render('users/editlist', {
                    list,
                    me,
                    friends
                })

            })
        });
    });
}

function deleteList(req, res, next) {
    List.findById(req.params.id, function (err, list) {
        list.remove();
        list.save(function (err) {
            res.redirect('/users/profile')
        });
    });
}

function createList(req, res, next) {
    var list = new List(req.body);
    list.user = req.user._id;
    list.save(function (err) {
        res.redirect('users/profile')
    });
}

function showList(req, res, next) {
    User.findById(req.user._id, function (err, user) {
        List.find({ user: req.user._id }, function (err, lists) {
            Friend.find({recipient: req.user }, function (err, friends) {
                console.log("potato", req.user._id, "tomato: ", lists)
                res.render('users/profile', {
                    lists,
                    user,
                    friends
                });
            });
        });
    });
}


