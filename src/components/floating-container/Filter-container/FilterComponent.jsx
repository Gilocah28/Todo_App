import React from 'react'

const FilterComponent = ({ todos, handleAll, handleComplete, handleActive }) => {


    const itemCount = todos.filter((todos) => !todos.status).length
    return (
        <div>
            <div className="total_container">
                <p>{itemCount > 0 ? `${itemCount} items left` : 'No items left'}</p>
            </div>

            <div className="btn-container">
                <button onClick={() => handleAll()}>All</button>
                <button onClick={() => handleActive()}>Active</button>
                <button onClick={() => handleComplete()}>Completed</button>
            </div>

        </div>
    )
}

export default FilterComponent
