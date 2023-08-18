import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import download from "downloadjs";
import axios from "axios";
//Styles
import "./sideNav.scss";
export default function Nav() {
  const [isSidenavActive, setIsSidenavActive] = useState(false);

  const downloadResume = () => {
    axios
      .get("/api/download-resume", {
        responseType: "blob", //required for pdf download
      })
      .then((response) => {
        const content = response.headers["content-type"];
        download(response.data, "Brayan Monge Méndez Resume 2021", content);
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className={`side-nav ${isSidenavActive ? "active" : ""}`}>
      <div
        className="side-nav__toggle-button"
        onClick={() => setIsSidenavActive(!isSidenavActive)}
      ></div>
      <ul className="side-nav__list">
        <li className="side-nav__list-item">
          <Link onClick={() => setIsSidenavActive(!isSidenavActive)} to="/">
            <motion.p className="side-nav__link" whileTap={{ scale: 0.9 }}>
              Home
            </motion.p>
          </Link>
        </li>
        <li className="side-nav__list-item">
          <Link
            onClick={() => setIsSidenavActive(!isSidenavActive)}
            to="/projects/0"
          >
            <motion.p className="side-nav__link" whileTap={{ scale: 0.9 }}>
              Projects
            </motion.p>
          </Link>
        </li>
        <li className="side-nav__list-item">
          <Link
            onClick={() => setIsSidenavActive(!isSidenavActive)}
            to="/contact"
          >
            <motion.p className="side-nav__link" whileTap={{ scale: 0.9 }}>
              Contact
            </motion.p>
          </Link>
        </li>
        <li className="side-nav__list-item">
          <motion.p
            whileTap={{ scale: 0.9 }}
            className="side-nav__link"
            onClick={downloadResume}
            target="_blank"
          >
            <span className="side-nav__get">Get</span> Resume
          </motion.p>
        </li>
      </ul>
    </nav>
  );
}
