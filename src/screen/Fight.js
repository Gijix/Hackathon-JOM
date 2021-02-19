import React from 'react'
import { Link } from "react-router-dom";
import './Fight.css'
import CardsSelected from '../components/CardsSelected'
import CardsFightSelected from '../components/CardsFightSelected'

export default class Fight extends React.Component { 
    state = {
        cardFight: [],
        loading: true,
    };
    componentDidMount() {
        this.setState({cardFight: this.props , loading: false})
        // setTimeout(() => {
        //   this.setState({loading: false})  
        // }, 1000);
    }
    
    
    render (){
        const {cardFight} = this.state
       // console.log(this.props.location.data.cardId.name[0])

    return this.state.loading ? (
        <div>Loading</div>
    )
    :
    (
        <div>
            <h1 className='titleFight'>
                Fight
            </h1>
            <div className='positionArea'>
                <div className='fightArea'>
                    <div className='cardAttack'>
                        Carte Attack
                    </div>
                    <div className='VS'>
                        Attack VS Defense
                    </div>
                    <div className='cardDefense'>
                        Carte Defense
                    </div>
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
                        this.props.location.data.cardId.map((card)=> <CardsFightSelected {...card} key={card.id}/>)
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
        )
    }

}
