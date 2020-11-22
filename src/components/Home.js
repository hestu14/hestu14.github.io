import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";

import hestu_avatar from "../img/hestu_avatar.png"
import hestu_logo from "../img/hestu_logo.svg"

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="body-container container">
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
                    {/* Main Hero Section */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-5 left-main-hero order-lg-1 order-2 order-md-2 order-sm-2">
                            <div className="text-hello">Hello, I'm Hestu</div>
                            <div className="text-descripton">Front-End Web Developer &amp; UI/UX Enthusiast</div>
                            <div className="text-more">
                                <a href="#resume-section"><span> Download my Resume
            </span></a> &nbsp;&nbsp;
          <Link to="/about"><a><span>More About Me &nbsp;<i className="fa fa-arrow-right" aria-hidden="true" />
                                </span></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 right-main-hero d-flex justify-content-center order-lg-2 order-1 order-md-1 order-sm-1">
                            <img src={hestu_avatar} alt="" srcSet />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home