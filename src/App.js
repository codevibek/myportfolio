import React, {useState, useEffect,useCallback} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from'./About'
import Skills from './Skills'
import Resume from './Resume'
import "./App.css"
import Projects from './Projects'
import Setup from './Setup'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import Lower from './Lower'

function App() {
  const [data, setData] = useState('')
  const [clicked, setClicked] = useState('false')


  useEffect(()=>{
    getData()
    
  },[])
  const getData =useCallback( async() => {
    await axios.get('Data.json')
    .then(res=>{
      const data=res.data
      setData(data)
      
    })
  },[])
  const handleHamClick = (e) => {
    e.preventDefault()
    
    setClicked(!clicked)
   
   
}
const handleNavClick = (e) => {
  e.preventDefault()
  
  setClicked(false)
 
 
}



    const {main,skills,navbar,education,work} = data
  
  return (
    <div className="App">
      
      <Router>
      
      
      
        <Switch>
          <Route exact path="/">
          <Navbar navbar={navbar} handleHamClick={handleHamClick}/>
      <Sidebar navbar={navbar} clicked={clicked} handleNavClick={handleHamClick} />
      <Home  main={main} />
      <About main={main}/>
      
      <Resume education={education} work={work}/>
      <Projects />
      <Lower skills={skills} />

          </Route>
          <Route path="/setup">
            <Setup/>
          </Route>
        </Switch>
   
    
     </Router>
    </div>
  );
}

export default App;
