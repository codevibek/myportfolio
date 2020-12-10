import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import social from './data'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__up">

            <ul className="footer-social">
            {social?.map(soc=>{
                const {id, url , icon}= soc
                return(
                  <li key={id}><Link className="footer-socialList" to={url}>{icon} </Link></li>

                )
              })}
               {/* <li><Link className="footer-socialList" to="www.facebook.com"><FacebookIcon /></Link></li>
               <li><Link className="footer-socialList" to="www.linkedin.com"><LinkedInIcon /></Link></li>
               <li><Link className="footer-socialList" to="www.youtube.com"><YouTubeIcon /></Link></li>
               <li><Link className="footer-socialList" to="www.github.com"><GitHubIcon /></Link></li> */}

            </ul>
            <div className="footer__upIcon">
            <ArrowUpwardOutlinedIcon style={{fontSize:40}}/>
            </div>
            </div>


            <p>An attempt to make a portfolio </p>
            
        </div>
    )
}

export default Footer
