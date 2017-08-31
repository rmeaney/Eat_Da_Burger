//first we grab packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

//middleware
//enable static content from the public directory
app.use(express.static('public'));

// set up the override so we can use override a post command with a delete
app.use(methodOverride('_method'));

//set handlebars
var exhbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them.
var routes = require('./controllers/burgerController.js');
app.use('/', routes);

app.listen(port);
console.log('Now listening on port: ');