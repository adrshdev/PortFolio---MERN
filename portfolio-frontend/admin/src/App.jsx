import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProjectManagement from './pages/ProjectManagement'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/projectmanagement' element={<ProjectManagement/>}/>
      </Routes>
    </Router>
  )
}

export default App
