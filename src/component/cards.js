import React from 'react'
import './cards.css'

const Cards = ({ name, id, flags, capital }) => {
    return (
        <div className='card'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>

        </div>
    )
}

export default Cards;