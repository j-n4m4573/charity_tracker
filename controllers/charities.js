
const Charity = require('../models/charity')
const User = require('../models/user')
const request = require('request')

var char_response;
var new_response;
var char_arr;
var city;
var city_choice;

//SHOW
// '/charities/:id'
//INDEX
// '/charities'
module.exports = function(app) {

    // USERS SHOW
    app.get('/dashboard', (req, res) => {
        res.render('dashboard', {email: ""})
    })

    // Charities Show
    // app.get('/charity_show', (req, res) => {
    //     console.log(`${city}`)
    //     Charity.find({'mailingAddress.city': `${city}`}).then((charity) => {
    //         res.render('charity_show', {charity: charity})
    //         console.log(charity)
    //     }).catch((err) => {
    //         console.log(err.message);
    //     });
    // })

    // //INDEX
    // app.get('/charity_show', (req, res) => {
    //     // console.log(char_response)
    //     res.render('charity_show', {charity: new_response})
    // })
    //
    // app.get('/charities-show', (req, res) => {
    //     res.render('charities-show', {})
    // })

    app.post('/charities-new', (req, res) => {
        console.log(req.body)
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

                    // Charity.create(char_response).then((charity) => {
                    //         }).catch((err) => {
                    //             console.log(err.message)
                    //         })
                            // new_response = JSON.parse(body)
                    })
    // // Charities create
    // app.post('/create_charities', (req, response) => {
    //     city = req.body.state.toUpperCase()
    //      city_choice = req.body.state
    //         if(city_choice.indexOf(" ") !== -1) {
    //             city_choice = city_choice.slice(0,city_choice.indexOf(" ")) + "%20" + city_choice.slice((city_choice.indexOf(" ") + 1),city_choice.length)
    //             } else {
    //         }
    //         request(`https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=${city_choice}`, function(err, res, body) {
    //             console.log(res && res.statusCode)
    //             console.log(err)
    //             char_response = JSON.parse(body)
    //             response.render("charity_show", {charity: char_response})
    //
    //                 // Charity.create(char_response).then((charity) => {
    //                 //         }).catch((err) => {
    //                 //             console.log(err.message)
    //                 //         })
    //                         // new_response = JSON.parse(body)
    //                 })
    //                 // res.redirect("charity_show")
    //     //         console.log(new_response)
    //     // res.render('charity_data', {charity:new_response})
    })
















}
