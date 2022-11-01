import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location]);

  return (
    <div className='navbar' id = {expandNavbar ? "open" : "closed"} >
      <div className='toggleButton'>
        <button onClick={() => {setExpandNavbar((prev) => !prev);
        }}
        > 
          <ReorderIcon /> 
        </button>
      </div>
      <div className='links'>
        <Link to = '/'> Home </Link>
        <Link to = '/bootcamp'> Bootcamp </Link>
        <Link to = '/projects'> Projects </Link>
        <Link to = '/Contact'> Contact </Link>
        <a href = "https://docs.google.com/presentation/d/1w21FMhXimYV3dSSn10r6adOgGHHO4uYQgVA6QW190lM/edit?usp=sharing"> Resume </a>
      </div>
    </div>
  )
}

export default Navbar;