const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const Greetings = require('./greetings');
const pgp = require('pg-promise')();
const myRoutes = require('./routes/routes')
const app = express();



const DATABASE_URL = process.env.DATABASE_URL || "postgresql://khazimla:pg123@localhost:5432/trackers";

const config = {
  connectionString : DATABASE_URL
}

if (process.env.NODE_ENV == 'production') {
  config.ssl = {
    rejectUnauthorized: false
  }
}

const db = pgp(config);
console.log(db);


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(session({
  secret: 'codeforgeek',
  saveUninitialized: true,
  resave: true
}));

app.use(flash());



const PORT = process.env.PORT || 4040;
app.listen(PORT, function () {
  console.log("App started at port:", PORT)
});

