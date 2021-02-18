import './App.css';
import React from 'react'
import CardList from './screen/CardsList'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
