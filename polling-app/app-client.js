import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

var DefaultRoute = Router.DefaultRoute;

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
	<Route path="/" component={APP}>
		<IndexRoute component={Audience} />
		<Route name="speaker" path="speaker" component={Speaker} />
		<Route name="board" path="board" component={Board} />
	</Route>
);

	
	ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react-container'));


