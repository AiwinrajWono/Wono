import React, { useState, useContext } from 'react';
import '../styles/bodyLogin.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../components/UserContext';
import Modals from '../components/Modals';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showModal, setShowModal] = useState(false); // Control modal visibility
    const [modalTitle, setModalTitle] = useState('Error'); // Modal title
    const [modalMessage, setModalMessage] = useState('');
    axios.defaults.withCredentials = true;
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Email validation using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setModalTitle('Invalid Email');
            setModalMessage('Please enter a valid email address');
            setShowModal(true); // Show the modal for the error
            return; // Exit the function if email is invalid
        }

        try {
            const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      const { user } = response.data;
      setUser(user);
      navigate('/dashboard');
        } catch (error) {
            setModalTitle('Login Failed');
            setModalMessage('Invalid email or password');
            setShowModal(true); // Show the modal for the error
            console.error('Login Failed:', error);
        }

        setEmail('');
        setPassword('');
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    
        // Email validation using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError(''); // Clear error if email is valid
        }
    };

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);
        setUser(decoded); // Set the user's profile information
        console.log(decoded);
        navigate('/dashboard'); // Redirect after successful login
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="login-container">
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <h2 className="text-center mb-4">LOGIN</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="email"
                                    value={email}
                                    onChange={handleEmailChange}  // Updated onChange handler
                                    required
                                />
                                {email && emailError && <div className="text-danger">{emailError}</div>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    aria-label="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="login-page-button w-100">
                                    Submit
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <span>Don't have an account? <a href="/register" className="text-primary">Register</a></span>
                            </div>
                            <div className='google-button'>
                                <GoogleLogin
                                    onSuccess={handleLoginSuccess}
                                    onError={handleLoginError}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modals 
                show={showModal} 
                handleClose={handleCloseModal} 
                title={modalTitle} 
            >
                {modalMessage}
            </Modals>
        </div>
    );
};

export default LoginPage;
