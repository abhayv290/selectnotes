import React from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import icon from '../../src/assets/notes-54-512.png'
export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
   console.log(location)
  },[location])
    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      <img src={icon} alt="Logo" width="35"  className="d-inline-block align-text-top"/>
     <span className='fw-bold text-success'>SelectNotes</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/Home'? 'text-danger':''}`} aria-current="page" to="/Home">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/About'? 'text-danger':''}`} to="/About">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}
