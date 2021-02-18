import React from 'react'
import {
    Link
  } from "react-router-dom";
import './Fight.css'

export default function Fight() {
    return (
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
