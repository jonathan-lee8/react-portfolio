import React from 'react'

function ProjectList({ image, name }) {
  return (
    <div className='projectItem'>
      <div style={{backgroundImage: `url(${image})` }} className="projectImg">
        <h1>
          {name}
        </h1>
      </div>
    </div>
  )
}

export default ProjectList