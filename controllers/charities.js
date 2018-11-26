
const Charity = require('../models/charity')
const User = require('../models/user')
var char_response;

module.exports = function(app) {
    // request("https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=San%20francisco", function(err, res, body) {
    //     console.log(res && res.statusCode)
    //     console.log(err)
    //     // console.log(body)
    // char_response = JSON.parse(body)
    // });

    app.get('/dashboard', (req, res) => {
        res.render('dashboard', {email: "Yaaas"})
    })
}



// for(i = 0; i++ < char_response.count; i++) {
//
//
// }
