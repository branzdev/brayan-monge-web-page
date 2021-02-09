import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Styles
import './sideNav.scss';
export default function Nav() {
	const [isSidenavActive, setIsSidenavActive] = useState(false);
	return (
		<nav className={`side-nav ${isSidenavActive ? 'active' : ''}`}>
			<div
				className="side-nav__toggle-button"
				onClick={() => setIsSidenavActive(!isSidenavActive)}
			></div>
			<ul className="side-nav__list">
				<li className="side-nav__list-item">
					<Link
						onClick={() => setIsSidenavActive(!isSidenavActive)}
						className="side-nav__link"
						to="/"
					>
						Home
					</Link>
				</li>
				<li className="side-nav__list-item">
					<Link
						onClick={() => setIsSidenavActive(!isSidenavActive)}
						className="side-nav__link"
						to="/projects/0"
					>
						Projects
					</Link>
				</li>
				<li className="side-nav__list-item">
					<Link
						onClick={() => setIsSidenavActive(!isSidenavActive)}
						className="side-nav__link"
						to="/contact"
					>
						Contact
					</Link>
				</li>
				<li className="side-nav__list-item">
					<a
						className="side-nav__link"
						href="http://localhost:8080/download-resume"
					>
						<span className="side-nav__get">Get</span> Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}
