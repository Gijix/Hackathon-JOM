import React from 'react'
import './Cards.list.css'
import axios from 'axios'
import Cards from '../components/Cards'

export default class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          character: [],
        };
      }

    componentDidMount() {
        axios
          .get("https://miadil.github.io/starwars-api/api/all.json")
          .then((res) => this.setState({ character: res.data }));
      }
    render(){
        //const { character } = this.state
        
        return (
            <div className="cardList">
                <div className="displaylist">
              {this.state.character.map((character) =>  <Cards {...character} key={character.id} />)}
                </div>
            </div>
        )
    }
};
