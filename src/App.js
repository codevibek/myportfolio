import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from'./About'
import Skills from './Skills'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')

  const getData = () => {
    axios.get('Data.json')
    .then(res=>{
      const data=res.data
      setData(data)
      
    })
  }
  useEffect(()=>{
    getData()
    
  },[])

    const {main,skills,navbar,education,work} = data
  
 console.log(skills)
  
  return (
    <div className="App">
      
      <Router>
      <Navbar navbar={navbar}/>
      <Home  main={main} />
      <About main={main}/>
      
      <Resume education={education} work={work}/>
      <Skills skills={skills}/>
      <Contact />
      <Footer/>
      
        <Switch>
          <Route path="#about">
            <About />
          </Route>
          <Route path="#">
            <Home />
          </Route>
          <Route path = "#skills">
          <Skills />
          </Route>
        </Switch>
   
    
     </Router>
    </div>
  );
}

export default App;
