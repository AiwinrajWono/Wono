import React, { useContext, useState } from 'react';
import '../styles/bodyRegister.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded); // Set the user's profile information
    console.log(decoded);
    navigate('/dashboard'); // Redirect after successful login
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const formDetails = Object.fromEntries(formData.entries());

    const { password, confirmPassword, name, mobile, email, link, country, city, partnerstype } = formDetails;

    // Validate required fields
    if (!partnerstype) {
      alert('Please select the type of partnership.');
      return;
    }
    if (!name) {
      alert('Full Name is required.');
      return;
    }
    if (!mobile || !/^[1-9]{1}[0-9]{9}$/.test(mobile)) {
      alert('Please enter a valid Mobile Number.');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid Email address.');
      return;
    }
    if (!link) {
      alert('LinkedIn Profile Link is required.');
      return;
    }
    if (!country) {
      alert('Country is required.');
      return;
    }
    if (!city) {
      alert('City is required.');
      return;
    }
    if (!password) {
      alert('Password is required.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Show "Sending details" modal
    setModalMessage('Sending details');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      console.log(result);

      // Show "Email sent" message
      setModalMessage('Email sent');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setModalMessage('Failed to send registration details');
    } finally {
      // Hide modal after a few seconds
      setIsLoading(false);
      setTimeout(() => {
        setModalMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <section id='contact' className='register'>
        <div className='register-container'>
          <div className='row gy-4'>
            <div className='col-md-12' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
              <div className='col-lg-6'>
                <form name='form-p' className='register-form' id='partner-form' onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: "30px", color: "#000" }}>REGISTER NOW</h3>
                  <div className="row gy-3">
                    {/* Existing Fields */}
                    <div className="col-lg-12">
                      <select className="form-select select-f" aria-label="Default select example" name="partnerstype" required>
                        <option value="" disabled selected>Select Type of Partnership</option>
                        <option value="B2B SaaS Technology Licensing">B2B SaaS Technology Licensing</option>
                        <option value="B2C Workation/Co-Working Booking">B2C Workation/Co-Working Booking</option>
                        <option value="Landlord Partnerships">Landlord Partnerships</option>
                        <option value="Investment Related">Investment Related</option>
                        <option value="Coffee Meeting to know us better">Coffee Meeting to know us better</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="mobile" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder="Mobile Number" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="email" name="email" className="form-control" placeholder="Email" required />
                    </div>
                    {/* New Password Fields */}
                    <div className="col-lg-12">
                      <input type="password" name="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="link" className="form-control" placeholder="Business or Personal LinkedIn Profile Link" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="country" className="form-control" placeholder="Country" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="city" className="form-control" placeholder="City" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="message" className="form-control" placeholder="Personal message for this connection" required />
                    </div>

                    <div className="col-md-12 text-center">
                      <input type="hidden" name="pagename" value="Register PAGE" />
                      <button type="submit" className='register-page-button'>REGISTER</button>
                    </div>
                    <hr />
                    <p>Already have an account? <a href="login.html" style={{ color: "#0875e2" }}>Login</a></p>
                    <div className='google-button'>
                      <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for showing status */}
      {isLoading && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
