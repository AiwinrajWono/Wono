import { color } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const handleTest = ()=>{
    navigate('/test')
  }

  const navigateToDashboard =()=>{
    navigate('/home')
  }

  const navigateToRegister = ()=>{
    navigate('/register')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          <Link to='/' style={{textDecoration:'none', color:'black'}}>Navbar</Link>
          <Link to='/form' style={{textDecoration:'none', color:'black'}}>Forms</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={navigateToDashboard}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleTest}>Link</a>
              </li>
              
              <button onClick={handleTest}>Testing</button>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
            
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button type="button" className="btn btn-flr" style={{margin:"10px",fontFamily: "Poppins-Regular", backgroundColor:"#f4ed50",color:"#000"}} onClick={navigateToRegister}>REGISTER</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar