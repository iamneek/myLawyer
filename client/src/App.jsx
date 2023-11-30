import React, { useEffect, useState } from 'react'
import './App.scss'
import Home from './Pages/Home'
import { Routes, Route, useLocation} from 'react-router-dom'
import About from './Pages/About'
import Nav from './Components/Nav'
import Report from './Pages/Report'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  let location = useLocation();
  const [showNav, setShowNav] = useState(true)
  useEffect(()=>{
    setShowNav(location.pathname === "/auth/login" ||location.pathname === "/auth/signup" ? false:true)
  }, [location])

  return (
    <div className='App'>
     {showNav ?  <Nav/>: null}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App