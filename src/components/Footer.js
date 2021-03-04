import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <h1 className="footer-title">INFO</h1>
                        <div className="d-flex justify-content-center">
                            <p>city Moscow Main st 2020 office #222</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="tel:502-889-5731">+1(502)889-5731</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p>mjbouvet@iu.edu</p>
                        </div>
                    </div>
                    <div className="nav-box col-lg-3 col-md-2 col-sm-6">
                        <h1 className="footer-title">NAVIGATION</h1>
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                                <br />
                                <Link smooth={true} to="about" offset={-110} className="footer-nav">About Me</Link>
                                <br />
                                <Link smooth={true} to="services" offset={-110} className="footer-nav">Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} className="footer-nav">Experience</Link>
                                <br />
                                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                                <br />
                                <Link smooth={true} to="contact" offset={-110} className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <h1 className="footer-title">LINKS</h1>
                        <div className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/michaelbouvette/"><FontAwesomeIcon className="icon" icon={faLinkedin} size="4x" /></a>
                            <a href="https://github.com/mjbouvet?tab=repositories"><FontAwesomeIcon className="icon" icon={faGithubSquare} size="4x" /></a>
                            <a href="https://www.instagram.com/bouvettem17/"><FontAwesomeIcon className="icon" icon={faInstagramSquare} size="4x" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
