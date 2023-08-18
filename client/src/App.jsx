import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}>
          <Route path=":id" />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SideNav />
    </Router>
  );
}

export default App;
