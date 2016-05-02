require('../stylesheets/item.scss');
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { tabStore } from './tabStore';

export class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: tabStore.getState(),
			complete: this.props.data.complete
		};
	}

	done() {
		this.setState({complete: !this.state.complete});
		var idx = this.state.list.indexOf(this.props.data);
		this.state.list[idx].complete = true;
	}

	render() {
		return (
			<div className="item-container">
				<div className="check">
					<div className="circle" className={!this.state.complete? '': 'hidden'} onClick={this.done.bind(this)} ></div>
					<FontAwesome name="check-circle" className={this.state.complete? '': 'hidden'} onClick={this.done.bind(this)} />
				</div>
				<div className="todo">{this.props.data.todo}</div>
				<ul>
					<li><FontAwesome name="star-o" /></li>
					<li><FontAwesome name="star" /></li>
					<li><FontAwesome name="trash-o" /></li>
				</ul>
			</div>
		)
	}
}