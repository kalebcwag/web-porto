import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={logo} alt=""/> */}
      <h1 className='nama'>Kaleb Coyo Wagito</h1>
      <ul className='navmenu'>
        <li>About Me</li>
        <li>Certificates</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="navconnect">Connect with Me</div>
    </div>
  )
}

export default Navbar
