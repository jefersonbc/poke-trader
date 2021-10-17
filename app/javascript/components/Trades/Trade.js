import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'

const Trades = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        // Get all of pokemons from api
        // update pokemons in our state

        axios.get('/api/v1/pokemons.json')
        .then( resp => {
            setPokemons(resp.data.data)
        } )
        .catch( resp => console.log(resp) )
    }, [pokemons.length])

    const pokemons_list = pokemons.map( item => {
        return (
            <Pokemon
                key={item.attributes.name}
                attributes={item.attributes}
            />
            )
    })

    return (
        <div>
            <div className="modal fade" id="cardsModal" tabIndex="-1" aria-labelledby="cardsModalScrollableTitle" aria-hidden="true">
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
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Confirmar</button>
                </div>
                </div>
            </div>
            </div>
            {/* <ul>{pokemons_list}</ul> */}
        </div>
    )
}

export default Trades