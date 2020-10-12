import React, { Component } from 'react';
//Styles
import './header.scss';

export default class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<a href="/" className="logo">
						BMM
					</a>
				</header>
			</div>
		);
	}
}
