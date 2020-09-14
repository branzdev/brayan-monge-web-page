import React, { Component } from 'react';
//Styles
import './resume.scss';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default class Curriculum extends Component {
	iconID = (<FontAwesomeIcon icon={faAddressCard} />);
	iconMail = (<FontAwesomeIcon icon={faEnvelope} />);
	iconHome = (<FontAwesomeIcon icon={faHome} />);
	iconMobile = (<FontAwesomeIcon icon={faMobileAlt} />);
	render() {
		return (
			<div>
				<div className="header">
					<h1>Brayan Monge Méndez</h1>
				</div>
				<div className="left">
					<h1>Profile</h1>
					<div className="divider"></div>
					<h3>{this.iconID}</h3>
					<p>118170449</p>
					<h3>{this.iconMail}</h3>
					<p>bmongemendez@gmail.com</p>
					<h3>{this.iconHome}</h3>
					<p>San Ramón, Alajuela</p>
					<h3>{this.iconMobile}</h3>
					<p>(+506) 8815 8298</p>
					<div className="divider"></div>
					<h2>Idioms</h2>
					<p>Spanish: Mother Tongue</p>
					<p>English: Intermediate</p>
					<div className="divider"></div>
					<h2>Skills</h2>
				</div>
				<div className="right">
					<div className="languagesDiv">
						<h1>Languages</h1>
						<h2>HTML</h2>
						<h2>CSS</h2>
						<h2>JavaScript</h2>
						<h2>Java</h2>
					</div>
					<div className="lib_frameDiv">
						<h1>Libraries/Frameworks</h1>
						<h2>React</h2>
						<h2>Bootstrap</h2>
					</div>
					<div className="educationDiv">
						<h1>Education</h1>
						<h2>CCNA 2 Degree</h2>
						<h2>Fidelitas University</h2>
						<h3>San José, Costa Rica</h3>
						<h3>Systems Engineering - Third to Last Quarter</h3>
						<h2>Liceo Nuestra Señora de los Angeles</h2>
						<h3>San Ramón, Alajuela, Costa Rica</h3>
						<h2>Liceo Nuestra Experimental Bilingue</h2>
						<h3>San Ramón, Alajuela, Costa Rica</h3>
					</div>
					<div className="experienceDiv">
						<h1>Experience</h1>
						<h2>React</h2>
						<h2>Bootstrap</h2>
					</div>
				</div>
			</div>
		);
	}
}
