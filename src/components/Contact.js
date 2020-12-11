import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "../styles/contact.css";

import hestu_logo from "../img/hestu_logo.svg";


function Contact() {
    return (
        <div>
            {/* Hero Section */}
            <motion.div className="body-container container"
                initial={{ opacity: 0, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100vw' }}
                transition={{ duration: 0.5 }}
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
                        <div className="text-header">Interested for collaboration or hiring ?</div>
                        <div className="text-email">Send me email</div>
                        <div className="text-email-box">
                            <a href="mailto:hestu.14@gmail.com"><span><i className="fa fa-envelope" aria-hidden="true"> hestu.14@gmail.com</i></span></a>
                        </div>
                        <div className="text-contact">
                            <div className="box-contact">
                                <a href="https://github.com/hestu14" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true" /></a>
                            </div>
                            <div className="box-contact">
                                <a href="https://twitter.com/hestu_14" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true" /></a>
                            </div>
                            <div className="box-contact">
                                <a href="https://www.instagram.com/hestu_14/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true" /></a>
                            </div>
                            <div className="box-contact">
                                <a href="https://www.linkedin.com/in/hestu-prasetya-971827158/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                            </div>
                            <div className="box-contact">
                                <a href="https://dribbble.com/hestu" target="_blank" rel="noopener noreferrer"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div >
    )
}

export default Contact