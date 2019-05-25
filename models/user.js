var mongoose = require('mongoose');

// var linksSchema = new mongoose.Schema ({
//     link: String
// });

var listsSchema = new mongoose.Schema ({
    listname: String
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    social: String,
    // friend: [friendSchema],
    lists: [listsSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports= mongoose.model('User', userSchema);

