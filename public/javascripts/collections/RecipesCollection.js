define(function (require) {

	var RecipeModel = require('models/RecipeModel');
	
	var RecipesCollection = Backbone.Collection.extend({

		model: RecipeModel,

		url: "/searchrecipes"
	});

	return new RecipesCollection();
});