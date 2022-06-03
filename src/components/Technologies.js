import React from 'react'
import "../css/technologies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact} from "@fortawesome/free-brands-svg-icons"
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons"


const Technologies = () => {
    return (
        <div className="section" id="technologies">
            <div className="heading">Technologies</div>
            <div className="tech">
                I've worked with a range of technologies in my career such as Python, SQL, React, Node ,and MongoDB. I am skillful in building web apps that are well developed using React and deployed.
            </div>
            <div className="container-1">
                <div className="flex">
                    <div className="tech-logo"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></div>
                    <span className="head">Front-End</span>
                    <span className="exp">Experience with React.js</span>
                </div>
                <div className="flex">
                    <div className="tech-logo"><FontAwesomeIcon icon={faServer}></FontAwesomeIcon></div>
                    <span className="head">Back-End</span>
                    <span className="exp">Experience with Node</span>
                </div>
                <div className="flex">
                    <div className="tech-logo"><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></div>
                    <span className="head">Database</span>
                    <span className="exp">Experience with MongoDB</span>
                </div>
            </div>
            <div className="brief" id="about">
                <div className="heading">About Sarvesh</div>
                <div className="tech">
                    Sarveshwaran Rajendran is an aspiring full stack developer who is looking to provide his ability to the fullest in developing and rendering the best possible solution to end user's problems using technology wisely.
                </div>
            </div>
            <div className="time-line"> 
                <span>2022</span>
                <span>2021</span>
            </div>
            <div className="time-line-desc">
                <span>Analyst- Software Engineer @ Agilisium Consulting India Private Limited</span>
                <span>Started as Intern</span>
            </div>
        </div>
    )
}

export default Technologies