require('../stylesheets/tabs.scss');
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import classNames from 'classnames';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {'scroll_position': 0};
  }

  componentDidMount() {
    this.refs.page.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    this.setState({'scroll_position': e.target.scrollTop});
  }

  render() {
    var page = classNames({
      'page': true,
      'fixed-page': this.state.scroll_position > 90
    });

    return (
      <div ref="page" className={page}>
        <div>
          <div className="header-container">
            <span className="header">TODO</span><span className="sub-header">beta</span>
          </div>
          <div className="tabs">
            <div><Link to='All' activeClassName="active">All</Link></div>
            <div><Link to='Starred' activeClassName="active">Starred</Link></div>
            <div><Link to='Active' activeClassName="active">Active</Link></div>
            <div><Link to='Complete' activeClassName="active">Complete</Link></div>
          </div>
          <div className="children">
              {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}