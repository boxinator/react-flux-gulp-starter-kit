var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var recipes = [];

var RecipeStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},

	getAll: function() {
		return recipes;
	}
});

AppDispatcher.register(function(action) {

	switch(action.actionType) {

		case "CREATE_RECIPE":
			recipes.push(action.recipe);
			RecipeStore.emitChange();
			break;

		default:
	}
});

module.exports = RecipeStore;
