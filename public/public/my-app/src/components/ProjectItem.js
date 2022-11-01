import React from 'react'

function ProjectItem({ image, name }) {
  return (
    <div className='projectItem'>
      <div style={{backgroundImage: `url(${image})` }} className="projectImg">
        <h1>
          {name}
        </h1>
        <p>
        
        </p>
      </div>
    </div>
  )
}

export default ProjectItem;