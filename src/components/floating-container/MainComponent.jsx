import React, { useContext, useState } from 'react'
import '../floating-container/main.scss'
import sun from '../../assets/icon-sun.svg'
import moon from '../../assets/icon-moon.svg'
import DataContext from '../context/DataContext'

const MainComponent = () => {

  const { theme, handleToggle } = useContext(DataContext)

  const [task, setTask] = useState('')
  const [todo, setTodo] = useState([])
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (task) {

      const todoData = {
        id: Math.floor(Math.random() * 9999999) + 1,
        task
      };
      const updateTodoList = [...todo, todoData]
      setTodo(updateTodoList);
      setTask('')
      localStorage.setItem('todoList', JSON.stringify(updateTodoList))
      setError('')
    } else {
      setError(prevError => prevError = 'Field must not be empty !')
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



    </div>
  )
}

export default MainComponent
