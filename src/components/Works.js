import React from 'react';
import { Link } from 'react-router-dom';

import hestu_logo from "../img/hestu_logo.svg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/works.css";

import work1 from "../img/work1.png";
import work2 from "../img/work2.png";
import work3 from "../img/work3.png";
import work4 from "../img/work4.png";
import work5 from "../img/work5.png";


function Works() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

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
                    <div className="main-section">
                        <div className="responsive portfolio-container">
                            <Slider {...settings}>
                                <div className="content">
                                    <center><img src={work1}  alt="" srcSet /></center>
                                    <div className="content-title"> Landing Page bliis.id </div>
                                    <div className="content-hastag"> #html #css #bootstrap #flexbox #ui/ux </div>
                                    <div className="content-web">
                                        <a className="link-works" href="https://bliis.id" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe" aria-hidden="true" /> Website</a> |
                                        <a className="link-works" href="https://github.com/hestu14/bliis_homepage" target="_blank" rel="noopener noreferrer">&nbsp;<i className="fa fa-github" aria-hidden="true" /> Github</a>
                                    </div>
                                </div>
                                <div className="content">
                                    <center><img src={work2}  alt="" srcSet /></center>
                                    <div className="content-title"> Simple B/W </div>
                                    <div className="content-hastag"> #html #css #javascript #bootstrap </div>
                                    <div className="content-web">
                                        <a className="link-works" href="https://hestu14.github.io/bliis_sample3/" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe" aria-hidden="true" /> Website</a> |
                                        <a className="link-works" href="https://github.com/hestu14/bliis_sample3" target="_blank" rel="noopener noreferrer">&nbsp;<i className="fa fa-github" aria-hidden="true" /> Github</a>
                                    </div>
                                </div>
                                <div className="content">
                                    <center><img src={work3}  alt="" srcSet /></center>
                                    <div className="content-title"> Simple Movie Finder </div>
                                    <div className="content-hastag"> #react #bootstrap #javascript #api </div>
                                    <div className="content-web">
                                        <a className="link-works" href="https://hestu14.github.io/movie_finder/" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe" aria-hidden="true" /> Website</a> |
                                        <a className="link-works" href="https://github.com/hestu14/movie_finder" target="_blank" rel="noopener noreferrer">&nbsp;<i className="fa fa-github" aria-hidden="true" /> Github</a>
                                    </div>
                                </div>
                                <div className="content">
                                    <center><img src={work4}  alt="" srcSet /></center>
                                    <div className="content-title"> Mini Currency </div>
                                    <div className="content-hastag"> #react #bootstrap #javascript #api </div>
                                    <div className="content-web">
                                        <a className="link-works" href="https://hestu14.github.io/mini_currency/" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe" aria-hidden="true" /> Website</a> |
                                        <a className="link-works" href="https://github.com/hestu14/mini_currency" target="_blank" rel="noopener noreferrer">&nbsp;<i className="fa fa-github" aria-hidden="true" /> Github</a>
                                    </div>
                                </div>
                                <div className="content">
                                    <center><img src={work5} alt="" srcSet /></center>
                                    <div className="content-title"> AimerSound </div>
                                    <div className="content-hastag"> #ui/ux #figma </div>
                                    <div className="content-web">
                                        <a className="link-works" href="https://dribbble.com/shots/14556432-AimerSound-Mockup-Apps-Design-by-hestu14" target="_blank" rel="noopener noreferrer"><i className="fa fa-dribbble" aria-hidden="true" /> Dribbble</a> |
                                        <a className="link-works" href="https://github.com/hestu14/uiux_design" target="_blank" rel="noopener noreferrer">&nbsp;<i className="fa fa-github" aria-hidden="true" /> Github</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="text-more">
                            <Link to="/contact"><a><span>My Contact &nbsp;<i className="fa fa-arrow-right" aria-hidden="true" />
                            </span></a></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Works