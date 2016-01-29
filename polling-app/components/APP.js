import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
var RouteHandler = Router.RouteHandler;

var io = require('socket.io-client');
var Header = require('./parts/header');


var APP = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: ''
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnected', this.disconnect);
		this.socket.on('welcome', this.welcome);
	},

	connect() {
		this.setState({ status: 'connected' });
	},

	disconnect() {
		this.setState({ status: 'disconnected' });
	},

	welcome(serverState) {
		this.setState({ title: serverState.title });
	},

	render() {
		return (
			<div>
				<Header title={this.state.title} status={this.state.status}/>
				{this.props.children && React.cloneElement(this.props.children, this.state)}
			</div>
		);
	}
});


module.exports = APP;