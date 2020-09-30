import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Styles
import './app.scss';
//Components
import Home from './components/Home/Home';
import Curriculum from './components/Resume/Resume';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<Router>
			<Route exact path="/">
				<div>
					<Home />
				</div>
			</Route>
			<Route path="/curriculum">
				<div>
					<Curriculum />
				</div>
			</Route>
			<Route path="/projects">
				<div>
					<Projects />
				</div>
			</Route>
		</Router>
	);
}

export default App;
