define(function (require) {

	var Handlebars = require('handlebars'),
		RecipesCollection = require("collections/RecipesCollection");
		tpl = require("text!views/results/templates/resultsViewTpl.hbs");

	var ResultsView = Backbone.View.extend({

		el: $('.results'),

		initialize: function () {
			this.listenTo(RecipesCollection, 'sync', this.processData);
		},

		processData: function (collection) {
			this.results = collection.models;
			this.render();
		},

		render: function () {
			var template = Handlebars.compile(tpl);

			this.$el.html(template(this));

			return this;
		}
	});

	return new ResultsView();
});