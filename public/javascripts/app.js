define(function (require) {

	var searchView = require('views/search/searchView'),
		resultsView = require('views/results/resultsView');

	var initialize = function () {
		searchView.render();
		resultsView.render();
	};

	return {
		initialize: initialize
	};
});