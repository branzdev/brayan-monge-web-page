import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//Styles
import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link className="header__logo" to="/">
              BMM
            </Link>
          </motion.div>
        </header>
      </div>
    );
  }
}
