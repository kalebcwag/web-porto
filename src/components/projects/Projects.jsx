import React from 'react'
import './Projects.css'
import ProjectBlock from './ProjectBlock'

const Projects = () => {
  return (
    <div className='project-container'>
      <ProjectBlock
      name='Stock Trading Decision System using Statistical Model'
      sub='Thesis - Bachelor Degree'
      ppt='https://drive.google.com/file/d/1s-qCeX2bZX5sHveK-bdcYlscx_j6Na8t/view?usp=sharing'
      repo='https://docs.google.com/presentation/d/11ewVgDvncN8UE_8Szi71AX_Z5Teas1IM/edit?usp=sharing&ouid=116439771207694622093&rtpof=true&sd=true'
      tools='Jupyter Notebook, Python, Scikit-learn, Pandas'

      desc='The research successfully demonstrated that a data-driven trading strategy employing the Multinomial Logistic Regression model, combined with relevant technical indicators, is a profitable strategy for the Indonesian property stock sector. The backtesting results confirm that the system provides a robust and objective mechanism for generating trading signals, effectively mitigating the negative influence of emotional factors on investment decisions. Ultimately, the developed system offers a viable approach to achieving substantial returns while managing risks, making it a valuable tool for quantitative traders in the Indonesian market.'
      />

      <ProjectBlock
      name='Knee ROM Detector - Android'
      sub='FTI x FK UKDW - Lecturer Project'
      ppt='https://www.youtube.com/watch?v=-3gx41_mHWc&list=PL1MpvCrND2Oxsg7ZQTgV-E8a08rgkRBBk'
      tools='Android Studio, Kotlin, MediaPipe'

      desc='Developed the key feature to measure knee range of motion. The research was validated by 3 doctors of Fakultas Kedokteran Universitas Kristen Duta Wacana. The result of the measurement was validated with the condition of 4 degrees error.'
      />
      
      <ProjectBlock
      name='Selamat-Berjuang-Sukses'
      sub='Personal Project - Applied Computer Vision'
      ppt='https://vt.tiktok.com/ZSUwePW5k/'
      repo='https://github.com/kalebcwag/selamat_berjuang'
      tools='Python, MediaPipe, Tensorflow, OpenCV'

      desc='Messing around with MediaPipe for Python. Check out my TikTok for more!'
      />

      <ProjectBlock
      name='Data Analytic Project'
      sub='Personal Project - Sneakers Sales Data Analytic'
      // ppt='https://vt.tiktok.com/ZSUwePW5k/'
      repo='https://github.com/kalebcwag/Sneakers-and-Streetwears-Sales-Analytics'
      tools='Python, Pandas, Matplotlib'

      desc='Sneakers sales data analytic. I developed 10 questions myself based on what information could I extract from the dataset. Click the button down below for explanation video and github repository.'
      />

      <ProjectBlock
      name='Rock Paper Scissors'
      sub='Personal Project - Deep Learning Subject'
      // ppt='https://vt.tiktok.com/ZSUwePW5k/'
      repo='https://github.com/kalebcwag/rps_dl'
      tools='Python, Tensorflow, OpenCV'

      desc='Created this project for my Deep Learning Subject in the University.'
      />
    </div>
  )
}

export default Projects
