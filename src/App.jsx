import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';

function App() {
	return (
		<Router>
			<Header />
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/projects">
				<Projects />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<SideNav />
		</Router>
	);
}

export default App;
