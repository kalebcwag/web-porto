import React from 'react'
import './Certificates.css'
import CertificateBlock from './CertificateBlock'

import deeplearningcert from '../../assets/certificates/deeplearning.jpg'
import machinelearningcert from '../../assets/certificates/machinelearning.jpg'
import tensorflowcert from '../../assets/certificates/tensorflow.jpg'
import bangkitcert from '../../assets/certificates/bangkit_front.jpg'
import monke from '../../assets/monke.jpeg'

const Certificates = () => {
  return (
    <div className='certificate-section'>
        <CertificateBlock
        folderpath={machinelearningcert}
        name='Coursera Machine Learning Certificate'
        date='October 22, 2023'/>

        <CertificateBlock
        folderpath={deeplearningcert}
        name='DeepLearning.AI TensorFlow Developer Certificate'
        date='November 11, 2023'/>

        <CertificateBlock
        folderpath={bangkitcert}
        name='Bangkit Academy 2023 Certificate'
        date='January 19, 2024'/>

        <CertificateBlock
        folderpath={tensorflowcert}
        name='TensorFlow Developer Certificate'
        date='April 17, 2024'/>

        <CertificateBlock
        folderpath={monke}
        name='Belajar Dasar Data Science - Dicoding'
        date='Currently enrolled'/>
    </div>
  )
}

export default Certificates
