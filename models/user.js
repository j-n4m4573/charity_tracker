const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User', {
    email: String,
    password: String,
});

module.exports = User;
