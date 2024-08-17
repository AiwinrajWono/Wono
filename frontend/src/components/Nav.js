
// NavBar.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../styles/componentStyle.css';
import WonoLogo from '../assets/WONO_images/img/WONOCO-black-bg-removed.png';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null); // Clear the user state
    navigate('/home')
  };
  const handleRegister = () => {
    navigate('/register'); // Clear the user state
    setShow(false)
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
          <Link to='/career'>Career</Link>
          <Link to='/regusers'>Registered-Users</Link>
          {user ? (
            <Link to={'/dashboard'}>Dashboard</Link>
          ) : (null)}
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
            <>
            <Link to ='/login'  className ='login-button'>LOGIN</Link>
            <button className='register-button' onClick={handleRegister}>REGISTER</button>
            </>
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
          <Link className="custom-offcanvas-link" to='/' onClick={handleClose}>Home</Link>
          <Link className="custom-offcanvas-link" to='/services' onClick={handleClose}>Services</Link>
          <Link className="custom-offcanvas-link" to='/test' onClick={handleClose}>Testing</Link>
          <Link className="custom-offcanvas-link" to='/contact' onClick={handleClose}>Contact</Link>
          <Link className="custom-offcanvas-link" to='/career' onClick={handleClose}>Career</Link>
          {user ? (
            <Link className="custom-offcanvas-link" to={'/dashboard'}>Dashboard</Link>
          ) : (null)}
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
          ) : 
          (
            <>
            <Link to ='/login' onClick={handleClose}  className ='login-button'>LOGIN</Link>
            <button className='register-button' onClick={handleRegister}>REGISTER</button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;


