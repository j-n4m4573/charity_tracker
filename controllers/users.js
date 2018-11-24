const User = require('../models/user')

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.render('login', {})
    })

    app.get('/create_user', (req, res) => {
        res.render('create_user', {})
    })

    app.post('/loggedIn', (req, res) => {
        User.create(req.body).then((user) => {
            console.log(user);
            res.redirect('/dashboard');
        }).catch((err) => {
            console.log(err.message);
        })
    })


}
