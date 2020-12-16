import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import social from './data'

import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
const Home = ({main}) => {
    const {name,work,address} = main
 const {country} = address
  
 
  
    return (
        <div className="home" id="home">

       
        <div className="home-banner">
         <div className="home-bannerText">
    
  
  <h1 className="home-bannerHeadline">I'm <span>{name}</span>.</h1>
  <h3>I'm a {country} based <span>{work}</span>.<br/></h3>
  <p> I specialize in React based development.</p>
  <button>Hire Me</button>

            
            </div>
            
        

            <ul className="navbar-social">
              {social?.map(soc=>{
                const {id, url , icon}= soc
                return(
                  <li key={id}><Link className="navbar-socialList" to={url}>{icon} </Link></li>

                )
              })}
               {/* <li><Link className="navbar-socialList" to="www.facebook.com"><FacebookIcon /></Link></li>
               <li><Link className="navbar-socialList" to="www.linkedin.com"><LinkedInIcon /></Link></li>
               <li><Link className="navbar-socialList" to="www.youtube.com"><YouTubeIcon /></Link></li>
               <li><Link className="navbar-socialList" to="www.github.com"><GitHubIcon /></Link></li> */}

            </ul>
        
      </div>
      
      <Link to="#about" className="linkArrow">
          <ArrowDropDownCircleOutlinedIcon 
            style={{fontSize:40}}
            className="arrowDown"/>
      </Link>
      </div>
    )
}

export default Home
