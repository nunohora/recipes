/**
 * Module dependencies.
 */

var express = require('express');

var http = require('http');
var path = require('path');
var exphbs = require('express3-handlebars');
var app = express();

// all environments§<<<<<<<
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var routes = require('./routes');
var recipesRoute = require('./routes/searchrecipes');

app.get('/', routes.index);
app.post('/searchrecipes', recipesRoute.searchRecipes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
