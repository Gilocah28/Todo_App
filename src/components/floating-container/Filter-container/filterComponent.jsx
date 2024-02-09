import React from 'react'
import './filterStyle.scss'

const FilterComponent = ({ todos, setTodos, handleAll, handleActive, handleComplete }) => {

    const itemCount = todos.filter(todo => !todo.status).length

    const handleClearComplete = () => {
        const updateTodos = todos.filter((todos) => !todos.status)
        setTodos(updateTodos)
        localStorage.setItem('todoList', JSON.stringify(updateTodos))
    }

    return (
        <div className="filter-container">
            <div className="total-container">
                <p>{itemCount > 0 ? `${itemCount} items left` : 'No items left'}</p>
            </div>

            <div className="filter-buttons">
                <button onClick={handleAll}>All</button>
                <button onClick={handleActive}>Active</button>
                <button onClick={handleComplete}>Completed</button>
            </div>

            <div className="btn-container">
                <button onClick={handleClearComplete}>Clear Complete</button>
            </div>

        </div>
    )
}

export default FilterComponent
