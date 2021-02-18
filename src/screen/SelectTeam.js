import React from 'react'
import Background from '../image/background_select.jpg'
import {
    Link
  } from "react-router-dom";

import './SelectTeam.css';

export default function SelectTeam() {
    
    return (
            <div className='fullPage' >
                <div className="titleSelect">
                    Choose your hero
                </div>
                <div className='selectHero'>
                    <div className='card'>
                        Card
                    </div>
                    <div className='card'>
                        Card1
                    </div>
                    <div className='card'>
                        Card2
                    </div>
                    <div className='card'>
                        Card3
                    </div>
                    <div className='card'>
                        Card4
                    </div>
                    <div className='card'>
                        Card5
                    </div>
                    <div className='card'>
                        Card
                    </div>
                    <div className='card'>
                        Card1
                    </div>
                    <div className='card'>
                        Card2
                    </div>
                    <div className='card'>
                        Card3
                    </div>
                    <div className='card'>
                        Card4
                    </div>
                    <div className='card'>
                        Card5
                    </div>
                </div>
                <div className='selectTitleHero'>
                    Your Hero
                </div>
                <div className='selectedHero'>
                    <div className='card'>
                        Card1 selected
                    </div>
                    <div className='card'>
                        Card2 selected
                    </div>
                    <div className='card'>
                        Card3 selected
                    </div>
                    <div className='card'>
                        Card4 selected
                    </div>
                    <div className='card'>
                        Card5 selected
                    </div>
                    <div className='card'>
                        Card6 selected
                    </div>
                </div>
                <div className='enterFight'>
                    <Link to="/fight">
                        <button>Time to fight</button>
                    </Link>
                </div>
            </div>
    )
}


