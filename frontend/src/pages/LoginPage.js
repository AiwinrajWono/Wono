import React, { useState, useContext } from 'react';
import '../styles/bodyLogin.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../components/UserContext';


const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Manage the user's profile

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        setEmail('');
        setPassword('');
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

    const handleLogout = () => {
        setUser(null); // Clear the user state
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="login-container">
            <div className='form-section' style={{ width: '40%' }}>
                <h2>LOGIN</h2>
                
                    <div>
                        <div style={{ gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <div className="col" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        aria-label="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="button_space" style={{ borderBottom: '0.5px solid black', paddingBottom: '1.5rem' }}>
                            <button onClick={handleSubmit} className='submit-button'>Submit</button>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <span>Don't have an account? <span style={{ textDecoration: 'underline', color: 'blue' }}>Register</span></span>
                        </div>
                        <div>
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={handleLoginError}
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default LoginPage;
