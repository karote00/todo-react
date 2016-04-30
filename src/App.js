require('../stylesheets/app.scss');
import React, { Component } from 'react';
import { Tabs } from './Tabs';
// import { NICE, SUPER_NICE } from './colors';

// class Tabs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//     // this.interval = setInterval(() => this.tick(), 1000);
//   }

//   // tick() {
//   //   this.setState({
//   //     counter: this.state.counter + this.props.increment
//   //   });
//   // }

//   // componentWillUnmount() {
//   //   clearInterval(this.interval);
//   // }

//   render() {
//     return (
//       <Tab name="All" />
//     );
//   }
// }

export class App extends Component {
  render() {
    return (
      <div>
        <Tabs />
      </div>
    );
  }
}