const user = require('../models/user')

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.render('login', {})
    })
    app.post('loggedIn', (req, res) => {
        console.log(req.body)
    })
}
