import React from 'react'
import './About.css'
import avatar from './avatar.jpg'
import { Avatar } from '@material-ui/core';

const About = ({main}) => {
    if (main){
        var {name,address,phone,email,bio} =main
        var {street,city,country} = address
        
    }
    const handleDownload = () => {

    }
    return (
        <div className="about" id="about">
            <div className="about__avatar">
                <div className="about__avatarContainer">
                    <img alt="Bibek Lamichhane" src={avatar} />
                </div>
                
            </div>
            <div className="about__about">
            <h2>About Me</h2>
            <p>{bio} </p>
                <hr/>
            <h2>Contact Details</h2>
            <p><span>{name}</span>
                <span>{street}</span>
                <span>{city}{country}</span>
                <span>{phone}</span>
                <span>{email}</span>
                
            </p> 
            <div className="about__button">
                    <button onClick={handleDownload}>Download Resume</button> 
            </div>
            </div>
           
          
                  
            
        </div>
    )
}

export default About
