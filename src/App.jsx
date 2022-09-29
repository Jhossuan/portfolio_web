import { useRef } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
