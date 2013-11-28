define(function (require) {

	var Handlebars = require('handlebars'),
		tpl = require("text!views/search/templates/searchViewTpl.hbs"),
		RecipesCollection = require("collections/RecipesCollection");

	var SearchView = Backbone.View.extend({
		
		el: $('.search-bar'),

		events: {
			"click #get-recipes": "getRecipes",
			'keypress input[type=text]': 'filterOnEnter'
		},

		getRecipes: function () {
			var textToSearch = this.$el.find('input').val();

			RecipesCollection.fetch({
				type: "POST",
				data: $.param({
					q: textToSearch.split(' ').join('+')
				})
			});
		},

		filterOnEnter: function (e) {
			if (e.keyCode === 13) {
				e.preventDefault();

				this.getRecipes();
			}
		},

		render: function () {
			var template = Handlebars.compile(tpl);

			this.$el.html(template({}));
			
			return this;
		}
	});

	return new SearchView();
});