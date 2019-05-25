const User = require('../models/user');

module.exports = {
    show,
    createList
    // deleteList
}

// function deleteList (req, res, next) {
//     User.findOne({'lists._id': req.user.lists._id}, function(err, user) {
//         user.lists.id(req.params.id).remove();
//         user.save(function(err) {
//             res.redirect('/users/profile');
//         });
//     });
// }

function show (req, res, next) {
    console.log(req.user);
User.findById(req.user._id, function(err, user) {
    res.render('users/profile', { 
        user: user 
    });
});
}

function createList(req, res, next) {
    User.findById(req.user._id, function (err, user) {
        user.lists.push(req.body);
        user.save(function(err) {
            res.redirect('/users/profile')
        });
    });
}