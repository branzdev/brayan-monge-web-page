import React from 'react';
//components

import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import ContactForm from '../ContactForm/ContactForm';
//styles
import './contact.scss';

export default function Contact() {
	return (
		<>
			<ParticlesBackground />
			<div className="contact">
				<ContactForm />
			</div>
		</>
	);
}
