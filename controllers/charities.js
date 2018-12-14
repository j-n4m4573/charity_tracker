
const Charity = require('../models/charity')
const User = require('../models/user')
const request = require('request')

var char_response;
// var new_response;
var char_arr;
var city;
var city_choice;
global.current_char;
//SHOW
// '/charities/:id'
//INDEX
// '/charities'
module.exports = function(app) {

    // Show dashboard

    app.get('/dashboard', (req, res) => {
        User.find(current_user._id).then((user) => {
            var userId = user[0]._id.toString()
            Charity.find({charityId: userId}).then((charities) => {
        res.render('dashboard', {user: user[0], charities: charities})
            })
        })
    });

    // app.get('/dashboard', (req, res) => {
    //     User.find().sort({_id:-1}).limit(1).then((user) => {
    //         var userId = user[0]._id.toString()
    //         Charity.find({charityId: userId}).then((charities) => {
    //     res.render('dashboard', {user: user[0], charities: charities})
    //         })
    //     })
    // });

    // Show Charity
    app.get('/charities/:id', (req, res) => {
        console.log(current_char._id)
        Charity.find(current_char._id).then((charity) => {
            res.render('charity-show', {charity: charity[0]})
        })
    })

    // Create Charities
    app.post('/charities', (req, response) => {
        var ein = req.body.ein
        var current = ""

        User.find(current_user).then((user) => {
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
                current_char = charity
                response.redirect('dashboard')
            }).catch((err) => {
                console.log(err.message)
            })
        })
    })

    // Show Charity edit page
    app.get('/charities/:id/edit',(req, res) => {
        Charity.findById(current_char._id).then((charity) => {
            res.render('charity-edit', {charity: charity})
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // Update Charity
    app.put('/charities/:id', (req, res) => {
        Charity.findByIdAndUpdate(req.params.id, req.body).then((user) => {
            res.redirect('/dashboard')
        })
    })

    // Delete Charity
    app.delete('/users/:id', (req, res) => {
        User.findByIdAndRemove(current_char._id).then((user) => {
            res.redirect('/dashboard');
        }).catch(err => {
            console.log(err.message);
        })
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

    // Charities Index
    app.get('/charities-show', (req, response) => {
            request(`https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=${city_choice}`, function(err, res, body) {
                console.log(res && res.statusCode)
                console.log(err)
                char_response = JSON.parse(body)
                response.render("charities-show", {charity: char_response})
                })

    })
















}
