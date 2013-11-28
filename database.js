var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipes');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("CONNECTED TO DATABASE");
});


function createSchemas() {
	
	var Recipe = new Schema({
		
	});
}

module.exports = {
		saveRecipe: function () {

		}
};