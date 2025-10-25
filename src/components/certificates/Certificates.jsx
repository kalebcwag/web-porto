import React from 'react'
import './Certificates.css'
import CertificateBlock from './CertificateBlock'

const Certificates = () => {
  return (
    <div>
        <CertificateBlock
        folderpath={'../../assets/certificates/deeplearning.jpg'}
        name={'DeepLearning.AI TensorFlow Developer Certificate'}
        date={'November 11, 2023'}/>
    </div>
  )
}

export default Certificates
