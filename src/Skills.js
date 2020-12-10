import React from 'react'
import './Skills.css'

const Skills = ({skills}) => {
    
    return (
        <div className="skills">
            <div className="skills__title">
            <h2>Skills</h2>
            <hr/>
            </div>
            
            {skills?.map((ski)=>{
                const {title,icon,level} = ski
                
                return(
                    <div className="skill">
                    <h4>{title}</h4>
                    
                    {/* <div className="skills__imageContainer">
                        <img src={icon} alt="icon" className="skills__image"/>
                    </div> */}
                    <div className="skills__container">
                        <div className="skills__level">
                            
                        </div>
                    </div>
                </div>
                )
                  
                  

            })}
          
        </div>
    )
}

export default Skills
