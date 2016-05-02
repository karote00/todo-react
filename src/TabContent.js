require('../stylesheets/content.scss');
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { tabStore } from './tabStore';
import { Item } from './Item';

export class TabContent extends Component {
  constructor(props) {
    super(props);
    var path = this.props.location.pathname && this.props.location.pathname.substr(1) || 'All';
    tabStore.dispatch({type: path});
    this.state = {
      list: tabStore.getState(),
      todo: ''
    };
  }

  handleChange(e) {
    this.setState({todo: e.target.value});
  }

  addList() {
    if (this.state.todo) this.state.list.push(this.state.todo);
    this.setState({todo: ''});
  }

  render() {
    return (
      <div>
        <div className="newTodo">
          <input type="text" value={this.state.todo} onChange={this.handleChange.bind(this)} placeholder="Type something..." />
          <FontAwesome name="plus" className="todo-plus" size="2x" onClick={this.addList.bind(this)} />
        </div>
        <div>
          {this.state.list.map(function(item, i) {
            return <Item key={i} data={item}/>;
          })}
        </div>
      </div>
    )
  }
}