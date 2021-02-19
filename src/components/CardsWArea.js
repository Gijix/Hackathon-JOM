import React from 'react'
import './Cards.css'

export default class CardsWArea extends React.Component {

addPlayerAttack = () => {
    this.props.addClickArenaHandler();
}

    render(){
        return(
            <div className="Cards">
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name}></img>
                <p>genre : {this.props.gender}</p>
                <div className='cardbutton'>
                    <button className="goToFight"  onClick={this.addPlayerAttack}> Go fight this bitch! </button>
                </div>
            </div>
        )
    }
}