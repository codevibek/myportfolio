import React from 'react'
import Project from './Project'
// import Project1 from './Project1'
import './Project.css'

const Projects = () => {
    return (
        <div id="projects">
            <div className="projects__title">
                <h2>Projects</h2>
            </div>
            <div className="projectas">
                <Project />
                {/* <Project1/> */}
            </div>
            
        </div>
    )
}

export default Projects
