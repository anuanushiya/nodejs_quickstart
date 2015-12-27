var express = require('express');
var app = express();
var swig = require('swig');
var consolidate = require('consolidate');


 app.configure(function () {
    app.set('port', process.env.PORT || 1289);
    app.use(express.urlencoded())
    app.use(express.json())
    app.use(express.cookieParser() );
    app.use(express.session({ secret: 'mysecret', cookie: { maxAge: (24*60*60*1000*5) }}))
    //template engine
    app.set('view engine', 'html');
    app.set('views', __dirname + '/templates');
    app.engine('.html', consolidate.swig);
    //static directory
    app.use("/static", express.static(__dirname + '/static'));
});

var http = require('http');
var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log("[DONE] HTTP server started at port: " + app.get('port'));
});

var controllers = require('./controllers');
controllers.set(app);

