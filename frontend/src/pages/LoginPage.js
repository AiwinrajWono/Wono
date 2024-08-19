import React, { useState, useContext } from 'react';
import '../styles/bodyLogin.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../components/UserContext';


const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Manage the user's profile
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Email validation using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return; // Exit the function if email is invalid
        }

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Login failed: ${errorText}`);
            }

            const data = await response.json();
            setUser(data.user); // Set the user's profile information
            navigate('/dashboard'); // Redirect after successful login
        } catch {
            setError('Invalid email or password');
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
        navigate('/dashboard') // Redirect after successful login
    };

    const handleLoginError = () => {
        console.log('Login Failed');
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
        </div>
    );
};

export default LoginPage;
