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
			<TabContent path={this.props.location.pathname} />
		);
	}
}

class StarredContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent path={this.props.location.pathname} />
		);
	}
}

class ActiveContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent path={this.props.location.pathname} />
		);
	}
}

class CompleteContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabContent path={this.props.location.pathname} />
		);
	}
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="All" component={AllContent} />
      <Route path="Starred" component={StarredContent} />
      <Route path="Active" component={ActiveContent} />
      <Route path="Complete" component={CompleteContent} />
      <Route path="*" component={AllContent} />
    </Route>
  </Router>
  ), document.getElementById('root')
);