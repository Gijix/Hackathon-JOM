import React from 'react'
import SelectTeam from './screen/SelectTeam'
import './App.css';
import Background from './image/background_select.jpg'
import Header from './components/Header'
import Fight from './screen/Fight'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screen/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/selectteam" component={SelectTeam} />
        <Route path="/fight" component={Fight} />
      </div>
    </Router>
  )
}

export default App;
