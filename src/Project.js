import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import './Project.css'
import black from './black1.jpg'
import social from './data'

const Projects = () => {
    const [isFlipped, setIsFlipped] = useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        setIsFlipped(!isFlipped)
      }
    return (
        <div id="projects">

        
        <ReactCardFlip  flipSpeedBackToFront="1" flipSpeedFrontToBack="1" isFlipped={isFlipped} flipDirection="horizontal">
        <div className="projects__cardFront" onMouseLeave={handleClick}>
          <img src={black} alt="app scrshot"/>
        </div>
 
        <div className="projects__cardBack" onMouseLeave={handleClick}>
          <h4>Portfolio</h4>
           <p>one displayed right now</p>
           <a href="#"><p>Link to App</p></a>
           <div className="projects__social"> 

           
           {social?.map(soc=>{
                const {id, url , icon}= soc
                return(
                  <a className="projects__socialList" href={url}>{icon} </a>

                )
              })}
              </div>
          
        </div>
      </ReactCardFlip>


      </div>
    )
}

export default Projects
