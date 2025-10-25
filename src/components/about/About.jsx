import React from 'react'
import './About.css'
import foto from "../../assets/foto.jpg"

import git from "../../assets/github.png"
import tiktok from "../../assets/tiktok.jpg"
import linkin from "../../assets/linkedin.jpg"

const About = () => {
    return (
      <div className='container-about'>
        <h1>Hello, World! <u className="highlight">Kaleb Coyo Wagito</u>'s here</h1>
        <div className='about-text'>
            <div className="pic-container">
                <img src={foto} alt="" className='pic'/>
            </div>
            <div className="text-and-social">
                <p>Highly enthusiastic <span>fresh graduate</span> with strong passion in <span className='highlight'>AI</span>, <span className="highlight">Machine Learning</span>, <span className="highlight">Data Science</span>, and <span className="highlight">Data Analysis</span>. My core skill is <span className="highlight">Python</span>, including libraries like <span className="highlight">Tensorflow</span>, <span className="highlight">Keras</span>, <span className="highlight">Sci-kit Learn</span>, <span className="highlight">Pandas</span>, <span className="highlight">NumPy</span>, <span className="highlight">Matplotlib</span> needed for machine learning model development and data processing.</p>
                <ul className='socials'>
                    <li><img src={linkin} alt="" /></li>
                    <li className='txt'><a href="https://linkedin.com/in/kalebcoyowagito" target='_blank' rel='noopener noreferrer'>kalebcoyowagito</a></li>
                    <li><img src={git} alt="" /></li>
                    <li className='txt'><a href="https://github.com/kalebcwag" target='_blank' rel='noopener noreferrer'>kalebcwag</a></li>
                    <li><img src={tiktok} alt="" /></li>
                    <li className='txt'><a href="http://tiktok.com/@orakarikperempatan" target="_blank" rel="noopener noreferrer">@orakarikperempatan</a></li>
                </ul>
            </div>
        </div>

        <div className="btns">
            <div className="cv">CV</div>
        </div>
    </div>
    )
}

export default About