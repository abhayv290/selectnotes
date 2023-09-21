import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../src/assets/notes-54-512.png'
export default function Navbar() {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      <img src={icon} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
     <span className='fw-bold text-success'>SelectNotes</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}
