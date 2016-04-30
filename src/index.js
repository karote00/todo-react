require('../stylesheets/app.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { TabContent } from './TabContent';
import { createStore } from 'redux';
import { Tabs } from './Tabs';

function tabActive(state, action) {
  if (state == undefined) return 'Starred';
  switch (action.type) {
	case 'All':
	  return 'All';
	case 'Starred':
	  return 'Starred';
	case 'Active':
	  return 'Active';
	case 'Complete':
	  return 'Complete';
	default:
	  return 'All';
  }
}

var tabsStore = createStore(tabActive);

class AllContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		tabsStore.dispatch({type: 'All'});
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
		tabsStore.dispatch({type: 'Complete'});
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
		tabsStore.dispatch({type: 'Active'});
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
		tabsStore.dispatch({type: 'Complete'});
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