import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
//import './pages/Login.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Spotify from './pages/Spotify.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="/Register" exact element={ <Register/> }/>
        <Route path="/Login" exact element={<Login/>}/>
        <Route path="/Spotify" exact element={<Spotify/>}/>
      </Routes>
    </>
  )
}

export default App
