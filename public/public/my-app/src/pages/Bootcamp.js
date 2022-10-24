import React from 'react';
import ProjectList from '../components/ProjectList';
import '../styles/Bootcamp.css';

import Proj1 from '../assets/proj1.png'

function Bootcamp() {
  return (
    <div className='bootcamp'>
      <h1>Bootcamp Projects</h1>
      <div className='bootcampList'>
        <ProjectList name="Top Artist Finder API" image={Proj1}/>
        <ProjectList />
      </div>
    </div>
  )
}

export default Bootcamp