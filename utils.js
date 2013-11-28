//APP Config
var _ = require('underscore'),
	$ = require('jquery'),
	db = require('./database');

module.exports = {

	appId: "01ce8f9d",

	appKey: "18ff58980a33052903ce9ac77a5ef53a",

	apiBaseUrl: "http://api.yummly.com/v1/api/recipes?",
	
	getRecipe: function (recipeId) {
		var dfd = new $.Deferred(),
			url = "http://api.yummly.com/v1/api/recipe/" + recipeId;
		
		$.when(this._makeRequest(url).done(function (response) {
			dfd.resolve(response);
		}));

		return dfd.promise();
	},

	searchRecipes: function (searchFrase) {
		var dfd = new $.Deferred(),

			url = "http://api.yummly.com/v1/api/recipes?q=" + searchFrase;

		$.when(this._makeRequest(url).done(function (response) {
			console.log("RESPONSE FOR SERVER: ", response);
			dfd.resolve(response);
		}));

		return dfd.promise();
	},

	_makeRequest: function (url) {
		var dfd = new $.Deferred(),
			queryConfig = {
				url: url,
				headers: {
					"X-Yummly-App-ID": this.appId,
					"X-Yummly-App-Key": this.appKey
				},
				success: function (response) {
					dfd.resolve(response);
				},
				error: function (err) {
					console.log("ERROR: ", err);
					dfd.resolve(err);
				}
			};

		console.log("API REQUEST: ", queryConfig);
		$.ajax(queryConfig);

		return dfd.promise();
	}
};