import React from 'react'
import './Projects.css'

const ProjectBlock = ({ name, sub, desc, tools, repo, ppt }) => {
    return (
        <div className='project-block'>
            <h2 className="project-title">{name}</h2>
            <h3 className="subtitle">{sub}</h3>

            <p className="description">{desc}</p>
            <p className="tools-used">Tools used: {tools}</p>

            <div className="links">
                {ppt &&
                (<a href={ppt} className="ppt" target='_blank' rel='noopener noreferrer'>Result</a>)}
                
                {repo &&
                (<a href={repo} className="repo" target='_blank' rel='noopener noreferrer'>See Repository</a>)}
                
            </div>

        </div>
    )
}

export default ProjectBlock
