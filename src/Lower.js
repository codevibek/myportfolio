import React from 'react'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import './Lower.css'



const Lower = ({skills}) => {
    return (
        <div className="lower">
            
            <Skills skills={skills}/>
      <Contact />
      <Footer/>
        </div>
    )
}

export default Lower
