import React from 'react';
import { motion } from 'framer-motion';
//styles
import './project.scss';
//components
import Button from '../Button/Button';
//logos
import logoGitHub from '../../img/github.png';
import logoWorld from '../../img/world.svg';

export default function Project({
	title,
	titleSpan,
	subTitle,
	paragraph,
	logos,
	isGoingRight,
	utility,
	website,
}) {
	const pageVariants = {
		initial: {
			opacity: 0,
			x: isGoingRight ? '100vh' : '-100vh',
			scale: 0.8,
		},
		in: {
			opacity: 1,
			x: 0,
			scale: 1,
		},
		out: {
			opacity: 0,
			x: isGoingRight ? '-100vh' : '100vh',
			scale: 1.2,
		},
	};

	const pageTransitions = {
		type: 'tween',
		ease: 'anticipate',
		duration: 0.5,
	};

	return (
		<motion.div
			className="project"
			initial="initial"
			animate="in"
			exit="out"
			transition={pageTransitions}
			variants={pageVariants}
		>
			<h2 className="project__header1">
				{title} <span className="project__span"> {titleSpan} </span>
			</h2>
			<h3 className="project__header2">
				{subTitle}
				<span className="project__utility">{utility}</span>
			</h3>
			<p className="project__text">{paragraph}</p>
			<div className="project__button-container">
				{website && (
					<Button
						className="button--secondary project__button"
						text="Visit Website"
						img={logoWorld}
					/>
				)}
				<Button
					className="button--secondary"
					text="View on Github"
					img={logoGitHub}
				/>
			</div>
			<div className="project__logos">
				{logos.map((value, index) => {
					return (
						<img
							key={index}
							className="project__logo"
							alt={value}
							src={value}
						></img>
					);
				})}
			</div>
		</motion.div>
	);
}
