const User = require('../models/user');
const List = require('../models/list');

module.exports = {
    createLink
}

// function newLink (req, res, next) {
//     User.findById(req.user.lists.links._id, function(err, user) {
//         res.render('/users/profile', {
//             user: user
//         })
//     })
// }

function createLink(req, res, next) {
   List.findById(req.params.id, function (err, list){
    list.links.push(req.body)
    list.save(function(err) {
        res.redirect('/profile');
    })
    });
  }

