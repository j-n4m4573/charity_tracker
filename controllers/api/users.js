const User = require('../../models/user')

module.exports = function(app) {

    app.get('/api', (req, res) => {
        // => Return Json
console.log("running")
            res.send({post: "post"})
            // }
        // res.render('create_user', {})
    })

    app.get('/create_user', (req, res) => {
        res.render('create_user', {})
    })

    // app.get('/loggedIn', (req, res) => {
    //     res.render('loggedIn', {});
    // })

    app.post('/api/loggedIn', (req, res) => {
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
