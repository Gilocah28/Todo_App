import React from 'react'
import iconCross from '../../../assets/icon-cross.svg'
import check from '../../../assets/icon-check.svg'
import '../taskList/taskListStyle.scss'

const TaskListComponent = ({ todos, setTodos }) => {

    const handleRemove = (id) => {
        const filteredItem = todos.filter((todo) => {
            return todo.id !== id
        })

        setTodos(filteredItem)
        localStorage.setItem('todoList', JSON.stringify(filteredItem))
    }


    const handleCheck = (id) => {
        const updateStatus = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: !todo.status
                }
            }
            return todo
        })

        setTodos(updateStatus)
        localStorage.setItem('todoList', JSON.stringify(updateStatus))
    }

    return (
        <div className='taskList_container'>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li className='list-items' key={todo.id}>
                            <div className="item-group">
                                <div className="check-container">
                                    <input
                                        type="checkbox"
                                        id={todo.id}
                                        className='check-input'
                                        checked={todo.status}
                                        onClick={() => handleCheck(todo.id)}
                                    />

                                    <label for={todo.id} className='checkbox'>
                                        {todo.status && <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>}
                                    </label>
                                </div>


                                <div className={todo.status ? 'item_line' : 'item'}>
                                    <p>{todo.task}</p>
                                </div>
                            </div>
                            <button
                                className="remove"
                                onClick={() => handleRemove(todo.id)}
                            >
                                <img src={iconCross} alt="Delete" />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskListComponent
