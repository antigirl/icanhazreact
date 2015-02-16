var React = require('react');

var MyComponent = React.createClass({
	render: function() {
		return <div> hey buddy </div>;
	}
});

React.render(<MyComponent /> , document.body);