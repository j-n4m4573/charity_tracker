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

    // Create User
    app.post('/users', (req, res) => {
        User.create(req.body).then((user) => {
            console.log(user);
            res.redirect(`/users/${user._id}`);
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // Show User
    app.get('/users/:id', (req, res) => {
        console.log(req.params)
        User.findById(req.params.id).then((user) => {
            console.log(user)
            res.render('user-show', {user:user})
        })
    })








}
