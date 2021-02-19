import React from 'react'
import './Cards.css'

export default class CardDefense extends React.Component {
    render(){
        console.log(this)
        return(
            <div className="Cards">
                <div>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.image} alt={this.props.name}></img>
                    <p>genre : {this.props.gender}</p>
                </div>
                <div className='counterDef'>
                    <p className=''>{this.props.defense}</p>
                </div>
            </div>
        )
    }
}