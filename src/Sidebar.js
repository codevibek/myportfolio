import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = ({navbar,clicked}) => {
    return (
        <div className={clicked?"sidebar":"nosidebar"}>
            <ul className={clicked?"sidebar-list":"nosidebar-list"}>
                    {navbar?.map(nav=>{
                        const {id,link,title} = nav
                        return( <li key={id}><Link className={clicked?"sidebar-listItem":"nosidebar-listItem"} to={link}>{title}</Link></li>
                        )
                    })}
                   
                </ul>
            
        </div>
    )
}

export default Sidebar
