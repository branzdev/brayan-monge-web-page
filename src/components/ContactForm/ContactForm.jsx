import React, { useState } from 'react';
import { motion } from 'framer-motion';
//Styles
import './contactForm.scss';
//components
import Button from '../Button/Button';

export default function ContactForm() {
	const pageVariantsContent = {
		initial: { y: '-100vh', x: '-50%', opacity: 0 },
		in: { y: '-50%', x: '-50%', opacity: 1 },
		out: { y: '-100vh', x: '-50%', opacity: 0 },
	};

	const pageTransitions = {
		duration: 0.5,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const [inputActive, setInputActive] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const defaultFormData = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const [formData, setFormData] = useState(defaultFormData);

	const handleOnFocus = (input) => {
		setInputActive((prevstate) => ({
			...prevstate,
			[input]: 'active',
		}));
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleOnBlur = (e) => {
		const { name, value } = e.target;
		console.log(name + '=' + value);

		value === '' &&
			setInputActive((prevstate) => ({
				...prevstate,
				[name]: '',
			}));
	};

	return (
		<motion.form
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariantsContent}
			transition={pageTransitions}
			className="contact-form"
			onSubmit={handleSubmit}
		>
			<label
				for="inputName"
				className={`contact-form__label ${inputActive.name && 'active'}`}
			>
				Name
			</label>
			<div className="contact-form__input-container">
				<input
					onFocus={() => handleOnFocus('name')}
					id="inputName"
					name="name"
					className="contact-form__input"
					type="text"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
				/>
			</div>
			<label
				for="inputEmail"
				className={`contact-form__label ${inputActive.email && 'active'}`}
			>
				Email
			</label>
			<div className="contact-form__input-container">
				<input
					onFocus={() => handleOnFocus('email')}
					id="inputEmail"
					name="email"
					className="contact-form__input"
					type="email"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
				/>
			</div>
			<label
				for="inputSubject"
				className={`contact-form__label ${inputActive.subject && 'active'}`}
			>
				Subject
			</label>
			<div className="contact-form__input-container">
				<input
					onFocus={() => handleOnFocus('subject')}
					id="inputSubject"
					name="subject"
					className="contact-form__input"
					type="text"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
				/>
			</div>
			<label
				for="inputMessage"
				className={`contact-form__label ${inputActive.message && 'active'}`}
			>
				Message
			</label>
			<div className="contact-form__input-container">
				<textarea
					onFocus={() => handleOnFocus('message')}
					id="inputMessage"
					name="message"
					className="contact-form__input contact-form__input--message "
					type="text"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
				/>
			</div>
			<Button
				className="button--primary contact-form__submit"
				text="Send Message"
				onClick={handleSubmit}
			/>
		</motion.form>
	);
}
