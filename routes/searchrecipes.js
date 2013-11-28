/*
 * GET ingredients listing.
 */

var $ = require('jquery'),
	utils = require('../utils');

exports.searchRecipes = function(req, res){
	var params = req.body.q || false;

	if (req.xhr && params) {
		$.when(utils.searchRecipes(params)).done(function (response) {
			res.send(response.matches);
		});
	} else {
		res.end();
	}
};