require('../stylesheets/tabs.scss');
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import { tabsStore } from './tabState';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {'active': this.props.location.pathname.substr(1)};
    // console.log(this)
    var currentLocation = this.props.location.pathname.substr(1);
    console.log(currentLocation)
    // console.log(hashHistory)
    // console.log(Router)
    // console.log(Route)
    // var currentRouteName = Router.getCurrentPathname();
    // console.log(currentRouteName)
  // console.log(Route.transitionTo(currentRouteName, {lang: 'de'}));

  }

  handleChangeLang(e) {
    console.log(e)
  }

  render() {
    console.log(tabsStore.getState())
    return (
      <div>
        <div className="tabs">
          <div className={this.state.active == 'All'? 'active': ''}><Link to='All'>All</Link></div>
          <div className={this.state.active == 'Starred'? 'active': ''}><Link to='Starred'>Starred</Link></div>
          <div className={this.state.active == 'Active'? 'active': ''}><Link to='Active'>Active</Link></div>
          <div className={this.state.active == 'Complete'? 'active': ''}><Link to='Complete'>Complete</Link></div>
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}