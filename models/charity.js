const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Charity = mongoose.model('Charity', {
    charityName: String,
    irsClassification: Object,
    mailingAddress: Object,
    amount: String,
    charityId: {type: Schema.Types.ObjectId, ref:'User'}
});

module.exports = Charity;
