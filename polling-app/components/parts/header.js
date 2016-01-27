var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	getInitialProps() {
		return {
			status: 'disconnected'
		}
	},

	render() {
		return (
			<header className="row">
				<div className="col-xs-10">
					<h1>{this.props.title}</h1>
				</div>
				<div className="col-sx-2">
					<span id="connection-status" className={this.props.status}></span>
				</div>
			</header>
		);
	}
})

module.exports = Header;