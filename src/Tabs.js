require('../stylesheets/tabs.scss');
import React, { Component } from 'react';
import { createStore } from 'redux';

function tabActive(state = 0, action) {
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

let store = createStore(tabActive);

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.name == store.getState()? true: false };
    this.click = () => changeTab();
    // this.interval = setInterval(() => this.tick(), 1000);
  }

  changeTab() {
  	console.log(this.props)
  }

  // tick() {
  //   this.setState({
  //     counter: this.state.counter + this.props.increment
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div className={this.state.active? 'active': ''}>{this.props.name}</div>
    );
  }
}

export class Tabs extends Component {
  render() {
    return (
	    <div className="tabs">
			<Tab name="All" />
			<Tab name="Starred" />
			<Tab name="Active" />
			<Tab name="Complete" />
	    </div>
    );
  }
}