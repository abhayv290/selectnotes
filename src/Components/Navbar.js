import React from 'react'
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import icon from '../../src/assets/notes-54-512.png'
export default function Navbar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    //  console.log(location)
  }, [location])

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    if (localStorage.getItem('token') == null) {
      navigate('/Login');
    }
    props.showAlert('Logged out', 'danger');

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={icon} alt="Logo" width="35" className="d-inline-block align-text-top" />
            <span className='fw-bold text-success'>SelectNotes</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'text-danger' : ''}`} aria-current="page" to="/"><b>Home</b></Link>
              </li>


              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/About' ? 'text-danger' : ''}`} to="/About"><b>About</b></Link>
              </li>

            </ul>


          </div>
        </div>
        {!localStorage.getItem('token') ?
          <form action="" className='d-flex justify-content-end'>
            <Link className="btn btn-primary mx-1" to={'/login'} role='button'>Login</Link>
          </form> :
          <form action="" className='d-flex justify-content-end'>
            <Link onClick={handleLogout} className="btn btn-primary mx-1" role='button'>Logout</Link>
          </form>
        }



      </nav>

    </>
  )
}
