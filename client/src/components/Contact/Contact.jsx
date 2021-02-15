import React from 'react';
//components

import ContactForm from '../ContactForm/ContactForm';
//styles
import './contact.scss';

export default function Contact() {
	return (
		<>
			<div className="contact">
				<ContactForm />
			</div>
		</>
	);
}
