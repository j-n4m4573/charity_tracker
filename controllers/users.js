const User = require('../models/user')

module.exports = function(app) {

    // Show Login
    app.get('/', (req, res) => {
        res.render('login', {})
    })

    // Show create user page
    app.get('/user-new', (req, res) => {
        res.render('user-new', {})
    })

    // Show home
    app.get('/home', (req, res) => {
        res.render('home', {})
    })

    // add charities to user
    // app.post("/add_charities", (req, res) => {
    //     User.find(
    // } )
    // Create new user
    app.post('/users', (req, res) => {
        User.create(req.body).then((user) => {
            console.log(user);
            res.redirect('/home');
        }).catch((err) => {
            console.log(err.message);
        })
    })






    // app.post('/crea', (req, res) => {
    //     User.create(req.body).then((user) => {
    //         console.log(user);
    //         res.redirect('/dashboard');
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // })

}
