require.config({
    baseUrl: '/javascripts/libs',
    paths: {
		'backbone': 'backbone',
		'Handlebars': 'handlebars',
		'app': '../app',
		'text': 'text',
		'views': '../views',
		'collections': '../collections',
		'models': '../models'
    }
});

require(['app'], function (App) {
	App.initialize();
});