import React from 'react'

const PlayerPokemon = (props) => {
    return (
        
        <div className="col-xs-6 col-md-4 col-lg-6 col-xl-4">
            <div className="card mb-3">
            <div className="row">
                <div className="col card-content">
                <div className="destroy-pokemon-card">
                    <span className="destroy">
                    <i className="fas fa-minus-circle" aria-hidden="true"></i>
                    </span>
                </div>
                <img src={ props.attributes.sprite } width="64" alt="{ props.attributes.name }"></img>
                <div className="card-body">
                    <p className="card-title mb-0"><strong>{ props.attributes.name }</strong></p>
                    <p className="card-text"><small className="text-muted pokemon-base-xp">Base Experience: { props.attributes.base_experience }</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default PlayerPokemon