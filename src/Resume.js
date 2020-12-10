import { CastForEducation } from '@material-ui/icons'
import React from 'react'
import './Resume.css'

const Resume = ({education,work}) => {
    return (
        <div className="resume">
            <div className="resume-topic">
                <div className="resume-topicContainer">
                    <div className="resume-titleContainer">
                    <h2>Education</h2>
                    <hr/>
                    </div>
                </div>
                <div className="resume-titles">
                {education?.map(level=>{
                    const{id,title,description}=level
                    
                    return(
                       <li className="eduItem" key={id}>
                    <h3 className="resume-title">
                       {title}
                    </h3>
                    <p className="resume-description">{description}</p> 
                    </li>
                    
                    )
                })}
                 </div>  
                
                {/* <div className="resume-titles">
                    <h3 className="resume-title">
                        School
                    </h3>
                    <p className="resume-description">Quality English School</p>
                    <h3 className="resume-title">
                        Bachelors
                    </h3>
                    <p className="resume-description">Samriddhi college(TU Affliated)</p>
                </div> */}

            </div>
            <hr/>

            <div className="resume-topic">
            <div className="resume-topicContainer">
                <div className="resume-titleContainer">
                <h2>Work</h2>
                <hr/>
                </div>
                
                </div>
                <div className="resume-titles">
                {work?.map(place=>{
                    const{id,title,description}=place
                    
                    return(
                       <li className="eduItem" key={id}>
                    <h3 className="resume-title">
                       {title}
                    </h3>
                    <p className="resume-description">{description}</p> 
                    </li>
                    
                    )
                })}
                    <h3 className="resume-title">
                        ABC company
                    </h3>
                    <p className="resume-description">Junior Developer</p>
                    
                </div>


            </div>
            <hr/>
        </div>
    )
}

export default Resume
