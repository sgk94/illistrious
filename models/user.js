var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    friends: [],
    googleId: String,
    avatar: String
}, {
    timestamps: true
});

module.exports= mongoose.model('User', userSchema);

