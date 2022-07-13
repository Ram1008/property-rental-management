import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PropertyState from './Context/PropertyState'
import Properties from './Components/Proterties/Properties'
import PropertyDetails from './Components/Proterties/PropertyDetails/PropertyDetails'
class App extends Component {

  render() {
    return (
      <PropertyState>
        <Router>
          <Routes>
            <Route exact path="/" element= {<Properties />}/>
            <Route exact path="/details/:name" element= {<PropertyDetails />}/>
          </Routes>
        </Router>
      </PropertyState>
    )
  }
}

export default App;