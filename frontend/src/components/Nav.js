
// NavBar.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../styles/componentStyle.css';
import WonoLogo from '../assets/WONO_images/img/WONOCO-black-bg.png';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null); // Clear the user state
    navigate('/home')
  };

  const [show, setShow] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="custom-navbar">
        <div className="custom-navbar-logo">
          <img style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }} src={WonoLogo} alt='logo' />
        </div>
        <div className="custom-navbar-menu">
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/test'>Test</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className="custom-navbar-menu">
          {user ? (
            <div className="user-profile">
              <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={user.picture} alt={user.name} className="profile-image" />
                <span>{user.name}</span>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <span className='login-button' onClick={() => navigate('/login')}>LOGIN</span>
          )}
        </div>
        <div className="custom-navbar-menu-toggle" onClick={handleShow}>
          &#9776;
        </div>
      </nav>

      {/* Offcanvas for mobile screens */}
      <Offcanvas show={show} onHide={handleClose} placement="start" backdrop="true" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a href="/" className="custom-offcanvas-link">Home</a>
          <a href="/services" className="custom-offcanvas-link">Services</a>
          <a href="/test" className="custom-offcanvas-link">Testing</a>
          <Link to='/contact'>Contact</Link>
          {user ? (
            <div className="user-profile">
              <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={user.picture} alt={user.name} className="profile-image" />
                <span>{user.name}</span>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <a className='login-button' href='/login'>LOGIN</a>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;


