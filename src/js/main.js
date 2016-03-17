var React = require('react');
var ReactDOM = require('react-dom');
var Recipes = require('./components/recipes');
var RecipeForm = require('./components/recipeForm');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Recipes</h2>
				<Recipes />
				<RecipeForm />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('container')
);
