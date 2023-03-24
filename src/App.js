import React from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Stack from './components/Stack'

function App() {
  return (
    <div>
      <Home />
      <About />
      <Stack />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App