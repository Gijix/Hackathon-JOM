import React from 'react'
import './Cards.css'

export default class Cards extends React.Component {

    onAddClick = () => {
        this.props.addClickHandler()
    }
    
    render(){
        return(
            <div className="Cards">
                <h2 className="titreperso">{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name}></img>
                <p className="nonbinary">{this.props.gender}</p>
                <div className='cardbutton'>
                    <button className="buttonAdd" onClick={this.onAddClick}>Choose me bitch!<span> ❤️</span></button>
                </div>
            </div>
        )
    }
}