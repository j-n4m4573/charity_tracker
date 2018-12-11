
const Charity = require('../models/charity')
const User = require('../models/user')
const request = require('request')

var char_response;
// var new_response;
var char_arr;
var city;
var city_choice;
var current_user;

//SHOW
// '/charities/:id'
//INDEX
// '/charities'
module.exports = function(app) {

    // Charities SHOW
    app.get('/dashboard', (req, res) => {
        User.find().sort({_id:-1}).limit(1).then((user) => {
            var userId = user[0]._id.toString()
            console.log(userId)
            Charity.find({charityId: userId}).then((charities) => {
        res.render('dashboard', {charities: charities})
            })
        })
    });

    // Create Charity
    app.post('/charities-new', (req, response) => {
        var ein = req.body.ein
        var current = ""

        User.find().sort({_id:-1}).limit(1).then((user) => {
            current = user[0]._id.toString()
        })

        request(`https://api.data.charitynavigator.org/v2/Organizations/${ein}?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864`, function(err, res, body) {
            console.log(res && res.statusCode)
            console.log(err)
        var new_response = JSON.parse(body)

        for(char in new_response) {
            new_response.charityId = current
        }

            Charity.create(new_response).then((charity) => {
                console.log(charity)
                response.redirect('dashboard')
                }).catch((err) => {
                    console.log(err.message)
                })
        })
    })

    // Delete charity
    app.delete('/charity-delete', (req, res) => {

    })

    // Post City
    app.post('/city-create', (req, res) => {

        city = req.body.state.toUpperCase()
         city_choice = req.body.state
            if(city_choice.indexOf(" ") !== -1) {
                city_choice = city_choice.slice(0,city_choice.indexOf(" ")) + "%20" + city_choice.slice((city_choice.indexOf(" ") + 1),city_choice.length)
                } else {
            }
            res.redirect('charities-show')
    })

    // Show charities
    app.get('/charities-show', (req, response) => {
            request(`https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=${city_choice}`, function(err, res, body) {
                console.log(res && res.statusCode)
                console.log(err)
                char_response = JSON.parse(body)
                response.render("charities-show", {charity: char_response})

                })

    })
















}
