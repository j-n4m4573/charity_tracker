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

    // Show homepage
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

    //Show welcome page
    app.get('/welcome', (req, res) => {
        User.findById(req.params.id).then((user) => {
            res.render('welcome', {user:user})
        })
    })

    // Show User
    app.get('/users/:id', (req, res) => {
        User.findById(req.params.id).then((user) => {
            console.log(user)
            res.render('user-show', {user:user})
        })
    })

    // Edit User
    app.get('/users/:id/edit',(req, res) => {
        console.log(req.params.id)
        User.findById(req.params.id).then((user) => {
            res.render('user-edit', {user: user})
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // Delete User
    app.delete('/users/:id', (req, res) => {
        User.findByIdAndRemove(req.params.id).then((user) => {
            res.redirect('/');
        }).catch(err => {
            console.log(err.message);
        })
    })

    // Show my-account page
    app.get('/my-account', (req, res) => {
        res.render('my-account', {})
    })




















}
