import React from 'react'
<<<<<<< HEAD
import CardList from './screen/CardsList'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
=======
import SelectTeam from './screen/SelectTeam'
import './App.css';
import Background from './image/background_select.jpg'
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
        <CardList />
        <Route exact path="/" component={Home} />
        <Route path="/selectteam" component={SelectTeam} />
        <Route path="/fight" component={Fight} />
      </div>
    </Router>
  )
>>>>>>> 0add062b9696b05943a4813d268d2e5282c56db6
}

export default App;
