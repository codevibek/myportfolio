import React from 'react'
import './Navbar.css'

import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ({navbar,handleHamClick}) => {


   
    return (
        <div className="navbar" id="navbar">
            <div className="navbar-button">
                   <button>Surprise</button> 
            </div>
            <nav>
                <ul className="navbar-list">
                    {navbar?.map(nav=>{
                        const {id,link,title} = nav
                        return( <li key={id}><a className="navbar-listItem" href={link}>{title}</a></li>
                        )
                    })}
                    {/* <li ><Link className="navbar-listItem" to="/">Home</Link></li>
                    <li><Link className="navbar-listItem" to="#about">About</Link></li>
                    <li><Link className="navbar-listItem" to="#skills">Skills</Link></li>
                    <li><Link className="navbar-listItem" to="#projects">Projects</Link></li>
                    <li><Link className="navbar-listItem" to="#testimonials">Testimonials</Link></li>
                    <li><Link className="navbar-listItem" to="#blog">Blog</Link></li> */}

                </ul>
            </nav>
            <div className="navbar-ham" onClick={handleHamClick}>
                <MenuIcon />
            </div>
        </div>
    )
}

export default Navbar
