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
        navigate('/dashboard')
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

    // const handleLogout = () => {
    //     setUser(null); // Clear the user state
    //     navigate('/login'); // Redirect to login page after logout
    // };

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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                aria-label="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
