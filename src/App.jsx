import React, { useContext } from 'react'
import DataContext from './components/context/DataContext'
import BackgroundComponent from './components/background-Container/BackgroundComponent'
import MainComponent from './components/floating-container/MainComponent'
import BottomComponents from './components/bottom-Container/BottomComponents'


const App = () => {

  const { theme } = useContext(DataContext)
  


  return (
    <div className={theme ? 'light' : 'dark'}>
      <BackgroundComponent />
      <BottomComponents/>
      <MainComponent />
    </div>
  )
}

export default App
