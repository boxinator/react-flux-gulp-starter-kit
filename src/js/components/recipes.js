var React = require('react');

var RecipeStore = require('../stores/recipe-store');

function getStateFromStore() {
	return {
		recipes: RecipeStore.getAll()
	}
}

var Recipes = React.createClass({

	onChange: function() {
		this.setState(getStateFromStore());
	},

	getInitialState: function() {
		return getStateFromStore();
	},

	componentDidMount: function() {
		RecipeStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function() {
		RecipeStore.removeChangeListener(this.onChange);
	},

	render: function() {
		var recipes = this.state.recipes.map(function(recipe, index) {
			return (
				<div className='recipe' key={'recipe-' + index}>
					{recipe.description}
				</div>
			)
		});

		return (
			<div className='recipes'>
				{recipes}
			</div>
		);
	},
});

module.exports = Recipes;
