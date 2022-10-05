const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const DailyExpenses = require('./trackerdb');




const DATABASE_URL = process.env.DATABASE_URL || "postgresql://codex:pg123@localhost:5432/my_trackers";


app.engine('handlebars', exphbs.engine({ defaultLayout: '' }));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index');
});


const config = {
    connectionString: DATABASE_URL
}

if (process.env.NODE_ENV == 'production') {
    config.ssl = {
        rejectUnauthorized: false
    }
}

const db = pgp(config);

const dailyExpense = DailyExpenses(db);


app.post('/log', async function (req, res) {

    let name = req.body.nameEntered;
    let surname = req.body.surnameEntered;
    let email = req.body.emailEntered;

    await dailyExpense.storeNames(name, surname, email)
    // console.log(name + " this is the name")
    res.render('signup');

});

app.post('/sign', async function (req, res) {

    let name = req.body.name
    let email = req.body.email
    if (name && email) {
  let data =  await dailyExpense.getNames(name)
console.log(data + "dfdfdfdfdfdf")
     }

    res.render('expenses');
});

// app.post('/display', async function (req, res) {
//     let name = req.params.username
//     res.render('expenses', {
//         name
//     })
//     });
    

    app.post('/display', async function (req, res) {
    //     let date = req.body.date
    //     let catagory = req.body.catagory
    //     let amount = req.body.amount
    //     let username = req.params.username
    //     // console.log(date, catagory, amount)
    //   await  dailyExpense.storeExpenses(username, date, amount, catagory)
        res.render('calculations');
    });
    

const PORT = process.env.PORT || 6001;
app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});


