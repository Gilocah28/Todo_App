import React, { useContext, useEffect, useReducer, useState } from 'react'
import '../floating-container/main.scss'
import sun from '../../assets/icon-sun.svg'
import moon from '../../assets/icon-moon.svg'
import DataContext from '../context/DataContext'
import TaskListComponent from './taskList/TaskListComponent'
import FilterComponent from './Filter-container/FilterComponent'

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



const MainComponent = () => {

  const { theme, handleToggle } = useContext(DataContext)

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')

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


  useEffect(() => {
    const todoItem = JSON.parse(localStorage.getItem('todoList')) || []
    setTodos(todoItem)
    handleAll()
  }, [])










  const handleSubmit = (event) => {
    event.preventDefault()

    if (task) {

      const todoData = {
        id: Math.floor(Math.random() * 9999999) + 1,
        task,
        status: false
      };


      const updateTodoList = [...todos, todoData]
      setTodos(updateTodoList);
      setTask('')
      localStorage.setItem('todoList', JSON.stringify(updateTodoList))
      setError('')
    } else {
      setError(prevError => prevError = 'Field must not be empty !')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }



  return (
    <div className='main-container'>
      <div className="logo">
        <h1>TODO</h1>
        <button onClick={() => handleToggle()}><img src={theme ? sun : moon} alt="Icon" /></button>
      </div>


      <div className="input-container" >
        <p>{error}</p>

        <form onSubmit={handleSubmit}>
          <button className="check" type='submit'>

          </button>

          <input
            type="text"
            placeholder='Create new todo...'
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </form>
      </div>

      <TaskListComponent todos={todos} setTodos={setTodos} filter={state.value} />
      <FilterComponent
        handleAll={handleAll}
        handleActive={handleActive}
        handleComplete={handleComplete}
      />



    </div>
  )
}

export default MainComponent
