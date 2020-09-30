import React, { Component } from 'react';

export default class Proyects extends Component {
	state = {
		imgURL: [
			'https://tecnoalimeninfo.com/wp-content/uploads/2020/07/Software-Development.jpg',
			'https://www.evolutioncentury.com/images/content_images/Software%20Development.jpg',
		],
	};
	render() {
		return (
			<div>
				<div className="projectDiv">
					<div class="leftArrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<g class="nc-icon-wrapper" fill="#111111">
								<path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z" />
							</g>
						</svg>
					</div>
					<img
						className="projectImage"
						alt="projectImage"
						src={this.state.imgURL[0]}
					></img>
					<div class="rightArrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<g class="nc-icon-wrapper" fill="#111111">
								<path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z" />
							</g>
						</svg>
					</div>
				</div>
			</div>
		);
	}
}
