import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'
import Hero from './Body.jsx'
import Projects from './Projects.jsx'
import SkillsBanner from './Skills.jsx'
import Contact from './Contact.jsx'
import CV from './CV.jsx'

function App() {
  

  return (
    <>
      <Header/>
      <Hero />
      <Projects/>
      <SkillsBanner/>
      <Contact/>
    </>
  )
}

export default App
