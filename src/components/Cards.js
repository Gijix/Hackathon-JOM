import React from 'react'
import './Cards.css'

export default class Cards extends React.Component {

    onAddClick = () => {
        this.props.addClickHandler()
    }
    
    render(){
        return(
            <div className="Cards">
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name}></img>
                <p>genre : {this.props.gender}</p>
                <div className='cardbutton'>
                    <button className="chooseCharacter" >Choose this character</button>
                    <button className="buttonAdd" onClick={this.onAddClick}>Add to me team</button>
                </div>
            </div>
        )
    }
}