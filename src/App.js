import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Nav from './components/Nav'
import Tutorials from './pages/Tutorials/Tutorials'
import Roadmaps from './pages/Roadmaps/Roadmaps'
import Html from './pages/Tutorials/html/Html'
import InterviewQuestions from './pages/InterviewQuestions/InterviewQuestions'
import Contact from './pages/Contact/Contact'
import Aboutus from './pages/About/Aboutus'
const App = () => {
  return ( 
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/tutorials' Component={Tutorials}/>
        <Route path='/roadmaps' Component={Roadmaps}/>
        <Route path='/contact-us' Component={Contact}></Route>
        <Route path="/interviewquestions" element={<InterviewQuestions />} />
        {/* Dynamic route for specific categories */}
        <Route path="/interviewquestions/:category" element={<InterviewQuestions />} />
        <Route path="/AboutUs" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
