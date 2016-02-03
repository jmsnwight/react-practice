import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

var APP = require('./components/APP');
var Audience = require('./components/audience');
var Speaker = require('./components/speaker');
var Board = require('./components/board');
var Whoops404= require('./components/whoops404');

var routes = (
	<Route path="/" component={APP}>
		<IndexRoute component={Audience} />
		<Route name="speaker" path="speaker" component={Speaker} />
		<Route name="board" path="board" component={Board} />
		<Route path="*" component={Whoops404} />
	</Route>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react-container'));
