import React from 'react'
import './Cards.css'

export default class CardsInFight extends React.Component {

    render(){
        return(
            <div className="Cards">
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name}></img>
                <p>genre : {this.props.gender}</p>
                <p>{this.props.attack}</p>
                <div className='cardbutton'>
                </div>
            </div>
        )
    }
}