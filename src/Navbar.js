import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "./logo.png"

const Navbar = ({navbar}) => {
    return (
        <div className="navbar">
            <div className="navbar-image">
                <Link to="#">
                    <img src={logo} alt="logo" className="navbar-imageLogo"/>

                </Link>
            </div>
            <nav>
                <ul className="navbar-list">
                    {navbar?.map(nav=>{
                        const {id,link,title} = nav
                        return( <li key={id}><Link className="navbar-listItem" to={link}>{title}</Link></li>
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
            
        </div>
    )
}

export default Navbar
