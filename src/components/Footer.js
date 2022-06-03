import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import EmailForm from "./EmailForm"
import {React} from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="section">
            <div className="line1"/>
            <div className="email">EMAIL</div>
            <Link className="link-msg" to="/emailform">
                <div className="msg">Click to email me</div>
            </Link>
            <div className="footer-icon"> 
                <a href="https://github.com/Sarvesh1119"><div id="github-logo"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></div></a>
                <a href="https://www.linkedin.com/in/sarveshwaran-r-25a0501ab"><div id="linkedin-logo"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></div></a>
            </div>
        </div>
    )
}

export default Footer