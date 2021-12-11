import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

export default class Intro extends React.Component{
    render() {
        return (

            <section id="intro">
                <div className="intro-overlay" />
                <div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h5>Hello, World.</h5>
                            <h1>{this.props.nome}</h1>
                            <p className="intro-position">
                                <span>Front-end Developer</span>
                                <span>UI/UX Designer</span>
                            </p>
                            <a className="button stroke smoothscroll" href="#about" title>More About Me</a>
                        </div>
                    </div>
                </div> {/* /intro-content */}
                {<ul className="intro-social">
                    <li><a href="https://www.linkedin.com/in/lara-marinelli-146a55b0/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="mailto:lara245@gmail.com"><i className="fa fa-envelope" /></a></li>
                    <li><a href="https://github.com/lara-marinelli"><i className="fa fa-github" /></a></li>
                    {/*
                    <li><a href="#"><i className="fa fa-dribbble" /></a></li>
        <li><a href="#"><i className="fa fa-instagram" /></a></li>*/}
        </ul>}
            </section> 
      );
    }
  };