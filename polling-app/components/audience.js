var React = require('react');

var Audience = React.createClass ({
	render() {
		return (
			<h3>Audience : {this.props.title}</h3>
		);
	}
});

module.exports = Audience;