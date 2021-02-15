import React from 'react';
import { motion } from 'framer-motion';
//styles
import './button.scss';

export default function Button({ className, text, img, href }) {
	const handleLink = () => {
		window.open(href, '_blank');
	};

	return (
		<>
			<motion.button
				onClick={href && handleLink}
				whileTap={{ scale: 0.9 }}
				className={`button ${className}`}
			>
				{img && <img className="button__image" src={img} alt=""></img>}
				<p className="button__text">{text}</p>
			</motion.button>{' '}
		</>
	);
}
