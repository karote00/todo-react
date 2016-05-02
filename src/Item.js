require('../stylesheets/item.scss');
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export class Item extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="item-container">
				<div className="check">
					<div className="circle"></div>
					<FontAwesome name="check-circle" />
				</div>
				<span>{this.props.data}</span>

			</div>
		)
	}
}