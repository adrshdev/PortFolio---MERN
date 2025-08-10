import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CompletedProjects from './pages/CompletedProjects';
import UpcomingProjects from './pages/UpcomingProjects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/completedprojects' element={<CompletedProjects/>}/>
        <Route path='/upcomingprojects' element={<UpcomingProjects/>}/>
      </Routes>
    </Router>
  )
}

export default App
