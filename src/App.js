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
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import Profile from './components/Profile'
import JobList from './pages/Jobs/Job'
import JobDetails from './pages/Jobs/JobDetails'
const App = () => {
  return ( 
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/tutorials' Component={Tutorials}/>


        <Route path='/roadmaps' Component={Roadmaps}/>
         <Route path="/roadmaps/:topic" element={<Roadmaps />} />

        <Route path='/contact-us' Component={Contact}></Route>


        <Route path="/interviewquestions" element={<InterviewQuestions />} />
        <Route path="/interviewquestions/:category" element={<InterviewQuestions />} />


        <Route path="/AboutUs" element={<Aboutus />} />
       

        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:job_id" element={<JobDetails />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App