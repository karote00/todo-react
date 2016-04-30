require('../stylesheets/tabs.scss');
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


class TabsList extends Component {
  constructor(props) {
    super(props);
    this.state = {'active': 'All'};
  }

  render() {
    return (
      <div className="tabs">
        <div className={this.state.active == this.props.name? 'active': ''}><Link to='All'>All</Link></div>
        <div className={this.state.active == this.props.name? 'active': ''}><Link to='Starred'>Starred</Link></div>
        <div className={this.state.active == this.props.name? 'active': ''}><Link to='Active'>Active</Link></div>
        <div className={this.state.active == this.props.name? 'active': ''}><Link to='Complete'>Complete</Link></div>
      </div>
      <main>
          {this.props.children}
      </main>
    )
  }
}

export class Tabs extends Component {
  render() {
    return (
      <TabsList />
    )
  }
}