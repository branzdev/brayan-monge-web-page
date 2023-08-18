import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
//Styles
import "./projects.scss";
//Components
import Project from "../Project/Project";
//Logos
import logoHTML5 from "../../img/HTML5.svg";
import logoCSS3 from "../../img/CSS3.svg";
import logoJS from "../../img/JS.svg";
import logoMongoDB from "../../img/MongoDB.svg";
import logoExpressJS from "../../img/ExpressJS.svg";
import logoReactJS from "../../img/ReactJS.svg";
import logoNodeJS from "../../img/NodeJS.svg";
import logoSass from "../../img/Sass.svg";
import logoUnity from "../../img/Unity.svg";
import logoCSharp from "../../img/CSharp.svg";

export default function Proyects() {
	// eslint-disable-next-line no-unused-vars
	const [projects, setProjects] = useState([
		{
			title: "JMéndez",
			titleSpan: "Constructora",
			subTitle: "Web Page",
			paragraph:
				"Creation of a website capable of giving customers relevant information about the company and also the opportunity of a direct contact option",
			logos: [logoHTML5, logoSass, logoNodeJS, logoReactJS, logoExpressJS],
		},
		{
			title: "My",
			titleSpan: "Personal",
			subTitle: "Web Page",
			utility: "(.this)",
			paragraph:
				"Creation of my personal website where all visitants can see my most recent projects, get a copy of my resume and contact me directly",
			logos: [logoHTML5, logoSass, logoNodeJS, logoReactJS, logoExpressJS],
		},
		{
			title: "Another Version",
			titleSpan: "of My Portfolio",
			subTitle: "Web Page",
			paragraph:
				"Creation of my portfolio with another design and structure with plain HTML, CSS and JavaScript",
			logos: [logoHTML5, logoCSS3, logoJS],
		},
		{
			title: "Turn ",
			titleSpan: "The Jump!",
			subTitle: "Videogame",
			utility: "(WIP)",
			paragraph: 'I am building my own 2D game inspired by "Doddle Jump"',
			logos: [logoUnity, logoCSharp],
		},
		{
			title: "And more",
			titleSpan: "Projects",
			subTitle: "On the way!",
			paragraph: `I'm constantly learning and practicing new skills everyday :)`,
			logos: [
				logoHTML5,
				logoCSS3,
				logoJS,
				logoMongoDB,
				logoExpressJS,
				logoReactJS,
				logoNodeJS,
			],
		},
	]);
	const [currentProject, setCurrentProject] = useState(0);
	const [isGoingRight, setIsGoingRight] = useState(true);

	let navigate = useNavigate();

	const location = useLocation();

	useEffect(() => {
		navigate("/projects/" + currentProject);
	}, [currentProject, navigate]);

	const handleLeftClick = () => {
		currentProject >= 1 && setCurrentProject((prevState) => prevState - 1);
		setIsGoingRight(false);
	};
	const handleRightClick = () => {
		currentProject < projects.length - 1 &&
			setCurrentProject((prevState) => prevState + 1);
		setIsGoingRight(true);
	};

	const handleCurrentProjectClick = (project) => {
		setCurrentProject(project);
		project < currentProject ? setIsGoingRight(false) : setIsGoingRight(true);
	};
	return (
		<>
			<div className="projects">
				<motion.div
					whileTap={{ scale: 0.9 }}
					className="projects__leftArrow-container"
					onClick={handleLeftClick}
				>
					<div className="projects__leftArrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<title>Go Left</title>
							<g fill="#ffffff">
								<path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"></path>
							</g>
						</svg>
					</div>
				</motion.div>
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route
							path="0"
							element={
								<Project
									isGoingRight={isGoingRight}
									title={projects[0].title}
									titleSpan={projects[0].titleSpan}
									subTitle={projects[0].subTitle}
									paragraph={projects[0].paragraph}
									logos={projects[0].logos}
									website="https://jmendezconstructorasa.herokuapp.com"
									github="https://github.com/branzdev/JM-Constructora"
									button
								/>
							}
						></Route>
						<Route
							path="1"
							element={
								<Project
									isGoingRight={isGoingRight}
									title={projects[1].title}
									titleSpan={projects[1].titleSpan}
									utility={projects[1].utility}
									subTitle={projects[1].subTitle}
									paragraph={projects[1].paragraph}
									logos={projects[1].logos}
									github="https://github.com/branzdev/brayan-monge-web-page"
									button
								/>
							}
						></Route>
						<Route
							path="2"
							element={
								<Project
									isGoingRight={isGoingRight}
									title={projects[2].title}
									titleSpan={projects[2].titleSpan}
									utility={projects[2].utility}
									subTitle={projects[2].subTitle}
									paragraph={projects[2].paragraph}
									logos={projects[2].logos}
									github="https://github.com/branzdev/personal-portfolio-webpage-fcc"
									website="https://codepen.io/branzdev/full/abyOBeq"
									button
								/>
							}
						></Route>
						<Route
							path="3"
							element={
								<Project
									isGoingRight={isGoingRight}
									title={projects[3].title}
									titleSpan={projects[3].titleSpan}
									subTitle={projects[3].subTitle}
									utility={projects[3].utility}
									paragraph={projects[3].paragraph}
									logos={projects[3].logos}
									github="https://github.com/branzdev/TurnTheJump"
									button
								/>
							}
						></Route>
						<Route
							path="4"
							element={
								<Project
									isGoingRight={isGoingRight}
									title={projects[4].title}
									titleSpan={projects[4].titleSpan}
									subTitle={projects[4].subTitle}
									paragraph={projects[4].paragraph}
									logos={projects[4].logos}
									button
									github="https://github.com/branzdev"
								/>
							}
						></Route>
						<Route
							path="3"
							element={
								<Project
									isGoingRight={isGoingRight}
									title={projects[3].title}
									titleSpan={projects[3].titleSpan}
									subTitle={projects[3].subTitle}
									paragraph={projects[3].paragraph}
									logos={projects[3].logos}
									button
									github="https://github.com/branzdev"
								/>
							}
						></Route>
					</Routes>
				</AnimatePresence>
				<motion.div
					whileTap={{ scale: 0.9 }}
					className="projects__rightArrow-container"
					onClick={handleRightClick}
				>
					<div className="projects__rightArrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<title>Go Right</title>
							<g fill="#ffffff">
								<path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>
							</g>
						</svg>
					</div>
				</motion.div>

				<div className="projects__current">
					{projects.map((value, index) => {
						return (
							<motion.div
								whileTap={{ scale: 0.9 }}
								className={`projects__current-selection ${index} ${
									index === currentProject && "active"
								}`}
								key={index}
								onClick={() => handleCurrentProjectClick(index)}
							></motion.div>
						);
					})}
				</div>
			</div>
		</>
	);
}
