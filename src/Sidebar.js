import React from 'react'
import './Sidebar.css'

const Sidebar = ({navbar,clicked}) => {
    return (
        <div className={clicked?"sidebar":"nosidebar"}>
            <ul className={clicked?"sidebar-list":"nosidebar-list"}>
                    {navbar?.map(nav=>{
                        const {id,link,title} = nav
                        return( <li key={id} ><a  className={(clicked)?"sidebar-listItem":"nosidebar-listItem"} href={link}>{title}</a></li>
                        )
                        
                    })}
                   
                </ul>
            
        </div>
    )
}

export default Sidebar
