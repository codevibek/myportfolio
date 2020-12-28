import React from 'react'
import './Skills.css'


const Skills = ({skills}) => {
    
    return (
        <div className="skills" id="skills">
            <div className="skills__title">
            <h2>Skills</h2>
            <hr/>
            </div>
            
            {skills?.map((ski)=>{
                const {title,icon,id,level} = ski
                
                return(
                    
                    <div key={id} className="skill" >
                        <div className="skill__left">
                        <h4>{title}</h4>
                    
                    <div className="skills__imageContainer">
                        <img src={icon} alt="icon" className="skills__image"/>
                    </div>
                            </div>
                            <div className="skill__right">
                            <div className="skills__container">
                        <div className="skills__level" style={{width:`${level}`}}>
                            
                        </div>
                    </div>
                                </div>
                    
                    
                </div>
                )
                  
                  

            })}
          
        </div>
    )
}

export default Skills
