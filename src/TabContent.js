require('../stylesheets/content.scss');
import React, { Component } from 'react';

export class TabContent extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(str) {
    console.log(str)
  }

  render() {
    var filterLink = {
      requestChange: this.handleChange
    };
    return (
      <div>
        <div className="search">
          <input type="text" valueLink={filterLink} placeholder="Type something..." />
        </div>
        <div>Content</div>
      </div>
    )
  }
}