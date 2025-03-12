import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/UserLogin'
import Signup from './Pages/Signup'
import Captainlogin from './Pages/CaptainLogin'
import CaptainRegister from './Pages/CaptainRegister'
const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/captain-login" element={<Captainlogin />} />
          <Route path="/captain-register" element={<CaptainRegister />} />
          
        </Routes>
    </>
  )
}

export default App
