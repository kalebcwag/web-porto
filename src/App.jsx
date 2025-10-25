import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Certificates from './components/certificates/Certificates'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div>
        <Navbar/>

        <h1 className='section-title'>
          About Me
        </h1>
        <About/>

        <h1 className='section-title'>
          Latest Works
        </h1>
        <Projects/>

        <h1 className='section-title'>
          Certificates
        </h1>
        <Certificates/>


        <h1 className='section-title'>
          Contact Me
        </h1>

    </div>
  )
}

export default App
