import React, { Component } from 'react';
//Styles
import './home.scss';
//Logos
import logoFacebook from '../../img/facebook.svg';
import logoInstagram from '../../img/instagram.svg';
import logoLinkedin from '../../img/linkedin.svg';
import logoGitHub from '../../img/github.svg';
//Particles
import Particles from 'react-particles-js';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
	state = {
		isNavActive: false,
		isButtonClicked: false,
	};

	element = (<FontAwesomeIcon icon={faHashtag} />);

	render() {
		// console.log(this.state.isNavActive);
		return (
			<div className="homeBody">
				<Particles
					className="particles"
					params={{
						particles: {
							number: {
								value: 50,
							},
							size: {
								value: 3,
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'repulse',
								},
							},
						},
						opacity: {
							value: 0,
							random: false,
							anim: {
								enable: false,
							},
						},
					}}
				/>
				<div className={`home ${this.state.isNavActive ? 'active' : ''}`}>
					<header>
						<a href="/" className="logo">
							Logo
						</a>
						<div
							className="toggleButton"
							onClick={() =>
								this.setState({
									isNavActive: !this.state.isNavActive,
								})
							}
						></div>
					</header>
					<div className="backgroundFontDiv">
						<span className="backgroundFont">H</span>
						<span className="backgroundFont">e</span>
						<span className="backgroundFont">l</span>
						<span className="backgroundFont">l</span>
						<span className="backgroundFont">o</span>
					</div>
					<div className="content">
						<h2>
							My name is<span> Brayan </span>
						</h2>
						<h2>I'm a Systems Engineering Student</h2>
						<h3>and a software development passionate </h3>
						<a href="/">About me</a>
					</div>
					<nav className="socialMedia">
						<ul>
							<li>
								<a href="/">
									<img src={logoFacebook} alt="facebook"></img>
								</a>
							</li>
							<li>
								<a href="/">
									<img src={logoInstagram} alt="instagram"></img>
								</a>
							</li>
							<li>
								<a href="/">
									<img src={logoLinkedin} alt="linkedin"></img>
								</a>
							</li>
							<li>
								<a href="/">
									<img src={logoGitHub} alt="twitter"></img>
								</a>
							</li>
						</ul>
					</nav>
					<div
						className={`socialButton ${
							this.state.isButtonClicked ? 'active' : ''
						}`}
						onClick=""
					>
						<nav className="socialMedia">
							<ul>
								<li>
									<a href="/">
										<img src={logoFacebook} alt="facebook"></img>
									</a>
								</li>
								<li>
									<a href="/">
										<img src={logoInstagram} alt="instagram"></img>
									</a>
								</li>
								<li>
									<a href="/">
										<img src={logoLinkedin} alt="linkedin"></img>
									</a>
								</li>
								<li>
									<a href="/">
										<img src={logoGitHub} alt="twitter"></img>
									</a>
								</li>
							</ul>
						</nav>
						<div
							className="socialButtonIcon"
							onClick={() => {
								this.setState({ isButtonClicked: !this.state.isButtonClicked });
							}}
						>
							{this.element}
						</div>
					</div>
				</div>
				<nav className={`nav ${this.state.isNavActive ? 'active' : ''}`}>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="./Curriculum">Portfolio</a>
						</li>
						<li>
							<a href="/">Proyects</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
