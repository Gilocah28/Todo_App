import React, { useReducer } from 'react'
import iconCross from '../../../assets/icon-cross.svg'
import check from '../../../assets/icon-check.svg'
import '../taskList/taskListStyle.scss'
import FilterComponent from '../Filter-container/FilterComponent'
import FncComponent from '../Filter-container/FncComponent'


const reducer = (state, action) => {
    switch (action.type) {
        case 'Active': {
            return { value: state.value = true }
        }
        case 'Complete': {
            return { value: state.value = false }
        }
        case 'All': {
            return { value: state.value = 'all' }
        }
        default: {
            return state
        }
    }
}



const TaskListComponent = ({ todos, setTodos }) => {
    const initialState = { value: null }
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleAll = () => {
        dispatch({ type: 'All' })
    }

    const handleActive = () => {
        dispatch({ type: 'Active' })
    }

    const handleComplete = () => {
        dispatch({ type: 'Complete' })
    }

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
                {todos.filter((todo) => {
                    return todo.status !== state.value
                }).map((todo) => {
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
                                        {todo.status && <img src={check} alt="Check" />}

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

            <FncComponent todos={todos} handleActive={handleActive} handleAll={handleAll} handleComplete={handleComplete}/>
        </div>
    )
}

export default TaskListComponent
