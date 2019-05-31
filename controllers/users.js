const User = require('../models/user');
const Friend = require('../models/friend');
const List = require('../models/list');


module.exports = {
    index
}

// function index(req, res, next) {
//     User.find({}, function (err, users) {
//         Friend.find({ recipient: req.user }, function (err, friends) {
//             List.find({}, function (err, lists) {
//                 console.log("Lists: ", lists[0].user)
//                 res.render('users', {
//                     users,
//                     friends,
//                     lists
//                 })
//             })
//         });
//     });
// }


function index (req, res, next) {
Friend.find({recipient: req.user }, function (err, friends) {
    List.find({}, function (err, lists) {
        User.find(req.user, function(err, buds) {
            
            console.log("buds: ", buds)
            var onlyBuds = buds[0].friends
            console.log(onlyBuds)
            var user = req.user.id
            var list = lists.filter(function(list) {
                if (list.user != user && list.user) {
                    return true;
                };
            });
            res.render('users', {
                list,
                user,
                friends
        })
        });
    });
});
};
