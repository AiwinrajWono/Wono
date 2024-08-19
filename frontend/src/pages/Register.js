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
  const [formData, setFormData] = useState({
    partnerstype: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    link: '',
    country: '',
    city: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded); // Set the user's profile information
    console.log(decoded);
    navigate('/dashboard'); // Redirect after successful login
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { password, confirmPassword, name, mobile, email, link, country, city, partnerstype } = formData;

    if (!partnerstype) newErrors.partnerstype = 'Please select the type of partnership.';
    if (!name) newErrors.name = 'Full Name is required.';
    if (!mobile || !/^[1-9]{1}[0-9]{9}$/.test(mobile)) newErrors.mobile = 'Please enter a valid Mobile Number.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid Email address.';
    if (!link) newErrors.link = 'LinkedIn Profile Link is required.';
    if (!country) newErrors.country = 'Country is required.';
    if (!city) newErrors.city = 'City is required.';
    if (!password) newErrors.password = 'Password is required.';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match!';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkEmailDuplicate = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/check-email?email=${encodeURIComponent(email)}`);
      if (response.status === 200) {
        const result = await response.json();
        return result.isDuplicate;
      }
      throw new Error('Failed to check email');
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  };
//handlesubmit section
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Check for duplicate email
    const isDuplicate = await checkEmailDuplicate(formData.email);
    if (isDuplicate) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'This email is already registered.' }));
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
        body: JSON.stringify(formData),
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
      setIsLoading(false);
      setTimeout(() => {
        setModalMessage('');
      }, 3000);
      navigate('/dashboard')
    }
  };

  return (
    <>
      <section id='contact' className='register'>
        <div className='register-container'>
          <div className='row gy-4'>
            <div className='col-md-12' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
              <div className='col-lg-6'>
                <form name='form-p' className={`register-form needs-validation ${Object.keys(errors).length ? 'was-validated' : ''}`} id='partner-form' onSubmit={handleSubmit} noValidate>
                  <h3 style={{ marginBottom: "30px", color: "#000" }}>REGISTER NOW</h3>
                  <div className="row gy-3">
                    {/* Form fields */}
                    <div className="col-lg-12">
                      <select
                        className={`form-select ${errors.partnerstype ? 'is-invalid' : ''}`}
                        aria-label="Default select example"
                        name="partnerstype"
                        value={formData.partnerstype}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select Type of Partnership</option>
                        <option value="B2B SaaS Technology Licensing">B2B SaaS Technology Licensing</option>
                        <option value="B2C Workation/Co-Working Booking">B2C Workation/Co-Working Booking</option>
                        <option value="Landlord Partnerships">Landlord Partnerships</option>
                        <option value="Investment Related">Investment Related</option>
                        <option value="Coffee Meeting to know us better">Coffee Meeting to know us better</option>
                      </select>
                      {errors.partnerstype && <div className="invalid-feedback">{errors.partnerstype}</div>}
                    </div>
                    {/* Other fields */}
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="mobile"
                        pattern="[1-9]{1}[0-9]{9}"
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                      {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="password"
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="password"
                        name="confirmPassword"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="link"
                        className={`form-control ${errors.link ? 'is-invalid' : ''}`}
                        placeholder="Business or Personal LinkedIn Profile Link"
                        value={formData.link}
                        onChange={handleChange}
                        required
                      />
                      {errors.link && <div className="invalid-feedback">{errors.link}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="country"
                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                      {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="city"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                      {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="message"
                        className="form-control"
                        placeholder="Personal message for this connection"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="register-page-button">Register</button>
                    </div>
                  </div>
                </form>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                />
              </div>
            </div>
          </div>
        </div>
        {isLoading && (
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <p>{modalMessage}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Register;
