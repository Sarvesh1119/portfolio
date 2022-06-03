import React,{useState} from 'react'
import "../css/project.css"
import "../css/App.css"

const Projects = () => {
    const [color,setColor]= useState(false)
    const ChangeColor= () => {
        setColor(true)
    }
    return (
        <div className="section" id="projects">
            <div className="heading">Projects</div>
            <div className="box">
                <div className="project-container">
                    <div className="project-img"> 
                        <img src="https://wallpapercave.com/wp/wp4923992.png" className="pro-img"/>
                    </div>
                    <div className="project-heading">Food ordering app</div>
                    <div className="line"></div>
                    <div className="content">
                        Created a web application that allows users to order their favourite food online within a few clicks.
                    </div>
                    <ul className="tools">
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                    <div className="btn">
                        <button>View app</button>
                        <button>Source Code</button>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-img"> 
                        <img src="https://wallpaperaccess.com/full/3949095.png" className="pro-img"/>
                    </div>
                    <div className="project-heading">Resume Builder</div>
                    <div className="line"></div>
                    <div className="content">
                            Created a web application that allows users to build their resumes with many template designs.
                    </div>
                    <ul className="tools">
                        <li>React</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Netlify</li>
                    </ul>
                    <div className="btn">
                        <a href="https://gleeful-strudel-f06f27.netlify.app/"><button onClick={ChangeColor} className={color ? "fill-color":"color"}>View app</button></a>
                        <a href="https://github.com/Sarvesh1119/resume-builder"><button>Source Code</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects