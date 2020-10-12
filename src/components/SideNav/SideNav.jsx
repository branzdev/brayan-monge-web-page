import React, { Component } from 'react';
//Styles
import './sideNav.scss';
export default class Nav extends Component {
	state = {
		isNavActive: false,
	};

	render() {
		return (
			<nav className={`nav ${this.state.isNavActive ? 'active' : ''}`}>
				<div
					className="toggleButton"
					onClick={() =>
						this.setState({
							isNavActive: !this.state.isNavActive,
						})
					}
				></div>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/projects">Proyects</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
					<li>
						<a href="http://localhost:8080/download">
							<span>Get</span> Resume
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
