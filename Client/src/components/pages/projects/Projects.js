import React from 'react'
import './Projects.css'
import Card from '../../Card'
const projectsData = require('./projects.json')


const Projects = () => {
    return (
        <div className="projects">
            <header className="projects-heading-text">Selected Projects</header>
            <div className="projects-container">
                {
                    projectsData.map(
                        (dataObj, index) => <Card {...dataObj} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default Projects