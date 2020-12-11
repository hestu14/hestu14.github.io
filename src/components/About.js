import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "../styles/about.css";

import hestu_logo from "../img/hestu_logo.svg";

import html_logo from "../img/html.png";
import css_logo from "../img/css.png";
import js_logo from "../img/js.png";
import bootstrap_logo from "../img/bootstrap.png";
import react_logo from "../img/react.png";
import figma_logo from "../img/figma.png";
import corel_logo from "../img/corel.png"

function About() {
    return (
        <div

        >
            {/* Hero Section */}
            <motion.div className="body-container container"
                initial={{ opacity: 0, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100vw' }}
                transition={{ duration: 0.5}}
            >
                <div className="hero-section">
                    {/* Navbar Section */}
                    <div className="nav-section">
                        <div className="logo-section">
                            <Link to="/"><a><img src={hestu_logo} alt="Hestu P" srcSet /></a></Link>
                        </div>
                        <div className="list-section">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav mr-auto">
                                        <Link to="/about"><a className="nav-link">About Me</a></Link>
                                        <Link to="/works"><a className="nav-link">My Works</a></Link>
                                        <Link to="/contact"><a className="nav-link">Contact</a></Link>
                                        <div className="dropdown show">
                                            <a className="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-bars" aria-hidden="true" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <Link to="/about"><a className="dropdown-item">About Me</a></Link>
                                                <Link to="/works"><a className="dropdown-item">My Works</a></Link>
                                                <Link to="/contact"><a className="dropdown-item">Contact</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Main About Section */}
                    <div className="main-section">
                        <div className="text-name">Hestu Prasetya</div>
                        <div className="text-about">I am a civil engineering graduate, but interested in web development especially
                        in front-end development and UI/UX. Started web development journey in early 2020 and then
                        joined Purwadhika Startup and Coding School in March 2020 for Part Time Web and Mobile Development class.
                        Graduated from Purwadhika in October 2020 and start looking for a new challenge as web developer.
                         </div>
                        <div className="skillset-container">
                            <div className="text-skillset1">
                                <div className="box-skillset"><img src={html_logo} alt="" srcSet /></div>
                                <div className="box-skillset"><img src={css_logo} alt="" srcSet /></div>
                                <div className="box-skillset"><img src={js_logo} alt="" srcSet /></div>
                                <div className="box-skillset"><img src={bootstrap_logo} alt="" srcSet /></div>
                            </div>
                            <div className="text-skillset2">
                                <div className="box-skillset"><img src={react_logo} alt="" srcSet /></div>
                                <div className="box-skillset"><img src={figma_logo} alt="" srcSet /></div>
                                <div className="box-skillset"><img src={corel_logo} alt="" srcSet /></div>
                            </div>
                        </div>
                        <div className="text-more">
                            <Link to="/works"><a><span>See My Works &nbsp;<i className="fa fa-arrow-right" aria-hidden="true" />
                            </span></a></Link>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div >
    )
}

export default About