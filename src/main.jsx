import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DataProvider from './components/context/DataProvider.jsx'
import './components/style/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
