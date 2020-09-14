import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {
	render() {
		return (
			<Router>
				<nav style={styles.navStyle}>
					<h1 style={styles.logo}>Brayan Monge Méndez</h1>
					<ul style={styles.navLink}>
						<li>
							<Link style={styles.navItems} exact to="/">
								Home
							</Link>
						</li>
					</ul>
					<ul style={styles.navLink}>
						<li>
							<Link style={styles.navItems} to="/proy">
								Proyects
							</Link>
						</li>
					</ul>
					<ul style={styles.navLink}>
						<li>
							<Link style={styles.navItems} to="/ab">
								About
							</Link>
						</li>
					</ul>
					<ul style={styles.navLink}>
						<li>
							<Link style={styles.navItems} to="/cont">
								Contact
							</Link>
						</li>
					</ul>
					<Route path="/" component={''} exact />
					<Route path="/proy" component={''} />
					<Route path="/ab" component={''} />
					<Route path="/cont" component={''} />
				</nav>
			</Router>
		);
	}
}

let styles = {
	logo: {
		fontWeight: '10',
		flex: 2,
		borderRight: '1px solid #cccccc',
		fontSize: '22px',
	},
	navStyle: {
		textAlign: 'center',
		fontFamily: 'Arial',
		fontWeight: 'light',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'rgb(700,100,100)',
	},
	navLink: {
		listStyle: 'none',
		flex: 'auto',
	},
	navItems: {
		borderRight: '1px solid #cccccc',
		fontSize: '18px',
		textDecoration: 'none',
		color: '#333',
		display: 'block',
		// background: 'white',
	},
};
