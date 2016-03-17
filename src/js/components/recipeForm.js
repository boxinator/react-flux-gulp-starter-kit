var React = require('react');

var RecipeActions = require('../actions/recipe-actions');

var RecipeForm = React.createClass({

	onSubmit: function(e) {
		var textNode = this.refs.text.getDOMNode();
		var desc = textNode.value;

		textNode.value = '';

		RecipeActions.createRecipe({
			description: desc
		});
	},

	render: function() {
		return (
			<div className='recipe-form'>
				<textarea ref='text' />
				<button onClick={this.onSubmit}>Submit</button>
			</div>
		);
	}
});

module.exports = RecipeForm;
