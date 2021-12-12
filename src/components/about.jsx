import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import '../css/vendor.css';
import '../css/base.css';
import profilePhoto from '../images/profile-pic.png';

export default class About extends React.Component {
    render() {
        return (

            <section id="about">

                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>About</h5>
                        <div className="intro-info">

                            <img src={profilePhoto} alt="Profile Picture"/>

                            <p className ="lead">Lara Marinelli – Machine Learning Engineer/technology instructor. Graduated in Information Systems (USP) and Master's student in Artificial Intelligence (USP), she has already worked with consulting, back end development, full stack development and software engineering before moving to Machine Learning Engineering.</p>
                        </div>

                    </div>
                </div> 
                <div className="row about-content">

                    <div className="col-six tab-full">

                        <h3>About her Work</h3>
                        <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                        <ul className="info-list">
                            <li>
                                <strong></strong>
                                <span></span>
                            </li>
                            <li>
                                <strong></strong>
                                <span></span>
                            </li>
                            <li>
                                <strong></strong>
                                <span></span>
                            </li>
                            <li>
                                <strong>Website:</strong>
                                <span>www.kardswebsite.com</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>me@kardswebsite.com</span>
                            </li>

                        </ul> 

                    </div>

                    <div className="col-six tab-full">

                        <h3>Skills</h3>
                        <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                        <ul className="skill-bars">
                            <li>
                                <div className="progress percent90"><span>90%</span></div>
                                <strong>HTML5</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>CSS3</strong>
                            </li>
                            <li>
                                <div className="progress percent70"><span>70%</span></div>
                                <strong>JQuery</strong>
                            </li>
                            <li>
                                <div className="progress percent95"><span>95%</span></div>
                                <strong>PHP</strong>
                            </li>
                            <li>

                                <div className="progress percent75"><span>75%</span></div>
                                <strong>Wordpress</strong>
                            </li>

                        </ul> 
                    </div>

                </div>

                <div className="row button-section">
                    <div className="col-twelve">
                        <a href="#contact" title="Contact" className="button stroke smoothscroll">Contact</a>
                        <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                    </div>
                </div>

            </section> 
        )
    }
}
