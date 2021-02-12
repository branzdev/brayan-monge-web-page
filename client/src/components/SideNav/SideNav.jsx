import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import resume from '../../files/Brayan Monge Méndez Resume.pdf';
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
					<Link onClick={() => setIsSidenavActive(!isSidenavActive)} to="/">
						<motion.p className="side-nav__link" whileTap={{ scale: 0.9 }}>
							Home
						</motion.p>
					</Link>
				</li>
				<li className="side-nav__list-item">
					<Link
						onClick={() => setIsSidenavActive(!isSidenavActive)}
						to="/projects/0"
					>
						<motion.p className="side-nav__link" whileTap={{ scale: 0.9 }}>
							Projects
						</motion.p>
					</Link>
				</li>
				<li className="side-nav__list-item">
					<Link
						onClick={() => setIsSidenavActive(!isSidenavActive)}
						to="/contact"
					>
						<motion.p className="side-nav__link" whileTap={{ scale: 0.9 }}>
							Contact
						</motion.p>
					</Link>
				</li>
				<li className="side-nav__list-item">
					<motion.a
						whileTap={{ scale: 0.9 }}
						className="side-nav__link"
						href={resume}
						target="_blank"
					>
						<span className="side-nav__get">Get</span> Resume
					</motion.a>
				</li>
			</ul>
		</nav>
	);
}
