import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={logo} alt=""/> */}
      <h1 className='namaJudul'>Kaleb Coyo Wagito</h1>
      <ul className='navmenu'>
        <li className='navbar-menu'>About Me</li>
        <li className='navbar-menu'>Certificates</li>
        <li className='navbar-menu'>Projects</li>
        <li className='navbar-menu'>Contact</li>
      </ul>
      <div className="navconnect">Connect</div>
    </div>
  )
}

export default Navbar
