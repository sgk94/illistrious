const User = require('../models/user');
const List = require('../models/list');

module.exports = {
    new: newList,
    createList,
    deleteList
}

function deleteList (req, res, next) {
List.findById(req.params.id, function(err, list) {
    list.remove();
    list.save(function(err) {
        res.redirect('/users/profile')
    });
});
}


function createList(req, res, next) {
    var list = new List(req.body);
        list.user = req.user._id;
        list.save(function(err) {
            res.redirect('users/profile')
        });
    }

function newList (req, res, next) {
User.findById(req.user._id, function(err, user) {
    List.find({user: req.user._id },function(err, lists) {
        console.log("potato", req.user._id, "tomato: ", lists)
        res.render('users/profile', {
            lists,
            user
        });
    });
});
}