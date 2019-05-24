const User = require('../models/user');

module.exports = {
    index
}

function index(req, res, next) {
    User.find(name)
    console.log('query: ', name)
    res.render('users')
}