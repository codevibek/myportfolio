import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import './Project.css'

const Projects = () => {
    const [isFlipped, setIsFlipped] = useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        setIsFlipped(!isFlipped)
      }
    return (
        <div id="projects">

        
        <ReactCardFlip  flipSpeedBackToFront="1" flipSpeedFrontToBack="1" isFlipped={isFlipped} flipDirection="horizontal">
        <div className="projects__card" onMouseLeave={handleClick}>
          This is the front of the card.
        </div>
 
        <div className="projects__card" onMouseLeave={handleClick}>
          This is the back of the card.
          
        </div>
      </ReactCardFlip>


      </div>
    )
}

export default Projects
