
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');

const productRouter = require('./product');

//setup view engines
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/layout/" }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// instead of body-parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static file like css, html,jquery
app.use(express.static(path.join(__dirname, 'public')))

//to routes
app.use('/', productRouter);


module.exports = app;