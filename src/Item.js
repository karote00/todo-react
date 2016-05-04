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
			starred: this.props.data.starred,
			path: this.props.path
		};
	}

	complete() {
		this.setState({complete: !this.state.complete});
		var idx = this.state.list.indexOf(this.props.data);
		this.state.list[idx].complete = !this.state.complete;

		tabStore.dispatch({
			type: 'Complete',
	        item: this.props.data,
	        path: this.state.path,
		});

		this.props.onUpdate();
	}

	starred() {
		this.setState({starred: !this.state.starred});
		var idx = this.state.list.indexOf(this.props.data);
		this.state.list[idx].starred = !this.state.starred;

		tabStore.dispatch({
			type: 'Starred',
	        item: this.props.data,
	        path: this.state.path,
		});

		this.props.onUpdate();
	}

	render() {
		var name = {};
		name[this.state.path] = true;
		name['item-container'] = true;
		var container = classNames(name);

		var greenStar = classNames({
			'star': true,
			'hidden': !this.state.starred
		});

		return (
			<div className={container}>
				<div className="check">
					<div className={!this.state.complete? '': 'hidden'} onClick={this.complete.bind(this)} ></div>
					<FontAwesome name="check-circle" className={this.state.complete? '': 'hidden'} onClick={this.complete.bind(this)} />
				</div>
				<div className="todo"><span className={this.state.complete && this.state.path != 'Complete'? 'strike': ''}>{this.props.data.todo}</span></div>
				<ul className="menu">
					<li className={!this.state.starred? '': 'hidden'} onClick={this.starred.bind(this)}><FontAwesome name="star-o" /></li>
					<li className={greenStar} onClick={this.starred.bind(this)}><FontAwesome name="star" /></li>
					<li className="bottom"><FontAwesome name="trash-o" /></li>
				</ul>
			</div>
		)
	}
}