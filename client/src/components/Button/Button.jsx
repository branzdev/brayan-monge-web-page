import React from 'react';
import { motion } from 'framer-motion';
//styles
import './button.scss';

export default function Button({ className, text, img }) {
	const maxWidth = window.matchMedia('(min-width: 481px)');
	return (
		<motion.button whileTap={{ scale: 0.9 }} className={`button ${className}`}>
			{img && <img className="button__image" src={img} alt=""></img>}
			{maxWidth.matches && <p className="button__text">{text}</p>}
		</motion.button>
	);
}
