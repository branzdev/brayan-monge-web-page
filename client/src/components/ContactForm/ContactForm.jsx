import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
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

	const [isInputActive, setIsInputActive] = useState('');

	const pageTransitions = {
		duration: 0.5,
	};

	const defaultFormData = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};
	const defaultIsRequired = {
		nameRequired: '',
		emailRequired: '',
		subjectRequired: '',
		messageRequired: '',
	};

	const defaultInputActive = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const [formData, setFormData] = useState(defaultFormData);

	const [isRequired, setIsRequired] = useState(defaultIsRequired);

	const [inputActive, setInputActive] = useState(defaultInputActive);

	const {
		nameRequired,
		emailRequired,
		subjectRequired,
		messageRequired,
	} = isRequired;

	const { name, email, subject, message } = formData;

	const resetForm = () => {
		setFormData(defaultFormData);
		setInputActive(defaultInputActive);
	};

	const validateRequired = (key, value) => {
		if (value === '') {
			setIsRequired((prevState) => ({
				...prevState,
				[`${key}Required`]: 'required',
			}));
		} else {
			setIsRequired((prevState) => ({
				...prevState,
				[`${key}Required`]: '',
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formIsFilled = (name && email && subject && message) !== '';

		if (formIsFilled) {
			setIsRequired(defaultIsRequired);
			axios({
				method: 'POST',
				url: '/api/sendMail',
				data: formData,
			})
				.then((response) => {
					// console.log(response.data);
					if (response.data.status === 'success') {
						Swal.fire({
							title: 'Thank you!',
							text:
								"The message has been sent, I'll write you back as soon as I can :)",
							icon: 'success',
							//timer: 3000,
							customClass: {
								container: 'sweet-alert2__container',
								popup: 'sweet-alert2__popup',
								title: 'sweet-alert2__title',
								confirmButton: 'sweet-alert2__confirm-button',
								content: 'sweet-alert2__content',
							},
						});
						resetForm();
					} else if (response.data.status === 'fail') {
						Swal.fire({
							title: 'Oops...',
							text: 'An error has occurred, please try again :(',
							icon: 'error',
							//timer: 3000,
							customClass: {
								container: 'sweet-alert2__container',
								popup: 'sweet-alert2__popup',
								title: 'sweet-alert2__title',
								confirmButton: 'sweet-alert2__confirm-button',
								content: 'sweet-alert2__content',
							},
						});
					}
				})
				.catch((error) => {
					if (!error.response) {
						// network error
						Swal.fire({
							title: 'Conection error',
							text:
								"It looks like there's a connection error, please try again :(",
							icon: 'error',
							toast: true,
							position: 'bottom',
							//timer: 3000,
							customClass: {
								container: 'sweet-alert2__container-toast',
								popup: 'sweet-alert2__popup-toast',
								title: 'sweet-alert2__title-toast',
								confirmButton: 'sweet-alert2__confirm-button-toast',
								content: 'sweet-alert2__content-toast',
							},
						});
					} else {
						//console.log(error.response.data.message);
					}
				});
		} else {
			Object.entries(formData).forEach(([key, value]) => {
				validateRequired(key, value);
			});

			Swal.fire({
				title: 'Please fill all the fields :(',
				icon: 'error',
				toast: true,
				position: 'bottom',
				// timer: 3000,
				customClass: {
					container: 'sweet-alert2__container-toast',
					popup: 'sweet-alert2__popup-toast',
					title: 'sweet-alert2__title-toast',
					confirmButton: 'sweet-alert2__confirm-button-toast',
					content: 'sweet-alert2__content-toast',
				},
			});
		}
	};

	const maxWidth = window.matchMedia('(max-width: 640px)');

	const handleOnFocus = (input, e) => {
		setInputActive((prevstate) => ({
			...prevstate,
			[input]: 'active',
		}));

		maxWidth.matches && setIsInputActive('activeMobile');
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

		value === '' &&
			setInputActive((prevstate) => ({
				...prevstate,
				[name]: '',
			}));
		maxWidth.matches && setIsInputActive('');
	};

	return (
		<motion.form
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariantsContent}
			transition={pageTransitions}
			className={`contact-form ${isInputActive}`}
			onSubmit={handleSubmit}
		>
			<label
				for="inputName"
				className={`contact-form__label ${nameRequired} ${
					inputActive.name && 'active'
				} `}
			>
				Name
			</label>
			<div className={`contact-form__input-container ${nameRequired}`}>
				<input
					onFocus={() => handleOnFocus('name')}
					id="inputName"
					name="name"
					className="contact-form__input "
					type="text"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					value={name}
				/>
			</div>
			<label
				for="inputEmail"
				className={`contact-form__label ${emailRequired} ${
					inputActive.email && 'active'
				}`}
			>
				Email
			</label>
			<div className={`contact-form__input-container ${emailRequired}`}>
				<input
					onFocus={() => handleOnFocus('email')}
					id="inputEmail"
					name="email"
					className="contact-form__input"
					type="email"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					value={email}
				/>
			</div>
			<label
				for="inputSubject"
				className={`contact-form__label ${subjectRequired} ${
					inputActive.subject && 'active'
				}`}
			>
				Subject
			</label>
			<div className={`contact-form__input-container ${subjectRequired}`}>
				<input
					onFocus={() => handleOnFocus('subject')}
					id="inputSubject"
					name="subject"
					className="contact-form__input"
					type="text"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					value={subject}
				/>
			</div>
			<label
				for="inputMessage"
				className={`contact-form__label ${messageRequired} ${
					inputActive.message && 'active'
				}`}
			>
				Message
			</label>
			<div className={`contact-form__input-container ${messageRequired}`}>
				<textarea
					onFocus={() => handleOnFocus('message')}
					id="inputMessage"
					name="message"
					className="contact-form__input contact-form__input--message "
					type="text"
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					value={message}
				/>
			</div>
			<Button
				className={`button--primary contact-form__submit ${isInputActive}`}
				text="Send Message"
				onClick={handleSubmit}
			/>
		</motion.form>
	);
}
