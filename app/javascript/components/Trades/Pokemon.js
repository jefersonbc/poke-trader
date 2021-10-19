import React from 'react'

const Pokemon = (props) => {
    return (
        <div className="card mb-3 pokemon-list-item">
            <div className="row">
            <div className="col card-content">
                <img src={ props.attributes.sprite } width="64" alt={ props.attributes.name }></img>
                <div className="card-body">
                <p className="card-title mb-0"><strong>{ props.attributes.name }</strong></p>
                <p className="card-text"><small className="text-muted pokemon-base-xp">Base Experience: { props.attributes.base_experience }</small></p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Pokemon