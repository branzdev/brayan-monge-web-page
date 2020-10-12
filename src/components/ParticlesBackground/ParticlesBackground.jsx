import React, { Component } from 'react';
//Styles
import './particlesBackground.scss';
//Particles
import Particles from 'react-particles-js';

export default class ParticlesBackground extends Component {
	render() {
		return (
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
		);
	}
}
