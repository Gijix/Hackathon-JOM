import React from 'react'
import './Cards.list.css'
import axios from 'axios'
import Cards from '../components/Cards'
import quotes from '../Quotes.json'

export default class CardList extends React.Component{
  state = {
    characters: [],
  };
     
  componentDidMount() {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => this.setState({ characters: res.data }));
  }
  render(){
    const { characters } = this.state
    const tab10 = []
    characters.map(character => quotes.map(quote => character.id === quote.id ? (
        character['attack'] = quote.attack,
        character['defense'] = quote.defense,
        tab10.push(character)
      ) : null  ))
    console.log(tab10)
    return (
      <div className="cardList">
        <div className="displaylist">
          {/* { characters
            .filter(character => characters.includes(character.id))
            // .map((character) =>  <Cards {...character} key={character.id} />)
          } */}
        </div>
      </div>
    )
  }
};
