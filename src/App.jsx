import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Certificates from './components/certificates/Certificates'

const App = () => {
  return (
    <div>
        <Navbar/>

        <h1 className='section-title'>
          About Me
        </h1>
        <About/>

        <h1 className='section-title'>
          Certificates
        </h1>
        <Certificates/>

        <h1 className='section-title'>
          Projects
        </h1>
        <h1 className='section-title'>
          Contact Me
        </h1>

    </div>
  )
}

export default App
