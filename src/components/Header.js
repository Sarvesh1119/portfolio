import React from 'react'
import "../css/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import Projects from './Projects'

const Header = () => {
    const goToProjects = () => {
        const section= document.getElementById("projects")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    const goToTechnologies = () => {
        const section= document.getElementById("technologies")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    const goToAbout = () => {
        const section= document.getElementById("about")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    return (
        <div className="header">
            <div className="portfolio">
                <div className="portfolio-icon"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></div>
                <div>Portfolio</div>
            </div>
            <div>
                <ul className="list">
                    <li onClick={goToProjects}>Projects</li>
                    <li onClick={goToTechnologies}>Technologies</li>
                    <li onClick={goToAbout}>About</li>
                </ul>
            </div>
            <div className="media-logo">
                <a href="https://github.com/Sarvesh1119"><div id="github-logo"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></div></a>
                <a href="https://www.linkedin.com/in/sarveshwaran-r-25a0501ab"><div id="linkedin-logo"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></div></a>
            </div>
        </div>
    )
}

export default Header