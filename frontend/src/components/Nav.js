import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import '../styles/componentStyle.css'
import WonoLogo from '../assets/WONO_images/img/WONOCO-black-bg.png'

const NavBar = () => {
  const navigate = useNavigate()
  const handleTest = ()=>{
    navigate('/test')
  }
  const handleServiceRoute = ()=>{
    navigate('/services')
  }

  const navigateToDashboard =()=>{
    navigate('/home')
  }
  const handleRouteLogin =()=>{
    navigate('/login')
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
  <nav className="custom-navbar">
        <div className="custom-navbar-logo">
          <img src={WonoLogo} alt='logo' />
        </div>
        <div className="custom-navbar-menu">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/test">Testing</a>
        </div>
        <div className="custom-navbar-menu">
          <span className='login-button' onClick={handleRouteLogin}>LOGIN</span>
        </div>
        <div className="custom-navbar-menu-toggle" onClick={handleShow}>
          &#9776;
        </div>
      </nav>

      {/* Offcanvas for mobile screens */}
      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="true" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a href="/" className="custom-offcanvas-link">Home</a>
          <a href="/services" className="custom-offcanvas-link">Services</a>
          <a href="/test" className="custom-offcanvas-link">Testing</a>
          <span className='login-button' onClick={handleRouteLogin}>LOGIN</span>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavBar