import React from 'react'
import "../css/about.css"

const Aboutme = () => {
    const goToProjects = () => {
        const section= document.getElementById("projects")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    return (
        <div className="section">
            <div className="about">
                <div>
                    <h2>Sarveshwaran Rajendran</h2>
                </div>
                <div className="desc">
                    I am an aspiring full stack developer.
                </div>
                <div>
                    <button onClick={goToProjects} className="learn-more-button">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
