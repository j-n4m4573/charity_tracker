
const Charity = require('../models/charity')
const User = require('../models/user')
const request = require('request')

var char_response;
var new_response;
var char_arr;
// var city_choice;

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

    app.get('/choose_charities', (req, res) => {
        res.render('choose_charities', {charity: char_response})
    })

    app.get('/charity_data', (req, res) => {
        res.render('charity_data', {})
    })

    app.post('/charity_data', (req, res) => {
        var city_choice = req.body.state
            if(city_choice.indexOf(" ") !== -1) {
                city_choice = city_choice.slice(0,city_choice.indexOf(" ")) + "%20" + city_choice.slice((city_choice.indexOf(" ") + 1),city_choice.length)
                } else {
            }
            console.log(city_choice)
            request(`https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=${city_choice}`, function(err, res, body) {
                console.log(res && res.statusCode)
                console.log(err)
                // console.log(body)
                new_response = JSON.parse(body)
            // Charity.create(req.body).then((charity) => {
            //     console.log(charity)
            });
                res.render('charity_data', {charity:new_response})
        })
    // })
}
