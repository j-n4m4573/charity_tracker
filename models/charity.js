const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Charity = mongoose.model('Charity', {
    charityName: String,
    irsClassification: Object,
    mailingAddress: Object,
    ein: String,
    amount: String,
    charityId: {type: Schema.Types.ObjectId, ref:'User'}
});

module.exports = Charity;
