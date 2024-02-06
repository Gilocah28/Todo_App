import React from 'react'

const TaskListComponent = ({ todos, setTodos }) => {

    return (
        <div className='taskList'>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskListComponent
