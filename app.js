var express = require('express');
var app = express();
var swig = require('swig');
var consolidate = require('consolidate');

app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.engine('.html', consolidate.swig);
app.use("/static", express.static(__dirname + '/static'));

app.listen(process.env.PORT || 1289);

var controllers = require('./controllers');
controllers.set(app);

