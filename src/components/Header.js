import React from 'react'; 
import data from '../Quotes.json'
import './Header.css'

class Header extends React.Component {

    render(){
        return(
            <div className="container">
                <h2>Viens trouver l'amour dans notre arène du love..</h2>
                <h1>STARKEN SG-1</h1>
            </div>
        )
    }

} 

export default Header