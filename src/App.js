import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Nav from './components/Nav'
import Tutorials from './pages/Tutorials/Tutorials'
import Roadmaps from './pages/Roadmaps/Roadmaps'
import Html from './pages/Tutorials/html/Html'
import InterviewQuestions from './pages/InterviewQuestions/InterviewQuestions'
const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/tutorials' Component={Tutorials}/>
        <Route path='/roadmaps' Component={Roadmaps}/>
        <Route path='/tutorials/html' Component={Html}/>
        <Route path='/interview-questions' Component={InterviewQuestions}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
