import React from 'react'
import './About.css'
import foto from "../../assets/foto.jpg"

const about = () => {
  return (
    <div className='about'>
      <img src={foto} alt="" className='pic'/>
    </div>
  )
}

export default about