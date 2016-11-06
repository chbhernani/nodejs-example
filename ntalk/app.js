var express = require('express');
var path = require('path');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var error =  require('./middlewares/error');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser('ntalk'));
app.use(session({
    secret: 'ntalk',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function() {
    console.log('Ntalk no ar.');
});