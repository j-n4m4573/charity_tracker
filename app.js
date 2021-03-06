const express = require('express')
const app = express()
const request = require('request')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


var exphbs = require('express-handlebars');
var char_data = []


mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/charity_tracker');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.use("/public", express.static("charity_tracker/public"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const User = require('./controllers/users')(app)
const Charities = require('./controllers/charities')(app)
// require('./controllers/api/users')(app)

const port = process.env.PORT || 3000

// app.get('/charity_data', function(req, res) {
//     // var charityUrl = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&city=San%20Francisco'
//     res.send('charity_data', {charityUrl: charityUrl})
// });

// app.get('/', (req, res) => {

  //     request("https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=San%20francisco", function(err, res, body) {
  //         console.log(res && res.statusCode)
  //         console.log(err)
  //         // console.log(body)
  //     char_data.push(JSON.parse(body)[0].charityName)
  //     // console.log(char_data)
  //     // console.log(char_data[0].charityName)
  //     console.log(char_data)
  // })

//   res.render('dashboard', { msg: `${char_data}`  });
// })

// app.get('/', (req, res) => {
//     request("https://api.data.charitynavigator.org/v2/Organizations?app_id=91ce10fa&app_key=36925402a11f8a7e4795ad574baab864&pageSize=10&city=San%20francisco", function(err, res, body) {
//         console.log(res && res.statusCode)
//         console.log(err)
//         // console.log(body)
//     char_data.push(JSON.parse(body)[0].charityName)
//     // console.log(char_data)
//     // console.log(char_data[0].charityName)
//
// });
//     console.log(char_data)
//     res.render('charity_data', { msg: char_data});
// })

app.listen(port)

module.exports = app
