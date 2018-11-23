const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new mongoose.Schema({
    charityName: String,
    charityDesc: String
});

const charityModel = mongoose.model('Charity', charitySchema);

module.exports = charityModel;
