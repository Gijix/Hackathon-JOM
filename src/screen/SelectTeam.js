import React from 'react'
import Background from '../image/background_select.jpg'
import {
    Link
  } from "react-router-dom";
import axios from 'axios'
import Cards from '../components/Cards'
import quotes from '../Quotes.json'
import CardsSelected from '../components/CardsSelected'

import './SelectTeam.css';

   

export default class SelectTeam extends React.Component{
    state = {
        characters: [],
        cardId:[],
    };
    
    componentDidMount() {
        axios
        .get("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => this.setState({ characters: res.data }));
    }

    addOnClick = (id) => {
        const newCards = this.state.characters.filter(card => (card.id === id ))
        this.setState({cardId: newCards})
    }
    
    render(){
        const { characters } = this.state
        const tab10 = []
        characters.map(character => quotes.map(quote => character.id === quote.id ? (
            character['attack'] = quote.attack,
            character['defense'] = quote.defense,
            tab10.push(character)
        ) : null  ))


        return (
          <div>
          	<div className='fullPage' >
          	  <div className="titleSelect">
          	      Choose your hero
          	  </div>
          	  <div className='selectHero'>
          	    {
          	      tab10.map(card =>
          	      <Cards {...card} 
          	      key={card.id} 
          	      addClickHandler = {this.addOnClick.bind(this, card.id)}/>)
          	     }
          	  </div>
          	  <div className='selectTitleHero'>
          	      Your Hero
          	  </div>
          	  <div className='selectedHero'>
          	    <div>
          	      {
          	        this.state.cardId.map((card)=> <CardsSelected {...card} key={card.id}/>)
          	      }
          	    {console.log(this.state.cardId)}
          	    </div>
          	  </div>
          	  <div className='enterFight'>
          	    <Link to={{
						pathname: '/fight',
							data: {
							cardId: this.state.cardId
							}
								}
								}>
          	      <button>Time to fight</button>
          	    </Link>
          	  </div>
          	</div>
          </div>
        )
    }
}