require('../stylesheets/content.scss');
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { tabStore } from './tabStore';
import { Item } from './Item';

let increament = 0;
let all = JSON.parse(localStorage.getItem('ALL_LIST'));
if (all[0] && all[0].length > 0) {
  for (var i = 0; i < all[0].length; i++) {
    increament = Math.max(increament, all[0][i].id);
  }
  increament++;
}

export class TabContent extends Component {
  constructor(props) {
    super(props);
    var path = (this.props.path? this.props.path: 'All').replace(/\//, '');
    tabStore.dispatch({type: 'Get', path: path});
    this.state = {
      list: tabStore.getState(),
      path: path,
      todo: ''
    };
  }

  handleChange(e) {
    this.setState({todo: e.target.value});
  }

  addList() {
    if (this.state.todo) {
      tabStore.dispatch({
        type: 'Add',
        item: {
          todo: this.state.todo,
          complete: false,
          starred: false,
          id: increament
        },
        path: this.state.path
      });
    }
    increament++;
    this.setState({
      list: tabStore.getState(),
      todo: ''
    });

    this.refs.addTodo.focus();
  }

  updateList() {
    this.setState({list: tabStore.getState()});
  }

  componentDidMount() {
    this.refs.addTodo.focus();
  }

  render() {
    var path = this.state.path;
    var updateList = this.updateList.bind(this);
    return (
      <div>
        <div className="newTodo">
          <input type="text" ref="addTodo" value={this.state.todo} onChange={this.handleChange.bind(this)} placeholder="Type something..." />
          <FontAwesome name="plus" className="todo-plus" size="2x" onClick={this.addList.bind(this)} />
        </div>
        <div>
          {this.state.list.map(function(item, i) {
            return <Item key={i} data={item} path={path} onUpdate={updateList} />;
          })}
        </div>
      </div>
    )
  }
}