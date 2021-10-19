import React from 'react'
import PlayerPokemon from './PlayerPokemon'

const PlayerCard = (props) => {
    return (
        <div className="player-profile-card player1">
            <div className="mb-3">
            <div className="player-profile-cover"></div>
            <div className="player-info-container">
                <img className="player-avatar" src="avatar1.jpg"></img>
                <p className="mb-1"><strong>JOGADOR 1</strong></p>
                <button id="btn-deck" type="button" className="btn btn-success btn-sm btn-deck" data-bs-toggle="modal" data-bs-target="#cardsModal">ESCOLHER CARTAS</button>
            </div>
            </div>

            <div className="row cards-row">

                <PlayerPokemon></PlayerPokemon>
            
            </div>

            <div className="player-profile-card-bottom">
            <small>Total Base Experience: 999</small>
            </div>

        </div>
    )
}

export default PlayerCard