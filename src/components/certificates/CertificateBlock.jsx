import React from 'react'
import './Certificates.css'

const CertificateBlock = ({ folderpath, name, date }) => {
  return (
    <div className="certificate-container">
            <img src={folderpath} alt="" className='cert-single'/>
            <h1>{name}</h1>
            <p>Date: {date}</p>
        </div>
  )
}

export default CertificateBlock
