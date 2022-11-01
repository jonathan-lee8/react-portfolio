import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Bootcamp.css';
import { projectList } from '../helpers/ProjectList';

// import Proj1 from '../assets/project1.png';
// import Proj2 from '../assets/proj2.png';

function Bootcamp() {
  return (
    <div className='bootcamp'>
      <h1>Bootcamp Projects</h1>
      <div className='bootcampList'>
          {projectList.map((project) => (
            <ProjectItem name={project.name} image = {project.image} link={project.link} />
          ))}
      </div>
    </div>
  )
}

export default Bootcamp;