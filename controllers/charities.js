
const Charity = require('../models/charity')
const User = require('../models/user')
const request = require('request')

var char_response;
var char_arr;

request("https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=San%20francisco", function(err, res, body) {
    console.log(res && res.statusCode)
    console.log(err)

    // console.log(body)
char_response = JSON.parse(body)
});

// for(i = 0; i++ < char_response.count; i++) {
//     let charity = new Charity {
//         charityName : char_response[i].charityName,
//         description : char_response[i].description
//     }
//     char_arr.push(charity)
//     console.log(char_arr)
// }

module.exports = function(app) {

    app.get('/dashboard', (req, res) => {
        res.render('dashboard', {email: ""})
    })

    app.get('/charities_view', (req, res) => {
        res.render('charities_view', {charity: char_response})
    })
}

// I want to map out each json object into charity objects
// steps to take json object to charity objects

// iterate through object
// then assign the json variables to the charity objects
