require('../stylesheets/app.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { TabContent } from './TabContent';
import { App } from './App';

class AllContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent />
		);
	}
}

class StarredContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent />
		);
	}
}

class ActiveContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent />
		);
	}
}

class CompleteContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent />
		);
	}
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="All" component={TabContent} />
      <Route path="Starred" component={TabContent} />
      <Route path="Active" component={TabContent} />
      <Route path="Complete" component={TabContent} />
      <Route path="*" component={TabContent} />
    </Route>
  </Router>
  ), document.getElementById('root')
);