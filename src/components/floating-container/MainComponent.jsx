import React, { useContext } from 'react'
import '../floating-container/main.scss'
import sun from '../../assets/icon-sun.svg'
import moon from '../../assets/icon-moon.svg'
import DataContext from '../context/DataContext'

const MainComponent = () => {

  const { theme , handleToggle } = useContext(DataContext)

  return (
    <div className='main-container'>
      <div className="logo">
        <h1>TODO</h1>
        <button onClick={() => handleToggle()}><img src={theme ? sun : moon} alt="Icon" /></button>
      </div>
    </div>
  )
}

export default MainComponent
