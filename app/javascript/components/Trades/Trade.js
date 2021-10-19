import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import PlayerCard from './PlayerCard'
import PlayerPokemon from './PlayerPokemon'

const Trades = () => {

    const [pokemons, setPokemons] = useState([])
    const [playerOnePokemons, setplayerOnePokemons] = useState([])
    const [playerTwoPokemons, setplayerTwoPokemons] = useState([])
    const [playerTurn, setplayerTurn] = useState('')
    // const [isFair, setisFair] = useState(null)
    // const [isFairText, setisFairText] = useState('')
    
    let isFairDiff = 20

    useEffect(() => {
        axios.get('/api/v1/pokemons.json')
        .then( resp => {
            setPokemons(resp.data.data)
        } )
        .catch( resp => console.log(resp) )
    }, [pokemons.length])

    const totalBaseExperiencePlayerOne = playerOnePokemons.reduce(
        (acc, pokemon) => acc + pokemon.attributes.base_experience,
        0,
    )

    const totalBaseExperiencePlayerTwo = playerTwoPokemons.reduce(
        (acc, pokemon) => acc + pokemon.attributes.base_experience,
        0,
    )

    const baseExperienceDifference = Math.abs(
        totalBaseExperiencePlayerOne - totalBaseExperiencePlayerTwo,
    )

    // function isFairHandler() {
    //     let winner = ''
        
    //     if (baseExperienceDifference <= isFairDiff){
    //         setisFair(false)
    //         if (totalBaseExperiencePlayerOne < totalBaseExperiencePlayerTwo){
    //             winner = "O Treinador 2 está em vantagem."
    //         } else {
    //             winner = "O Treinador 1 está em vantagem."
    //         }
    //         setisFairText(`Troca injusta. ${winner}`)
    //     } else {
    //         setisFair(true)
    //         setisFairText("Troca justa. Parabéns treinadores!")
    //     }

    //     console.log(baseExperienceDifference)
    // }

    function playerTurnHandler(player) {
        if (player == 'playerOne') {
            setplayerTurn('playerOne')
        } else if (player == 'playerTwo') {
            setplayerTurn('playerTwo')
        }
    }

    const addPokemonToPlayer = (newPokemon, player) => {
        if (player == 'playerOne') {
            if (playerOnePokemons.length < 6 ) {
                setplayerOnePokemons(playerOnePokemons.concat(newPokemon))
            } else {
                alert('A Quantidade de pokémons do Treinador 1 excede o limite de 6.')
            }
        } else if (player == 'playerTwo') {
            if (playerTwoPokemons.length < 6 ) {
                setplayerTwoPokemons(playerTwoPokemons.concat(newPokemon))
            } else {
                alert('A Quantidade de pokémons do Treinador 2 excede o limite de 6.')
            }
        }
    }

    const removePokemonFromPlayerOne = (targetPokemonIndex) => {
        return () =>
            setplayerOnePokemons((prevPokemons) =>
                prevPokemons.filter((_, index) => index !== targetPokemonIndex),
            )
    }

    const removePokemonFromPlayerTwo = (targetPokemonIndex) => {
        return () =>
            setplayerTwoPokemons((prevPokemons) =>
                prevPokemons.filter((_, index) => index !== targetPokemonIndex),
            )
    }

    const pokemons_list = pokemons.map( item => {
        return (
            <div key={item.attributes.id} className="col-xs-6 col-md-6 col-lg-3 col-xl-2" onClick={() => addPokemonToPlayer(item, playerTurn)}>

                <Pokemon
                    key={item.attributes.name}
                    attributes={item.attributes}
                />

                {/* <div className="card mb-3">
                    <div className="row">
                    <div className="col card-content">
                        <img src={ item.attributes.sprite } width="64" alt={ item.attributes.name }></img>
                        <div className="card-body">
                        <p className="card-title mb-0"><strong>{ item.attributes.name }</strong></p>
                        <p className="card-text"><small className="text-muted pokemon-base-xp">Base Experience: { item.attributes.base_experience }</small></p>
                        </div>
                    </div>
                    </div>
                </div> */}
            </div>
        )
    })

    const player_one_pokemons_list = playerOnePokemons.map ( (item, index) => {
        if (playerOnePokemons == []) { return }
        return (
            <div key={item.attributes.id} className="col-xs-6 col-md-4 col-lg-6 col-xl-4">
                <div className="card mb-3">
                <div className="row">
                    <div className="col card-content">
                    <div className="destroy-pokemon-card">
                        <span className="destroy">
                        <i className="fas fa-minus-circle" aria-hidden="true" onClick={removePokemonFromPlayerOne(index)}></i>
                        </span>
                    </div>
                    <img src={ item.attributes.sprite } width="64" alt="{ item.name }"></img>
                    <div className="card-body">
                        <p className="card-title mb-0"><strong>{ item.attributes.name }</strong></p>
                        <p className="card-text"><small className="text-muted pokemon-base-xp">Base Experience: { item.attributes.base_experience }</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            // <PlayerPokemon
            //     key={item.attributes.name}
            //     attributes={item.attributes}
            // />
        )
    })

    const player_two_pokemons_list = playerTwoPokemons.map ( (item, index) => {
        if (playerTwoPokemons == []) { return }
        return (
            <div key={item.attributes.id} className="col-xs-6 col-md-4 col-lg-6 col-xl-4">
                <div className="card mb-3">
                <div className="row">
                    <div className="col card-content">
                    <div className="destroy-pokemon-card">
                        <span className="destroy">
                        <i className="fas fa-minus-circle" aria-hidden="true" onClick={removePokemonFromPlayerTwo(index)}></i>
                        </span>
                    </div>
                    <img src={ item.attributes.sprite } width="64" alt="{ item.name }"></img>
                    <div className="card-body">
                        <p className="card-title mb-0"><strong>{ item.attributes.name }</strong></p>
                        <p className="card-text"><small className="text-muted pokemon-base-xp">Base Experience: { item.attributes.base_experience }</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            // <PlayerPokemon
            //     key={item.attributes.name}
            //     attributes={item.attributes}
            // />
        )
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    
        if (playerOnePokemons.length === 0 || playerTwoPokemons.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#4589ed',
                text: 'Escolha pokémons para os dois treinadores!',
            })    
            return
        }
    
        let player_one_pokemons = playerOnePokemons.map((pokemon) => ({ player_id: 1, pokemon_id: pokemon.id }))
        let player_two_pokemons = playerTwoPokemons.map((pokemon) => ({ player_id: 2, pokemon_id: pokemon.id }))
        let trade_items = player_one_pokemons.concat(player_two_pokemons)

        const postData = {
            is_fair: baseExperienceDifference < 20,
            player_one_id: 1,
            player_two_id: 2,
            trade_items_attributes: trade_items
        }

        const railscsrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = railscsrfToken
    
        axios.post('/api/v1/trades.json', { trade: postData }).then((response) => {
          if (response.status === 201) {
            Swal.fire({
                icon: 'success',
                title: 'Isso aí!',
                text: 'Troca registrada',
                confirmButtonColor: '#4589ed',
            })
            setplayerOnePokemons([])
            setplayerTwoPokemons([])
          } else {
            console.log("Error when registring trade")
          }
        })
    }

    // const player2_pokemons_list = playerTwoPokemons.map ( item => {
    //     return (
    //         <PlayerPokemon
    //             key={item.attributes.name}
    //             attributes={item.attributes}
    //         />
    //     )
    // })



    return (

        <>
        <div className="container">
            <div className="row mt-4">
                <div className="col-xs-12 col-md-12 col-lg-5">
                    <div className="player-profile-card player1">
                        <div className="mb-3">
                        <div className="player-profile-cover"></div>
                        <div className="player-info-container">
                            <img className="player-avatar" src="https://poke-trader.s3.sa-east-1.amazonaws.com/avatar2.jpg"></img>
                            <p className="mb-1"><strong>TREINADOR 1</strong></p>
                            <button onClick={() => playerTurnHandler("playerOne")} id="btn-deck" type="button" className="btn btn-success btn-sm btn-deck" data-bs-toggle="modal" data-bs-target="#cardsModal">ESCOLHER CARTAS</button>
                        </div>
                        </div>

                        <div className="row cards-row">

                            {player_one_pokemons_list}
                        
                        </div>

                        <div className="player-profile-card-bottom">
                        <small>Total Base Experience: {totalBaseExperiencePlayerOne}</small>
                        </div>

                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-2 align-self-center">
                    <div className="trade-info-container">
                        <div className="">
                            <p>Treinador 1</p>
                            <p>XP Total: {totalBaseExperiencePlayerOne}</p>
                            <p> {baseExperienceDifference > 20 ? "Troca injusta" : "Troca justa"}</p>
                        </div>
                        <a href="#" className="btn btn-primary btn-trade" onClick={handleSubmit}>
                            <i className="fas fa-sync" aria-hidden="true"></i>
                            TROCAR
                        </a>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-5">
                    <div className="player-profile-card player2">
                        <div className="mb-3">
                        <div className="player-profile-cover"></div>
                        <div className="player-info-container">
                            <img className="player-avatar" src="https://poke-trader.s3.sa-east-1.amazonaws.com/avatar1.jpg"></img>
                            <p className="mb-1"><strong>TREINADOR 2</strong></p>
                            <button onClick={() => playerTurnHandler('playerTwo')} id="btn-deck" type="button" className="btn btn-success btn-sm btn-deck-alt" data-bs-toggle="modal" data-bs-target="#cardsModal">ESCOLHER CARTAS</button>
                        </div>
                        </div>

                        <div className="row cards-row">

                            {player_two_pokemons_list}
                        
                        </div>

                        <div className="player-profile-card-bottom">
                        <small>Total Base Experience: {totalBaseExperiencePlayerTwo}</small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className={`modal fade ${ playerTurn }`} id="cardsModal" tabIndex="-1" aria-labelledby="cardsModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cardsModalScrollableTitle">Selecione as cartas para trocar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">

                                {pokemons_list}

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-trade" data-bs-dismiss="modal">FECHAR</button>
                            {/* <button type="button" className="btn btn-primary">Confirmar</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <ul>{pokemons_list}</ul> */}
        </div>
        </>
    
    )
}

export default Trades