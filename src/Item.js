require('../stylesheets/item.scss');
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { tabStore } from './tabStore';
import classNames from 'classnames';

export class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: tabStore.getState(),
			complete: this.props.data.complete,
			starred: this.props.data.starred
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
					<div className={!this.state.complete? '': 'hidden'} onClick={this.done.bind(this)} ></div>
					<FontAwesome name="check-circle" className={this.state.complete? '': 'hidden'} onClick={this.done.bind(this)} />
				</div>
				<div className="todo"><span className={!this.state.complete? '': 'strike'}>{this.props.data.todo}</span></div>
				<ul className="menu">
					<li className={!this.state.starred? '': 'hidden'}><FontAwesome name="star-o" /></li>
					<li className={this.state.starred? '': 'hidden'}><FontAwesome name="star" /></li>
					<li className="bottom"><FontAwesome name="trash-o" /></li>
				</ul>
			</div>
		)
	}
}