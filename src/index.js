require('../stylesheets/app.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { TabContent } from './TabContent';
import { Tabs } from './Tabs';

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
    <Route path="/" component={Tabs}>
      <Route>
        <Route path="All" component={AllContent} />
        <Route path="Starred" component={StarredContent} />
        <Route path="Active" component={ActiveContent} />
        <Route path="Complete" component={CompleteContent} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);