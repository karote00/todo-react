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
			path: this.props.path,
			todo: this.props.data.todo,
			changeInput: false
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

	delete() {
		tabStore.dispatch({
			type: 'Delete',
			item: this.props.data,
			path: this.state.path
		});

		this.props.onUpdate();
	}

	handleChange(e) {
		this.setState({todo: e.target.value});
	}

	changeInput(e) {
		this.setState({changeInput: !this.state.changeInput});
		if (!this.state.changeInput) {
			console.log('set focus')
			console.log(this.refs.todoInput)
			ReactDOM.findDOMNode(this.refs.todoInput).focus();
		}
	}

	render() {
		var name = {};
		name[this.state.path] = true;
		name['item-container'] = true;
		var container = classNames(name);

		var complete = classNames({
			'complete': true,
			'hidden': this.state.complete
		});

		var star = classNames({
			'star': true,
			'hidden': !this.state.starred
		});

		var star_o = classNames({
			'star_o': true,
			'hidden': this.state.starred,
			'active': this.state.starred
		});

		var todoText = classNames({
			'strike': this.state.complete && this.state.path != 'Complete',
			'hidden': this.state.changeInput
		});

		return (
			<div className={container}>
				<div className="check">
					<div className={complete} onClick={this.complete.bind(this)} ></div>
					<FontAwesome name="check-circle" className={this.state.complete? '': 'hidden'} onClick={this.complete.bind(this)} />
				</div>
				<div className="todo">
					<span onClick={this.changeInput.bind(this)} className={todoText}>{this.state.todo}</span>
					<input type="text" ref="todoInput" onBlur={this.changeInput.bind(this)} onChange={this.handleChange.bind(this)} value={this.state.todo} className={!this.state.changeInput? 'hidden': ''} />
				</div>
				<ul className="menu">
					<li className={star_o} onClick={this.starred.bind(this)}><FontAwesome name="star-o" /></li>
					<li className={star} onClick={this.starred.bind(this)}><FontAwesome name="star" /></li>
					<li className="bottom" onClick={this.delete.bind(this)}><FontAwesome name="trash-o" /></li>
				</ul>
			</div>
		)
	}
}