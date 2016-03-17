var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

	createRecipe: function(recipe) {
		var action = {
			actionType: "CREATE_RECIPE",
			recipe: recipe
		};

		AppDispatcher.dispatch(action);
	}
};
