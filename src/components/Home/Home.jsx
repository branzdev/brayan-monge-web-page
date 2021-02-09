import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
//Styles
import './home.scss';
//Logos
import logoFacebook from '../../img/facebook.svg';
import logoInstagram from '../../img/instagram.svg';
import logoLinkedin from '../../img/linkedin.svg';
import logoGitHub from '../../img/github.svg';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
//Components
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import Button from '../Button/Button';

export default function Home() {
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const element = <FontAwesomeIcon icon={faHashtag} />;

	const pageVariantsContent = {
		initial: { y: '100vh', opacity: 0 },
		in: { y: '0', opacity: 1 },
		out: { y: '100vh', opacity: 0 },
	};
	const pageVariantsSocialMedia = {
		initial: { y: '100vh', opacity: 0 },
		in: { y: '0', opacity: 1 },
		out: { y: '100vh', opacity: 0 },
	};

	const pageTransitions = {
		duration: 0.5,
	};

	const homeRef = useRef(null);

	useEffect(() => {
		const home = homeRef.current;
		//GSAP ANIMATION
		const tl = gsap.timeline({
			defaults: {
				ease: 'power1.out',
			},
		});
		tl.to(home.querySelectorAll('.home__title-letter'), {
			opacity: 1,
			y: 0,
			duration: 0.5,
			stagger: 0.2,
			delay: 0.5,
		});
	}, []);
	return (
		<>
			<ParticlesBackground />
			<div ref={homeRef} className="home">
				<div>
					<div className="home__title">
						<span className="home__title-letter">H</span>
					</div>
					<div className="home__title">
						<span className="home__title-letter">e</span>
					</div>

					<div className="home__title">
						<span className="home__title-letter">l</span>
					</div>

					<div className="home__title">
						<span className="home__title-letter">l</span>
					</div>

					<div className="home__title">
						<span className="home__title-letter">o</span>
					</div>
				</div>
				<motion.div
					className="home__content"
					initial="initial"
					animate="in"
					exit="out"
					transition={pageTransitions}
					variants={pageVariantsContent}
				>
					<h2 className="home__header1">
						My name is<span> Brayan </span>
					</h2>
					<h2 className="home__header1">I'm a Systems Engineering Student</h2>
					<h3 className="home__header2">
						and a software development passionate
					</h3>
					<Link className="home__button-link" to="/projects/0">
						<Button className="button--secondary home__button" text="Projects">
							Projects
						</Button>
					</Link>
				</motion.div>
				<motion.nav
					className="home__social"
					initial="initial"
					animate="in"
					exit="out"
					transition={pageTransitions}
					variants={pageVariantsSocialMedia}
				>
					<ul className="home__social-list">
						<li className="home__social-list-item">
							<a className="home__social-list-item-link" href="/">
								<img
									className="home__social-list-item-image"
									src={logoFacebook}
									alt="facebook"
								></img>
							</a>
						</li>
						<li className="home__social-list-item">
							<a className="home__social-list-item-link" href="/">
								<img
									className="home__social-list-item-image"
									src={logoInstagram}
									alt="instagram"
								></img>
							</a>
						</li>
						<li className="home__social-list-item">
							<a className="home__social-list-item-link" href="/">
								<img
									className="home__social-list-item-image"
									src={logoLinkedin}
									alt="linkedin"
								></img>
							</a>
						</li>
						<li className="home__social-list-item">
							<a className="home__social-list-item-link" href="/">
								<img
									className="home__social-list-item-image"
									src={logoGitHub}
									alt="twitter"
								></img>
							</a>
						</li>
					</ul>
				</motion.nav>
				<div
					className={`home__social-button ${isButtonClicked && 'active'}`}
					onClick=""
				>
					<nav className="home__social">
						<ul className="home__social-list">
							<li className="home__social-list-item">
								<a className="home__social-list-item-link" href="/">
									<img
										className="home__social-list-item-image"
										src={logoFacebook}
										alt="facebook"
									></img>
								</a>
							</li>
							<li className="home__social-list-item">
								<a className="home__social-list-item-link" href="/">
									<img
										className="home__social-list-item-image"
										src={logoInstagram}
										alt="instagram"
									></img>
								</a>
							</li>
							<li className="home__social-list-item">
								<a className="home__social-list-item-link" href="/">
									<img
										className="home__social-list-item-image"
										src={logoLinkedin}
										alt="linkedin"
									></img>
								</a>
							</li>
							<li className="home__social-list-item">
								<a className="home__social-list-item-link" href="/">
									<img
										className="home__social-list-item-image"
										src={logoGitHub}
										alt="twitter"
									></img>
								</a>
							</li>
						</ul>
					</nav>
					<div
						className="home__social-button-icon"
						onClick={() => {
							setIsButtonClicked(!isButtonClicked);
						}}
					>
						{element}
					</div>
				</div>
			</div>
		</>
	);
}
