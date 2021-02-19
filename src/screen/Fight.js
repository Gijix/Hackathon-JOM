import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

import CardDefense from '../components/CardDefense'
import CardsWArea from '../components/CardsWArea'
import CardsInFight from "../components/CardsInFight"

import './Fight.css'

export default class Fight extends React.Component { 
    state = {
        cardFight: [],
        loading: false,
        cardFightId: [],
        characters: [],
        characterDef:{},
    };

    componentDidMount = async () => {
        const item = Math.floor(Math.random()*this.props.location.data.tab10.length)
        const cardDef = this.props.location.data.tab10[item]
        
        await this.setState({characterDef: cardDef, loading: true})
    }
    
    addPlayerAttack = (id) => {
        const newCards = this.props.location.data.cardId.filter(card => (card.id === id ))
        this.setState({cardFightId: newCards})

    }
    
    render () {
        const {characters, characterDef} = this.state

  
    return this.state.loading ? (
        <div className='fullPage'>
            <h1 className='titleFight'>
                Fight
            </h1>
            <div className='positionArea'>
                <div className='fightArea'>
                    
                    {
          	            this.state.cardFightId.map((card)=> <CardsInFight {...card} key={card.id}/>)
          	        }
                    
                    <div className='VS'>
                        Attack VS Defense
                    </div>
                    
                      < CardDefense {...characterDef}/>
                    
                </div>
            </div>
            <div className='PareaCardButton'>
                <div className='areaCardButton'>
                    <div className='homeButton'>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className='fightHero'>
                        {
                        this.props.location.data.cardId.map((card)=> <CardsWArea 
                            {...card} 
                            key={card.id}
                            addClickArenaHandler = {this.addPlayerAttack.bind(this, card.id)}/>)
                        }
                    </div>   
                    <div className='backButton'>
                        <Link to='/selectteam'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>    
        ) : <div>'loading ... '</div>
    }

}
