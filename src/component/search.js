import React, { useState } from 'react'
import './search.css'

const Search = ({ handleChange, input }) => {

    return (
        <div className='search'>
            <input type="text" className='input' placeholder='search' onChange={handleChange} value={input} />
        </div>

    )
}

export default Search