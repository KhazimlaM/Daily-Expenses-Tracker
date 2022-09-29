const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const DailyExpenses = require('./trackerdb');


const dailyExpense = DailyExpenses();

app.engine('handlebars', exphbs.engine({ defaultLayout: '' }));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index',);
});

app.post('/log', function (req, res) {
    res.render('signup',);
});

app.post('/sign', function (req, res) {
    res.render('expenses',);
});


app.post('/page2', function (req, res) {
    res.render('calculations',);
});




const PORT = process.env.PORT || 3333;
app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});

