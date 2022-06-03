import React from 'react'
import "../css/Accomplishments.css"

const Accomplishments = () => {
    return (
        <div className="section">
            <div className="heading">Personal Accomplishments</div>
            <div className="container">
                <div className="box-container">
                    <h2>Certification</h2>
                    AWS certified cloud practitioner, 2021-2024.
                </div>
                <div className="box-container">
                    <h2>Journal</h2>
                    Published "Customized music classification and recomendation system" in SpringerLink. 
                </div>
                <div className="box-container">
                    <h2>Certification</h2>
                    Completed "Google IT Automation with Python" offered by Coursera and organized by Google.
                </div>
                <div className="box-container">
                    <h2>Certification</h2>
                    Completed "The Joy of Computing using Python" offered by Indian Institute of Technology(IITM) and organized by NPTEL.
                </div>
            </div>
        </div>
    )
}

export default Accomplishments