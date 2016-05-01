require('../stylesheets/tabs.scss');
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="tabs">
          <div><Link to='All' activeClassName="active">All</Link></div>
          <div><Link to='Starred' activeClassName="active">Starred</Link></div>
          <div><Link to='Active' activeClassName="active">Active</Link></div>
          <div><Link to='Complete' activeClassName="active">Complete</Link></div>
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}