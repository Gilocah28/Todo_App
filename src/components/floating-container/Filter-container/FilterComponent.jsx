import React from 'react'

const FilterComponent = ({ handleAll, handleComplete, handleActive }) => {
    return (
        <div>
            <button onClick={() => handleComplete()}>handleComplete</button>
            <button onClick={() => handleAll()}>handleAll</button>
            <button onClick={() => handleActive()}>handleActive</button>

        </div>
    )
}

export default FilterComponent
