import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {Inventaire} from './Component/Inventaire'



function App() {


  return (
    <React.StrictMode>
   <Inventaire />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)