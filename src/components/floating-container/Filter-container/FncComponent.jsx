import React from 'react'

const FncComponent = ({ todos, handleAll, handleComplete, handleActive }) => {

    const itemCount = todos.filter((todos) => !todos.status).length

    return (

        <div className='filter-container'>
            <div className="total_container">
                <p>{itemCount > 0 ? `${itemCount} items left` : 'No items left'}</p>
            </div>

            <div className="btn-container">
                <button onClick={() => handleAll()}>All</button>
                <button onClick={() => handleActive()}>Active</button>
                <button onClick={() => handleComplete()}>Completed</button>
            </div>

            <div className="clr-container">
                <button>Clear Completed</button>
            </div>

        </div>

    )
}

export default FncComponent
