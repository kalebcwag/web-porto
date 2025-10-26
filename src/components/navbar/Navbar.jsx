import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"

const scrollToSection = (sectionId) => {
    // 1. Dapatkan elemen target
    const targetElement = document.getElementById(sectionId);

    // 2. Lakukan scroll jika elemen ditemukan
    if (targetElement) {
        targetElement.scrollIntoView({ 
            behavior: 'smooth', // Scroll halus
            block: 'start'      // Gulir ke bagian atas section
        });
    }
};

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={logo} alt=""/> */}
      <h1 className='namaJudul'>Kaleb Coyo Wagito</h1>
      <ul className='navmenu'>
        <li>
          <p onClick={() => scrollToSection('about')}>
          About Me
          </p>
        </li>

        <li>
          <p onClick={() => scrollToSection('projects')}>
          Latest Works
          </p>
        </li>

        <li>
          <p onClick={() => scrollToSection('certificates')}>
          Certificates
          </p>
        </li>
      </ul>
      <div className="navconnect"><a href="mailto:kalebcoyo@gmail.com" target='_blank' rel='noopener noreferrer'>Email me!</a></div>
    </div>
  )
}

export default Navbar
