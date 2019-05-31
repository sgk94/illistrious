const User = require('../models/user');
const List = require('../models/list');

module.exports = {
    createLink,
    deleteLink
}

function deleteLink(req, res, next) {
    List.findOne({ 'links._id': req.params.id }, function (err, list) {
        list.links.id(req.params.id).remove();
        list.save(function (err) {
            res.redirect('/users/profile');
        });
    });
}

function createLink(req, res, next) {
    List.findById(req.params.id, function (err, list) {
        list.links.push(req.body);
        list.save(function (err) {
            res.redirect('/users/profile');
        });
    });
}

